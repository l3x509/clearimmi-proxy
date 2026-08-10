// ClearImmi — Form Filing Help backend.
// Single job: given a photo or pasted text of a government form section,
// return a field-by-field plain-language walkthrough. Never fills in an
// answer for a field that requires legal judgment — flags it instead.
// See js/app/ai-features.js in the main site repo for the exact client
// request/response contract this implements.

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { rateLimit } from 'express-rate-limit';
import Anthropic from '@anthropic-ai/sdk';

const PORT = process.env.PORT || 3000;
const MODEL = process.env.ANTHROPIC_MODEL || 'claude-opus-5';
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || 'https://clearimmi.com')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

if (!process.env.ANTHROPIC_API_KEY) {
  console.error('ANTHROPIC_API_KEY is not set. Refusing to start.');
  process.exit(1);
}

const anthropic = new Anthropic();

const app = express();
app.use(express.json({ limit: '10mb' })); // photos are base64; text sections are small
app.use(
  cors({
    origin: ALLOWED_ORIGINS,
    methods: ['POST'],
  })
);

// This endpoint calls a paid API with no user auth in front of it — bound
// the blast radius of abuse with a simple per-IP window rather than none.
app.use(
  '/explain-fields',
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Too many requests. Please try again later.' },
  })
);

app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'clearimmi-filing-help', time: new Date().toISOString() });
});

const LANG_NAMES = {
  en: 'English',
  ht: 'Haitian Creole',
  fr: 'French',
  es: 'Spanish',
  pt: 'Portuguese',
  zh: 'Chinese',
  ar: 'Arabic',
};

const SYSTEM_PROMPT = `You explain U.S. government immigration form fields in plain language for immigrants filling them out themselves, as part of ClearImmi's Status & Form Filling Help feature.

For each field you find in the provided form section, produce:
- "name": the field's label, exactly as printed on the form
- "howTo": a short, plain-language explanation of what the field is asking for and, where the answer is purely factual or mechanical, practical guidance on how to fill it in correctly
- "legalJudgment": true if answering this field correctly requires a legal judgment call specific to the person's situation — not just a fact they already know

Examples of legalJudgment: true (never explain how to fill these in — flag them instead):
- A field asking for the applicant's "basis" or "reason" for a status (e.g. the basis for an asylum claim) — this is a legal argument, not a fact.
- A field asking the applicant to justify an exception to a deadline or requirement.
- A field asking for an eligibility category code that depends on which specific legal basis applies to their situation.
- Any field where different truthful answers are available and picking the right one requires understanding immigration law, not just knowing a fact about oneself.

Examples of legalJudgment: false (explain these normally):
- Name, address, date of birth, phone number, and other biographical facts.
- Whether this is a first-time application, a renewal, or a replacement.
- Checkboxes selecting among clearly-defined, self-evident options (e.g. mailing vs. physical address).

For every legalJudgment: true field, keep "howTo" to one sentence describing what the field is asking (so the person understands the question) but explicitly say that the actual answer requires a licensed attorney or DOJ-accredited representative — never suggest what they should write.

Never fabricate a fee amount, deadline, phone number, or legal requirement that isn't visible in the provided form section. If the image or text is unclear or incomplete, say so in "howTo" for the affected field rather than guessing.

Respond in {{LANGUAGE}}.

Respond with JSON matching the required schema only — no other text.`;

const RESPONSE_SCHEMA = {
  type: 'object',
  properties: {
    fields: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          howTo: { type: 'string' },
          legalJudgment: { type: 'boolean' },
        },
        required: ['name', 'howTo', 'legalJudgment'],
        additionalProperties: false,
      },
    },
  },
  required: ['fields'],
  additionalProperties: false,
};

app.post('/explain-fields', async (req, res) => {
  try {
    const { lang, formId, formText, image, imageType } = req.body || {};

    if (!formText && !image) {
      return res.status(400).json({ error: 'Provide formText or image.' });
    }

    const languageName = LANG_NAMES[lang] || LANG_NAMES.en;
    const systemPrompt = SYSTEM_PROMPT.replace('{{LANGUAGE}}', languageName);

    const userContent = [];
    if (image) {
      if (!imageType || !imageType.startsWith('image/')) {
        return res.status(400).json({ error: 'imageType must be a valid image MIME type when image is provided.' });
      }
      userContent.push({
        type: 'image',
        source: { type: 'base64', media_type: imageType, data: image },
      });
    }
    userContent.push({
      type: 'text',
      text: formId
        ? `This form section is from USCIS form ${formId}, if that helps you interpret it. Explain each field.${formText ? `\n\nForm section text:\n${formText}` : ''}`
        : `Explain each field in this form section.${formText ? `\n\nForm section text:\n${formText}` : ''}`,
    });

    const response = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 4096,
      system: systemPrompt,
      output_config: {
        format: { type: 'json_schema', schema: RESPONSE_SCHEMA },
      },
      messages: [{ role: 'user', content: userContent }],
    });

    if (response.stop_reason === 'refusal') {
      return res.status(422).json({ error: 'Could not process this form section.' });
    }

    const textBlock = response.content.find((b) => b.type === 'text');
    if (!textBlock) {
      return res.status(502).json({ error: 'No response generated.' });
    }

    const parsed = JSON.parse(textBlock.text);
    res.json(parsed);
  } catch (err) {
    console.error('explain-fields error:', err);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
});

app.listen(PORT, () => {
  console.log(`clearimmi-filing-help listening on port ${PORT}`);
});
