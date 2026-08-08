// Immigration status & form glossary — general education only, not legal advice.
// Sourced and dated; see each entry's 'sources' field.

const glossaryData = {
  status: [
    {
      id: 'tps',
      icon: '🛡️',
      title: { en: "Temporary Protected Status (TPS)", ht: "Estati Pwoteksyon Tanporè (TPS)", fr: "Statut de Protection Temporaire (TPS)" },
      subtitle: { en: "For people from a country the US has designated unsafe to return to", ht: "Pou moun ki soti nan yon peyi Etazini deziyen ki pa sekirize pou retounen", fr: "Pour les personnes d'un pays désigné par les États-Unis comme dangereux" },
      volatile: true,
      volatilityNote: {
        en: "TPS status has been especially unstable in 2026, with ongoing lawsuits over several countries' designations — including Haiti, where the Supreme Court ruled June 25, 2026 (Trump v. Miot, consolidated with Mullin v. Doe) that TPS terminations aren't subject to judicial review, and the presiding district judge formally lifted her protective stay on August 5, 2026, making the termination official for over 330,000 Haitian TPS holders. If TPS affects you, don't rely on this page for your specific dates or deadlines — check uscis.gov/tps directly and talk to an accredited representative, because the situation can change within days.",
        ht: "Estati TPS te espesyalman enstab an 2026, ak pwosè k ap kontinye sou deziyasyon plizyè peyi — enkli Ayiti, kote Tribinal Siprèm lan te deside 25 Jen 2026 (Trump v. Miot, konbine ak Mullin v. Doe) ke tèminezon TPS pa sou revizyon jidisyè, epi jij distri a te fòmèlman leve sispansyon pwoteksyon li a 5 Out 2026, sa fè tèminezon an ofisyèl pou plis pase 330,000 moun ki gen TPS Ayiti. Si TPS afekte ou, pa depann sou paj sa a pou dat oswa delè espesifik ou — tcheke uscis.gov/tps dirèkteman epi pale ak yon reprezantan akredite, paske sitiyasyon an ka chanje nan kèk jou.",
        fr: "Le statut TPS a été particulièrement instable en 2026, avec des procès en cours sur les désignations de plusieurs pays — y compris Haïti, où la Cour suprême a statué le 25 juin 2026 (Trump v. Miot, consolidée avec Mullin v. Doe) que les fins de TPS ne sont pas soumises à un contrôle judiciaire, et la juge de district a officiellement levé son sursis protecteur le 5 août 2026, rendant la fin officielle pour plus de 330 000 titulaires du TPS haïtien. Si le TPS vous concerne, ne vous fiez pas à cette page pour vos dates ou délais précis — vérifiez directement sur uscis.gov/tps et parlez à un représentant accrédité, car la situation peut changer en quelques jours."
      },
      simple: {
        en: [
          "A temporary status the government can give to people already in the US whose home country is unsafe to return to right now (war, disaster, crisis).",
          "It is NOT a green card and NOT a path to citizenship by itself.",
          "While you have it: protection from deportation + permission to work (with an EAD/work permit).",
          "It is reviewed periodically per country and can be extended, or ended.",
          "Ending TPS for a country is currently being fought in court for several countries — status can change quickly, sometimes within days."
        ],
        ht: [
          "Yon estati tanporè gouvènman an ka bay moun ki deja Ozetazini ki soti nan yon peyi ki pa sekirize pou yo retounen kounye a (lagè, katastwòf, kriz).",
          "Se PA yon kat vèt e se PA yon chemen pou sitwayènte pou kont li.",
          "Pandan ou genyen l: pwoteksyon kont depòtasyon + pèmisyon pou travay (ak yon EAD/pèmi travay).",
          "Yo revize l peryodikman pou chak peyi epi yo ka pwolonje l, oswa fini l.",
          "Fini TPS pou yon peyi ap goumen kounye a nan tribinal pou plizyè peyi — estati ka chanje rapid, pafwa nan kèk jou."
        ],
        fr: [
          "Un statut temporaire que le gouvernement peut accorder aux personnes déjà aux États-Unis dont le pays d'origine est actuellement dangereux (guerre, catastrophe, crise).",
          "Ce n'est PAS une carte verte et PAS un chemin vers la citoyenneté en soi.",
          "Pendant que vous l'avez : protection contre l'expulsion + permission de travailler (avec un EAD/permis de travail).",
          "Il est révisé périodiquement par pays et peut être prolongé, ou terminé.",
          "La fin du TPS pour un pays fait actuellement l'objet de poursuites judiciaires pour plusieurs pays — le statut peut changer rapidement, parfois en quelques jours."
        ]
      },
      full: {
        en: "Temporary Protected Status (TPS) is a status the US government can give to people who are already in the United States and come from a country the government has designated as unsafe to return to — because of war, natural disaster, or another serious crisis. TPS gives two things: protection from being deported, and permission to work legally (usually shown with an EAD, sometimes called a work permit). TPS does not by itself lead to a green card or citizenship — it is temporary, and the government reviews each country's designation periodically, deciding whether to extend it, keep it the same, or end it.",
        ht: "Estati Pwoteksyon Tanporè (TPS) se yon estati gouvènman Ameriken an ka bay moun ki deja Ozetazini epi ki soti nan yon peyi gouvènman an deziyen kòm ki pa sekirize pou retounen — akoz lagè, katastwòf natirèl, oswa yon lòt kriz serye. TPS bay de bagay: pwoteksyon kont depòtasyon, ak pèmisyon pou travay legalman (souvan montre ak yon EAD, pafwa yo rele l pèmi travay). TPS pa mennen li menm nan yon kat vèt oswa sitwayènte — li tanporè, epi gouvènman an revize deziyasyon chak peyi peryodikman, deside si pou pwolonje l, kenbe l menm jan, oswa fini l.",
        fr: "Le Statut de Protection Temporaire (TPS) est un statut que le gouvernement américain peut accorder aux personnes déjà présentes aux États-Unis et originaires d'un pays que le gouvernement a désigné comme dangereux pour un retour — en raison d'une guerre, d'une catastrophe naturelle, ou d'une autre crise grave. Le TPS offre deux choses : une protection contre l'expulsion, et une autorisation de travailler légalement (généralement démontrée par un EAD, parfois appelé permis de travail). Le TPS ne mène pas en soi à une carte verte ou à la citoyenneté — il est temporaire, et le gouvernement révise périodiquement la désignation de chaque pays, décidant de la prolonger, de la maintenir, ou d'y mettre fin."
      },
      sources: "uscis.gov/humanitarian/temporary-protected-status · American Immigration Council · USAFacts"
    },
    {
      id: 'asylum',
      icon: '🏛️',
      title: { en: "Asylum", ht: "Azil", fr: "Asile" },
      subtitle: { en: "Protection for people who fled persecution and are already here", ht: "Pwoteksyon pou moun ki chape anba pèsekisyon epi ki deja isit", fr: "Protection pour les personnes ayant fui la persécution et déjà présentes" },
      volatile: true,
      volatilityNote: {
        en: "As of mid-2026, a new annual fee applies to pending asylum applications, and missing its 30-day payment deadline can get your case rejected and your work permit terminated immediately — even if your underlying asylum claim was strong. Some border regions are also piloting a much shorter 21-day filing deadline instead of the usual one year. Because the consequences of a small paperwork mistake are severe right now, talking to an accredited representative or attorney early — even before you're sure you'll apply — is worth it.",
        ht: "Kòm mitan 2026, yon nouvo frè anyèl aplike pou aplikasyon azil an atant, epi rate delè peman 30 jou li ka fè yo rejte ka ou epi fini pèmi travay ou imedyatman — menm si reklamasyon azil ou te fò. Kèk rejyon fwontyè ap tou eseye yon delè depo pi kout 21 jou olye de ane a nòmal. Paske konsekans yon ti erè papye grav kounye a, pale ak yon reprezantan akredite oswa avoka bonè — menm anvan ou sèten ou pral aplike — vo lapenn.",
        fr: "Depuis mi-2026, de nouveaux frais annuels s'appliquent aux demandes d'asile en attente, et manquer le délai de paiement de 30 jours peut faire rejeter votre dossier et mettre fin immédiatement à votre permis de travail — même si votre demande d'asile était solide. Certaines régions frontalières testent aussi un délai de dépôt beaucoup plus court de 21 jours au lieu de l'année habituelle. Les conséquences d'une petite erreur administrative étant graves actuellement, parler tôt à un représentant accrédité ou un avocat — même avant d'être sûr de déposer une demande — en vaut la peine."
      },
      simple: {
        en: [
          "Protection for people who cannot safely return to their home country because they were persecuted, or are afraid they will be, because of race, religion, nationality, political opinion, or social group.",
          "Must generally apply within 1 year of arriving in the US (Form I-589) — this deadline is strict, with only narrow exceptions.",
          "Two paths: \"affirmative\" (you apply proactively) or \"defensive\" (you apply as a defense in removal/deportation proceedings).",
          "As of 2026, there is a new annual fee for pending asylum applications with serious consequences if missed — including losing your work permit and your case being closed.",
          "Some border areas now use a much faster, 21-day filing window as a pilot — different from the standard 1-year deadline."
        ],
        ht: [
          "Pwoteksyon pou moun ki pa ka retounen an sekirite nan peyi lakay yo paske yo te pèsekite, oswa yo pè yo pral pèsekite yo, akoz ras, relijyon, nasyonalite, opinyon politik, oswa gwoup sosyal.",
          "Jeneralman fòk ou aplike nan 1 ane apre ou rive Ozetazini (Fòm I-589) — delè sa a strik, ak sèlman eksepsyon etwat.",
          "De chemen: \"afimatif\" (ou aplike pwoaktivman) oswa \"defansif\" (ou aplike kòm yon defans nan pwosedi retire/depòtasyon).",
          "Kòm 2026, gen yon nouvo frè anyèl pou aplikasyon azil an atant ak konsekans grav si rate — enkli pèdi pèmi travay ou epi ka ou fèmen.",
          "Kèk zòn fwontyè kounye a itilize yon fenèt depo pi rapid, 21 jou kòm yon pwojè pilòt — diferan de delè estanda 1 ane a."
        ],
        fr: [
          "Protection pour les personnes qui ne peuvent pas retourner en toute sécurité dans leur pays d'origine parce qu'elles ont été persécutées, ou craignent de l'être, en raison de leur race, religion, nationalité, opinion politique, ou appartenance à un groupe social.",
          "Doit généralement déposer une demande dans l'année suivant l'arrivée aux États-Unis (Formulaire I-589) — ce délai est strict, avec seulement des exceptions étroites.",
          "Deux voies : \"affirmative\" (vous déposez la demande de manière proactive) ou \"défensive\" (vous déposez la demande en défense dans une procédure d'expulsion).",
          "Depuis 2026, il existe de nouveaux frais annuels pour les demandes d'asile en attente avec des conséquences graves en cas de non-paiement — y compris la perte du permis de travail et la fermeture du dossier.",
          "Certaines zones frontalières utilisent désormais une fenêtre de dépôt beaucoup plus rapide de 21 jours en pilote — différente du délai standard d'un an."
        ]
      },
      full: {
        en: "Asylum is a protection for people already in the United States (or arriving at the border) who cannot safely return to their home country because they were persecuted, or have a well-founded fear of being persecuted, based on their race, religion, nationality, political opinion, or membership in a particular social group. To apply, you generally file Form I-589 within one year of your last arrival in the US — this is one of the strictest deadlines in immigration law, and missing it can permanently bar your claim except in narrow, hard-to-prove situations (this is called the \"changed circumstances\" or \"extraordinary circumstances\" exception). There are two main paths: affirmative asylum (filed proactively with USCIS) and defensive asylum (raised as a defense if you're already in removal proceedings before an immigration judge).",
        ht: "Azil se yon pwoteksyon pou moun ki deja Ozetazini (oswa k ap rive nan fwontyè a) ki pa ka retounen an sekirite nan peyi lakay yo paske yo te pèsekite, oswa gen yon lakrentif byen fonde pou yo pèsekite yo, baze sou ras yo, relijyon, nasyonalite, opinyon politik, oswa manm yon gwoup sosyal patikilye. Pou aplike, jeneralman ou depoze Fòm I-589 nan yon ane apre dènye rive ou Ozetazini — sa se youn nan delè ki pi strik nan lwa imigrasyon, epi rate l ka bloke reklamasyon ou pèmanan eksepte nan sitiyasyon etwat, difisil pou pwouve (yo rele sa eksepsyon \"sikonstans chanje\" oswa \"sikonstans ekstraòdinè\"). Gen de chemen prensipal: azil afimatif (depoze pwoaktivman ak USCIS) ak azil defansif (leve kòm yon defans si ou deja nan pwosedi retire devan yon jij imigrasyon).",
        fr: "L'asile est une protection pour les personnes déjà aux États-Unis (ou arrivant à la frontière) qui ne peuvent pas retourner en toute sécurité dans leur pays d'origine parce qu'elles ont été persécutées, ou ont une crainte fondée d'être persécutées, en raison de leur race, religion, nationalité, opinion politique, ou appartenance à un groupe social particulier. Pour faire une demande, vous déposez généralement le Formulaire I-589 dans l'année suivant votre dernière arrivée aux États-Unis — c'est l'un des délais les plus stricts du droit de l'immigration, et le manquer peut bloquer définitivement votre demande sauf dans des situations étroites et difficiles à prouver (c'est ce qu'on appelle l'exception de \"circonstances changées\" ou \"circonstances extraordinaires\"). Il existe deux voies principales : l'asile affirmatif (déposé de manière proactive auprès de l'USCIS) et l'asile défensif (soulevé en défense si vous êtes déjà en procédure d'expulsion devant un juge de l'immigration)."
      },
      sources: "American Immigration Council asylum fact sheet · USCIS asylum processing rule · Cross-checked 2026 immigration law guides"
    },
    {
      id: 'ead',
      icon: '🪪',
      title: { en: "Employment Authorization Document (EAD) / \"Work Permit\"", ht: "Dokiman Otorizasyon Travay (EAD) / \"Pèmi Travay\"", fr: "Document d'Autorisation de Travail (EAD) / « Permis de Travail »" },
      subtitle: { en: "Proof you're allowed to work legally — not a status by itself", ht: "Prèv ou gen dwa travay legalman — se pa yon estati pou kont li", fr: "Preuve que vous êtes autorisé à travailler légalement — pas un statut en soi" },
      volatile: false,
      simple: {
        en: [
          "A card proving you're allowed to work legally in the US for a specific period of time.",
          "You get one by filing Form I-765.",
          "Having a pending immigration case (asylum, adjustment of status, TPS, etc.) does not by itself let you work — you generally need the EAD card too.",
          "The EAD is proof of permission to work — it is not itself an immigration status. Losing or not renewing it doesn't necessarily mean you lost your underlying status, but it does mean you can't legally work until it's valid again.",
          "Comes with a category code (like C08, A12, C19) that tells USCIS and employers why you qualify."
        ],
        ht: [
          "Yon kat ki pwouve ou gen dwa travay legalman Ozetazini pou yon peryòd tan espesifik.",
          "Ou jwenn youn lè ou depoze Fòm I-765.",
          "Gen yon ka imigrasyon an atant (azil, ajisteman estati, TPS, elatriye) pa pèmèt ou travay pou kont li — jeneralman ou bezwen kat EAD la tou.",
          "EAD la se prèv pèmisyon pou travay — li pa li menm yon estati imigrasyon. Pèdi l oswa pa renouvle l pa vle di nesesèman ou pèdi estati debaz ou, men li vle di ou pa ka travay legalman jiskaske li valid ankò.",
          "Vini ak yon kòd kategori (tankou C08, A12, C19) ki di USCIS ak anplwayè yo poukisa ou kalifye."
        ],
        fr: [
          "Une carte prouvant que vous êtes autorisé à travailler légalement aux États-Unis pour une période spécifique.",
          "Vous en obtenez une en déposant le Formulaire I-765.",
          "Avoir un dossier d'immigration en attente (asile, ajustement de statut, TPS, etc.) ne vous permet pas de travailler en soi — vous avez généralement besoin de la carte EAD aussi.",
          "L'EAD est une preuve de permission de travailler — ce n'est pas en soi un statut d'immigration. Le perdre ou ne pas le renouveler ne signifie pas nécessairement que vous avez perdu votre statut sous-jacent, mais cela signifie que vous ne pouvez pas travailler légalement tant qu'il n'est pas à nouveau valide.",
          "Accompagné d'un code de catégorie (comme C08, A12, C19) qui indique à l'USCIS et aux employeurs pourquoi vous êtes admissible."
        ]
      },
      full: {
        en: "An Employment Authorization Document (EAD), commonly called a work permit, is a card issued by USCIS that proves you're allowed to work legally in the United States for a specific period of time. You apply for one using Form I-765. It's important to understand: the EAD is evidence of permission to work, not an immigration status by itself. Many different situations qualify someone for an EAD — a pending asylum case, TPS, being in the process of adjusting to a green card, and others — and each is tracked with its own category code (for example, C08 for pending asylum applicants, or A12/C19 for TPS). Your employer will ask for this code when completing your Form I-9.",
        ht: "Yon Dokiman Otorizasyon Travay (EAD), yo rele souvan pèmi travay, se yon kat USCIS bay ki pwouve ou gen dwa travay legalman Ozetazini pou yon peryòd tan espesifik. Ou aplike pou youn lè l ap itilize Fòm I-765. Li enpòtan pou konprann: EAD la se prèv pèmisyon pou travay, se pa yon estati imigrasyon pou kont li. Anpil sitiyasyon diferan kalifye yon moun pou yon EAD — yon ka azil an atant, TPS, k ap nan pwosesis ajiste pou yon kat vèt, ak lòt — epi chak swiv ak pwòp kòd kategori li (pa egzanp, C08 pou aplikan azil an atant, oswa A12/C19 pou TPS). Anplwayè ou pral mande kòd sa a lè l ap ranpli Fòm I-9 ou.",
        fr: "Un Document d'Autorisation de Travail (EAD), communément appelé permis de travail, est une carte délivrée par l'USCIS qui prouve que vous êtes autorisé à travailler légalement aux États-Unis pour une période spécifique. Vous en faites la demande via le Formulaire I-765. Il est important de comprendre : l'EAD est une preuve de permission de travailler, pas un statut d'immigration en soi. De nombreuses situations différentes qualifient une personne pour un EAD — un dossier d'asile en attente, le TPS, être en cours d'ajustement vers une carte verte, et d'autres — et chacune est suivie avec son propre code de catégorie (par exemple, C08 pour les demandeurs d'asile en attente, ou A12/C19 pour le TPS). Votre employeur demandera ce code lors du remplissage de votre Formulaire I-9."
      },
      sources: "uscis.gov/employment-authorization · USCIS Form I-765 instructions"
    },
    {
      id: 'greencard',
      icon: '🪧',
      title: { en: "Green Card (Lawful Permanent Resident)", ht: "Kat Vèt (Rezidan Pèmanan Legal)", fr: "Carte Verte (Résident Permanent Légal)" },
      subtitle: { en: "Permission to live and work in the US permanently — not citizenship", ht: "Pèmisyon pou viv ak travay Ozetazini pèmanan — se pa sitwayènte", fr: "Autorisation de vivre et travailler aux États-Unis en permanence — pas la citoyenneté" },
      volatile: false,
      simple: {
        en: [
          "Gives permission to live and work in the US permanently (not the same as citizenship).",
          "Two main routes: through family (a US citizen or green card holder relative petitions for you) or through employment (a US employer sponsors you, or in rare cases you qualify on your own).",
          "Family category has two types: \"immediate relative\" (spouse/child/parent of a US citizen — no yearly limit, generally faster) and \"family preference\" (other relatives — yearly limits, can mean years of waiting).",
          "Employment category has 5 preference levels (EB-1 through EB-5) for different types of skills and investment.",
          "Which category fits someone is a real legal determination, not a simple checklist — this is exactly the kind of question that needs an accredited representative, not a general guide."
        ],
        ht: [
          "Bay pèmisyon pou viv ak travay Ozetazini pèmanan (se pa menm bagay ak sitwayènte).",
          "De chemen prensipal: nan fanmi (yon sitwayen Ameriken oswa moun ki gen kat vèt fè petisyon pou ou) oswa nan travay (yon anplwayè Ameriken peye pou ou, oswa nan ka ra ou kalifye pou kont ou).",
          "Kategori fanmi gen de tip: \"fanmi imedya\" (mari/madanm, pitit, paran yon sitwayen Ameriken — pa gen limit anyèl, jeneralman pi rapid) ak \"preferans fanmi\" (lòt fanmi — limit anyèl, ka vle di ane atant).",
          "Kategori travay gen 5 nivo preferans (EB-1 jiska EB-5) pou diferan tip konpetans ak envestisman.",
          "Ki kategori ki adapte ak yon moun se yon vrè detèminasyon legal, se pa yon senp lis kontwòl — sa se egzakteman kalite kesyon ki bezwen yon reprezantan akredite, se pa yon gid jeneral."
        ],
        fr: [
          "Donne la permission de vivre et travailler aux États-Unis en permanence (pas la même chose que la citoyenneté).",
          "Deux voies principales : par la famille (un parent citoyen américain ou titulaire d'une carte verte fait une pétition pour vous) ou par l'emploi (un employeur américain vous parraine, ou dans de rares cas vous êtes admissible seul).",
          "La catégorie familiale a deux types : « parent immédiat » (conjoint/enfant/parent d'un citoyen américain — pas de limite annuelle, généralement plus rapide) et « préférence familiale » (autres parents — limites annuelles, peut signifier des années d'attente).",
          "La catégorie d'emploi a 5 niveaux de préférence (EB-1 à EB-5) pour différents types de compétences et d'investissement.",
          "Quelle catégorie convient à quelqu'un est une véritable détermination juridique, pas une simple liste de contrôle — c'est exactement le genre de question qui nécessite un représentant accrédité, pas un guide général."
        ]
      },
      full: {
        en: "A green card gives someone lawful permanent resident status — the right to live and work in the United States on an ongoing basis. It is not citizenship, though it can be a step toward it later. There are two broad routes: family-based (a US citizen or existing green card holder petitions for a qualifying relative) and employment-based (a US employer sponsors a worker, or in some categories a person can self-petition based on exceptional ability). Family-based cases split into \"immediate relatives\" of US citizens — spouses, unmarried children under 21, and parents — who face no annual numerical limit and generally move faster, and \"family preference\" categories for other relatives, which are capped each year and can mean a wait of years depending on the country and category. Employment-based green cards are divided into five preference levels (EB-1 through EB-5) covering everything from extraordinary-ability professionals to investors.",
        ht: "Yon kat vèt bay yon moun estati rezidan pèmanan legal — dwa pou viv ak travay Ozetazini sou yon baz kontinyèl. Se pa sitwayènte, byenke li ka yon etap pou sa pita. Gen de chemen laj: baze sou fanmi (yon sitwayen Ameriken oswa yon moun ki deja gen kat vèt fè petisyon pou yon fanmi kalifye) ak baze sou travay (yon anplwayè Ameriken peye pou yon travayè, oswa nan kèk kategori yon moun ka fè pwòp petisyon li baze sou kapasite eksepsyonèl). Ka baze sou fanmi divize an \"fanmi imedya\" sitwayen Ameriken yo — mari/madanm, pitit ki pa marye anba 21 an, ak paran — ki pa fè fas ak okenn limit nimerik anyèl epi jeneralman deplase pi vit, ak kategori \"preferans fanmi\" pou lòt fanmi, ki gen kapasite chak ane epi ka vle di yon atant plizyè ane selon peyi ak kategori. Kat vèt baze sou travay divize an senk nivo preferans (EB-1 jiska EB-5) ki kouvri tout bagay soti nan pwofesyonèl kapasite eksepsyonèl jiska envestisè.",
        fr: "Une carte verte confère à une personne le statut de résident permanent légal — le droit de vivre et travailler aux États-Unis de manière continue. Ce n'est pas la citoyenneté, bien que cela puisse être une étape vers celle-ci plus tard. Il existe deux grandes voies : familiale (un citoyen américain ou titulaire d'une carte verte fait une pétition pour un parent admissible) et professionnelle (un employeur américain parraine un travailleur, ou dans certaines catégories une personne peut faire sa propre pétition basée sur une capacité exceptionnelle). Les cas familiaux se divisent en « parents immédiats » de citoyens américains — conjoints, enfants célibataires de moins de 21 ans, et parents — qui ne font face à aucune limite numérique annuelle et progressent généralement plus vite, et les catégories de « préférence familiale » pour les autres parents, plafonnées chaque année et pouvant signifier une attente de plusieurs années selon le pays et la catégorie. Les cartes vertes professionnelles sont divisées en cinq niveaux de préférence (EB-1 à EB-5) couvrant tout, des professionnels aux capacités exceptionnelles aux investisseurs."
      },
      sources: "uscis.gov green card eligibility categories · American Immigration Council · Cross-checked 2026 immigration law guides"
    }
  ],
  forms: [
    {
      id: 'i765',
      icon: '📄',
      title: { en: "Form I-765 — Application for Employment Authorization", ht: "Fòm I-765 — Aplikasyon pou Otorizasyon Travay", fr: "Formulaire I-765 — Demande d'Autorisation de Travail" },
      subtitle: { en: "Used to request an EAD (work permit)", ht: "Itilize pou mande yon EAD (pèmi travay)", fr: "Utilisé pour demander un EAD (permis de travail)" },
      volatile: false,
      purpose: { en: "Requesting an EAD (work permit).", ht: "Mande yon EAD (pèmi travay).", fr: "Demander un EAD (permis de travail)." },
      fields: [
        { name: { en: "Eligibility category", ht: "Kategori kalifikasyon", fr: "Catégorie d'admissibilité" }, explain: { en: "A code (like C08) that says why you qualify. Getting this code right matters a lot — it comes from your specific situation.", ht: "Yon kòd (tankou C08) ki di poukisa ou kalifye. Byen jwenn kòd sa a enpòtan anpil — li soti nan sitiyasyon espesifik ou.", fr: "Un code (comme C08) qui indique pourquoi vous êtes admissible. Bien obtenir ce code est très important — il provient de votre situation spécifique." }, legalJudgment: true },
        { name: { en: "Application type", ht: "Tip aplikasyon", fr: "Type de demande" }, explain: { en: "Whether this is your first application, a renewal, or a replacement (lost/stolen/damaged card).", ht: "Si sa se premye aplikasyon ou, yon renouvèlman, oswa yon ranplasman (kat pèdi/vole/domaje).", fr: "S'il s'agit de votre première demande, d'un renouvellement, ou d'un remplacement (carte perdue/volée/endommagée)." }, legalJudgment: false }
      ]
    },
    {
      id: 'i589',
      icon: '📄',
      title: { en: "Form I-589 — Application for Asylum", ht: "Fòm I-589 — Aplikasyon pou Azil", fr: "Formulaire I-589 — Demande d'Asile" },
      subtitle: { en: "Used to apply for asylum", ht: "Itilize pou aplike pou azil", fr: "Utilisé pour demander l'asile" },
      volatile: false,
      purpose: { en: "Applying for asylum.", ht: "Aplike pou azil.", fr: "Demander l'asile." },
      fields: [
        { name: { en: "Basis for asylum", ht: "Baz pou azil", fr: "Motif de l'asile" }, explain: { en: "The specific reason you fear returning (race, religion, nationality, political opinion, social group). This is the heart of the application and is a legal argument, not a form field to fill mechanically.", ht: "Rezon espesifik ou pè retounen (ras, relijyon, nasyonalite, opinyon politik, gwoup sosyal). Sa se kè aplikasyon an epi se yon agiman legal, se pa yon chan fòm pou ranpli mekanikman.", fr: "La raison spécifique de votre crainte de retour (race, religion, nationalité, opinion politique, groupe social). C'est le cœur de la demande et un argument juridique, pas un champ à remplir mécaniquement." }, legalJudgment: true },
        { name: { en: "One-year deadline exception", ht: "Eksepsyon delè yon ane", fr: "Exception au délai d'un an" }, explain: { en: "If you're filing after one year, you'd need to explain your exception — this is a legal judgment call.", ht: "Si w ap depoze apre yon ane, ou ta bezwen eksplike eksepsyon ou — sa se yon desizyon jijman legal.", fr: "Si vous déposez après un an, vous devrez expliquer votre exception — c'est une décision de jugement juridique." }, legalJudgment: true }
      ]
    },
    {
      id: 'i130',
      icon: '📄',
      title: { en: "Form I-130 — Petition for Alien Relative", ht: "Fòm I-130 — Petisyon pou Fanmi Etranje", fr: "Formulaire I-130 — Pétition pour un Parent Étranger" },
      subtitle: { en: "First step in most family-based green card cases", ht: "Premye etap nan pifò ka kat vèt baze sou fanmi", fr: "Première étape dans la plupart des cas de carte verte familiale" },
      volatile: false,
      purpose: { en: "The first step in most family-based green card cases — a US citizen or green card holder \"petitions\" for a qualifying relative.", ht: "Premye etap nan pifò ka kat vèt baze sou fanmi — yon sitwayen Ameriken oswa moun ki gen kat vèt \"fè petisyon\" pou yon fanmi kalifye.", fr: "La première étape dans la plupart des cas de carte verte familiale — un citoyen américain ou titulaire d'une carte verte « pétitionne » pour un parent admissible." },
      fields: [
        { name: { en: "Relationship category", ht: "Kategori relasyon", fr: "Catégorie de relation" }, explain: { en: "Determines which \"line\" (immediate relative vs. preference category) the case goes into, which affects wait time enormously.", ht: "Detèmine ki \"liy\" (fanmi imedya vs kategori preferans) ka a antre ladan, sa ki afekte tan atant anòmman.", fr: "Détermine dans quelle « file » (parent immédiat vs catégorie de préférence) le dossier entre, ce qui affecte énormément le temps d'attente." }, legalJudgment: false }
      ]
    }
  ]
};
