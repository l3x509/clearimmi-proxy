// Massachusetts pathway data — verified against state boards, BLS, official program pages.

const plans = {

  nursing: {
    cna: {
      title: { en: "Certified Nurse Aide (CNA) — Massachusetts", ht: "Asistan Enfimyè Sètifye (CNA) — Massachusetts", fr: "Aide-soignant certifié (CNA) — Massachusetts" },
      meta: { en: "Mass. DPH Nurse Aide Registry · current as of Jan 2026", ht: "Mass. DPH Nurse Aide Registry · ajou Janvye 2026", fr: "Mass. DPH Nurse Aide Registry · à jour janvier 2026" },
      badge: { en: "Fastest path — weeks, not months", ht: "Chemen ki pi rapid — semèn, pa mwa", fr: "Parcours le plus rapide — des semaines, pas des mois" },
      steps: {
        en: [
          { title: "Check if you qualify for a training waiver", detail: "105 CMR 156.100 · Call DPH: (617) 753-8144", desc: "If you completed 75+ hours of clinical nursing training (including abroad), you may skip the training program and go straight to testing. Call before enrolling anywhere." },
          { title: "Enroll in a DPH-approved Nurse Aide Training Program", detail: "100 hours (75 classroom + 25 clinical) · 3–7 weeks", desc: "If no waiver applies. Ask about free options first: JVS Boston and IINE Lowell run no-cost programs for immigrants — IINE includes ESL support." },
          { title: "Ask employers about paid training", detail: "Federal law: OBRA 1987, 42 CFR 483.152", desc: "Nursing facilities that accept Medicare/Medicaid must pay for or reimburse your CNA training if you're hired and certified within 12 months. Ask before paying out of pocket." },
          { title: "Pass the Nurse Aide Competency Evaluation (NACE)", detail: "Written + clinical skills · via D&S Diversified Technologies", desc: "The exam is offered in several languages, including Haitian Creole, Spanish, and Chinese, in addition to English — ask D&S which language options apply to you. You get 4 attempts on the written test and 3 on the clinical." },
          { title: "You're added to the Nurse Aide Registry automatically", detail: "No extra fee · ~3 weeks after passing", desc: "No paper certificate is issued — employers verify your status online. You can start working once your name appears." }
        ],
        ht: [
          { title: "Verifye si ou kalifye pou yon dispans fòmasyon", detail: "105 CMR 156.100 · Rele DPH: (617) 753-8144", desc: "Si ou te fè 75+ èdtan fòmasyon klinik enfimyè (menm aletranje), ou ka sote pwogram fòmasyon an epi ale dirèkteman nan tès la. Rele anvan ou enskri okenn kote." },
          { title: "Enskri nan yon Pwogram Fòmasyon apwouve pa DPH", detail: "100 èdtan (75 klasrom + 25 klinik) · 3–7 semèn", desc: "Si pa gen dispans. Mande sou opsyon gratis yo anvan: JVS Boston ak IINE Lowell ofri pwogram san frè pou imigran — IINE gen sipò ESL." },
          { title: "Mande anplwayè yo sou fòmasyon peye", detail: "Lwa federal: OBRA 1987, 42 CFR 483.152", desc: "Etablisman ki aksepte Medicare/Medicaid dwe peye oswa ranbouse fòmasyon CNA ou si yo anboche ou epi ou sètifye nan 12 mwa. Mande anvan ou peye nan pòch ou." },
          { title: "Pase Evalyasyon Konpetans lan (NACE)", detail: "Ekri + konpetans klinik · atravè D&S Diversified Technologies", desc: "Egzamen an disponib nan plizyè lang, ladan Kreyòl Ayisyen, Panyòl, ak Chinwa, anplis Anglè — mande D&S ki opsyon lang ki aplikab pou ou. Ou gen 4 tantativ pou tès ekri a ak 3 pou klinik la." },
          { title: "Yo ajoute ou nan Rejis la otomatikman", detail: "Pa gen frè anplis · ~3 semèn apre ou pase", desc: "Pa gen sètifika papye — anplwayè yo verifye estati ou sou entènèt. Ou ka kòmanse travay lè non ou parèt." }
        ],
        fr: [
          { title: "Vérifiez si vous êtes admissible à une dispense de formation", detail: "105 CMR 156.100 · Appelez le DPH : (617) 753-8144", desc: "Si vous avez complété 75+ heures de formation clinique en soins infirmiers (y compris à l'étranger), vous pouvez sauter le programme de formation et passer directement à l'examen. Appelez avant de vous inscrire où que ce soit." },
          { title: "Inscrivez-vous à un programme de formation approuvé par le DPH", detail: "100 heures (75 en classe + 25 cliniques) · 3–7 semaines", desc: "Si aucune dispense ne s'applique. Renseignez-vous d'abord sur les options gratuites : JVS Boston et IINE Lowell offrent des programmes gratuits pour les immigrants — IINE inclut un soutien en anglais (ESL)." },
          { title: "Demandez aux employeurs une formation payée", detail: "Loi fédérale : OBRA 1987, 42 CFR 483.152", desc: "Les établissements qui acceptent Medicare/Medicaid doivent payer ou rembourser votre formation CNA si vous êtes embauché et certifié dans les 12 mois. Demandez avant de payer de votre poche." },
          { title: "Réussissez l'évaluation de compétence (NACE)", detail: "Test écrit + compétences cliniques · via D&S Diversified Technologies", desc: "L'examen est offert en plusieurs langues, dont le créole haïtien, l'espagnol et le chinois, en plus de l'anglais — demandez à D&S quelles options s'appliquent à vous. Vous avez 4 tentatives pour l'écrit et 3 pour le clinique." },
          { title: "Vous êtes ajouté au registre automatiquement", detail: "Aucun frais supplémentaire · ~3 semaines après la réussite", desc: "Aucun certificat papier n'est délivré — les employeurs vérifient votre statut en ligne. Vous pouvez commencer à travailler dès que votre nom apparaît." }
        ]
      },
      firstAction: {
        en: 'This week: call the DPH Nurse Aide Registry at <strong>(617) 753-8144</strong> about a training waiver, and contact <strong>IINE Lowell</strong> or <strong>JVS Boston</strong> about free CNA programs for immigrants.',
        ht: 'Semèn sa a: rele DPH Nurse Aide Registry nan <strong>(617) 753-8144</strong> sou yon dispans fòmasyon, epi kontakte <strong>IINE Lowell</strong> oswa <strong>JVS Boston</strong> sou pwogram CNA gratis pou imigran.',
        fr: 'Cette semaine : appelez le DPH Nurse Aide Registry au <strong>(617) 753-8144</strong> au sujet d\'une dispense de formation, et contactez <strong>IINE Lowell</strong> ou <strong>JVS Boston</strong> pour les programmes CNA gratuits pour immigrants.'
      }
    },

    lpn: {
      title: { en: "Licensed Practical Nurse (LPN) — Massachusetts", ht: "Enfimyè Pratik Lisansye (LPN) — Massachusetts", fr: "Infirmier auxiliaire autorisé (LPN) — Massachusetts" },
      meta: { en: "Mass. Board of Registration in Nursing · current as of Jan 2026", ht: "Konsèy Anrejistreman Enfimyè Mass. · ajou Janvye 2026", fr: "Mass. Board of Registration in Nursing · à jour janvier 2026" },
      badge: { en: "Mid-length path — takes several months", ht: "Chemen mwayen — pran plizyè mwa", fr: "Parcours intermédiaire — prend plusieurs mois" },
      steps: {
        en: [
          { title: "Request your CGFNS credential evaluation", detail: "~$225–$375 · 8–12 weeks", desc: "CGFNS evaluates your foreign nursing transcripts and license. Required for all foreign-educated applicants — start this first, it has the longest lead time." },
          { title: "Take an approved English Proficiency Exam (if needed)", detail: "Required if your education wasn't in English", desc: "TOEFL or IELTS, with scores sent directly to Professional Credential Services (PCS)." },
          { title: "Submit required forms and $50 fee to PCS", detail: "PCS, P.O. Box 198788, Nashville, TN 37219", desc: "Confirms your program is Board-approved. No U.S. SSN? Submit the Board's affidavit as well." },
          { title: "Have your school send transcripts directly to PCS", detail: "Must come from the school — not from you", desc: "PCS cannot accept transcripts you send yourself." },
          { title: "Pass the NCLEX-PN exam", detail: "Via Pearson VUE · requires ATT from the Board", desc: "The national licensure exam for practical nurses." },
          { title: "Complete the Massachusetts LPN application", detail: "~4–5 weeks processing once complete", desc: "Submit through the Health Professions Licensing Portal with all documentation and good moral character review." }
        ],
        ht: [
          { title: "Mande evalyasyon kredansyèl CGFNS ou", detail: "~$225–$375 · 8–12 semèn", desc: "CGFNS evalye transkripsyon ak lisans enfimyè etranje ou. Obligatwa pou tout aplikan fòme aletranje — kòmanse sa an premye, li pran pi lontan." },
          { title: "Pase yon egzamen anglè apwouve (si nesesè)", detail: "Obligatwa si edikasyon ou pa t an anglè", desc: "TOEFL oswa IELTS, ak nòt yo voye dirèkteman bay PCS." },
          { title: "Soumèt fòm yo ak frè $50 bay PCS", detail: "PCS, P.O. Box 198788, Nashville, TN 37219", desc: "Konfime pwogram ou apwouve. Pa gen SSN Ameriken? Soumèt afidavi Konsèy la tou." },
          { title: "Fè lekòl ou voye transkripsyon dirèkteman bay PCS", detail: "Dwe soti nan lekòl la — pa nan men ou", desc: "PCS pa ka aksepte transkripsyon ou voye pèsonèlman." },
          { title: "Pase egzamen NCLEX-PN", detail: "Atravè Pearson VUE · bezwen ATT Konsèy la", desc: "Egzamen lisans nasyonal pou enfimyè pratik." },
          { title: "Ranpli aplikasyon LPN Massachusetts la", detail: "~4–5 semèn pwosesis yon fwa konplè", desc: "Soumèt atravè Health Professions Licensing Portal ak tout dokiman ak revizyon bon karaktè moral." }
        ],
        fr: [
          { title: "Demandez votre évaluation de diplômes CGFNS", detail: "~225 $–375 $ · 8–12 semaines", desc: "Le CGFNS évalue vos relevés de notes et votre licence d'infirmier étrangers. Obligatoire pour tous les candidats formés à l'étranger — commencez par ceci, c'est le plus long délai." },
          { title: "Passez un examen d'anglais approuvé (si nécessaire)", detail: "Obligatoire si votre formation n'était pas en anglais", desc: "TOEFL ou IELTS, avec les résultats envoyés directement à Professional Credential Services (PCS)." },
          { title: "Soumettez les formulaires requis et les frais de 50 $ à PCS", detail: "PCS, P.O. Box 198788, Nashville, TN 37219", desc: "Confirme que votre programme est approuvé par le Board. Pas de SSN américain ? Soumettez aussi l'affidavit du Board." },
          { title: "Faites envoyer vos relevés directement par votre école à PCS", detail: "Doit venir de l'école — pas de vous", desc: "PCS ne peut pas accepter les relevés que vous envoyez vous-même." },
          { title: "Réussissez l'examen NCLEX-PN", detail: "Via Pearson VUE · nécessite l'ATT du Board", desc: "L'examen national de licence pour les infirmiers auxiliaires." },
          { title: "Complétez la demande LPN du Massachusetts", detail: "~4–5 semaines de traitement une fois complète", desc: "Soumettez via le Health Professions Licensing Portal avec toute la documentation et l'examen de bonne moralité." }
        ]
      },
      firstAction: {
        en: 'This week: start your <strong>CGFNS evaluation</strong> — it takes 8–12 weeks and everything else waits on it.',
        ht: 'Semèn sa a: kòmanse <strong>evalyasyon CGFNS</strong> ou — li pran 8–12 semèn e tout lòt bagay ap tann li.',
        fr: 'Cette semaine : commencez votre <strong>évaluation CGFNS</strong> — elle prend 8–12 semaines et tout le reste en dépend.'
      }
    },

    rn: {
      title: { en: "Registered Nurse (RN) — Massachusetts", ht: "Enfimyè Anrejistre (RN) — Massachusetts", fr: "Infirmier autorisé (RN) — Massachusetts" },
      meta: { en: "Mass. Board of Registration in Nursing · current as of Jan 2026", ht: "Konsèy Anrejistreman Enfimyè Mass. · ajou Janvye 2026", fr: "Mass. Board of Registration in Nursing · à jour janvier 2026" },
      badge: { en: "Longest path — full recognition of your credential", ht: "Chemen ki pi long — rekonesans konplè kredansyèl ou", fr: "Parcours le plus long — reconnaissance complète de votre diplôme" },
      steps: {
        en: [
          { title: "Request your CGFNS credential evaluation", detail: "~$225–$375 · 8–12 weeks", desc: "CGFNS evaluates your foreign nursing transcripts and license. Required for all foreign-educated nurses — separate from the Board application." },
          { title: "Take an approved English Proficiency Exam (if needed)", detail: "Required if your education wasn't in English", desc: "TOEFL or IELTS, sent directly to PCS." },
          { title: "Submit the Certification of Graduation form to PCS", detail: "$50 fee · PCS, P.O. Box 198788, Nashville, TN 37219", desc: "Confirms your program is Board-approved. No U.S. SSN? Submit the Board's affidavit as well." },
          { title: "Have your school send transcripts directly to PCS", detail: "Must come from the school — not from you", desc: "Your original nursing school must mail or electronically send them." },
          { title: "Receive your Letter of Eligibility from PCS", detail: "Several months total for the full process", desc: "Once PCS confirms everything, you can begin your Initial Licensure by Examination application." },
          { title: "Pass the NCLEX-RN exam", detail: "$200 · via Pearson VUE", desc: "Requires your Authorization to Test (ATT) from the Board first." },
          { title: "Complete the Massachusetts application & background check", detail: "$230 · includes DCF background check consent", desc: "Submit through the Health Professions Licensing Portal with proof of good moral character." }
        ],
        ht: [
          { title: "Mande evalyasyon kredansyèl CGFNS ou", detail: "~$225–$375 · 8–12 semèn", desc: "CGFNS evalye transkripsyon ak lisans enfimyè etranje ou. Obligatwa pou tout enfimyè fòme aletranje — separe de aplikasyon Konsèy la." },
          { title: "Pase yon egzamen anglè apwouve (si nesesè)", detail: "Obligatwa si edikasyon ou pa t an anglè", desc: "TOEFL oswa IELTS, voye dirèkteman bay PCS." },
          { title: "Soumèt fòm Sètifikasyon Gradyasyon bay PCS", detail: "Frè $50 · PCS, P.O. Box 198788, Nashville, TN 37219", desc: "Konfime pwogram ou apwouve. Pa gen SSN Ameriken? Soumèt afidavi Konsèy la tou." },
          { title: "Fè lekòl ou voye transkripsyon dirèkteman bay PCS", detail: "Dwe soti nan lekòl la — pa nan men ou", desc: "Lekòl enfimyè orijinal ou dwe voye yo dirèkteman." },
          { title: "Resevwa Lèt Elijibilite ou soti nan PCS", detail: "Plizyè mwa pou tout pwosesis la", desc: "Yon fwa PCS konfime tout bagay, ou ka kòmanse aplikasyon Lisans Inisyal pa Egzamen ou." },
          { title: "Pase egzamen NCLEX-RN", detail: "$200 · atravè Pearson VUE", desc: "Bezwen Otorizasyon pou Teste (ATT) Konsèy la anvan." },
          { title: "Ranpli aplikasyon Mass. la ak verifikasyon background", detail: "$230 · enkli konsantman verifikasyon DCF", desc: "Soumèt atravè Health Professions Licensing Portal ak prèv bon karaktè moral." }
        ],
        fr: [
          { title: "Demandez votre évaluation de diplômes CGFNS", detail: "~225 $–375 $ · 8–12 semaines", desc: "Le CGFNS évalue vos relevés et votre licence d'infirmier étrangers. Obligatoire pour tous les infirmiers formés à l'étranger — distinct de la demande au Board." },
          { title: "Passez un examen d'anglais approuvé (si nécessaire)", detail: "Obligatoire si votre formation n'était pas en anglais", desc: "TOEFL ou IELTS, envoyé directement à PCS." },
          { title: "Soumettez le formulaire de Certification of Graduation à PCS", detail: "Frais de 50 $ · PCS, P.O. Box 198788, Nashville, TN 37219", desc: "Confirme que votre programme est approuvé. Pas de SSN américain ? Soumettez aussi l'affidavit du Board." },
          { title: "Faites envoyer vos relevés directement par votre école à PCS", detail: "Doit venir de l'école — pas de vous", desc: "Votre école d'infirmiers d'origine doit les envoyer par courrier ou électroniquement." },
          { title: "Recevez votre lettre d'éligibilité de PCS", detail: "Plusieurs mois au total pour le processus complet", desc: "Une fois que PCS confirme tout, vous pouvez commencer votre demande de licence initiale par examen." },
          { title: "Réussissez l'examen NCLEX-RN", detail: "200 $ · via Pearson VUE", desc: "Nécessite d'abord votre autorisation de test (ATT) du Board." },
          { title: "Complétez la demande du Massachusetts et la vérification des antécédents", detail: "230 $ · inclut le consentement à la vérification DCF", desc: "Soumettez via le Health Professions Licensing Portal avec preuve de bonne moralité." }
        ]
      },
      firstAction: {
        en: 'This week: call the Board at <strong>(617) 973-0800</strong> or contact the <strong>Welcome Back Center</strong> — they help internationally-trained nurses navigate this exact process, often at no cost.',
        ht: 'Semèn sa a: rele Konsèy la nan <strong>(617) 973-0800</strong> oswa kontakte <strong>Welcome Back Center</strong> — yo ede enfimyè fòme entènasyonalman navige pwosesis sa a, souvan san frè.',
        fr: 'Cette semaine : appelez le Board au <strong>(617) 973-0800</strong> ou contactez le <strong>Welcome Back Center</strong> — ils aident les infirmiers formés à l\'international à naviguer ce processus, souvent gratuitement.'
      }
    }
  },

  teaching: {
    para: {
      title: { en: "Paraprofessional / Teacher's Aide — Massachusetts", ht: "Parapwofesyonèl / Èd Pwofesè — Massachusetts", fr: "Paraprofessionnel / Aide-enseignant — Massachusetts" },
      meta: { en: "District hiring requirements · current as of Jan 2026", ht: "Egzijans anbochaj distri yo · ajou Janvye 2026", fr: "Exigences d'embauche des districts · à jour janvier 2026" },
      badge: { en: "Fastest path — no state license required", ht: "Chemen ki pi rapid — pa bezwen lisans eta", fr: "Parcours le plus rapide — aucune licence d'État requise" },
      steps: {
        en: [
          { title: "Understand the role — no DESE license needed", detail: "Hired directly by school districts", desc: "Paraprofessionals support teachers in the classroom. Massachusetts doesn't require a state license — each district sets its own hiring requirements." },
          { title: "Meet the federal requirement (Title I schools)", detail: "One of: 48 college credits · associate's degree · ParaPro test", desc: "Schools receiving Title I funds require one of these three. Your foreign college credits may count — an inexpensive credential evaluation can document them." },
          { title: "Apply directly to school districts", detail: "Look for districts near you with large immigrant populations", desc: "Apply on district websites under 'paraprofessional' or 'instructional aide.' Districts with many multilingual students actively value bilingual aides — check district demographics for your language community." },
          { title: "Use your bilingual skills as an advantage", detail: "Bilingual aides are consistently in demand", desc: "Districts need aides who can communicate with students and families in their home language. Mention your languages prominently in your application, whatever they are." },
          { title: "Use the role as a bridge to a teaching license", detail: "Many districts offer tuition support for paras", desc: "Working as a para gives you classroom experience, income, and often district-paid coursework toward becoming a licensed teacher." }
        ],
        ht: [
          { title: "Konprann wòl la — pa bezwen lisans DESE", detail: "Distri lekòl yo anboche dirèkteman", desc: "Parapwofesyonèl ede pwofesè nan klas la. Massachusetts pa mande yon lisans eta — chak distri fikse pwòp egzijans anbochaj li." },
          { title: "Satisfè egzijans federal la (lekòl Title I)", detail: "Youn nan: 48 kredi kolèj · diplòm asosye · tès ParaPro", desc: "Lekòl ki resevwa lajan Title I mande youn nan twa sa yo. Kredi kolèj etranje ou ka konte — yon evalyasyon kredansyèl bon mache ka dokimante yo." },
          { title: "Aplike dirèkteman nan distri lekòl yo", detail: "Chèche distri toupre ou ki gen anpil popilasyon imigran", desc: "Aplike sou sit distri yo anba 'paraprofessional' oswa 'instructional aide.' Distri ki gen anpil elèv miltiling bay valè a èd bileng — tcheke demografi distri a pou kominote lang ou." },
          { title: "Sèvi ak konpetans bileng ou kòm yon avantaj", detail: "Èd bileng toujou an demann", desc: "Distri yo bezwen èd ki ka kominike ak elèv ak fanmi nan lang lakay yo. Mete lang ou yo an evidans nan aplikasyon ou, nenpòt kelkeswa yo." },
          { title: "Sèvi ak wòl la kòm yon pon pou lisans anseyman", detail: "Anpil distri ofri sipò ekolaj pou para yo", desc: "Travay kòm para ba ou eksperyans klas, lajan, e souvan kou distri a peye pou ou vin yon pwofesè lisansye." }
        ],
        fr: [
          { title: "Comprenez le rôle — aucune licence DESE requise", detail: "Embauché directement par les districts scolaires", desc: "Les paraprofessionnels soutiennent les enseignants en classe. Le Massachusetts n'exige pas de licence d'État — chaque district fixe ses propres exigences d'embauche." },
          { title: "Remplissez l'exigence fédérale (écoles Title I)", detail: "L'un des trois : 48 crédits universitaires · diplôme d'associé · test ParaPro", desc: "Les écoles recevant des fonds Title I exigent l'un de ces trois. Vos crédits universitaires étrangers peuvent compter — une évaluation de diplômes peu coûteuse peut les documenter." },
          { title: "Postulez directement auprès des districts scolaires", detail: "Cherchez les districts près de chez vous avec de grandes populations immigrantes", desc: "Postulez sur les sites des districts sous « paraprofessional » ou « instructional aide ». Les districts avec beaucoup d'élèves multilingues valorisent activement les aides bilingues — vérifiez la démographie du district pour votre communauté linguistique." },
          { title: "Utilisez vos compétences bilingues comme un atout", detail: "Les aides bilingues sont constamment en demande", desc: "Les districts ont besoin d'aides qui peuvent communiquer avec les élèves et les familles dans leur langue maternelle. Mettez vos langues en évidence dans votre candidature, quelles qu'elles soient." },
          { title: "Utilisez ce rôle comme un pont vers une licence d'enseignement", detail: "Beaucoup de districts offrent un soutien aux frais de scolarité", desc: "Travailler comme para vous donne de l'expérience en classe, un revenu, et souvent des cours payés par le district pour devenir enseignant certifié." }
        ]
      },
      firstAction: {
        en: 'This week: check the job pages of school districts near you for paraprofessional openings — and note whether each posting asks for the 48-credit/ParaPro requirement.',
        ht: 'Semèn sa a: tcheke paj travay distri lekòl toupre ou pou pòs parapwofesyonèl — epi note si chak pòs mande egzijans 48-kredi/ParaPro a.',
        fr: 'Cette semaine : consultez les pages d\'emploi des districts scolaires près de chez vous pour les postes de paraprofessionnel — et notez si chaque annonce demande l\'exigence des 48 crédits/ParaPro.'
      }
    },

    teacher: {
      title: { en: "Licensed Teacher (K-12) — Massachusetts", ht: "Pwofesè Lisansye (K-12) — Massachusetts", fr: "Enseignant certifié (K-12) — Massachusetts" },
      meta: { en: "Mass. DESE Office of Educator Licensure · current as of Jan 2026", ht: "DESE Mass. Biwo Lisans Edikatè · ajou Janvye 2026", fr: "Mass. DESE Office of Educator Licensure · à jour janvier 2026" },
      badge: { en: "Longer path — well-paid: MA teachers average ~$92K/year", ht: "Chemen pi long — byen peye: pwofesè MA fè ~$92K/ane an mwayèn", fr: "Parcours plus long — bien rémunéré : les enseignants du MA gagnent ~92 000 $/an en moyenne" },
      steps: {
        en: [
          { title: "Get a foreign degree equivalency report", detail: "Required for foreign degrees · DESE-recognized evaluators", desc: "DESE requires a credential evaluation documenting your degree's U.S. equivalency. Compare evaluator fees and turnaround times before choosing — a slow evaluation delays everything." },
          { title: "Know about the DESE Foreign Teacher Panel", detail: "For teacher prep programs completed outside the U.S.", desc: "If you completed a teacher preparation program abroad, DESE's Foreign Teacher Panel reviews whether it satisfies the preparation requirement — you may not need to repeat training." },
          { title: "Create an ELAR account", detail: "Free · required before registering for any MTEL test", desc: "All applications, payments, and documents go through the Educator Licensure and Recruitment (ELAR) system." },
          { title: "Pass the required MTEL tests", detail: "Communication & Literacy + your subject test", desc: "Most licenses require the Communication and Literacy Skills test plus a subject-area test. DESE's Regional Licensure Assistance Centers offer MTEL prep help and fee vouchers." },
          { title: "Complete the SEI Endorsement (core academic teachers)", detail: "Required for most classroom licenses", desc: "The Sheltered English Immersion endorsement is required for early childhood, elementary, and core subject teachers. Available through DESE-approved courses." },
          { title: "Apply for your license through ELAR", detail: "Processing can take months — plan ahead", desc: "Submit your equivalency report, MTEL results, and documents. Consider applying for a Provisional or Temporary license to start working sooner while completing remaining requirements." }
        ],
        ht: [
          { title: "Jwenn yon rapò ekivalans diplòm etranje", detail: "Obligatwa pou diplòm etranje · evalyatè DESE rekonèt", desc: "DESE mande yon evalyasyon kredansyèl ki dokimante ekivalans Ameriken diplòm ou. Konpare frè ak tan evalyatè yo anvan ou chwazi — yon evalyasyon lan ralanti tout bagay." },
          { title: "Konnen sou Panel Pwofesè Etranje DESE a", detail: "Pou pwogram fòmasyon pwofesè fèt deyò Etazini", desc: "Si ou te fini yon pwogram fòmasyon pwofesè aletranje, Panel Pwofesè Etranje DESE a revize si li satisfè egzijans fòmasyon an — ou ka pa bezwen refè fòmasyon." },
          { title: "Kreye yon kont ELAR", detail: "Gratis · obligatwa anvan ou enskri pou nenpòt tès MTEL", desc: "Tout aplikasyon, peman, ak dokiman pase nan sistèm Educator Licensure and Recruitment (ELAR) la." },
          { title: "Pase tès MTEL obligatwa yo", detail: "Communication & Literacy + tès matyè ou", desc: "Pifò lisans mande tès Communication and Literacy Skills plis yon tès matyè. Sant Asistans Rejyonal DESE yo ofri èd preparasyon MTEL ak bon pou frè." },
          { title: "Fini Andòsman SEI a (pwofesè matyè debaz)", detail: "Obligatwa pou pifò lisans klas", desc: "Andòsman Sheltered English Immersion an obligatwa pou pwofesè timoun piti, elemantè, ak matyè debaz. Disponib atravè kou DESE apwouve." },
          { title: "Aplike pou lisans ou atravè ELAR", detail: "Pwosesis la ka pran plizyè mwa — planifye davans", desc: "Soumèt rapò ekivalans ou, rezilta MTEL, ak dokiman yo. Konsidere aplike pou yon lisans Pwovizwa oswa Tanporè pou kòmanse travay pi vit pandan w ap fini rès egzijans yo." }
        ],
        fr: [
          { title: "Obtenez un rapport d'équivalence de diplôme étranger", detail: "Obligatoire pour les diplômes étrangers · évaluateurs reconnus par le DESE", desc: "Le DESE exige une évaluation de diplômes documentant l'équivalence américaine de votre diplôme. Comparez les frais et les délais des évaluateurs avant de choisir — une évaluation lente retarde tout." },
          { title: "Renseignez-vous sur le Foreign Teacher Panel du DESE", detail: "Pour les programmes de formation d'enseignants complétés hors des États-Unis", desc: "Si vous avez complété un programme de formation d'enseignants à l'étranger, le Foreign Teacher Panel du DESE examine s'il satisfait l'exigence de préparation — vous n'aurez peut-être pas besoin de refaire la formation." },
          { title: "Créez un compte ELAR", detail: "Gratuit · requis avant de vous inscrire à tout test MTEL", desc: "Toutes les demandes, paiements et documents passent par le système Educator Licensure and Recruitment (ELAR)." },
          { title: "Réussissez les tests MTEL requis", detail: "Communication & Literacy + votre test de matière", desc: "La plupart des licences exigent le test Communication and Literacy Skills plus un test de matière. Les Regional Licensure Assistance Centers du DESE offrent de l'aide à la préparation MTEL et des bons de réduction." },
          { title: "Complétez l'endossement SEI (enseignants de matières principales)", detail: "Requis pour la plupart des licences de classe", desc: "L'endossement Sheltered English Immersion est requis pour les enseignants de la petite enfance, du primaire et des matières principales. Disponible via des cours approuvés par le DESE." },
          { title: "Demandez votre licence via ELAR", detail: "Le traitement peut prendre des mois — planifiez à l'avance", desc: "Soumettez votre rapport d'équivalence, vos résultats MTEL et vos documents. Envisagez une licence provisoire ou temporaire pour commencer à travailler plus tôt tout en complétant les exigences restantes." }
        ]
      },
      firstAction: {
        en: 'This week: call the DESE Licensure Call Center at <strong>(781) 338-6600</strong> and ask two things: which evaluators they accept for foreign degree equivalency, and whether your teacher prep program qualifies for Foreign Teacher Panel review.',
        ht: 'Semèn sa a: rele DESE Licensure Call Center nan <strong>(781) 338-6600</strong> epi mande de bagay: ki evalyatè yo aksepte pou ekivalans diplòm etranje, epi si pwogram fòmasyon pwofesè ou kalifye pou revizyon Foreign Teacher Panel la.',
        fr: 'Cette semaine : appelez le DESE Licensure Call Center au <strong>(781) 338-6600</strong> et demandez deux choses : quels évaluateurs ils acceptent pour l\'équivalence de diplôme étranger, et si votre programme de formation d\'enseignant est admissible à l\'examen du Foreign Teacher Panel.'
      }
    }
  },

  accounting: {
    bookkeeper: {
      title: { en:"Bookkeeper / Accounting Clerk — Massachusetts",ht:"Kontab / Klèk Kontablite — Massachusetts",fr:"Comptable / Employé de comptabilité — Massachusetts",es:"Contador / Empleado de contabilidad — Massachusetts",pt:"Contador / Auxiliar de contabilidade — Massachusetts"},
      meta: { en:"No state license required · BLS May 2024 · Jan 2026",ht:"Pa bezwen lisans eta · BLS Me 2024 · Jan 2026",fr:"Aucune licence d'État requise · BLS mai 2024 · jan. 2026",es:"Sin licencia estatal requerida · BLS mayo 2024 · ene. 2026",pt:"Sem licença estadual necessária · BLS maio 2024 · jan. 2026"},
      badge: { en:"Fastest entry — your foreign degree opens the door immediately",ht:"Antre ki pi rapid — diplòm etranje ou ka ouvè pòt la imedyatman",fr:"Entrée la plus rapide — votre diplôme étranger peut ouvrir la porte immédiatement",es:"Entrada más rápida — tu título extranjero puede abrir la puerta de inmediato",pt:"Entrada mais rápida — seu diploma estrangeiro pode abrir a porta imediatamente"},
      steps:{
        en:[
          {title:"Get your foreign degree evaluated",detail:"Any NACES-member evaluator · ~$100-$225 · 2-8 weeks",desc:"For bookkeeping and accounting clerk roles, any NACES-member evaluator (WES, ECE, Josef Silny) can document that your foreign business or accounting degree is equivalent to a U.S. bachelor's. Not required by all employers, but it strengthens your application and may qualify you for higher starting pay."},
          {title:"Get QuickBooks certified",detail:"Intuit QuickBooks certification · free to $350 · widely recognized",desc:"QuickBooks is the dominant accounting software for small and mid-sized U.S. businesses. A certification signals practical, immediately usable skills. Free courses are available on QuickBooks' own training platform at quickbooks.intuit.com/training."},
          {title:"Apply for bookkeeper and accounting clerk roles",detail:"Median: $49,210/yr (BLS May 2024) · Boston area pays above national median",desc:"These roles do not require a CPA license. Your foreign degree, QuickBooks certification, and any accounting experience from home are directly relevant. Bilingual bookkeepers serving immigrant business communities are in genuine demand."},
          {title:"Use this as your bridge to CPA",detail:"Work experience counts toward the CPA 2,000-hour requirement",desc:"If you want to pursue CPA licensure, bookkeeping and accounting work counts directly toward the 2,000-hour experience requirement. You can earn while closing your education-hour gap at a community college or UMass Online."}
        ],
        ht:[
          {title:"Fè evalye diplòm etranje ou",detail:"Nenpòt evalyatè manm NACES · ~$100-$225 · 2-8 semèn",desc:"Pou wòl kontab ak klèk kontablite, nenpòt evalyatè manm NACES (WES, ECE, Josef Silny) ka dokimante ke diplòm biznis oswa kontablite etranje ou ekivalan ak yon bachelor Ameriken. Sa reforce aplikasyon ou siyifikativman."},
          {title:"Jwenn sètifikasyon QuickBooks",detail:"Sètifikasyon Intuit QuickBooks · gratis a $350 · lajman rekonèt",desc:"QuickBooks se lojisyèl kontablite dominan pou biznis piti ak mwayen Ameriken. Yon sètifikasyon siyal konpetans pratik pou anplwayè yo. Kou gratis disponib nan quickbooks.intuit.com/training."},
          {title:"Aplike pou wòl kontab ak klèk kontablite",detail:"Medyàn: $49,210/ane (BLS Me 2024) · Boston peye pi wo pase medyàn nasyonal",desc:"Wòl sa yo pa mande yon lisans CPA. Diplòm etranje ou, sètifikasyon QuickBooks, ak nenpòt eksperyans kontablite lakay ou tout enpòtan dirèkteman."},
          {title:"Sèvi ak sa kòm pon ou pou CPA",detail:"Eksperyans travay konte pou egzijans 2,000 èdtan CPA",desc:"Si ou vle pouswiv lisans CPA, travay kontablite konte dirèkteman pou egzijans 2,000 èdtan eksperyans lan. Ou ka touche pandan w ap fèmen eka edikasyon ou."}
        ],
        fr:[
          {title:"Faites évaluer votre diplôme étranger",detail:"Tout évaluateur membre NACES · ~100-225 $ · 2-8 semaines",desc:"Pour les postes de comptable, tout évaluateur NACES peut documenter l'équivalence de votre diplôme en gestion ou comptabilité avec un baccalauréat américain. Cela renforce significativement votre candidature."},
          {title:"Obtenez une certification QuickBooks",detail:"Certification Intuit QuickBooks · gratuit à 350 $ · largement reconnu",desc:"QuickBooks est le logiciel de comptabilité dominant pour les PME américaines. Des cours gratuits sont disponibles sur quickbooks.intuit.com/training."},
          {title:"Postulez aux postes de comptable",detail:"Médiane : 49 210 $/an (BLS mai 2024) · Boston paie au-dessus de la médiane nationale",desc:"Ces rôles ne nécessitent pas de licence CPA. Votre diplôme étranger, la certification QuickBooks et toute expérience comptable dans votre pays sont directement pertinents."},
          {title:"Utilisez ceci comme pont vers le CPA",detail:"L'expérience professionnelle compte pour les 2 000 heures d'expérience CPA",desc:"Le travail comptable compte directement pour l'exigence de 2 000 heures d'expérience. Vous pouvez gagner votre vie tout en comblant l'écart d'heures d'études."}
        ],
        es:[
          {title:"Evalúa tu título extranjero",detail:"Cualquier evaluador miembro de NACES · ~$100-$225 · 2-8 semanas",desc:"Para roles de contador, cualquier evaluador NACES puede documentar que tu título extranjero equivale a una licenciatura estadounidense. Esto fortalece significativamente tu solicitud."},
          {title:"Obtén la certificación QuickBooks",detail:"Certificación Intuit QuickBooks · gratis a $350 · ampliamente reconocida",desc:"QuickBooks es el software de contabilidad dominante para las pymes. Cursos gratuitos disponibles en quickbooks.intuit.com/training."},
          {title:"Aplica a puestos de contador",detail:"Mediano: $49,210/año (BLS mayo 2024) · Boston paga por encima de la mediana nacional",desc:"Estos roles no requieren licencia CPA. Tu título extranjero, la certificación QuickBooks y cualquier experiencia contable son directamente relevantes."},
          {title:"Usa esto como tu puente hacia el CPA",detail:"La experiencia laboral cuenta para el requisito de 2,000 horas del CPA",desc:"El trabajo contable cuenta directamente para el requisito de 2,000 horas de experiencia CPA. Puedes ganar mientras cierras tu brecha de horas de educación."}
        ],
        pt:[
          {title:"Avalie seu diploma estrangeiro",detail:"Qualquer avaliador membro NACES · ~US$100-225 · 2-8 semanas",desc:"Para cargos de contador, qualquer avaliador NACES pode documentar que seu diploma estrangeiro equivale a um bacharelado americano. Isso fortalece significativamente sua candidatura."},
          {title:"Obtenha a certificação QuickBooks",detail:"Certificação Intuit QuickBooks · gratuito a US$350 · amplamente reconhecida",desc:"QuickBooks é o software de contabilidade dominante para PMEs. Cursos gratuitos disponíveis em quickbooks.intuit.com/training."},
          {title:"Candidate-se a cargos de contador",detail:"Mediano: US$49.210/ano (BLS maio 2024) · Boston paga acima da mediana nacional",desc:"Esses cargos não exigem licença CPA. Seu diploma estrangeiro, a certificação QuickBooks e qualquer experiência contábil são diretamente relevantes."},
          {title:"Use isso como sua ponte para o CPA",detail:"A experiência de trabalho conta para o requisito de 2.000 horas do CPA",desc:"O trabalho contábil conta diretamente para o requisito de 2.000 horas de experiência CPA. Você pode ganhar enquanto fecha sua lacuna de horas de educação."}
        ]
      },
      firstAction:{
        en:"This week: get <strong>QuickBooks certified for free</strong> at quickbooks.intuit.com/training — and apply to at least 3 bookkeeper or accounting clerk roles using your foreign degree as your primary qualification.",
        ht:"Semèn sa a: jwenn <strong>sètifikasyon QuickBooks gratis</strong> nan quickbooks.intuit.com/training — epi aplike pou omwen 3 wòl kontab ak diplòm etranje ou kòm kalifikasyon prensipal ou.",
        fr:"Cette semaine : obtenez la <strong>certification QuickBooks gratuitement</strong> sur quickbooks.intuit.com/training — et postulez à au moins 3 postes de comptable en utilisant votre diplôme étranger.",
        es:"Esta semana: obtén la <strong>certificación QuickBooks gratis</strong> en quickbooks.intuit.com/training — y aplica a al menos 3 puestos de contador usando tu título extranjero.",
        pt:"Esta semana: obtenha a <strong>certificação QuickBooks gratuitamente</strong> em quickbooks.intuit.com/training — e candidate-se a pelo menos 3 cargos de contador usando seu diploma estrangeiro."
      }
    },

    cpa: {
      title: { en:"CPA License — Massachusetts",ht:"Lisans CPA — Massachusetts",fr:"Licence CPA — Massachusetts",es:"Licencia CPA — Massachusetts",pt:"Licença CPA — Massachusetts"},
      meta: { en:"Mass. Board of Public Accountancy + NASBA · current as of Jan 2026",ht:"Konsèy Kontablite Piblik Mass. + NASBA · ajou Janvye 2026",fr:"Mass. Board of Public Accountancy + NASBA · à jour jan. 2026",es:"Mass. Board of Public Accountancy + NASBA · actualizado ene. 2026",pt:"Mass. Board of Public Accountancy + NASBA · atualizado jan. 2026"},
      badge: { en:"Boston: 37,150 accountant jobs — pays above the national median (BLS May 2025)",ht:"Boston: 37,150 travay kontab — peye pi wo pase medyàn nasyonal (BLS Me 2025)",fr:"Boston : 37 150 postes comptables — paie au-dessus de la médiane nationale (BLS mai 2025)",es:"Boston: 37,150 empleos contables — paga por encima de la mediana nacional (BLS mayo 2025)",pt:"Boston: 37.150 empregos contábeis — paga acima da mediana nacional (BLS maio 2025)"},
      steps:{
        en:[
          {title:"Get your degree evaluated — NIES or CED only, not WES",detail:"nasba.org → NIES evaluation · or cedboston.com → CED · fees ~$130",desc:"Massachusetts only accepts evaluations from NASBA's NIES or the Centre for Educational Documentation (CED) for CPA licensure. WES and other NACES evaluators are NOT accepted. This is the most common costly mistake foreign-trained accountants make. Do not pay for WES if you're pursuing CPA in Massachusetts."},
          {title:"Understand the 150-hour requirement honestly",detail:"150 semester hours total · 30 hrs accounting · 24 hrs business · in force June 2026",desc:"If your foreign degree satisfies the full 150-hour equivalent, you proceed directly. If it doesn't — which is common for 3-year foreign degrees — you need to make up the gap at a U.S. accredited school. Typically 30-60 additional credits at a community college or UMass Online, which takes 1-2 years part-time."},
          {title:"Apply to sit for the CPA exam through NASBA",detail:"Exam application: $148 · Each of 4 sections: $407.64 · Total exam cost ~$1,779",desc:"The CPA exam has 3 core sections (AUD — auditing, FAR — financial accounting, REG — U.S. tax law) plus one discipline you choose (BAR, ISC, or TCP). All 4 must be passed within a 30-month rolling window."},
          {title:"Pass the 4-section CPA exam",detail:"~300-400 study hours total · most candidates take 12-18 months · Becker, Wiley, Roger are major prep providers",desc:"Your foreign accounting training is directly relevant for FAR (financial accounting) and AUD (auditing) — expect to do well there. The significant gap is REG: U.S. federal tax law is highly country-specific and unlike anything in a foreign accounting program. Budget extra time and resources for REG."},
          {title:"Complete 2,000 hours of qualifying experience",detail:"1 year public accounting OR 3 years non-public · all verified in writing by a licensed CPA",desc:"Your experience must be attested by a licensed CPA covering attest, compilation, financial advisory, tax, or consulting skills. If you're already working as a bookkeeper or in an accounting role, this clock is running right now."},
          {title:"Apply for your Massachusetts CPA license",detail:"License fee: $175 · Renew every 2 years · 80 hrs CPE per cycle · apply via ePlace portal at mass.gov",desc:"Submit through the Massachusetts ePlace portal with your NIES evaluation, passing exam scores, and a CPA-verified experience letter. Once licensed, Massachusetts CPAs have full interstate mobility through the CPA Mobility program — one of the most portable professional licenses in the U.S."}
        ],
        ht:[
          {title:"Fè evalye diplòm ou — NIES oswa CED sèlman, pa WES",detail:"nasba.org → evalyasyon NIES · oswa cedboston.com → CED · ~$130",desc:"Massachusetts sèlman aksepte evalyasyon soti nan NIES oswa CED pou lisans CPA. WES ak lòt evalyatè NACES PA aksepte. Sa se erè ki pi komen ak ki pi koute pou kontab fòme aletranje yo. Pa peye pou WES si ou pouswiv CPA nan Massachusetts."},
          {title:"Konprann egzijans 150 èdtan an onètman",detail:"150 èdtan semès total · 30 h kontablite · 24 h biznis · an vigè jen 2026",desc:"Si diplòm etranje ou satisfè ekivalan 150-èdtan an konplètman, ou ka kontinye dirèkteman. Si pa — ki komen pou diplòm etranje 3 ane — ou bezwen konplete eka a nan yon lekòl akredite Ameriken. Tipikman 30-60 kredi anplis nan yon kolèj kominotè oswa UMass Online."},
          {title:"Aplike pou pran egzamen CPA atravè NASBA",detail:"Aplikasyon egzamen: $148 · Chak nan 4 seksyon: $407.64 · Kout total egzamen ~$1,779",desc:"Egzamen CPA a gen 3 seksyon debaz (AUD, FAR, REG) plis yon disiplin ou chwazi (BAR, ISC, oswa TCP). Tout 4 dwe pase nan yon fenèt 30 mwa."},
          {title:"Pase 4 seksyon egzamen CPA a",detail:"~300-400 èdtan etid total · pifò kandida pran 12-18 mwa · Becker, Wiley, Roger se gwo founisè preparasyon",desc:"Fòmasyon kontablite etranje ou dirèkteman enpòtan pou FAR ak AUD. Eka siyifikatif la nan REG: lwa fiskal federal Ameriken trè espesifik pou peyi a. Planifye tan ak resous anplis pou REG."},
          {title:"Konplete 2,000 èdtan eksperyans ki kalifye",detail:"1 ane kontablite piblik OU 3 ane non-piblik · tout verifye alekri pa yon CPA lisansye",desc:"Eksperyans ou dwe atèste pa yon CPA lisansye. Si ou travay deja kòm kontab, revèy sa a k ap kouri kounye a."},
          {title:"Aplike pou lisans CPA Massachusetts ou",detail:"Frè lisans: $175 · Renouvèlman chak 2 ane · 80 h CPE pa sik · aplike via pòtal ePlace nan mass.gov",desc:"Soumèt atravè pòtal ePlace Massachusetts la ak evalyasyon NIES ou, nòt egzamen pasab, ak lèt eksperyans verifye pa CPA. Yon fwa lisansye, CPA Massachusetts bay mobilite konplè atravè pifò eta Ameriken."}
        ],
        fr:[
          {title:"Faites évaluer votre diplôme — NIES ou CED uniquement, pas WES",detail:"nasba.org → évaluation NIES · ou cedboston.com → CED · ~130 $",desc:"Le Massachusetts n'accepte que les évaluations NIES ou CED pour la licence CPA. WES et autres évaluateurs NACES ne sont PAS acceptés. C'est l'erreur la plus coûteuse que font les comptables formés à l'étranger. Ne payez pas WES si vous visez le CPA au Massachusetts."},
          {title:"Comprenez honnêtement l'exigence de 150 heures",detail:"150 heures semestrielles · 30 h comptabilité · 24 h commerce · en vigueur juin 2026",desc:"Si votre diplôme étranger satisfait l'équivalent des 150 heures, vous progressez directement. Sinon — ce qui est courant pour les diplômes étrangers de 3 ans — vous devrez combler l'écart dans une institution accréditée américaine. Généralement 30-60 crédits supplémentaires."},
          {title:"Demandez à passer l'examen CPA via NASBA",detail:"Inscription examen : 148 $ · Chacune des 4 sections : 407,64 $ · Coût total examen ~1 779 $",desc:"L'examen CPA comprend 3 sections principales (AUD, FAR, REG) plus une discipline de votre choix (BAR, ISC ou TCP). Les 4 doivent être réussies dans une fenêtre de 30 mois."},
          {title:"Réussissez les 4 sections de l'examen CPA",detail:"~300-400 heures d'étude · 12-18 mois typiquement · Becker, Wiley, Roger sont les principaux prestataires",desc:"Votre formation étrangère est directement pertinente pour FAR et AUD. L'écart significatif est dans REG : le droit fiscal fédéral américain est très spécifique au pays. Prévoyez du temps et des ressources supplémentaires pour REG."},
          {title:"Complétez 2 000 heures d'expérience qualifiante",detail:"1 an comptabilité publique OU 3 ans non publique · vérifiée par écrit par un CPA agréé",desc:"Votre expérience doit être attestée par un CPA agréé. Si vous travaillez déjà dans un rôle comptable, ce compteur tourne maintenant."},
          {title:"Demandez votre licence CPA Massachusetts",detail:"Frais de licence : 175 $ · Renouvellement tous les 2 ans · 80 h de formation continue par cycle",desc:"Soumettez via le portail ePlace avec votre évaluation NIES, vos résultats d'examen et votre lettre d'expérience vérifiée. La licence CPA du Massachusetts offre une pleine mobilité dans la plupart des États américains."}
        ],
        es:[
          {title:"Evalúa tu título — solo NIES o CED, no WES",detail:"nasba.org → evaluación NIES · o cedboston.com → CED · ~$130",desc:"Massachusetts solo acepta evaluaciones de NIES o CED para la licencia CPA. WES y otros evaluadores NACES NO son aceptados. Es el error más costoso que cometen los contadores formados en el extranjero. No pagues por WES si buscas el CPA en Massachusetts."},
          {title:"Entiende honestamente el requisito de 150 horas",detail:"150 horas semestrales · 30 h contabilidad · 24 h negocios · vigente junio 2026",desc:"Si tu título extranjero satisface el equivalente de 150 horas, progresas directamente. Si no — común para títulos extranjeros de 3 años — necesitarás completar la brecha en una institución acreditada de EE.UU. Generalmente 30-60 créditos adicionales."},
          {title:"Solicita presentar el examen CPA a través de NASBA",detail:"Solicitud examen: $148 · Cada una de las 4 secciones: $407.64 · Costo total examen ~$1,779",desc:"El examen CPA tiene 3 secciones principales (AUD, FAR, REG) más una disciplina de tu elección (BAR, ISC o TCP). Las 4 deben aprobarse en una ventana de 30 meses."},
          {title:"Pasa las 4 secciones del examen CPA",detail:"~300-400 horas de estudio · 12-18 meses típicamente · Becker, Wiley, Roger son los principales proveedores",desc:"Tu formación extranjera es directamente relevante para FAR y AUD. La brecha significativa está en REG: el derecho fiscal federal estadounidense es muy específico del país. Planifica tiempo y recursos adicionales para REG."},
          {title:"Completa 2,000 horas de experiencia calificada",detail:"1 año contabilidad pública O 3 años no pública · verificada por escrito por un CPA con licencia",desc:"Tu experiencia debe ser atestiguada por un CPA con licencia. Si ya trabajas en un rol contable, este contador está corriendo ahora mismo."},
          {title:"Solicita tu licencia CPA de Massachusetts",detail:"Tarifa: $175 · Renovación cada 2 años · 80 h de CPE por ciclo · postula vía portal ePlace en mass.gov",desc:"Envía a través del portal ePlace con tu evaluación NIES, calificaciones de examen aprobadas y carta de experiencia verificada por CPA. La licencia CPA de MA ofrece plena movilidad en la mayoría de los estados de EE.UU."}
        ],
        pt:[
          {title:"Avalie seu diploma — apenas NIES ou CED, não WES",detail:"nasba.org → avaliação NIES · ou cedboston.com → CED · ~US$130",desc:"Massachusetts só aceita avaliações do NIES ou CED para a licença CPA. WES e outros avaliadores NACES NÃO são aceitos. É o erro mais caro que contábeis formados no exterior cometem. Não pague pelo WES se estiver buscando o CPA em Massachusetts."},
          {title:"Entenda honestamente o requisito de 150 horas",detail:"150 horas semestrais · 30 h contabilidade · 24 h negócios · em vigor junho 2026",desc:"Se seu diploma estrangeiro satisfaz o equivalente de 150 horas, você progride diretamente. Caso contrário — comum para diplomas estrangeiros de 3 anos — precisará completar a lacuna em uma instituição americana acreditada. Tipicamente 30-60 créditos adicionais."},
          {title:"Solicite fazer o exame CPA através da NASBA",detail:"Inscrição exame: US$148 · Cada uma das 4 seções: US$407,64 · Custo total exame ~US$1.779",desc:"O exame CPA tem 3 seções principais (AUD, FAR, REG) mais uma disciplina de sua escolha (BAR, ISC ou TCP). As 4 devem ser aprovadas em uma janela de 30 meses."},
          {title:"Passe nas 4 seções do exame CPA",detail:"~300-400 horas de estudo · 12-18 meses tipicamente · Becker, Wiley, Roger são os principais provedores",desc:"Sua formação estrangeira é diretamente relevante para FAR e AUD. A lacuna significativa está em REG: o direito tributário federal americano é muito específico do país. Planeje tempo e recursos extras para REG."},
          {title:"Complete 2.000 horas de experiência qualificada",detail:"1 ano contabilidade pública OU 3 anos não pública · verificada por escrito por um CPA licenciado",desc:"Sua experiência deve ser atestada por um CPA licenciado. Se você já trabalha em um cargo contábil, este contador está rodando agora mesmo."},
          {title:"Solicite sua licença CPA de Massachusetts",detail:"Taxa: US$175 · Renovação a cada 2 anos · 80 h de CPE por ciclo · candidate-se via portal ePlace em mass.gov",desc:"Envie pelo portal ePlace com sua avaliação NIES, notas de exame aprovadas e carta de experiência verificada por CPA. A licença CPA de MA oferece mobilidade total na maioria dos estados americanos."}
        ]
      },
      firstAction:{
        en:"This week: go to <strong>nasba.org</strong> and start the NIES evaluation process — this is the one step that unlocks everything else for the CPA path, and it can only be done through NIES or CED, not other evaluators.",
        ht:"Semèn sa a: ale nan <strong>nasba.org</strong> epi kòmanse pwosesis evalyasyon NIES la — sa a se sèl etap ki debloke tout lòt bagay pou chemen CPA a, epi li sèlman ka fèt atravè NIES oswa CED.",
        fr:"Cette semaine : rendez-vous sur <strong>nasba.org</strong> et lancez le processus d'évaluation NIES — c'est la seule étape qui débloque tout le reste pour la voie CPA, et elle ne peut être effectuée que via NIES ou CED.",
        es:"Esta semana: ve a <strong>nasba.org</strong> e inicia el proceso de evaluación NIES — este es el único paso que desbloquea todo lo demás para la vía CPA, y solo puede hacerse a través de NIES o CED.",
        pt:"Esta semana: acesse <strong>nasba.org</strong> e inicie o processo de avaliação NIES — este é o único passo que desbloqueia tudo para a via CPA, e só pode ser feito através do NIES ou CED."
      }
    }
  },

  cdl: {
    classA: {
      title: { en: "Class A CDL — Massachusetts", ht: "CDL Klas A — Massachusetts", fr: "CDL Classe A — Massachusetts" },
      meta: { en: "Mass. RMV + federal FMCSA rules · current as of Jan 2026", ht: "RMV Mass. + règ federal FMCSA · ajou Janvye 2026", fr: "RMV Mass. + règles fédérales FMCSA · à jour janvier 2026" },
      badge: { en: "~2-4 months · median pay $57,440/yr (BLS)", ht: "~2-4 mwa · salè medyàn $57,440/ane (BLS)", fr: "~2-4 mois · salaire médian 57 440 $/an (BLS)" },
      steps: {
        en: [
          { title: "Know the English requirement before you start", detail: "Federal law: 49 CFR 391.11", desc: "Federal rules require CDL drivers to read and speak English well enough for road signs, reports, and inspections. If your English isn't there yet, pair CDL prep with an ESL class — many MassHire centers offer both. Better to know this on day one than at the road test." },
          { title: "Get a DOT medical exam", detail: "Certified examiner on the FMCSA National Registry", desc: "You must be medically qualified before driving commercially. Since June 2025 the RMV receives your medical certificate electronically from the examiner — but you still submit the Self-Certification Form." },
          { title: "Study the CDL Manual and pass the knowledge test", detail: "$30 test fee · 50 questions · 80% to pass · at an RMV Service Center", desc: "The free March 2025 CDL Manual on mass.gov is the source for every question. Knowledge tests are also offered in Spanish and Portuguese. You'll need proof of lawful presence and Massachusetts residency." },
          { title: "Receive your Commercial Learner's Permit (CLP)", detail: "Valid 180 days · 14-day minimum hold before road test", desc: "Federal law requires holding your CLP at least 14 days before you can take the skills test. Apply for the CLP on day one of training so this clock runs during your program, not after." },
          { title: "Complete Entry-Level Driver Training (ELDT)", detail: "Required since Feb 2022 · FMCSA-registered school only · ~160 hours for Class A", desc: "This is the step that blocks the most road tests. Training must be through a school on the FMCSA Training Provider Registry — the school transmits your completion to the federal registry directly. Ask MassHire about funding; CDL training is often covered by workforce grants." },
          { title: "Pass the 3-part CDL Skills Test", detail: "Pre-trip inspection + basic control + road test", desc: "The pre-trip inspection is the most-failed section — you must name, point to, and explain each safety item. Don't underestimate it. All three parts must pass in one sequence." },
          { title: "Complete licensing at the RMV", detail: "Check MyRMV profile · all fees paid", desc: "Passing the skills test doesn't auto-issue the license — check your MyRMV profile for remaining items. Once issued, you're ready to apply to carriers. Many pay for experienced training or offer sign-on bonuses." }
        ],
        ht: [
          { title: "Konnen egzijans anglè a anvan ou kòmanse", detail: "Lwa federal: 49 CFR 391.11", desc: "Règ federal mande pou chofè CDL li ak pale anglè ase byen pou siy wout, rapò, ak enspeksyon. Si anglè ou poko la, konbine preparasyon CDL ak yon klas ESL — anpil sant MassHire ofri toude. Pi bon ou konnen sa premye jou a pase nan tès wout la." },
          { title: "Fè yon egzamen medikal DOT", detail: "Egzaminatè sètifye sou Rejis Nasyonal FMCSA", desc: "Ou dwe kalifye medikalman anvan ou kondwi komèsyalman. Depi jen 2025 RMV resevwa sètifika medikal ou elektwonikman nan men egzaminatè a — men ou toujou soumèt Fòm Oto-Sètifikasyon an." },
          { title: "Etidye Manyèl CDL la epi pase tès konesans lan", detail: "Frè tès $30 · 50 kesyon · 80% pou pase · nan yon RMV Service Center", desc: "Manyèl CDL gratis mas 2025 la sou mass.gov se sous chak kesyon. Tès konesans yo disponib tou an Panyòl ak Pòtigè. W ap bezwen prèv prezans legal ak rezidans Massachusetts." },
          { title: "Resevwa Pèmi Aprantisaj Komèsyal ou (CLP)", detail: "Valab 180 jou · minimòm 14 jou anvan tès wout la", desc: "Lwa federal mande pou ou kenbe CLP ou omwen 14 jou anvan ou ka pran tès konpetans lan. Aplike pou CLP a premye jou fòmasyon an pou revèy sa a kouri pandan pwogram ou, pa apre." },
          { title: "Fini Fòmasyon Chofè Nivo Antre (ELDT)", detail: "Obligatwa depi fev 2022 · sèlman lekòl anrejistre FMCSA · ~160 èdtan pou Klas A", desc: "Sa a se etap ki bloke plis tès wout. Fòmasyon dwe fèt nan yon lekòl sou FMCSA Training Provider Registry — lekòl la voye konfimasyon ou dirèkteman bay rejis federal la. Mande MassHire sou finansman; fòmasyon CDL souvan kouvri pa sibvansyon travay." },
          { title: "Pase Tès Konpetans CDL 3-pati a", detail: "Enspeksyon pre-vwayaj + kontwòl debaz + tès wout", desc: "Enspeksyon pre-vwayaj la se seksyon ki echwe plis — ou dwe nonmen, pwente, ak eksplike chak eleman sekirite. Pa souzèstime li. Tout twa pati yo dwe pase nan yon sekans." },
          { title: "Fini lisans lan nan RMV", detail: "Tcheke pwofil MyRMV ou · tout frè peye", desc: "Pase tès konpetans lan pa bay lisans lan otomatikman — tcheke pwofil MyRMV ou pou eleman ki rete. Yon fwa li soti, ou pare pou aplike nan konpayi. Anpil peye pou fòmasyon oswa ofri bonis." }
        ],
        fr: [
          { title: "Connaissez l'exigence d'anglais avant de commencer", detail: "Loi fédérale : 49 CFR 391.11", desc: "Les règles fédérales exigent que les conducteurs CDL lisent et parlent l'anglais suffisamment pour les panneaux, les rapports et les inspections. Si votre anglais n'y est pas encore, combinez la préparation CDL avec un cours d'ESL — beaucoup de centres MassHire offrent les deux. Mieux vaut le savoir dès le premier jour qu'à l'examen routier." },
          { title: "Passez un examen médical DOT", detail: "Examinateur certifié du registre national FMCSA", desc: "Vous devez être médicalement qualifié avant de conduire commercialement. Depuis juin 2025, le RMV reçoit votre certificat médical électroniquement de l'examinateur — mais vous devez toujours soumettre le formulaire d'auto-certification." },
          { title: "Étudiez le manuel CDL et réussissez le test de connaissances", detail: "Frais de 30 $ · 50 questions · 80 % pour réussir · dans un RMV Service Center", desc: "Le manuel CDL gratuit de mars 2025 sur mass.gov est la source de chaque question. Les tests de connaissances sont aussi offerts en espagnol et en portugais. Vous aurez besoin d'une preuve de présence légale et de résidence au Massachusetts." },
          { title: "Recevez votre permis d'apprenti commercial (CLP)", detail: "Valide 180 jours · délai minimum de 14 jours avant l'examen routier", desc: "La loi fédérale exige de détenir votre CLP au moins 14 jours avant l'examen de compétences. Demandez le CLP dès le premier jour de formation pour que ce délai coure pendant votre programme, pas après." },
          { title: "Complétez la formation de conducteur débutant (ELDT)", detail: "Obligatoire depuis fév. 2022 · école enregistrée FMCSA uniquement · ~160 heures pour la classe A", desc: "C'est l'étape qui bloque le plus d'examens routiers. La formation doit se faire dans une école du FMCSA Training Provider Registry — l'école transmet votre attestation directement au registre fédéral. Demandez à MassHire pour le financement ; la formation CDL est souvent couverte par des subventions." },
          { title: "Réussissez l'examen de compétences CDL en 3 parties", detail: "Inspection pré-départ + contrôle de base + examen routier", desc: "L'inspection pré-départ est la section la plus échouée — vous devez nommer, pointer et expliquer chaque élément de sécurité. Ne la sous-estimez pas. Les trois parties doivent être réussies en une séquence." },
          { title: "Finalisez le permis au RMV", detail: "Vérifiez votre profil MyRMV · tous les frais payés", desc: "Réussir l'examen n'émet pas automatiquement le permis — vérifiez votre profil MyRMV pour les éléments restants. Une fois émis, vous pouvez postuler auprès des transporteurs. Beaucoup paient la formation ou offrent des primes d'embauche." }
        ]
      },
      firstAction: {
        en: 'This week: visit your nearest <strong>MassHire Career Center</strong> and ask two things: whether CDL training funding is available for you, and which FMCSA-registered schools they work with.',
        ht: 'Semèn sa a: ale nan <strong>MassHire Career Center</strong> ki pi pre ou epi mande de bagay: si finansman fòmasyon CDL disponib pou ou, ak ki lekòl anrejistre FMCSA yo travay avèk yo.',
        fr: 'Cette semaine : visitez votre <strong>MassHire Career Center</strong> le plus proche et demandez deux choses : si un financement de formation CDL est disponible pour vous, et avec quelles écoles enregistrées FMCSA ils travaillent.'
      }
    },

    classB: {
      title: { en: "Class B CDL — Massachusetts", ht: "CDL Klas B — Massachusetts", fr: "CDL Classe B — Massachusetts" },
      meta: { en: "Mass. RMV + federal FMCSA rules · current as of Jan 2026", ht: "RMV Mass. + règ federal FMCSA · ajou Janvye 2026", fr: "RMV Mass. + règles fédérales FMCSA · à jour janvier 2026" },
      badge: { en: "Shorter training than Class A · buses, box trucks, school buses", ht: "Fòmasyon pi kout pase Klas A · otobis, kamyon bwat, otobis lekòl", fr: "Formation plus courte que la classe A · autobus, camions-caisses, autobus scolaires" },
      steps: {
        en: [
          { title: "Know the English requirement before you start", detail: "Federal law: 49 CFR 391.11", desc: "Federal rules require CDL drivers to read and speak English well enough for road signs, reports, and inspections. If your English isn't there yet, pair CDL prep with an ESL class — many MassHire centers offer both." },
          { title: "Get a DOT medical exam", detail: "Certified examiner on the FMCSA National Registry", desc: "You must be medically qualified before driving commercially. Since June 2025 the RMV receives your certificate electronically — but you still submit the Self-Certification Form." },
          { title: "Pass the knowledge test and get your CLP", detail: "$30 fee · 80% to pass · CLP valid 180 days · 14-day hold", desc: "Study the free March 2025 CDL Manual on mass.gov. Tests are also offered in Spanish and Portuguese. Add the Passenger (P) endorsement knowledge test now if you plan to drive buses." },
          { title: "Complete Entry-Level Driver Training (ELDT)", detail: "FMCSA-registered school · ~100 hours for Class B · weekend tracks exist", desc: "Required for all first-time Class B applicants and for adding P or S endorsements. Some schools run weekend-only Class B programs (~7 weekends) so you can keep your current income during training. Ask MassHire about funding." },
          { title: "Pass the 3-part CDL Skills Test", detail: "Pre-trip inspection + basic control + road test", desc: "The pre-trip inspection is the most-failed section — you must name, point to, and explain each safety item to the examiner." },
          { title: "For school buses: add the S endorsement + DPU certificate", detail: "P + S endorsements + School Bus Driver Certificate", desc: "Driving a full-size school bus requires the Passenger and School Bus endorsements plus a School Bus Driver Certificate from the Department of Public Utilities, including a first aid course. School districts are chronically short of drivers — many will sponsor this entire process." }
        ],
        ht: [
          { title: "Konnen egzijans anglè a anvan ou kòmanse", detail: "Lwa federal: 49 CFR 391.11", desc: "Règ federal mande pou chofè CDL li ak pale anglè ase byen pou siy wout, rapò, ak enspeksyon. Si anglè ou poko la, konbine preparasyon CDL ak yon klas ESL — anpil sant MassHire ofri toude." },
          { title: "Fè yon egzamen medikal DOT", detail: "Egzaminatè sètifye sou Rejis Nasyonal FMCSA", desc: "Ou dwe kalifye medikalman anvan ou kondwi komèsyalman. Depi jen 2025 RMV resevwa sètifika ou elektwonikman — men ou toujou soumèt Fòm Oto-Sètifikasyon an." },
          { title: "Pase tès konesans lan epi jwenn CLP ou", detail: "Frè $30 · 80% pou pase · CLP valab 180 jou · kenbe 14 jou", desc: "Etidye Manyèl CDL gratis mas 2025 la sou mass.gov. Tès yo disponib tou an Panyòl ak Pòtigè. Ajoute tès konesans andòsman Pasaje (P) a kounye a si ou planifye kondwi otobis." },
          { title: "Fini Fòmasyon Chofè Nivo Antre (ELDT)", detail: "Lekòl anrejistre FMCSA · ~100 èdtan pou Klas B · gen orè wikenn", desc: "Obligatwa pou tout aplikan Klas B premye fwa ak pou ajoute andòsman P oswa S. Kèk lekòl gen pwogram Klas B wikenn sèlman (~7 wikenn) pou ou ka kenbe revni ou pandan fòmasyon. Mande MassHire sou finansman." },
          { title: "Pase Tès Konpetans CDL 3-pati a", detail: "Enspeksyon pre-vwayaj + kontwòl debaz + tès wout", desc: "Enspeksyon pre-vwayaj la se seksyon ki echwe plis — ou dwe nonmen, pwente, ak eksplike chak eleman sekirite bay egzaminatè a." },
          { title: "Pou otobis lekòl: ajoute andòsman S + sètifika DPU", detail: "Andòsman P + S + Sètifika Chofè Otobis Lekòl", desc: "Kondwi yon otobis lekòl gwosè konplè mande andòsman Pasaje ak Otobis Lekòl plis yon Sètifika Chofè Otobis Lekòl nan Department of Public Utilities, ki gen ladan yon kou premye swen. Distri lekòl yo toujou manke chofè — anpil ap patwone tout pwosesis sa a." }
        ],
        fr: [
          { title: "Connaissez l'exigence d'anglais avant de commencer", detail: "Loi fédérale : 49 CFR 391.11", desc: "Les règles fédérales exigent que les conducteurs CDL lisent et parlent l'anglais suffisamment pour les panneaux, les rapports et les inspections. Si votre anglais n'y est pas encore, combinez la préparation CDL avec un cours d'ESL — beaucoup de centres MassHire offrent les deux." },
          { title: "Passez un examen médical DOT", detail: "Examinateur certifié du registre national FMCSA", desc: "Vous devez être médicalement qualifié avant de conduire commercialement. Depuis juin 2025, le RMV reçoit votre certificat électroniquement — mais vous soumettez toujours le formulaire d'auto-certification." },
          { title: "Réussissez le test de connaissances et obtenez votre CLP", detail: "Frais de 30 $ · 80 % pour réussir · CLP valide 180 jours · délai de 14 jours", desc: "Étudiez le manuel CDL gratuit de mars 2025 sur mass.gov. Les tests sont aussi offerts en espagnol et en portugais. Ajoutez le test de l'endossement Passager (P) maintenant si vous prévoyez conduire des autobus." },
          { title: "Complétez la formation de conducteur débutant (ELDT)", detail: "École enregistrée FMCSA · ~100 heures pour la classe B · horaires de fin de semaine disponibles", desc: "Obligatoire pour tous les candidats de classe B pour la première fois et pour ajouter les endossements P ou S. Certaines écoles offrent des programmes de classe B en fin de semaine seulement (~7 fins de semaine) pour garder votre revenu actuel pendant la formation. Demandez à MassHire pour le financement." },
          { title: "Réussissez l'examen de compétences CDL en 3 parties", detail: "Inspection pré-départ + contrôle de base + examen routier", desc: "L'inspection pré-départ est la section la plus échouée — vous devez nommer, pointer et expliquer chaque élément de sécurité à l'examinateur." },
          { title: "Pour les autobus scolaires : ajoutez l'endossement S + le certificat DPU", detail: "Endossements P + S + certificat de conducteur d'autobus scolaire", desc: "Conduire un autobus scolaire pleine grandeur exige les endossements Passager et Autobus scolaire plus un certificat de conducteur d'autobus scolaire du Department of Public Utilities, incluant un cours de premiers soins. Les districts scolaires manquent chroniquement de conducteurs — beaucoup parraineront tout ce processus." }
        ]
      },
      firstAction: {
        en: 'This week: if school bus driving interests you, call your local school district\'s transportation office — many <strong>sponsor the entire CDL process</strong> including training, because they urgently need drivers.',
        ht: 'Semèn sa a: si kondwi otobis lekòl enterese ou, rele biwo transpò distri lekòl lokal ou — anpil <strong>patwone tout pwosesis CDL la</strong> enkli fòmasyon, paske yo bezwen chofè ijan.',
        fr: 'Cette semaine : si la conduite d\'autobus scolaire vous intéresse, appelez le bureau de transport de votre district scolaire local — beaucoup <strong>parrainent tout le processus CDL</strong> y compris la formation, car ils ont un besoin urgent de conducteurs.'
      }
    }
  },

  cosmetology: {
    foreign: {
      title: { en: "Cosmetologist (Foreign-Trained) — Massachusetts", ht: "Kosmetològ (Fòme Aletranje) — Massachusetts", fr: "Cosmétologue (formé à l'étranger) — Massachusetts" },
      meta: { en: "Mass. Board of Cosmetology and Barbering · current as of Jan 2026", ht: "Konsèy Kosmetoloji ak Kwafè Mass. · ajou Janvye 2026", fr: "Board of Cosmetology and Barbering du Mass. · à jour janvier 2026" },
      badge: { en: "Your foreign training and work experience can count", ht: "Fòmasyon ak eksperyans travay aletranje ou ka konte", fr: "Votre formation et expérience à l'étranger peuvent compter" },
      steps: {
        en: [
          { title: "Gather your school affidavit — with exact hours per subject", detail: "Notarized in the country where you studied", desc: "The Board requires an affidavit or transcript from your school confirming enrollment dates, completion, and the specific hours in each subject — not vague totals. '25 hours in waxing, 8 hours in skin diseases' works; '300 hours in skin care' doesn't. This precision requirement trips up most applicants — get it right the first time." },
          { title: "Get government proof your school was licensed", detail: "Official documentation from your home country", desc: "Your school affidavit must be accompanied by official government documentation showing the school was authorized or licensed to operate when you attended, with dates. If your school has closed, a letter from the government where it was located confirming closure may be accepted." },
          { title: "Get a notarized employer affidavit for 2+ years of work", detail: "Notarized in the country where you worked", desc: "An affidavit from your employer certifying at least 2 years of work as a cosmetologist. This work experience is part of how the Board evaluates foreign applicants." },
          { title: "Have any license verifications sent directly to the Board", detail: "cosmetologyandbarberingboard@mass.gov", desc: "If you held a license in another country or state, that licensing authority must send verification directly to the Board — showing status, pending actions, and any discipline. It cannot come from you." },
          { title: "Compare your hours against the 1,000-hour requirement", detail: "1,000 hours incl. 50 manicuring + 80 aesthetics", desc: "If your documented training is short in any area, you'll need to make up only those specific hours at a Massachusetts board-approved school — not repeat the whole program. This is why exact per-subject hours in step 1 matter so much." },
          { title: "Pass the written theory exam and apply", detail: "Written exam only — the practical exam was eliminated Oct 2023", desc: "Once the Board approves your documents, you take the written theory exam. Massachusetts eliminated the hands-on practical exam in October 2023, which made this path faster and cheaper. Then apply through the state eLicensing portal." }
        ],
        ht: [
          { title: "Rasanble afidavi lekòl ou — ak èdtan egzat pa matyè", detail: "Notarye nan peyi kote ou te etidye", desc: "Konsèy la mande yon afidavi oswa transkripsyon nan lekòl ou ki konfime dat enskripsyon, fini pwogram lan, ak èdtan espesifik nan chak matyè — pa total vag. '25 èdtan nan siraj, 8 èdtan nan maladi po' bon; '300 èdtan nan swen po' pa bon. Egzijans presizyon sa a fè pifò aplikan tonbe — fè li kòrèk premye fwa a." },
          { title: "Jwenn prèv gouvènman lekòl ou te gen lisans", detail: "Dokiman ofisyèl gouvènman peyi ou", desc: "Afidavi lekòl ou dwe akonpaye ak dokiman ofisyèl gouvènman ki montre lekòl la te otorize oswa gen lisans pou fonksyone lè ou te la, ak dat yo. Si lekòl ou fèmen, yon lèt gouvènman kote li te ye ki konfime fèmti a ka aksepte." },
          { title: "Jwenn yon afidavi anplwayè notarye pou 2+ ane travay", detail: "Notarye nan peyi kote ou te travay", desc: "Yon afidavi nan men anplwayè ou ki sètifye omwen 2 ane travay kòm kosmetològ. Eksperyans travay sa a se yon pati nan fason Konsèy la evalye aplikan etranje yo." },
          { title: "Fè nenpòt verifikasyon lisans voye dirèkteman bay Konsèy la", detail: "cosmetologyandbarberingboard@mass.gov", desc: "Si ou te gen yon lisans nan yon lòt peyi oswa eta, otorite lisans sa a dwe voye verifikasyon dirèkteman bay Konsèy la — ki montre estati, aksyon annatant, ak nenpòt disiplin. Li pa ka soti nan men ou." },
          { title: "Konpare èdtan ou ak egzijans 1,000 èdtan an", detail: "1,000 èdtan enkli 50 maniki + 80 estetik", desc: "Si fòmasyon dokimante ou manke nan nenpòt domèn, w ap bezwen konplete sèlman èdtan espesifik sa yo nan yon lekòl apwouve Massachusetts — pa refè tout pwogram lan. Se poutèt sa èdtan egzat pa matyè nan etap 1 an enpòtan anpil." },
          { title: "Pase egzamen teyori ekri a epi aplike", detail: "Egzamen ekri sèlman — egzamen pratik la elimine oktòb 2023", desc: "Yon fwa Konsèy la apwouve dokiman ou yo, ou pran egzamen teyori ekri a. Massachusetts elimine egzamen pratik la an oktòb 2023, sa ki fè chemen sa a pi rapid ak pi bon mache. Apre sa aplike atravè pòtal eLicensing eta a." }
        ],
        fr: [
          { title: "Rassemblez l'affidavit de votre école — avec les heures exactes par matière", detail: "Notarié dans le pays où vous avez étudié", desc: "Le Board exige un affidavit ou relevé de votre école confirmant les dates d'inscription, l'achèvement, et les heures spécifiques dans chaque matière — pas de totaux vagues. « 25 heures en épilation, 8 heures en maladies de la peau » fonctionne ; « 300 heures en soins de la peau » non. Cette exigence de précision fait échouer la plupart des candidats — faites-le bien la première fois." },
          { title: "Obtenez une preuve gouvernementale que votre école était agréée", detail: "Documentation officielle de votre pays d'origine", desc: "L'affidavit de votre école doit être accompagné d'une documentation gouvernementale officielle montrant que l'école était autorisée ou agréée pendant votre fréquentation, avec les dates. Si votre école a fermé, une lettre du gouvernement confirmant la fermeture peut être acceptée." },
          { title: "Obtenez un affidavit d'employeur notarié pour 2+ ans de travail", detail: "Notarié dans le pays où vous avez travaillé", desc: "Un affidavit de votre employeur certifiant au moins 2 ans de travail comme cosmétologue. Cette expérience fait partie de l'évaluation des candidats étrangers par le Board." },
          { title: "Faites envoyer les vérifications de licence directement au Board", detail: "cosmetologyandbarberingboard@mass.gov", desc: "Si vous déteniez une licence dans un autre pays ou État, cette autorité doit envoyer la vérification directement au Board — montrant le statut, les actions en cours et toute discipline. Elle ne peut pas venir de vous." },
          { title: "Comparez vos heures à l'exigence de 1 000 heures", detail: "1 000 heures incl. 50 en manucure + 80 en esthétique", desc: "Si votre formation documentée est insuffisante dans un domaine, vous ne devrez rattraper que ces heures spécifiques dans une école approuvée du Massachusetts — pas refaire tout le programme. C'est pourquoi les heures exactes par matière à l'étape 1 comptent tant." },
          { title: "Réussissez l'examen théorique écrit et postulez", detail: "Examen écrit seulement — l'examen pratique a été éliminé en oct. 2023", desc: "Une fois vos documents approuvés par le Board, vous passez l'examen théorique écrit. Le Massachusetts a éliminé l'examen pratique en octobre 2023, ce qui rend ce parcours plus rapide et moins cher. Postulez ensuite via le portail eLicensing de l'État." }
        ]
      },
      firstAction: {
        en: 'This week: contact your school back home to start the affidavit — it must list <strong>exact hours per subject</strong> and takes the longest to obtain. Use the letter generator in this tool if you need help writing the request.',
        ht: 'Semèn sa a: kontakte lekòl ou lakay pou kòmanse afidavi a — li dwe bay lis <strong>èdtan egzat pa matyè</strong> epi li pran plis tan pou jwenn. Sèvi ak jeneratè lèt la nan zouti sa a si ou bezwen èd pou ekri demann lan.',
        fr: 'Cette semaine : contactez votre école dans votre pays pour commencer l\'affidavit — il doit indiquer les <strong>heures exactes par matière</strong> et prend le plus de temps à obtenir. Utilisez le générateur de lettres de cet outil si vous avez besoin d\'aide pour rédiger la demande.'
      }
    },

    fresh: {
      title: { en: "Cosmetologist (Starting Fresh) — Massachusetts", ht: "Kosmetològ (Kòmanse Fre) — Massachusetts", fr: "Cosmétologue (débutant) — Massachusetts" },
      meta: { en: "Mass. Board of Cosmetology and Barbering · current as of Jan 2026", ht: "Konsèy Kosmetoloji ak Kwafè Mass. · ajou Janvye 2026", fr: "Board of Cosmetology and Barbering du Mass. · à jour janvier 2026" },
      badge: { en: "~7-12 months · written exam only since Oct 2023", ht: "~7-12 mwa · egzamen ekri sèlman depi okt 2023", fr: "~7-12 mois · examen écrit seulement depuis oct. 2023" },
      steps: {
        en: [
          { title: "Meet the basic requirements", detail: "10th grade education or equivalent", desc: "You need completion of 10th grade or equivalent education. Foreign schooling counts — if asked for proof, an inexpensive credential evaluation of your secondary education can document it." },
          { title: "Choose a Board-approved school carefully", detail: "1,000 hours · ~$6,000–$16,000 · 9–18 months", desc: "All 1,000 hours must be at a Massachusetts board-approved school — apprenticeships don't count for cosmetology here. Compare tuition, schedules (evening/weekend programs exist), job placement rates, and financial aid before enrolling. Ask about payment plans." },
          { title: "Ask about funding before paying out of pocket", detail: "MassHire · school financial aid · payment plans", desc: "Check with your local MassHire Career Center about workforce training funds, and ask each school what aid they offer. Training cost is the biggest barrier in this path — reduce it before you start." },
          { title: "Complete your 1,000 hours", detail: "Includes 50 hours manicuring + 80 hours aesthetics", desc: "The program covers hairdressing, manicuring, aesthetics, sanitation, and Massachusetts law. Your language skills are an asset here — salons serving your community need stylists who speak their clients' language." },
          { title: "Pass the written theory exam", detail: "Written only — practical exam eliminated Oct 2023", desc: "After your hours, you take the written theory exam covering theory, sanitation, safety, anatomy, chemistry, and state law. There's no limit on retakes if you don't pass the first time." },
          { title: "Apply for your license through eLicensing", detail: "~$68 application fee · ~2-4 weeks processing", desc: "Apply online through the Massachusetts eLicensing portal with your school transcript. Once licensed, no continuing education is required for renewal in Massachusetts." }
        ],
        ht: [
          { title: "Satisfè egzijans debaz yo", detail: "Edikasyon 10yèm ane oswa ekivalan", desc: "Ou bezwen fini 10yèm ane oswa edikasyon ekivalan. Lekòl aletranje konte — si yo mande prèv, yon evalyasyon kredansyèl bon mache pou edikasyon segondè ou ka dokimante li." },
          { title: "Chwazi yon lekòl apwouve pa Konsèy la ak anpil atansyon", detail: "1,000 èdtan · ~$6,000–$16,000 · 9–18 mwa", desc: "Tout 1,000 èdtan yo dwe fèt nan yon lekòl apwouve Massachusetts — apwantisaj pa konte pou kosmetoloji isit. Konpare ekolaj, orè (gen pwogram aswè/wikenn), pousantaj plasman travay, ak èd finansye anvan ou enskri. Mande sou plan peman." },
          { title: "Mande sou finansman anvan ou peye nan pòch ou", detail: "MassHire · èd finansye lekòl · plan peman", desc: "Tcheke ak MassHire Career Center lokal ou sou fon fòmasyon travay, epi mande chak lekòl ki èd yo ofri. Pri fòmasyon an se pi gwo baryè nan chemen sa a — diminye li anvan ou kòmanse." },
          { title: "Fini 1,000 èdtan ou yo", detail: "Enkli 50 èdtan maniki + 80 èdtan estetik", desc: "Pwogram lan kouvri kwafi, maniki, estetik, ijyèn, ak lwa Massachusetts. Konpetans lang ou se yon avantaj isit — salon k ap sèvi kominote ou bezwen estilis ki pale lang kliyan yo." },
          { title: "Pase egzamen teyori ekri a", detail: "Ekri sèlman — egzamen pratik elimine okt 2023", desc: "Apre èdtan ou yo, ou pran egzamen teyori ekri a ki kouvri teyori, ijyèn, sekirite, anatomi, chimi, ak lwa eta a. Pa gen limit sou repriz si ou pa pase premye fwa a." },
          { title: "Aplike pou lisans ou atravè eLicensing", detail: "~$68 frè aplikasyon · ~2-4 semèn pwosesis", desc: "Aplike sou entènèt atravè pòtal eLicensing Massachusetts la ak transkripsyon lekòl ou. Yon fwa ou gen lisans, pa gen edikasyon kontinyèl obligatwa pou renouvèlman nan Massachusetts." }
        ],
        fr: [
          { title: "Remplissez les exigences de base", detail: "Éducation de 10e année ou équivalent", desc: "Vous devez avoir complété la 10e année ou une éducation équivalente. La scolarité étrangère compte — si une preuve est demandée, une évaluation peu coûteuse de votre éducation secondaire peut la documenter." },
          { title: "Choisissez soigneusement une école approuvée par le Board", detail: "1 000 heures · ~6 000 $–16 000 $ · 9–18 mois", desc: "Les 1 000 heures doivent toutes être dans une école approuvée du Massachusetts — l'apprentissage ne compte pas pour la cosmétologie ici. Comparez les frais, les horaires (programmes de soir/fin de semaine disponibles), les taux de placement et l'aide financière avant de vous inscrire. Demandez les plans de paiement." },
          { title: "Renseignez-vous sur le financement avant de payer de votre poche", detail: "MassHire · aide financière des écoles · plans de paiement", desc: "Vérifiez auprès de votre MassHire Career Center local pour les fonds de formation, et demandez à chaque école quelle aide elle offre. Le coût de la formation est le plus grand obstacle de ce parcours — réduisez-le avant de commencer." },
          { title: "Complétez vos 1 000 heures", detail: "Incluant 50 heures de manucure + 80 heures d'esthétique", desc: "Le programme couvre la coiffure, la manucure, l'esthétique, l'hygiène et la loi du Massachusetts. Vos compétences linguistiques sont un atout ici — les salons servant votre communauté ont besoin de stylistes qui parlent la langue de leurs clients." },
          { title: "Réussissez l'examen théorique écrit", detail: "Écrit seulement — l'examen pratique a été éliminé en oct. 2023", desc: "Après vos heures, vous passez l'examen théorique écrit couvrant la théorie, l'hygiène, la sécurité, l'anatomie, la chimie et la loi de l'État. Il n'y a pas de limite de reprises si vous ne réussissez pas la première fois." },
          { title: "Demandez votre licence via eLicensing", detail: "~68 $ de frais de demande · ~2-4 semaines de traitement", desc: "Postulez en ligne via le portail eLicensing du Massachusetts avec votre relevé scolaire. Une fois licencié, aucune formation continue n'est requise pour le renouvellement au Massachusetts." }
        ]
      },
      firstAction: {
        en: 'This week: visit your nearest <strong>MassHire Career Center</strong> and ask whether cosmetology training funds are available — then compare at least two board-approved schools on cost and schedule before enrolling anywhere.',
        ht: 'Semèn sa a: ale nan <strong>MassHire Career Center</strong> ki pi pre ou epi mande si fon fòmasyon kosmetoloji disponib — apre sa konpare omwen de lekòl apwouve sou pri ak orè anvan ou enskri okenn kote.',
        fr: 'Cette semaine : visitez votre <strong>MassHire Career Center</strong> le plus proche et demandez si des fonds de formation en cosmétologie sont disponibles — puis comparez au moins deux écoles approuvées sur le coût et l\'horaire avant de vous inscrire.'
      }
    }
  }
};

const disclaimers = {
  nursing: {
    en: "This plan is based on published Massachusetts Board of Registration in Nursing and DPH Nurse Aide Registry requirements. Requirements and fees can change. Always confirm current details directly with the Board (617-973-0800) or DPH (617-753-8144) before paying any fees or submitting documents.",
    ht: "Plan sa a baze sou egzijans Konsèy Anrejistreman Enfimyè Massachusetts ak DPH Nurse Aide Registry yo pibliye. Egzijans ak frè yo ka chanje. Toujou konfime detay aktyèl yo dirèkteman ak Konsèy la (617-973-0800) oswa DPH (617-753-8144) anvan ou peye okenn frè oswa soumèt dokiman.",
    fr: "Ce plan est basé sur les exigences publiées du Massachusetts Board of Registration in Nursing et du DPH Nurse Aide Registry. Les exigences et les frais peuvent changer. Confirmez toujours les détails actuels directement auprès du Board (617-973-0800) ou du DPH (617-753-8144) avant de payer des frais ou de soumettre des documents."
  },
  teaching: {
    en: "This plan is based on published Massachusetts DESE Office of Educator Licensure requirements. Requirements can change and vary by license field. Always confirm current details with the DESE Licensure Call Center (781-338-6600) before paying evaluation fees or enrolling in coursework.",
    ht: "Plan sa a baze sou egzijans ofisyèl DESE Massachusetts pou lisans edikatè. Egzijans yo ka chanje epi yo varye selon domèn lisans lan. Toujou konfime detay aktyèl yo ak DESE Licensure Call Center (781-338-6600) anvan ou peye frè evalyasyon oswa enskri nan kou.",
    fr: "Ce plan est basé sur les exigences publiées du DESE Massachusetts (Office of Educator Licensure). Les exigences peuvent changer et varient selon le domaine de licence. Confirmez toujours les détails actuels auprès du DESE Licensure Call Center (781-338-6600) avant de payer des frais d'évaluation ou de vous inscrire à des cours."
  },
  accounting: {
    en: "This plan is based on published Massachusetts Board of Public Accountancy and NASBA requirements. The 150-hour education requirement remains in force as of June 2026 — confirm current status at mass.gov/accountancy before enrolling in coursework. Fees and timelines are approximate and subject to change.",
    ht: "Plan sa a baze sou egzijans ofisyèl Konsèy Kontablite Piblik Massachusetts ak NASBA. Egzijans 150 èdtan edikasyon an toujou an vigè kòm jen 2026 — konfime estati aktyèl nan mass.gov/accountancy anvan ou enskri nan kou. Frè ak kalandriye yo apwoksimatif epi ka chanje.",
    fr: "Ce plan est basé sur les exigences publiées du Massachusetts Board of Public Accountancy et de NASBA. L'exigence de 150 heures d'enseignement reste en vigueur depuis juin 2026 — confirmez le statut actuel sur mass.gov/accountancy avant de vous inscrire à des cours. Les frais et délais sont approximatifs et sujets à changement.",
    es: "Este plan se basa en los requisitos publicados del Massachusetts Board of Public Accountancy y NASBA. El requisito de 150 horas de educación sigue vigente desde junio de 2026 — confirma el estado actual en mass.gov/accountancy antes de inscribirte en cursos. Las tarifas y plazos son aproximados y sujetos a cambio.",
    pt: "Este plano é baseado nos requisitos publicados do Massachusetts Board of Public Accountancy e da NASBA. O requisito de 150 horas de educação permanece em vigor desde junho de 2026 — confirme o status atual em mass.gov/accountancy antes de se inscrever em cursos. Taxas e prazos são aproximados e sujeitos a alterações."
  },
  cdl: {
    en: "This plan is based on published Massachusetts RMV and federal FMCSA requirements. Fees and rules can change. Always confirm current details with the RMV (857-368-8000) before paying fees or enrolling in a training program. Note: federal law requires CDL drivers to read and speak English sufficiently for road signs, reports, and official inquiries (49 CFR 391.11).",
    ht: "Plan sa a baze sou egzijans ofisyèl RMV Massachusetts ak FMCSA federal. Frè ak règ yo ka chanje. Toujou konfime detay aktyèl yo ak RMV (857-368-8000) anvan ou peye frè oswa enskri nan yon pwogram fòmasyon. Nòt: lwa federal mande pou chofè CDL li ak pale anglè ase pou siy wout, rapò, ak kesyon ofisyèl (49 CFR 391.11).",
    fr: "Ce plan est basé sur les exigences publiées du RMV du Massachusetts et de la FMCSA fédérale. Les frais et les règles peuvent changer. Confirmez toujours les détails actuels auprès du RMV (857-368-8000) avant de payer des frais ou de vous inscrire à une formation. Note : la loi fédérale exige que les conducteurs CDL lisent et parlent l'anglais suffisamment pour les panneaux routiers, les rapports et les demandes officielles (49 CFR 391.11)."
  },
  cosmetology: {
    en: "This plan is based on published Massachusetts Board of Registration of Cosmetology and Barbering requirements. Fees and rules can change. Always confirm current details with the Board (cosmetologyandbarberingboard@mass.gov · 1000 Washington Street, Suite 710, Boston, MA 02118) before paying fees or submitting documents.",
    ht: "Plan sa a baze sou egzijans ofisyèl Konsèy Anrejistreman Kosmetoloji ak Kwafè Massachusetts. Frè ak règ yo ka chanje. Toujou konfime detay aktyèl yo ak Konsèy la (cosmetologyandbarberingboard@mass.gov · 1000 Washington Street, Suite 710, Boston, MA 02118) anvan ou peye frè oswa soumèt dokiman.",
    fr: "Ce plan est basé sur les exigences publiées du Board of Registration of Cosmetology and Barbering du Massachusetts. Les frais et les règles peuvent changer. Confirmez toujours les détails actuels auprès du Board (cosmetologyandbarberingboard@mass.gov · 1000 Washington Street, Suite 710, Boston, MA 02118) avant de payer des frais ou de soumettre des documents."
  }
};

const upgrades = {
  cna: {
    title: { en:"CNA → LPN → RN",ht:"CNA → LPN → RN",fr:"CNA → LPN → RN",es:"CNA → LPN → RN",pt:"CNA → LPN → RN"},
    meta: { en:"Massachusetts Career Ladder Program + community college LPN programs · Jan 2026",ht:"Massachusetts Career Ladder Program + pwogram LPN kolèj kominotè · Jan 2026",fr:"Massachusetts Career Ladder Program + programmes LPN · jan. 2026",es:"Massachusetts Career Ladder Program + programas LPN · ene. 2026",pt:"Massachusetts Career Ladder Program + programas LPN · jan. 2026"},
    badge: { en:"Your CNA hours already count — bridge in 9-12 months",ht:"Èdtan CNA ou yo deja konte — pon nan 9-12 mwa",fr:"Vos heures CNA comptent déjà — transition en 9-12 mois",es:"Tus horas de CNA ya cuentan — transición en 9-12 meses",pt:"Suas horas de CNA já contam — transição em 9-12 meses"},
    steps:{
      en:[
        {title:"You already have what the bridge needs",detail:"CNA certification + work history = your entry ticket",desc:"CNA-to-LPN bridge programs specifically credit your nursing assistant training and clinical hours. You're not starting over — you're completing the gap, not the whole program."},
        {title:"Apply to the Massachusetts Career Ladder Program (CLP)",detail:"socialfinance.org · Employer endorsement required",desc:"Specifically for working CNAs in Massachusetts. Pays $440/week (pre-tax) during your ~10 months of LPN school, lets you work reduced hours while keeping your job, and requires your employer's endorsement. Ask your employer about it first."},
        {title:"Choose an approved LPN program at a community college",detail:"7 MA colleges: Greenfield, Holyoke, MassBay, Mt. Wachusett, North Shore, Northern Essex, Quinsigamond",desc:"All except Mt. Wachusett have a May deadline for Fall (September) admission. Mt. Wachusett admits in Spring (January) — deadline September 1. CLPrep available if you need academic support. Most programs require the TEAS entrance exam — see Step 3.5 below for how to prepare."},
        {title:"Prepare for and pass the TEAS entrance exam",detail:"ATI TEAS · $115 fee · 3.5 hours · retake after 30 days if needed",desc:"Almost all MA LPN programs require the TEAS (Test of Essential Academic Skills). It tests reading, math, science, and English language — all in English. Free prep: ATI's official study guide at atitesting.com, Khan Academy for math and science. If English is your second or third language, start TEAS prep at least 3 months before applying. Libraries often host free TEAS prep workshops — ask your local branch."},
        {title:"Pass the NCLEX-PN and get your LPN license",detail:"MA LPN median: $80,220/yr (BLS May 2025) vs CNA ~$39,530/yr",desc:"Once licensed, your income roughly doubles. As an LPN you can administer medications, develop care plans, and supervise CNAs."},
        {title:"From LPN, the RN bridge is one more year",detail:"NSCC and other MA colleges offer 1-year LPN-to-RN Advanced Placement",desc:"MA RN median: $106,530/yr. You can keep earning as an LPN while you plan this next step."}
      ],
      ht:[
        {title:"Ou deja gen sa pon an mande",detail:"Sètifikasyon CNA + istwa travay = biye antre ou",desc:"Pwogram pon CNA-a-LPN yo kreye pou fòmasyon asistan enfimyè ak èdtan klinik ou. Ou pa kòmanse soti nan zewo — w ap konplete diferans lan, pa tout pwogram lan."},
        {title:"Aplike pou Massachusetts Career Ladder Program (CLP)",detail:"socialfinance.org · Bezwen andòsman anplwayè",desc:"Espesyalman pou CNA ki travay nan Massachusetts. Li peye $440/semèn pandan ~10 mwa lekòl LPN ou, pèmèt ou travay èdtan redwi pandan ou kenbe travay ou. Mande anplwayè ou sou li anvan tout."},
        {title:"Chwazi yon pwogram LPN apwouve nan yon kolèj kominotè",detail:"7 kolèj MA: Greenfield, Holyoke, MassBay, Mt. Wachusett, North Shore, Northern Essex, Quinsigamond",desc:"Tout sof Mt. Wachusett gen dat limit me pou admisyon otòn. Mt. Wachusett admèt nan prentan — dat limit 1 septanm."},
        {title:"Prepare ak pase egzamen antre TEAS",detail:"ATI TEAS · $115 · 3.5 èdtan · ka repase apre 30 jou",desc:"Prèske tout pwogram LPN MA mande TEAS (Test of Essential Academic Skills). Li teste lekti, matematik, syans, ak lang anglè — tout an anglè. Prep gratis: gid etid ofisyèl ATI nan atitesting.com, Khan Academy pou matematik ak syans. Si anglè se dezyèm oswa twazyèm lang ou, kòmanse prep TEAS omwen 3 mwa anvan ou aplike. Bibliyotèk yo souvan gen atelye prep TEAS gratis — mande branch lokal ou."},
        {title:"Pase NCLEX-PN epi jwenn lisans LPN ou",detail:"Medyàn LPN MA: $80,220/ane (BLS Me 2025)",desc:"Yon fwa ou gen lisans, revni ou apeprè double. Ou ka administre medikaman, devlope plan swen, ak sipèvize CNA yo."},
        {title:"Soti nan LPN, pon RN se yon ane ankò",detail:"Medyàn RN MA: $106,530/ane",desc:"NSCC ak lòt kolèj MA ofri pwogram LPN-a-RN Plas Avanse 1 ane."}
      ],
      fr:[
        {title:"Vous avez déjà ce que le pont demande",detail:"Certification CNA + historique = votre ticket d'entrée",desc:"Les programmes CNA-LPN créditent votre formation. Vous comblez l'écart, pas tout le programme."},
        {title:"Postulez au Massachusetts Career Ladder Program (CLP)",detail:"socialfinance.org · Approbation de l'employeur requise",desc:"Verse 440 $/semaine pendant ~10 mois d'école LPN, permet de travailler à temps réduit. Demandez à votre employeur en premier."},
        {title:"Choisissez un programme LPN approuvé en community college",detail:"7 colleges MA : Greenfield, Holyoke, MassBay, Mt. Wachusett, North Shore, Northern Essex, Quinsigamond",desc:"Date limite mai pour l'admission d'automne. Mt. Wachusett admet au printemps — date limite 1er septembre."},
        {title:"Préparez et réussissez l'examen d'entrée TEAS",detail:"ATI TEAS · 115 $ · 3,5 heures · retenter après 30 jours si besoin",desc:"Presque tous les programmes LPN du MA exigent le TEAS (Test of Essential Academic Skills). Il évalue lecture, mathématiques, sciences et langue anglaise — entièrement en anglais. Préparation gratuite : guide officiel ATI sur atitesting.com, Khan Academy pour les maths et les sciences. Si l'anglais est votre 2e ou 3e langue, commencez la préparation au TEAS au moins 3 mois avant de postuler. Les bibliothèques proposent souvent des ateliers gratuits."},
        {title:"Réussissez le NCLEX-PN et obtenez votre licence LPN",detail:"Médiane LPN MA : 80 220 $/an (BLS mai 2025)",desc:"Votre revenu double approximativement. Vous pouvez administrer des médicaments, développer des plans de soins et superviser les CNA."},
        {title:"Depuis LPN, le pont RN n'est qu'un an de plus",detail:"Médiane RN MA : 106 530 $/an",desc:"NSCC et d'autres colleges MA offrent des programmes LPN-RN d'1 an."}
      ],
      es:[
        {title:"Ya tienes lo que el puente necesita",detail:"Certificación CNA + historial = tu boleto de entrada",desc:"Los programas puente CNA-LPN acreditan tu formación. Estás completando la brecha, no el programa completo."},
        {title:"Aplica al Massachusetts Career Ladder Program (CLP)",detail:"socialfinance.org · Aprobación del empleador requerida",desc:"Paga $440/semana durante ~10 meses de escuela LPN, permite trabajar horas reducidas manteniendo el trabajo. Pregunta a tu empleador primero."},
        {title:"Elige un programa LPN aprobado en un community college",detail:"7 colleges de MA: Greenfield, Holyoke, MassBay, Mt. Wachusett, North Shore, Northern Essex, Quinsigamond",desc:"Fecha límite mayo para admisión de otoño. Mt. Wachusett admite en primavera — fecha límite 1 de septiembre."},
        {title:"Prepárate y aprueba el examen de ingreso TEAS",detail:"ATI TEAS · $115 · 3.5 horas · reintentar después de 30 días si es necesario",desc:"Casi todos los programas LPN de MA requieren el TEAS (Test of Essential Academic Skills). Evalúa lectura, matemáticas, ciencias e inglés — todo en inglés. Preparación gratuita: guía oficial de ATI en atitesting.com, Khan Academy para matemáticas y ciencias. Si el inglés es tu segundo o tercer idioma, empieza la preparación al menos 3 meses antes de aplicar. Las bibliotecas suelen ofrecer talleres gratuitos de preparación para el TEAS."},
        {title:"Pasa el NCLEX-PN y obtén tu licencia LPN",detail:"Mediano LPN MA: $80,220/año (BLS mayo 2025)",desc:"Tu ingreso aproximadamente se duplica. Como LPN puedes administrar medicamentos, desarrollar planes de atención y supervisar CNAs."},
        {title:"Desde LPN, el puente a RN es un año más",detail:"Mediano RN MA: $106,530/año",desc:"NSCC y otros colleges de MA ofrecen programas LPN-RN de 1 año."}
      ],
      pt:[
        {title:"Você já tem o que a ponte precisa",detail:"Certificação CNA + histórico = seu bilhete de entrada",desc:"Os programas de transição CNA-LPN creditam sua formação. Você está completando a lacuna, não o programa todo."},
        {title:"Candidate-se ao Massachusetts Career Ladder Program (CLP)",detail:"socialfinance.org · Aprovação do empregador necessária",desc:"Paga US$440/semana durante ~10 meses de escola LPN, permite trabalhar horas reduzidas mantendo o emprego. Pergunte ao seu empregador primeiro."},
        {title:"Escolha um programa LPN aprovado em um community college",detail:"7 colleges de MA: Greenfield, Holyoke, MassBay, Mt. Wachusett, North Shore, Northern Essex, Quinsigamond",desc:"Prazo em maio para admissão de outono. Mt. Wachusett admite na primavera — prazo 1º de setembro."},
        {title:"Prepare-se e passe no exame de ingresso TEAS",detail:"ATI TEAS · US$115 · 3,5 horas · refazer após 30 dias se necessário",desc:"Quase todos os programas LPN de MA exigem o TEAS (Test of Essential Academic Skills). Avalia leitura, matemática, ciências e inglês — tudo em inglês. Preparação gratuita: guia oficial da ATI em atitesting.com, Khan Academy para matemática e ciências. Se o inglês é seu segundo ou terceiro idioma, comece a preparação para o TEAS pelo menos 3 meses antes de se inscrever. Bibliotecas costumam ter workshops gratuitos de preparação para o TEAS."},
        {title:"Passe no NCLEX-PN e obtenha sua licença LPN",detail:"Mediano LPN MA: US$80.220/ano (BLS maio 2025)",desc:"Sua renda aproximadamente dobra. Como LPN você pode administrar medicamentos, desenvolver planos de cuidados e supervisionar CNAs."},
        {title:"De LPN, a ponte para RN é mais um ano",detail:"Mediana RN MA: US$106.530/ano",desc:"NSCC e outros colleges de MA oferecem programas LPN-para-RN de 1 ano."}
      ]
    },
    firstAction:{
      en:"This week: talk to your supervisor or HR about the <strong>Massachusetts Career Ladder Program</strong> — your employer must endorse your application. If they say no, call MassHire at <strong>(617) 626-6800</strong> for other funding options.",
      ht:"Semèn sa a: pale ak sipèvizè ou oswa RH sou <strong>Massachusetts Career Ladder Program</strong> — anplwayè ou dwe andòse aplikasyon ou. Si yo di non, rele MassHire nan <strong>(617) 626-6800</strong>.",
      fr:"Cette semaine : parlez à votre superviseur ou RH du <strong>Massachusetts Career Ladder Program</strong>. Si non, appelez MassHire au <strong>(617) 626-6800</strong>.",
      es:"Esta semana: habla con tu supervisor o RRHH sobre el <strong>Massachusetts Career Ladder Program</strong>. Si dicen no, llama a MassHire al <strong>(617) 626-6800</strong>.",
      pt:"Esta semana: fale com seu supervisor ou RH sobre o <strong>Massachusetts Career Ladder Program</strong>. Se disserem não, ligue para MassHire pelo <strong>(617) 626-6800</strong>."
    },
    disclaimer:{
      en:"Income figures BLS May 2025. Career Ladder Program details from Social Finance Massachusetts — verify current eligibility at socialfinance.org before applying.",
      ht:"Chif revni BLS Me 2025. Detay CLP nan Social Finance Massachusetts — verifye elijibilite aktyèl nan socialfinance.org anvan ou aplike.",
      fr:"Chiffres BLS mai 2025. Détails CLP de Social Finance Massachusetts — vérifiez l'éligibilité sur socialfinance.org.",
      es:"Cifras BLS mayo 2025. Detalles CLP de Social Finance Massachusetts — verifica elegibilidad en socialfinance.org.",
      pt:"Valores BLS maio 2025. Detalhes CLP da Social Finance Massachusetts — verifique elegibilidade em socialfinance.org."
    }
  },

  hha:{
    title:{en:"HHA → Consolidated CNA → LPN",ht:"HHA → CNA Konsolide → LPN",fr:"HHA → CNA consolidé → LPN",es:"HHA → CNA consolidado → LPN",pt:"HHA → CNA consolidado → LPN"},
    meta:{en:"Mass. EOHHS consolidated credential redesign · Jan 2026",ht:"Rekonstriksyon kredansyèl konsolide EOHHS Mass. · Jan 2026",fr:"Refonte EOHHS Mass. · jan. 2026",es:"Rediseño EOHHS Mass. · ene. 2026",pt:"Redesenho EOHHS Mass. · jan. 2026"},
    badge:{en:"Massachusetts is merging HHA and CNA into one credential — act now",ht:"Massachusetts ap fonde HHA ak CNA an yon sèl kredansyèl — aji kounye a",fr:"Le Massachusetts fusionne HHA et CNA en une accréditation — agissez maintenant",es:"Massachusetts está fusionando HHA y CNA en una credencial — actúa ahora",pt:"Massachusetts está fundindo HHA e CNA em uma credencial — aja agora"},
    steps:{
      en:[
        {title:"Massachusetts is redesigning your credential right now",detail:"Consolidated CNA credential — planned April 2026 launch",desc:"Massachusetts is merging HHA and CNA into a single consolidated CNA credential qualifying you for both home and facility settings. Your HHA experience is being recognized, not discarded."},
        {title:"Complete the consolidated CNA credential",detail:"Call DPH Nurse Aide Registry: (617) 753-8144 for current HHA transition details",desc:"Existing HHAs with sufficient documented hours may have an accelerated path. Call DPH to confirm what's required for your specific situation before doing anything else."},
        {title:"With CNA, the LPN bridge opens",detail:"Massachusetts Career Ladder Program at socialfinance.org",desc:"Once you hold the CNA credential, you qualify for the Career Ladder Program — $440/week during LPN school, employer endorsement required, 7 community college options."},
        {title:"LPN → RN in one more year",detail:"HHA (~$37K) → LPN (~$80K) → RN (~$106K) in Massachusetts (BLS 2025)",desc:"The income ladder is real. From LPN you can access 1-year LPN-to-RN Advanced Placement programs at Massachusetts community colleges."}
      ],
      ht:[
        {title:"Massachusetts ap rekonstitye kredansyèl ou kounye a",detail:"Kredansyèl CNA konsolide — lanse prevwa avril 2026",desc:"Massachusetts ap fonde HHA ak CNA an yon sèl kredansyèl CNA konsolide. Eksperyans HHA ou ap rekonèt, pa neglije."},
        {title:"Konplete kredansyèl CNA konsolide a",detail:"Rele DPH Nurse Aide Registry: (617) 753-8144 pou detay tranzisyon HHA aktyèl",desc:"HHA egzistan yo ak ase èdtan dokimante ka gen yon chemen akselewe. Rele DPH pou konfime sa yo mande pou sitiyasyon espesifik ou."},
        {title:"Avèk CNA, pon LPN an ouvè",detail:"Massachusetts Career Ladder Program nan socialfinance.org",desc:"Yon fwa ou gen kredansyèl CNA a, ou kalifye pou Career Ladder Program — $440/semèn pandan lekòl LPN, 7 opsyon kolèj kominotè."},
        {title:"LPN → RN nan yon ane ankò",detail:"HHA (~$37K) → LPN (~$80K) → RN (~$106K) nan Massachusetts (BLS 2025)",desc:"Echèl revni a reyèl. Soti nan LPN ou ka jwenn aksè nan pwogram LPN-a-RN Plas Avanse 1 ane."}
      ],
      fr:[
        {title:"Le Massachusetts redesigne votre accréditation maintenant",detail:"Accréditation CNA consolidée — lancement prévu en avril 2026",desc:"Le Massachusetts fusionne HHA et CNA en une accréditation CNA unique. Votre expérience HHA sera reconnue."},
        {title:"Obtenez l'accréditation CNA consolidée",detail:"Appelez le DPH Nurse Aide Registry : (617) 753-8144",desc:"Les HHA existants avec suffisamment d'heures documentées peuvent avoir un parcours accéléré."},
        {title:"Avec le CNA, le pont LPN s'ouvre",detail:"Massachusetts Career Ladder Program sur socialfinance.org",desc:"Une fois détenteur du CNA, vous êtes admissible au Career Ladder Program — 440 $/semaine, 7 options de colleges."},
        {title:"LPN → RN en un an de plus",detail:"HHA (~37K$) → LPN (~80K$) → RN (~106K$) au Massachusetts (BLS 2025)",desc:"Des programmes LPN-vers-RN d'1 an sont disponibles."}
      ],
      es:[
        {title:"Massachusetts está rediseñando tu credencial ahora mismo",detail:"Credencial CNA consolidada — lanzamiento previsto para abril 2026",desc:"Massachusetts está fusionando HHA y CNA en una sola credencial. Tu experiencia HHA será reconocida."},
        {title:"Obtén la credencial CNA consolidada",detail:"Llama al DPH Nurse Aide Registry: (617) 753-8144",desc:"Los HHA existentes con suficientes horas documentadas pueden tener un camino acelerado."},
        {title:"Con el CNA, el puente LPN se abre",detail:"Massachusetts Career Ladder Program en socialfinance.org",desc:"Una vez con el CNA, calificas para el Career Ladder Program — $440/semana, 7 opciones de community colleges."},
        {title:"LPN → RN en un año más",detail:"HHA (~$37K) → LPN (~$80K) → RN (~$106K) en Massachusetts (BLS 2025)",desc:"Programas LPN-a-RN de 1 año disponibles."}
      ],
      pt:[
        {title:"Massachusetts está redesenhando sua credencial agora",detail:"Credencial CNA consolidada — lançamento previsto para abril de 2026",desc:"Massachusetts está fundindo HHA e CNA em uma única credencial. Sua experiência HHA será reconhecida."},
        {title:"Obtenha a credencial CNA consolidada",detail:"Ligue para o DPH Nurse Aide Registry: (617) 753-8144",desc:"HHAs existentes com horas documentadas suficientes podem ter um caminho acelerado."},
        {title:"Com o CNA, a ponte LPN se abre",detail:"Massachusetts Career Ladder Program em socialfinance.org",desc:"Uma vez com o CNA, você se qualifica para o Career Ladder Program — US$440/semana, 7 opções de community colleges."},
        {title:"LPN → RN em mais um ano",detail:"HHA (~US$37K) → LPN (~US$80K) → RN (~US$106K) em Massachusetts (BLS 2025)",desc:"Programas LPN-para-RN de 1 ano disponíveis."}
      ]
    },
    firstAction:{
      en:"This week: call the DPH Nurse Aide Registry at <strong>(617) 753-8144</strong> and ask what HHAs need to do to transition to the consolidated CNA credential.",
      ht:"Semèn sa a: rele DPH Nurse Aide Registry nan <strong>(617) 753-8144</strong> epi mande sa HHA yo bezwen fè pou tranzisyon pou nouvo kredansyèl CNA konsolide a.",
      fr:"Cette semaine : appelez le DPH Nurse Aide Registry au <strong>(617) 753-8144</strong> pour la transition vers le CNA consolidé.",
      es:"Esta semana: llama al DPH Nurse Aide Registry al <strong>(617) 753-8144</strong> para la transición al CNA consolidado.",
      pt:"Esta semana: ligue para o DPH Nurse Aide Registry no <strong>(617) 753-8144</strong> para a transição para o CNA consolidado."
    },
    disclaimer:{
      en:"Consolidated CNA credential redesign was in active planning through 2025. Details may have changed — call DPH (617) 753-8144 to confirm current status.",
      ht:"Rekonstriksyon kredansyèl CNA konsolide a te nan planifikasyon aktif pandan 2025. Rele DPH (617) 753-8144 pou konfime estati aktyèl.",
      fr:"La refonte était en planification active jusqu'en 2025. Appelez DPH (617) 753-8144 pour confirmer le statut actuel.",
      es:"El rediseño estaba en planificación activa hasta 2025. Llama al DPH (617) 753-8144 para confirmar el estado actual.",
      pt:"O redesenho estava em planejamento ativo até 2025. Ligue para o DPH (617) 753-8144 para confirmar o status atual."
    }
  },

  uber:{
    title:{en:"Rideshare/Delivery → Class B CDL → Higher Pay",ht:"Pou Lokatè/Livrezon → CDL Klas B → Pi Gwo Salè",fr:"VTC/Livraison → CDL Classe B → Meilleur salaire",es:"Transporte/Entrega → CDL Clase B → Mejor pago",pt:"Transporte/Entrega → CDL Classe B → Melhor salário"},
    meta:{en:"Mass. RMV + FMCSA · Jan 2026",ht:"RMV Mass. + FMCSA · Jan 2026",fr:"RMV Mass. + FMCSA · jan. 2026",es:"RMV Mass. + FMCSA · ene. 2026",pt:"RMV Mass. + FMCSA · jan. 2026"},
    badge:{en:"Your clean driving record is your biggest asset — upgrade in ~2-3 months",ht:"Dosye kondwit pwòp ou se pi gwo atou ou — amelyorasyon nan ~2-3 mwa",fr:"Votre casier de conduite propre est votre meilleur atout — mise à niveau en ~2-3 mois",es:"Tu historial de conducción limpio es tu mayor activo — actualización en ~2-3 meses",pt:"Seu histórico de condução limpo é seu maior ativo — atualização em ~2-3 meses"},
    steps:{
      en:[
        {title:"Your rideshare record already proves you",detail:"Clean driving record + documented hours = strong CDL candidate",desc:"CDL hiring managers know rideshare drivers with clean records are lower risk. Your experience demonstrates exactly the discipline CDL employers value."},
        {title:"Talk to your local school district first",detail:"School districts chronically short on bus drivers — many sponsor full CDL",desc:"Call the transportation office of Boston Public Schools (617-635-9000) or 2-3 nearby districts before paying for any training. Many sponsor the full CDL process for school bus drivers — training, testing, and license — because they need drivers so badly."},
        {title:"Get your DOT medical exam and CLP",detail:"$30 knowledge test · CLP valid 180 days · 14-day minimum hold before skills test",desc:"Study the free March 2025 CDL Manual at mass.gov. Get your CLP on day one of training so the 14-day clock runs during, not after, your program."},
        {title:"Complete Entry-Level Driver Training (ELDT)",detail:"FMCSA-registered school · ~100 hours for Class B · weekend tracks available",desc:"Ask MassHire (617) 626-6800 about Workforce Training Fund grants. Weekend-only programs let you keep earning from rideshare during training."},
        {title:"Pass the CDL skills test and start earning more",detail:"Class B median ~$57,440/yr + benefits + pension vs. rideshare ~$35K-$42K",desc:"The income, stability, and benefits gap between rideshare and school bus is significant. School bus also offers summers off."}
      ],
      ht:[
        {title:"Dosye pou lokatè ou deja pwouve ou",detail:"Dosye kondwit pwòp + èdtan dokimante = kandida CDL fò",desc:"Manadjè anbochaj CDL konnen chofè pou lokatè ak dosye pwòp yo se risk ki pi ba."},
        {title:"Pale ak distri lekòl lokal ou anvan tout",detail:"Rele biwo transpò Boston Public Schools (617-635-9000)",desc:"Anpil distri patwone tout pwosesis CDL pou chofè otobis lekòl — fòmasyon, tès, ak lisans — paske yo bezwen chofè anpil."},
        {title:"Jwenn egzamen medikal DOT ak CLP ou",detail:"Tès konesans $30 · CLP valab 180 jou · 14 jou minimum anvan tès konpetans",desc:"Etidye Manyèl CDL mas 2025 gratis nan mass.gov. Jwenn CLP ou premye jou fòmasyon an."},
        {title:"Fini Fòmasyon Chofè Nivo Antre (ELDT)",detail:"Lekòl anrejistre FMCSA · ~100 èdtan pou Klas B · orè wikenn disponib",desc:"Mande MassHire (617) 626-6800 sou sibvansyon Workforce Training Fund."},
        {title:"Pase tès konpetans CDL la epi kòmanse touche plis",detail:"Medyàn Klas B ~$57,440/ane + avantaj + pansyon vs. pou lokatè ~$35K-$42K",desc:"Diferans revni, estabilite, ak avantaj ant pou lokatè ak otobis lekòl enpòtan anpil."}
      ],
      fr:[
        {title:"Votre dossier VTC vous prouve déjà",detail:"Casier propre + heures documentées = candidat CDL solide",desc:"Les recruteurs CDL savent que les chauffeurs VTC avec casier propre sont moins risqués."},
        {title:"Parlez d'abord à votre district scolaire",detail:"Appelez Boston Public Schools (617-635-9000)",desc:"Beaucoup de districts sponsorisent entièrement la formation, le test et la licence d'autobus scolaire."},
        {title:"Obtenez votre examen médical DOT et votre CLP",detail:"Test à 30 $ · CLP valide 180 jours · délai minimum 14 jours",desc:"Étudiez le manuel CDL gratuit de mars 2025 sur mass.gov."},
        {title:"Complétez la formation ELDT",detail:"École FMCSA · ~100 heures Classe B · horaires de fin de semaine",desc:"Demandez à MassHire (617) 626-6800 des subventions."},
        {title:"Réussissez l'examen CDL et gagnez plus",detail:"Médiane Classe B ~57 440 $/an + avantages vs. VTC ~35K-42K$",desc:"L'écart de revenus et d'avantages entre VTC et autobus scolaire est significatif."}
      ],
      es:[
        {title:"Tu historial de transporte ya te avala",detail:"Historial limpio + horas documentadas = candidato CDL sólido",desc:"Los reclutadores CDL saben que los conductores con historial limpio son de menor riesgo."},
        {title:"Habla primero con tu distrito escolar",detail:"Llama a Boston Public Schools (617-635-9000)",desc:"Muchos distritos patrocinan completamente la formación, el examen y la licencia de autobús escolar."},
        {title:"Obtén tu examen médico DOT y tu CLP",detail:"Examen $30 · CLP válido 180 días · espera mínima 14 días",desc:"Estudia el Manual CDL gratuito de marzo 2025 en mass.gov."},
        {title:"Completa la formación ELDT",detail:"Escuela FMCSA · ~100 horas Clase B · horarios de fin de semana",desc:"Pregunta a MassHire (617) 626-6800 sobre subvenciones."},
        {title:"Pasa el examen CDL y empieza a ganar más",detail:"Mediano Clase B ~$57,440/año + beneficios vs. transporte ~$35K-$42K",desc:"La brecha de ingresos y beneficios entre transporte y autobús escolar es significativa."}
      ],
      pt:[
        {title:"Seu histórico de transporte já comprova você",detail:"Histórico limpo + horas documentadas = candidato CDL sólido",desc:"Os recrutadores CDL sabem que motoristas com histórico limpo são de menor risco."},
        {title:"Fale primeiro com seu distrito escolar",detail:"Ligue para Boston Public Schools (617-635-9000)",desc:"Muitos distritos patrocinam completamente o treinamento, teste e licença de ônibus escolar."},
        {title:"Obtenha seu exame médico DOT e sua CLP",detail:"Teste US$30 · CLP válida 180 dias · espera mínima 14 dias",desc:"Estude o Manual CDL gratuito de março de 2025 em mass.gov."},
        {title:"Complete o treinamento ELDT",detail:"Escola FMCSA · ~100 horas Classe B · horários de fim de semana",desc:"Pergunte ao MassHire (617) 626-6800 sobre subsídios."},
        {title:"Passe no exame CDL e comece a ganhar mais",detail:"Mediano Classe B ~US$57.440/ano + benefícios vs. transporte ~US$35K-42K",desc:"A diferença de renda e benefícios entre transporte e ônibus escolar é significativa."}
      ]
    },
    firstAction:{
      en:"This week: call the transportation office of <strong>Boston Public Schools</strong> (617-635-9000) and 2-3 nearby districts. Ask if they sponsor CDL training for school bus drivers. One call could mean you pay nothing.",
      ht:"Semèn sa a: rele biwo transpò <strong>Boston Public Schools</strong> (617-635-9000) ak 2-3 distri toupre. Mande si yo patwone fòmasyon CDL pou chofè otobis lekòl.",
      fr:"Cette semaine : appelez <strong>Boston Public Schools</strong> (617-635-9000) et 2-3 districts voisins. Demandez s'ils sponsorisent la formation CDL pour les conducteurs d'autobus scolaires.",
      es:"Esta semana: llama a <strong>Boston Public Schools</strong> (617-635-9000) y 2-3 distritos cercanos. Pregunta si patrocinan la formación CDL para conductores de autobús escolar.",
      pt:"Esta semana: ligue para <strong>Boston Public Schools</strong> (617-635-9000) e 2-3 distritos próximos. Pergunte se patrocinam o treinamento CDL para motoristas de ônibus escolar."
    },
    disclaimer:{
      en:"Income comparisons use BLS medians and typical rideshare earnings. Confirm fees and timelines with RMV (857-368-8000) before starting.",
      ht:"Konparezon revni sèvi ak medyàn BLS ak revni tipik pou lokatè. Konfime frè ak kalandriye ak RMV (857-368-8000) anvan ou kòmanse.",
      fr:"Comparaisons basées sur médianes BLS. Confirmez les frais auprès du RMV (857-368-8000).",
      es:"Comparaciones usando medianas BLS. Confirma los honorarios con el RMV (857-368-8000).",
      pt:"Comparações usando medianas BLS. Confirme taxas com o RMV (857-368-8000)."
    }
  },

  cook:{
    title:{en:"Cook → Supervisor → Chef",ht:"Kizinyè → Sipèvizè → Chèf",fr:"Cuisinier → Superviseur → Chef",es:"Cocinero → Supervisor → Chef",pt:"Cozinheiro → Supervisor → Chef"},
    meta:{en:"BLS + ServSafe certification · Jan 2026",ht:"BLS + sètifikasyon ServSafe · Jan 2026",fr:"BLS + certification ServSafe · jan. 2026",es:"BLS + certificación ServSafe · ene. 2026",pt:"BLS + certificação ServSafe · jan. 2026"},
    badge:{en:"Kitchen time is currency — here is how to cash it in",ht:"Tan kwizin se lajan — men kijan pou ou kèkmaché li",fr:"Le temps en cuisine est une devise — voici comment l'encaisser",es:"El tiempo en cocina es moneda — así es como aprovecharlo",pt:"Tempo na cozinha é moeda — veja como aproveitá-lo"},
    steps:{
      en:[
        {title:"Get your ServSafe Manager certification first",detail:"~$15-$180 · nationally recognized · ask your employer to pay",desc:"ServSafe Manager signals you can run a kitchen safely. Fastest, cheapest credential upgrade. Many restaurants pay for it — ask before paying yourself."},
        {title:"Target the supervisor / line lead role",detail:"First-line food supervisor median: $46,180/yr (BLS May 2025) vs. cook $35,760/yr",desc:"The jump from cook to first-line supervisor is the fastest income move available now, no additional schooling required."},
        {title:"Consider a culinary certificate program",detail:"Bunker Hill CC, Cape Cod CC, Bristol CC all offer culinary arts in MA",desc:"A 1-2 year part-time culinary certificate significantly improves your chances for chef/kitchen management positions. Ask your employer about tuition assistance."},
        {title:"The chef ceiling is real",detail:"Chef and head cook median: $66,700/yr (BLS May 2024) — Boston pays more",desc:"Your immigrant food knowledge is a genuine competitive differentiator in Boston's diverse restaurant market."}
      ],
      ht:[
        {title:"Jwenn sètifikasyon Manadjè ServSafe ou anvan tout",detail:"~$15-$180 · rekonèt nasyonalman · mande anplwayè ou peye",desc:"Manadjè ServSafe montre ou ka jere kwizin an sekirite. Se amelyorasyon kredansyèl ki pi rapid ak pi bon mache."},
        {title:"Vize wòl sipèvizè / chèf liy",detail:"Medyàn sipèvizè manje premye liy: $46,180/ane (BLS Me 2025) vs. kizinyè $35,760/ane",desc:"Soti nan kizinyè rive sipèvizè se mouvman revni ki pi rapid san bezwen etid anplis."},
        {title:"Konsidere yon pwogram sètifika kwizin",detail:"Bunker Hill CC, Cape Cod CC, Bristol CC tout ofri kwizin nan MA",desc:"Yon sètifika kwizin 1-2 ane apre-midi amelyore chans ou pou pòs chèf. Mande anplwayè ou sou asistans ekolaj."},
        {title:"Plafon chèf la reyèl",detail:"Medyàn chèf: $66,700/ane (BLS Me 2024) — Boston peye plis",desc:"Konesans manje imigran ou se yon diferansyatè konpetitif reyèl nan Boston."}
      ],
      fr:[
        {title:"Obtenez d'abord votre certification Manager ServSafe",detail:"~15-180 $ · reconnue nationalement · demandez à votre employeur de payer",desc:"Manager ServSafe signale que vous pouvez gérer une cuisine en sécurité. Beaucoup de restaurants la paient."},
        {title:"Visez le rôle de superviseur / chef de ligne",detail:"Médiane superviseur première ligne : 46 180 $/an (BLS mai 2025)",desc:"Le saut de cuisinier à superviseur est le mouvement de revenus le plus rapide sans études supplémentaires."},
        {title:"Envisagez un programme de certificat culinaire",detail:"Bunker Hill CC, Cape Cod CC, Bristol CC proposent des programmes en MA",desc:"Un certificat culinaire de 1-2 ans à temps partiel améliore vos chances pour des postes de chef."},
        {title:"Le plafond chef est réel",detail:"Médiane chef : 66 700 $/an (BLS mai 2024) — Boston paie plus",desc:"Votre connaissance culinaire immigrante est un vrai avantage différenciateur à Boston."}
      ],
      es:[
        {title:"Obtén primero tu certificación Manager ServSafe",detail:"~$15-$180 · reconocida nacionalmente · pide que tu empleador la pague",desc:"Manager ServSafe señala que puedes gestionar una cocina. Muchos restaurantes la pagan."},
        {title:"Apunta al rol de supervisor / jefe de línea",detail:"Mediano supervisor primera línea: $46,180/año (BLS mayo 2025)",desc:"El salto de cocinero a supervisor es el movimiento de ingresos más rápido sin estudios adicionales."},
        {title:"Considera un programa de certificado culinario",detail:"Bunker Hill CC, Cape Cod CC, Bristol CC ofrecen programas en MA",desc:"Un certificado culinario de 1-2 años a tiempo parcial mejora tus posibilidades para puestos de chef."},
        {title:"El techo del chef es real",detail:"Mediano chef: $66,700/año (BLS mayo 2024) — Boston paga más",desc:"Tu conocimiento culinario inmigrante es una ventaja diferenciadora real en el mercado de Boston."}
      ],
      pt:[
        {title:"Obtenha primeiro sua certificação Manager ServSafe",detail:"~US$15-180 · reconhecida nacionalmente · peça ao empregador que pague",desc:"Manager ServSafe sinaliza que você pode gerenciar uma cozinha. Muitos restaurantes pagam."},
        {title:"Mire o papel de supervisor / líder de linha",detail:"Mediana supervisor primeira linha: US$46.180/ano (BLS maio 2025)",desc:"O salto de cozinheiro a supervisor é o movimento de renda mais rápido sem estudos adicionais."},
        {title:"Considere um programa de certificado culinário",detail:"Bunker Hill CC, Cape Cod CC, Bristol CC oferecem programas em MA",desc:"Um certificado culinário de 1-2 anos em meio período melhora suas chances para cargos de chef."},
        {title:"O teto do chef é real",detail:"Mediana chef: US$66.700/ano (BLS maio 2024) — Boston paga mais",desc:"Seu conhecimento culinário imigrante é uma vantagem diferenciadora real em Boston."}
      ]
    },
    firstAction:{
      en:"This week: ask your manager if the restaurant will pay for <strong>ServSafe Manager certification</strong>. If yes, you upgrade for free. If no, the course is under $180 at servsafe.com.",
      ht:"Semèn sa a: mande manadjè ou si restoran an pral peye pou <strong>sètifikasyon Manadjè ServSafe</strong>. Si wi, ou amelyore gratis. Si non, kou a koute mwens pase $180 nan servsafe.com.",
      fr:"Cette semaine : demandez si le restaurant paiera la <strong>certification Manager ServSafe</strong>. Sinon, le cours coûte moins de 180 $ sur servsafe.com.",
      es:"Esta semana: pregunta si el restaurante pagará la <strong>certificación Manager ServSafe</strong>. Si no, el curso cuesta menos de $180 en servsafe.com.",
      pt:"Esta semana: pergunte se o restaurante pagará pela <strong>certificação Manager ServSafe</strong>. Caso contrário, o curso custa menos de US$180 em servsafe.com."
    },
    disclaimer:{
      en:"Income figures are BLS national medians (May 2024/2025). Actual restaurant pay varies by establishment type and location.",
      ht:"Chif revni yo se medyàn nasyonal BLS (Me 2024/2025). Salè restoran aktyèl varye selon kalite etablisman ak kote.",
      fr:"Les chiffres sont des médianes nationales BLS (mai 2024/2025). Le salaire varie selon le type d'établissement.",
      es:"Las cifras son medianas nacionales BLS (mayo 2024/2025). El salario varía según el tipo de establecimiento.",
      pt:"Os valores são medianas nacionais BLS (maio 2024/2025). O salário varia por tipo de estabelecimento."
    }
  },

  security:{
    title:{en:"Security Guard → Armed / Supervisor → Law Enforcement",ht:"Gadyen Sekirite → Ame / Sipèvizè → Lapolis",fr:"Agent de sécurité → Armé / Superviseur → Forces de l'ordre",es:"Guardia de seguridad → Armado / Supervisor → Aplicación de la ley",pt:"Guarda de segurança → Armado / Supervisor → Aplicação da lei"},
    meta:{en:"Mass. SOMB licensing + BLS · Jan 2026",ht:"Lisans SOMB Mass. + BLS · Jan 2026",fr:"Licence SOMB Mass. + BLS · jan. 2026",es:"Licencia SOMB Mass. + BLS · ene. 2026",pt:"Licença SOMB Mass. + BLS · jan. 2026"},
    badge:{en:"Your guard experience opens several real doors",ht:"Eksperyans gadyen ou ouvè plizyè pòt reyèl",fr:"Votre expérience de garde ouvre plusieurs vraies portes",es:"Tu experiencia como guardia abre varias puertas reales",pt:"Sua experiência como guarda abre várias portas reais"},
    steps:{
      en:[
        {title:"Confirm your unarmed guard license is current",detail:"Mass. SOMB (Security Officers Management Branch) · CORI check required",desc:"Massachusetts requires all private security guards to be licensed through SOMB. Your active license and clean record are your two most important assets."},
        {title:"Next level: armed guard license",detail:"Firearm Safety Training Program required · significantly higher pay",desc:"Armed guards earn notably more in Massachusetts. Ask your employer if they will sponsor the training — many do because it makes you more valuable to them at no cost to you."},
        {title:"Supervisor / shift lead role is available now",detail:"Fastest income move with no additional credentialing",desc:"Clean record + consistent attendance + a few years of experience = internal promotion to shift supervisor. No additional degree needed."},
        {title:"Law enforcement: honest assessment",detail:"Most MA municipal police departments require US citizenship — not permanent residency",desc:"If you have or are on a path to citizenship, a security background is genuinely valued in police applications. If not, focus on the armed/supervisor track. MBTA Transit Police and some campus departments may have different rules — check each directly."}
      ],
      ht:[
        {title:"Konfime lisans gadyen dezame ou aktyèl",detail:"SOMB Mass. · Verifikasyon CORI obligatwa",desc:"Massachusetts mande tout gadyen sekirite prive yo gen lisans atravè SOMB. Lisans aktif ou ak dosye pwòp ou se de pi gwo atou ou."},
        {title:"Pwochen nivo: lisans gadyen ame",detail:"Pwogram Fòmasyon Sekirite Zam obligatwa · salè siyifikativman pi wo",desc:"Mande anplwayè ou si yo pral patwone fòmasyon an — anpil fè sa paske sa fè ou pi presize pou yo."},
        {title:"Wòl sipèvizè / chèf shift disponib kounye a",detail:"Mouvman revni ki pi rapid san bezwen plis kredansyèl",desc:"Dosye pwòp + prezans konsistan + kèk ane eksperyans = pwomosyon entèn rive sipèvizè shift."},
        {title:"Lapolis: evalyasyon onèt",detail:"Pifò depatman polis minisipal MA mande sitwayennete Ameriken",desc:"Si ou gen oswa sou chemen sitwayennete, background sekirite valorize. Si pa, konsantre sou chemen ame/sipèvizè la."}
      ],
      fr:[
        {title:"Confirmez que votre licence de garde non armé est à jour",detail:"SOMB Mass. · Vérification CORI requise",desc:"Votre licence active et votre casier propre sont vos deux atouts les plus importants."},
        {title:"Niveau suivant : licence de garde armé",detail:"Programme de formation aux armes à feu requis · salaire significativement plus élevé",desc:"Demandez à votre employeur s'il sponsorise la formation — beaucoup le font car cela vous rend plus précieux."},
        {title:"Le rôle de superviseur est disponible maintenant",detail:"Mouvement de revenus le plus rapide sans accréditation supplémentaire",desc:"Casier propre + présence constante + expérience = promotion interne."},
        {title:"Forces de l'ordre : évaluation honnête",detail:"La plupart des départements de police du MA exigent la citoyenneté américaine",desc:"Si vous avez ou êtes en voie d'obtenir la citoyenneté, un parcours sécurité est valorisé. Sinon, concentrez-vous sur la voie armé/superviseur."}
      ],
      es:[
        {title:"Confirma que tu licencia de guardia no armado está vigente",detail:"SOMB Mass. · Verificación CORI requerida",desc:"Tu licencia activa y historial limpio son tus dos activos más importantes."},
        {title:"Siguiente nivel: licencia de guardia armado",detail:"Programa de Capacitación en Armas de Fuego requerido · pago significativamente mayor",desc:"Pregunta a tu empleador si patrocinará la formación — muchos lo hacen porque te hace más valioso."},
        {title:"El rol de supervisor está disponible ahora",detail:"Movimiento de ingresos más rápido sin credenciales adicionales",desc:"Historial limpio + asistencia constante + experiencia = promoción interna."},
        {title:"Aplicación de la ley: evaluación honesta",detail:"La mayoría de los departamentos de policía de MA requieren ciudadanía estadounidense",desc:"Si tienes o estás en camino a la ciudadanía, un historial en seguridad es valorado. Si no, enfócate en la vía armado/supervisor."}
      ],
      pt:[
        {title:"Confirme que sua licença de guarda não armado está atual",detail:"SOMB Mass. · Verificação CORI necessária",desc:"Sua licença ativa e histórico limpo são seus dois ativos mais importantes."},
        {title:"Próximo nível: licença de guarda armado",detail:"Programa de Treinamento em Armas de Fogo necessário · salário significativamente maior",desc:"Pergunte ao seu empregador se patrocinará o treinamento — muitos o fazem porque isso o torna mais valioso."},
        {title:"O papel de supervisor está disponível agora",detail:"Movimento de renda mais rápido sem credenciais adicionais",desc:"Histórico limpo + presença consistente + experiência = promoção interna."},
        {title:"Aplicação da lei: avaliação honesta",detail:"A maioria dos departamentos de polícia de MA exige cidadania americana",desc:"Se você tem ou está no caminho para a cidadania, um histórico em segurança é valorizado. Caso contrário, foque na via armado/supervisor."}
      ]
    },
    firstAction:{
      en:"This week: ask your employer if they will sponsor your <strong>armed guard training and licensing</strong> — it benefits them and costs you nothing if they agree.",
      ht:"Semèn sa a: mande anplwayè ou si yo pral patwone <strong>fòmasyon ak lisans gadyen ame</strong> ou — sa benefisye yo epi koute ou anyen si yo dakò.",
      fr:"Cette semaine : demandez à votre employeur s'il sponsorisera votre <strong>formation et licence de garde armé</strong>.",
      es:"Esta semana: pregunta a tu empleador si patrocinará tu <strong>formación y licencia de guardia armado</strong>.",
      pt:"Esta semana: pergunte ao seu empregador se patrocinará seu <strong>treinamento e licença de guarda armado</strong>."
    },
    disclaimer:{
      en:"Licensing requirements via Mass. SOMB. Law enforcement citizenship requirements are typical for most MA municipal departments as of Jan 2026 but vary — always verify directly with the specific department.",
      ht:"Egzijans lisans via SOMB Mass. Egzijans sitwayennete lapolis tipik men varye — toujou verifye dirèkteman ak depatman espesifik la.",
      fr:"Exigences via SOMB. Les exigences de citoyenneté varient — vérifiez toujours directement.",
      es:"Requisitos via SOMB. Los requisitos de ciudadanía varían — siempre verifica directamente.",
      pt:"Requisitos via SOMB. Os requisitos de cidadania variam — sempre verifique diretamente."
    }
  },

  para:{
    title:{en:"Paraprofessional → Licensed Teacher",ht:"Parapwofesyonèl → Pwofesè Lisansye",fr:"Paraprofessionnel → Enseignant licencié",es:"Paraprofesional → Maestro con licencia",pt:"Paraprofissional → Professor licenciado"},
    meta:{en:"Mass. DESE · Jan 2026",ht:"DESE Mass. · Jan 2026",fr:"DESE Mass. · jan. 2026",es:"DESE Mass. · ene. 2026",pt:"DESE Mass. · jan. 2026"},
    badge:{en:"Your classroom experience is a real head start — MA teachers average $92K/yr",ht:"Eksperyans klas ou se yon avans reyèl — pwofesè MA fè mwayèn $92K/ane",fr:"Votre expérience en classe est une vraie avance — enseignants MA ~92 000 $/an",es:"Tu experiencia en el aula es una ventaja real — maestros de MA promedio $92K/año",pt:"Sua experiência em sala de aula é uma vantagem real — professores de MA média US$92K/ano"},
    steps:{
      en:[
        {title:"Find out if your district pays for teacher licensing coursework",detail:"Ask before spending a dollar — Boston, Springfield, Worcester, Lowell all have para-to-teacher programs",desc:"Ask your principal or HR directly: 'Does this district help paras become licensed teachers?' The answer determines your entire next move."},
        {title:"Meet the bachelor's degree requirement",detail:"All MA teaching licenses require a bachelor's degree",desc:"Foreign bachelor's degree? Get a credential evaluation — it may count directly. No degree? UMass Online and Salem State have affordable completion options."},
        {title:"Pass the MTEL Communication & Literacy test + your subject test",detail:"Register at elar.doe.mass.edu · Regional Assistance Centers offer MTEL prep vouchers",desc:"Your daily classroom work gives you context test-prep students don't have. Take Communication and Literacy first — it's the gate."},
        {title:"Complete the SEI endorsement (core subject teachers)",detail:"Sheltered English Immersion endorsement — DESE-approved online courses available",desc:"As a bilingual para, you may already practice what the SEI endorsement formalizes."},
        {title:"Apply for Provisional or Initial license through ELAR",detail:"Provisional license lets you start teaching while completing remaining requirements",desc:"You don't have to complete everything before you can start teaching. Ask DESE which requirements you can fulfill while working."}
      ],
      ht:[
        {title:"Jwenn si distri ou peye pou kou lisans anseyman",detail:"Mande anvan ou depanse yon dola — Boston, Springfield, Worcester, Lowell gen pwogram para-a-pwofesè",desc:"Mande direktè ou oswa RH dirèkteman: 'Èske distri sa a ede para yo vin pwofesè lisansye?' Repons lan detèmine tout pwochen etap ou."},
        {title:"Satisfè egzijans diplòm bachelor",detail:"Tout lisans anseyman MA mande yon diplòm bachelor",desc:"Diplòm bachelor etranje? Jwenn yon evalyasyon kredansyèl — li ka konte dirèkteman. Pa gen diplòm? UMass Online ak Salem State ofri opsyon abòdab."},
        {title:"Pase tès MTEL Communication & Literacy + tès matyè ou",detail:"Enskri nan elar.doe.mass.edu · Sant Asistans Rejyonal ofri bon preparasyon MTEL",desc:"Travay klas chak jou ou ba ou kontèks ke etidyan preparasyon tès pa gen. Pase Communication and Literacy an premye."},
        {title:"Fini andòsman SEI (pwofesè matyè debaz)",detail:"Andòsman SEI — kou sou entènèt apwouve DESE disponib",desc:"Kòm yon para bileng, ou ka deja pratike sa andòsman SEI a fòmalize."},
        {title:"Aplike pou lisans Pwovizwa oswa Inisyal atravè ELAR",detail:"Lisans Pwovizwa pèmèt ou kòmanse anseye pandan w ap konplete rès egzijans yo",desc:"Mande DESE ki egzijans ou ka konplete pandan w ap anseye."}
      ],
      fr:[
        {title:"Vérifiez si votre district paie les cours de licence d'enseignement",detail:"Demandez avant de dépenser — Boston, Springfield, Worcester, Lowell ont des programmes para-vers-enseignant",desc:"Demandez directement à votre directeur ou RH. La réponse détermine toute votre prochaine action."},
        {title:"Remplissez l'exigence de baccalauréat",detail:"Toutes les licences MA exigent un baccalauréat",desc:"Diplôme étranger ? Obtenez une évaluation. Pas de diplôme ? UMass Online et Salem State ont des options abordables."},
        {title:"Réussissez le MTEL Communication & Literacy + votre test de matière",detail:"Inscrivez-vous sur elar.doe.mass.edu · Centres d'Assistance Régionale",desc:"Votre travail quotidien en classe vous donne un avantage sur les étudiants en préparation."},
        {title:"Complétez l'endossement SEI (matières principales)",detail:"Cours DESE en ligne disponibles",desc:"En tant que para bilingue, vous pratiquez peut-être déjà ce que le SEI formalise."},
        {title:"Demandez une licence Provisoire ou Initiale via ELAR",detail:"La licence Provisoire vous permet d'enseigner tout en complétant les exigences",desc:"Demandez au DESE quelles exigences vous pouvez remplir pendant que vous travaillez."}
      ],
      es:[
        {title:"Descubre si tu distrito paga cursos de licencia de maestro",detail:"Pregunta antes de gastar — Boston, Springfield, Worcester, Lowell tienen programas para-a-maestro",desc:"Pregunta a tu director o RRHH directamente. La respuesta determina todo tu próximo movimiento."},
        {title:"Cumple el requisito de licenciatura",detail:"Todas las licencias de MA requieren licenciatura",desc:"¿Licenciatura extranjera? Obtén una evaluación de credenciales. ¿Sin licenciatura? UMass Online y Salem State tienen opciones asequibles."},
        {title:"Pasa el MTEL Communication & Literacy + tu examen de materia",detail:"Regístrate en elar.doe.mass.edu · Centros de Asistencia Regional",desc:"Tu trabajo diario en el aula te da contexto que los estudiantes de preparación no tienen."},
        {title:"Completa el endoso SEI (materias principales)",detail:"Cursos DESE en línea disponibles",desc:"Como para bilingüe, puede que ya practiques lo que el SEI formaliza."},
        {title:"Solicita una licencia Provisional o Inicial a través de ELAR",detail:"La licencia Provisional te permite enseñar mientras completas los requisitos",desc:"Pregunta al DESE qué requisitos puedes cumplir mientras trabajas."}
      ],
      pt:[
        {title:"Descubra se seu distrito paga cursos de licença de professor",detail:"Pergunte antes de gastar — Boston, Springfield, Worcester, Lowell têm programas para-a-professor",desc:"Pergunte ao seu diretor ou RH diretamente. A resposta determina todo o seu próximo passo."},
        {title:"Cumpra o requisito de bacharelado",detail:"Todas as licenças de MA exigem bacharelado",desc:"Bacharelado estrangeiro? Obtenha uma avaliação de credenciais. Sem diploma? UMass Online e Salem State têm opções acessíveis."},
        {title:"Passe no MTEL Communication & Literacy + seu exame de matéria",detail:"Registre-se em elar.doe.mass.edu · Centros de Assistência Regional",desc:"Seu trabalho diário em sala de aula lhe dá contexto que estudantes de preparação não têm."},
        {title:"Complete o endosso SEI (matérias principais)",detail:"Cursos DESE online disponíveis",desc:"Como para bilíngue, você pode já praticar o que o SEI formaliza."},
        {title:"Solicite uma licença Provisória ou Inicial pelo ELAR",detail:"A licença Provisória permite ensinar enquanto completa os requisitos",desc:"Pergunte ao DESE quais requisitos você pode cumprir enquanto trabalha."}
      ]
    },
    firstAction:{
      en:"This week: ask your principal or HR directly — <strong>\"Does this district help paraprofessionals become licensed teachers?\"</strong> That answer determines your entire next move.",
      ht:"Semèn sa a: mande direktè ou oswa RH dirèkteman — <strong>\"Èske distri sa a ede parapwofesyonèl yo vin pwofesè lisansye?\"</strong> Repons sa a detèmine tout pwochen etap ou.",
      fr:"Cette semaine : demandez à votre directeur ou RH — <strong>\"Ce district aide-t-il les parapros à devenir enseignants licenciés ?\"</strong>",
      es:"Esta semana: pregunta a tu director o RRHH — <strong>\"¿Este distrito ayuda a los paraprofesionales a convertirse en maestros con licencia?\"</strong>",
      pt:"Esta semana: pergunte ao seu diretor ou RH — <strong>\"Este distrito ajuda paraprofissionais a se tornarem professores licenciados?\"</strong>"
    },
    disclaimer:{
      en:"Requirements based on published DESE Massachusetts Office of Educator Licensure rules. Always confirm with DESE Licensure Call Center (781-338-6600) before enrolling in coursework.",
      ht:"Egzijans baze sou règ ofisyèl DESE Massachusetts. Toujou konfime ak DESE Licensure Call Center (781-338-6600) anvan ou enskri nan kou.",
      fr:"Exigences basées sur les règles DESE publiées. Confirmez avec le DESE Licensure Call Center (781-338-6600).",
      es:"Requisitos basados en las reglas publicadas del DESE. Confirma con el DESE Licensure Call Center (781-338-6600).",
      pt:"Requisitos baseados nas regras publicadas do DESE. Confirme com o DESE Licensure Call Center (781-338-6600)."
    }
  },

  cosmo:{
    title:{en:"Cosmetology Student → Licensed Stylist → Salon Owner",ht:"Etidyan Kosmetoloji → Estilis Lisansye → Pwopriyetè Salon",fr:"Étudiant cosmétologie → Styliste licencié → Propriétaire de salon",es:"Estudiante cosmetología → Estilista con licencia → Dueño de salón",pt:"Estudante cosmetologia → Estilista licenciado → Dono de salão"},
    meta:{en:"Mass. Board of Cosmetology and Barbering · Jan 2026",ht:"Konsèy Kosmetoloji ak Kwafè Mass. · Jan 2026",fr:"Board of Cosmetology and Barbering du Mass. · jan. 2026",es:"Board of Cosmetology and Barbering de Mass. · ene. 2026",pt:"Board of Cosmetology and Barbering de Mass. · jan. 2026"},
    badge:{en:"You are already on the path — here is how to accelerate it",ht:"Ou deja sou chemen an — men kijan pou akselerase li",fr:"Vous êtes déjà sur la voie — voici comment l'accélérer",es:"Ya estás en el camino — así es como acelerarlo",pt:"Você já está no caminho — veja como acelerá-lo"},
    steps:{
      en:[
        {title:"Track your hours precisely and keep your own records",detail:"1,000 hours required · your school submits completion to the Board",desc:"Don't rely on your school to track your progress. Keep your own log per subject area — you'll need it if there's ever a dispute."},
        {title:"The practical exam was eliminated — written test only",detail:"Written theory exam only since October 2023 · via PSI Testing",desc:"Massachusetts eliminated the hands-on practical exam in October 2023. Only the written theory test (theory, anatomy, chemistry, sanitation, MA law) stands between you and your license."},
        {title:"Build your clientele before you graduate",detail:"Start on Instagram and TikTok now — even as a student",desc:"Stylists who earn above average in their first year started building an audience before they were licensed. Your language community connections are organic reach no marketing budget can buy."},
        {title:"Licensed: booth rental vs. salon employment",detail:"Booth rental: higher ceiling · Employment: stable with benefits",desc:"Start employed to build your client book, then consider booth rental once you have 100+ regulars."},
        {title:"The owner ceiling is real and accessible",detail:"MA Salon Owner License required to open your own salon",desc:"Immigrant-owned salons serving specific language communities have loyal, referral-driven clientele. A real business model, not just a dream."}
      ],
      ht:[
        {title:"Swiv èdtan ou yo ak presizyon epi kenbe pwòp dosye ou",detail:"1,000 èdtan obligatwa · lekòl ou soumèt konpletman bay Konsèy la",desc:"Pa konte sou lekòl ou pou swiv pwogrè ou. Kenbe pwòp jounal ou pa domèn matyè."},
        {title:"Egzamen pratik la elimine — sèlman tès ekri",detail:"Egzamen teyori ekri sèlman depi oktòb 2023 · atravè PSI Testing",desc:"Massachusetts elimine egzamen pratik la nan oktòb 2023. Sèlman tès teyori ekri a rete ant ou ak lisans ou."},
        {title:"Bati klyantèl ou anvan ou gradye",detail:"Kòmanse sou Instagram ak TikTok kounye a — menm kòm etidyan",desc:"Estilis ki touche pi wo pase mwayèn kòmanse bati odyans yo anvan yo te gen lisans. Koneksyon kominote lang ou se pòte òganik."},
        {title:"Lisansye: lwaye kabinèt vs. anplwa salon",detail:"Lwaye kabinèt: plafon pi wo · Anplwa: estab ak avantaj",desc:"Kòmanse anplwaye pou bati klyantèl ou, apre sa konsidere lwaye kabinèt ak 100+ kliyan regilye."},
        {title:"Plafon pwopriyetè a reyèl epi aksesib",detail:"Lisans Pwopriyetè Salon MA obligatwa pou ouvè pwòp salon ou",desc:"Salon ki posede pa imigran k ap sèvi kominote lang espesifik gen klyantèl fidèl driglè pa referans."}
      ],
      fr:[
        {title:"Suivez vos heures précisément et conservez votre propre documentation",detail:"1 000 heures requises · votre école soumet la complétion au Board",desc:"Ne comptez pas sur votre école pour suivre vos progrès. Tenez votre propre journal par domaine."},
        {title:"L'examen pratique a été éliminé — test écrit seulement",detail:"Examen théorique écrit uniquement depuis octobre 2023 · via PSI Testing",desc:"Le Massachusetts a éliminé l'examen pratique en octobre 2023. Seul le test théorique écrit reste."},
        {title:"Construisez votre clientèle avant de diplômer",detail:"Commencez sur Instagram et TikTok maintenant",desc:"Commencez à construire un public avant votre licence. Vos connexions communautaires sont une portée organique."},
        {title:"Licencié : location de box vs. emploi en salon",detail:"Location de box : plafond plus élevé · Emploi : stable avec avantages",desc:"Commencez employé pour développer votre clientèle, puis envisagez la location de box."},
        {title:"Le plafond propriétaire est réel et accessible",detail:"Licence de propriétaire de salon MA requise",desc:"Les salons de propriétaires immigrants servant des communautés linguistiques ont une clientèle très fidèle."}
      ],
      es:[
        {title:"Registra tus horas con precisión y conserva tu propia documentación",detail:"1,000 horas requeridas · tu escuela envía la finalización al Board",desc:"No te fíes de tu escuela para seguir tu progreso. Mantén tu propio registro por área temática."},
        {title:"El examen práctico fue eliminado — solo test escrito",detail:"Examen de teoría escrita únicamente desde octubre 2023 · vía PSI Testing",desc:"Massachusetts eliminó el examen práctico en octubre 2023. Solo queda el test de teoría escrita."},
        {title:"Construye tu clientela antes de graduarte",detail:"Comienza en Instagram y TikTok ahora",desc:"Empieza a construir una audiencia antes de tu licencia. Tus conexiones comunitarias son alcance orgánico."},
        {title:"Licenciado: renta de cabina vs. empleo en salón",detail:"Renta de cabina: techo más alto · Empleo: estable con beneficios",desc:"Comienza empleado para construir tu clientela, luego considera la renta de cabina."},
        {title:"El techo del propietario es real y accesible",detail:"Licencia de Propietario de Salón MA requerida",desc:"Los salones de propietarios inmigrantes que sirven a comunidades lingüísticas tienen clientela muy leal."}
      ],
      pt:[
        {title:"Registre suas horas com precisão e mantenha sua própria documentação",detail:"1.000 horas necessárias · sua escola envia a conclusão ao Board",desc:"Não confie que sua escola acompanhe seu progresso. Mantenha seu próprio registro por área temática."},
        {title:"O exame prático foi eliminado — apenas teste escrito",detail:"Exame de teoria escrita apenas desde outubro 2023 · via PSI Testing",desc:"Massachusetts eliminou o exame prático em outubro de 2023. Apenas o teste de teoria escrita permanece."},
        {title:"Construa sua clientela antes de se formar",detail:"Comece no Instagram e TikTok agora",desc:"Comece a construir um público antes da sua licença. Suas conexões comunitárias são alcance orgânico."},
        {title:"Licenciado: aluguel de cabine vs. emprego em salão",detail:"Aluguel de cabine: teto mais alto · Emprego: estável com benefícios",desc:"Comece empregado para construir sua clientela, depois considere aluguel de cabine."},
        {title:"O teto do proprietário é real e acessível",detail:"Licença de Proprietário de Salão MA necessária",desc:"Salões de proprietários imigrantes que servem comunidades linguísticas têm clientela muito fiel."}
      ]
    },
    firstAction:{
      en:"This week: open a dedicated Instagram or TikTok for your cosmetology work and start posting now. Build your audience before your license — your first day as a licensed stylist will be busier than most.",
      ht:"Semèn sa a: ouvè yon Instagram oswa TikTok dedye pou travay kosmetoloji ou epi kòmanse poste kounye a. Bati odyans ou anvan lisans — premye jou ou pral pi okipe pase pifò.",
      fr:"Cette semaine : ouvrez un Instagram ou TikTok dédié et commencez à publier maintenant. Construisez votre audience avant votre licence.",
      es:"Esta semana: abre un Instagram o TikTok dedicado a tu trabajo y empieza a publicar ahora. Construye tu audiencia antes de tu licencia.",
      pt:"Esta semana: abra um Instagram ou TikTok dedicado ao seu trabalho e comece a postar agora. Construa sua audiência antes da licença."
    },
    disclaimer:{
      en:"The practical exam elimination was confirmed effective October 2023. Confirm current testing format with the Board (cosmetologyandbarberingboard@mass.gov) before your exam date.",
      ht:"Eliminasyon egzamen pratik la konfime efikas oktòb 2023. Konfime fòma tès aktyèl la ak Konsèy la anvan dat egzamen ou.",
      fr:"L'élimination de l'examen pratique a été confirmée en octobre 2023. Confirmez le format avec le Board.",
      es:"La eliminación del examen práctico fue confirmada en octubre 2023. Confirma el formato con el Board.",
      pt:"A eliminação do exame prático foi confirmada em outubro de 2023. Confirme o formato com o Board."
    }
  },

  laborer:{
    title:{en:"Construction Laborer → Apprenticeship → Journeyman",ht:"Travayè Konstriksyon → Apwantisaj → Konpagnon",fr:"Ouvrier de construction → Apprentissage → Compagnon",es:"Trabajador de construcción → Aprendizaje → Oficial",pt:"Trabalhador de construção → Aprendizagem → Oficial"},
    meta:{en:"Mass. OSHA + IBEW / UA apprenticeship programs · Jan 2026",ht:"OSHA Mass. + pwogram apwantisaj IBEW / UA · Jan 2026",fr:"OSHA Mass. + programmes d'apprentissage · jan. 2026",es:"OSHA Mass. + programas de aprendizaje · ene. 2026",pt:"OSHA Mass. + programas de aprendizagem · jan. 2026"},
    badge:{en:"Your site time is not starting over — it is your foundation",ht:"Tan chantye ou pa kòmanse soti nan zewo — se fondasyon ou",fr:"Votre temps sur chantier est votre fondation",es:"Tu tiempo en obra es tu fundamento — no es empezar de cero",pt:"Seu tempo em obra é sua fundação — não é começar do zero"},
    steps:{
      en:[
        {title:"Get your OSHA 10 certification first",detail:"10-hour course · ~$30-$60 · available in Spanish and Portuguese · online",desc:"OSHA 10 is the baseline safety credential for construction in Massachusetts. Available in Spanish and Portuguese. One day, nearly free, immediately signals professionalism to every employer and foreman."},
        {title:"Identify which trade matches your current site work best",detail:"Electrician · Plumber · HVAC · Carpenter · Ironworker · Equipment Operator",desc:"Your laborer experience overlaps most with one or two specific trades. Match what you already do on site to the apprenticeship that would credit it most."},
        {title:"Apply to a registered union apprenticeship program",detail:"IBEW Local 103 (electrical) · UA Local 12 (plumbing) · NERCC (carpenters) · paid from day one",desc:"Union apprenticeships in Massachusetts are structured, paid from day one, and include free job training — no upfront tuition. Apprentices start at 40-50% of journeyman scale and step up each year. Foreign construction experience may qualify for credit."},
        {title:"Earn while you learn — 4-5 years to journeyman",detail:"Journeyman electrician median $62,350/yr · Plumber $72,170/yr (BLS 2024/2025)",desc:"Starting at ~$44K/yr and stepping up each year is real income while learning. The earn-while-you-learn model is the key advantage over community college."},
        {title:"Journeyman → Master license → Foreman / your own crew",detail:"Master license required to pull permits and run your own crew in MA",desc:"From journeyman, the Master license test opens the path to construction supervisor, project manager, and eventually your own contracting business."}
      ],
      ht:[
        {title:"Jwenn sètifikasyon OSHA 10 ou anvan tout",detail:"Kou 10 èdtan · ~$30-$60 · disponib an Panyòl ak Pòtigè · sou entènèt",desc:"OSHA 10 se kredansyèl sekirite debaz pou konstriksyon nan Massachusetts. Yon jou, prèske gratis, imedyatman siyal pwofesonalis bay chak anplwayè ak kontrèmèt."},
        {title:"Idantifye ki metye ki matche ak travay chantye aktyèl ou pi bon",detail:"Elektrisyen · Plonbye · HVAC · Chapantye · Fètaivèr · Operatè Ekipman",desc:"Eksperyans travayè ou chevauchè plis ak youn oswa de metye espesifik. Matche sa ou deja fè ak apwantisaj ki ta kreye li plis."},
        {title:"Aplike pou yon pwogram apwantisaj inyon anrejistre",detail:"IBEW Local 103 (elektrik) · UA Local 12 (plonbri) · NERCC (chapantye) · peye soti premye jou",desc:"Apwantisaj inyon estrikturasyon, peye soti depi premye jou, san ekolaj davans. Apwanti kòmanse nan 40-50% echèl konpagnon."},
        {title:"Touche pandan w aprann — 4-5 ane rive konpagnon",detail:"Medyàn elektrisyen konpagnon $62,350/ane · Plonbye $72,170/ane (BLS 2024/2025)",desc:"Kòmanse nan ~$44K/ane epi monte chak ane se revni reyèl pandan w aprann."},
        {title:"Konpagnon → Lisans Mèt → Kontrèmèt / pwòp ekip ou",detail:"Lisans Mèt obligatwa pou tire pèmi ak dirije pwòp ekip ou nan MA",desc:"Apre konpagnon, Lisans Mèt ouvè chemen rive sipèvizè konstriksyon ak pwòp biznis kontra ou."}
      ],
      fr:[
        {title:"Obtenez d'abord votre certification OSHA 10",detail:"Cours de 10 heures · ~30-60 $ · disponible en espagnol et portugais · en ligne",desc:"L'OSHA 10 est l'accréditation de sécurité de base. Disponible en espagnol et portugais. Un jour, presque gratuit."},
        {title:"Identifiez quel métier correspond le mieux à votre travail actuel",detail:"Électricien · Plombier · CVC · Charpentier · Ferronnier · Opérateur",desc:"Votre expérience se chevauche le plus avec un ou deux métiers spécifiques."},
        {title:"Postulez à un programme d'apprentissage syndical enregistré",detail:"IBEW Local 103 · UA Local 12 · NERCC · payé dès le premier jour",desc:"Apprentissages structurés, payés dès le premier jour, sans frais de scolarité initiaux. Commencent à 40-50% de l'échelle compagnon."},
        {title:"Gagnez en apprenant — 4-5 ans jusqu'au compagnon",detail:"Médiane électricien compagnon 62 350 $/an · Plombier 72 170 $/an (BLS 2024/2025)",desc:"Commencer à ~44K$/an et progresser chaque année — c'est un revenu réel pendant l'apprentissage."},
        {title:"Compagnon → Licence Maître → Contremaître / votre propre équipe",detail:"Licence Maître requise pour obtenir des permis en MA",desc:"Ouvre le chemin vers superviseur de construction, directeur de projet, et votre propre entreprise."}
      ],
      es:[
        {title:"Obtén primero tu certificación OSHA 10",detail:"Curso de 10 horas · ~$30-$60 · disponible en español y portugués · en línea",desc:"OSHA 10 es la credencial de seguridad básica. Disponible en español y portugués. Un día, casi gratis."},
        {title:"Identifica qué oficio corresponde mejor a tu trabajo actual",detail:"Electricista · Plomero · HVAC · Carpintero · Ironworker · Operador",desc:"Tu experiencia se superpone más con uno o dos oficios específicos."},
        {title:"Aplica a un programa de aprendizaje sindical registrado",detail:"IBEW Local 103 · UA Local 12 · NERCC · pagado desde el primer día",desc:"Aprendizajes estructurados, pagados desde el primer día, sin matrícula inicial. Empiezan al 40-50% de la escala de oficial."},
        {title:"Gana mientras aprendes — 4-5 años hasta oficial",detail:"Mediano electricista oficial $62,350/año · Plomero $72,170/año (BLS 2024/2025)",desc:"Empezar en ~$44K/año y subir cada año es ingreso real mientras aprendes."},
        {title:"Oficial → Licencia Maestro → Capataz / tu propio equipo",detail:"Licencia Maestro requerida para sacar permisos en MA",desc:"Abre el camino hacia supervisor de construcción, gerente de proyecto y tu propio negocio."}
      ],
      pt:[
        {title:"Obtenha sua certificação OSHA 10 primeiro",detail:"Curso de 10 horas · ~US$30-60 · disponível em espanhol e português · online",desc:"OSHA 10 é a credencial de segurança básica. Disponível em espanhol e português. Um dia, quase de graça."},
        {title:"Identifique qual ofício corresponde melhor ao seu trabalho atual",detail:"Eletricista · Encanador · HVAC · Carpinteiro · Ferreiro · Operador",desc:"Sua experiência se sobrepõe mais a um ou dois ofícios específicos."},
        {title:"Candidate-se a um programa de aprendizagem sindical registrado",detail:"IBEW Local 103 · UA Local 12 · NERCC · pago desde o primeiro dia",desc:"Aprendizados estruturados, pagos desde o primeiro dia, sem mensalidade inicial. Começam em 40-50% da escala de oficial."},
        {title:"Ganhe enquanto aprende — 4-5 anos até oficial",detail:"Mediana eletricista oficial US$62.350/ano · Encanador US$72.170/ano (BLS 2024/2025)",desc:"Começar em ~US$44K/ano e subir a cada ano é renda real enquanto aprende."},
        {title:"Oficial → Licença Mestre → Mestre de obras / sua própria equipe",detail:"Licença Mestre necessária para tirar alvarás em MA",desc:"Abre o caminho para supervisor de construção, gerente de projeto e seu próprio negócio."}
      ]
    },
    firstAction:{
      en:"This week: get your <strong>OSHA 10 certification</strong> online at 360training.com (~$30-$60, available in Spanish and Portuguese). It takes one day and immediately signals professionalism to every employer and foreman you work with.",
      ht:"Semèn sa a: jwenn <strong>sètifikasyon OSHA 10</strong> ou sou entènèt nan 360training.com (~$30-$60, disponib an Panyòl ak Pòtigè). Li pran yon jou epi imedyatman siyal pwofesonalis.",
      fr:"Cette semaine : obtenez votre <strong>certification OSHA 10</strong> en ligne sur 360training.com (~30-60 $, disponible en espagnol et portugais). Prend un jour.",
      es:"Esta semana: obtén tu <strong>certificación OSHA 10</strong> en línea en 360training.com (~$30-$60, disponible en español y portugués). Toma un día.",
      pt:"Esta semana: obtenha sua <strong>certificação OSHA 10</strong> online em 360training.com (~US$30-60, disponível em espanhol e português). Leva um dia."
    },
    disclaimer:{
      en:"Apprenticeship programs and JATC contact information change. Confirm current application periods with IBEW Local 103, UA Local 12, or NERCC directly. OSHA 10 must be through an OSHA-authorized provider.",
      ht:"Pwogram apwantisaj ak enfòmasyon kontak JATC chanje. Konfime peryòd aplikasyon aktyèl dirèkteman. OSHA 10 dwe atravè yon founisè otorize OSHA.",
      fr:"Les programmes d'apprentissage changent. Confirmez directement auprès d'IBEW Local 103, UA Local 12 ou NERCC. L'OSHA 10 doit être dispensé par un fournisseur agréé.",
      es:"Los programas de aprendizaje cambian. Confirma directamente con IBEW Local 103, UA Local 12 o NERCC. OSHA 10 debe ser a través de un proveedor autorizado.",
      pt:"Os programas de aprendizagem mudam. Confirme diretamente com IBEW Local 103, UA Local 12 ou NERCC. OSHA 10 deve ser por um provedor autorizado."
    }
  }
};
