// Immigration Updates feed — dated news items, re-researched periodically.
// Add new items to the TOP of the array. This is news, never case-specific advice.

const updatesData = [
  {
    date: { en: "July 27, 2026", ht: "27 Jiyè 2026", fr: "27 juillet 2026" },
    tags: ['TPS', 'Haiti'],
    title: { en: "TPS for Haiti officially terminated — legal fight continues", ht: "TPS pou Ayiti ofisyèlman fini — batay legal la kontinye", fr: "Le TPS pour Haïti est officiellement terminé — la bataille juridique continue" },
    summary: {
      en: "Following the Supreme Court's June 25 ruling in Mullin v. Doe, USCIS confirmed the Haiti TPS designation ended July 27, 2026, and EADs with category A12 or C19 issued to TPS Haiti beneficiaries are no longer automatically valid. A federal appeals court briefly delayed the termination by a few days before it took effect. If you have TPS Haiti, your specific EAD expiration date depends on when it was issued — check the USCIS TPS Haiti page directly, and see the TPS explainer in the Status &amp; Form Filling Help section for what TPS means in general.",
      ht: "Apre desizyon Tribinal Siprèm 25 Jen nan Mullin v. Doe, USCIS konfime deziyasyon TPS Ayiti fini 27 Jiyè 2026, epi EAD ak kategori A12 oswa C19 ki bay benefisyè TPS Ayiti yo pa otomatikman valid ankò. Yon tribinal apèl federal te retade tèminezon an pou kèk jou anvan li pran efè. Si ou gen TPS Ayiti, dat ekspirasyon EAD espesifik ou depann de lè li te bay — tcheke paj TPS Ayiti USCIS la dirèkteman, epi gade eksplikatè TPS nan seksyon Èd Estati ak Ranpli Fòm pou sa TPS vle di an jeneral.",
      fr: "Suite à la décision de la Cour suprême du 25 juin dans Mullin v. Doe, l'USCIS a confirmé que la désignation TPS Haïti a pris fin le 27 juillet 2026, et les EAD de catégorie A12 ou C19 délivrés aux bénéficiaires du TPS Haïti ne sont plus automatiquement valides. Une cour d'appel fédérale a brièvement retardé la fin de quelques jours avant qu'elle ne prenne effet. Si vous avez le TPS Haïti, votre date d'expiration EAD spécifique dépend de quand il a été délivré — vérifiez directement la page TPS Haïti de l'USCIS, et consultez l'explicateur TPS dans la section Aide sur le Statut et les Formulaires pour ce que signifie le TPS en général."
    },
    source: { label: "uscis.gov/i-9-central · Supreme Court Mullin v. Doe (609 U.S. ___, 2026)", url: "https://www.uscis.gov/i-9-central" }
  },
  {
    date: { en: "May 29, 2026", ht: "29 Me 2026", fr: "29 mai 2026" },
    tags: ['Asylum', 'Fees'],
    title: { en: "New asylum fees now strictly enforced — missing the deadline ends your case", ht: "Nouvo frè azil kounye a aplike strikteman — rate delè a fini ka ou", fr: "Les nouveaux frais d'asile sont désormais strictement appliqués — manquer le délai met fin à votre dossier" },
    summary: {
      en: "Under the 2025 H.R.1 law, filing Form I-589 now requires a $100 fee, plus a $100 Annual Asylum Fee (AAF) each year a case remains pending — neither can be waived. Since May 29, 2026, DHS enforces this strictly: missing the 30-day payment window after a USCIS notice results in the case being rejected and any asylum-based work permit ending immediately. Asylum-based EAD applications (Form I-765) also now cost $550 for a first application and $275 to renew. Watch your mail and your USCIS account closely if you have a pending asylum case.",
      ht: "Anba lwa H.R.1 2025 la, depoze Fòm I-589 kounye a mande $100 frè, plis $100 Frè Azil Anyèl (AAF) chak ane ka a rete an atant — ni youn ni lòt pa ka egzante. Depi 29 Me 2026, DHS aplike sa strikteman: rate fenèt peman 30 jou a apre yon avi USCIS fè ka a rejte epi nenpòt pèmi travay ki baze sou azil fini imedyatman. Aplikasyon EAD baze sou azil yo (Fòm I-765) kounye a koute $550 pou premye aplikasyon epi $275 pou renouvle. Veye lapòs ou ak kont USCIS ou pre si ou gen yon ka azil an atant.",
      fr: "En vertu de la loi H.R.1 de 2025, déposer le Formulaire I-589 nécessite désormais des frais de 100 $, plus des Frais Annuels d'Asile (AAF) de 100 $ chaque année où le dossier reste en attente — aucun des deux ne peut être exempté. Depuis le 29 mai 2026, le DHS applique cela strictement : manquer la fenêtre de paiement de 30 jours après un avis de l'USCIS entraîne le rejet du dossier et la fin immédiate de tout permis de travail basé sur l'asile. Les demandes d'EAD basées sur l'asile (Formulaire I-765) coûtent désormais 550 $ pour une première demande et 275 $ pour un renouvellement."
    },
    source: { label: "USCIS: DHS Announces Consequences for Unpaid Annual Asylum Fees · Federal Register IFR (effective May 29, 2026)", url: "https://www.uscis.gov/newsroom/alerts/dhs-announces-consequences-for-unpaid-annual-asylum-fees-unveils-new-hr-1-requirements" }
  },
  {
    date: { en: "July 24, 2026", ht: "24 Jiyè 2026", fr: "24 juillet 2026" },
    tags: ['H-1B', 'Employment'],
    title: { en: "H-1B cap reached for FY 2027 — no second selection round this year", ht: "Plafon H-1B rive pou FY 2027 — pa gen dezyèm won seleksyon ane sa a", fr: "Le plafond H-1B est atteint pour l'exercice 2027 — pas de deuxième tour de sélection cette année" },
    summary: {
      en: "USCIS confirmed it received enough H-1B petitions to fill both the regular 65,000 cap and the 20,000 advanced-degree exemption for fiscal year 2027, closing new cap-subject filings for the year. If your employer already filed a petition that was selected, USCIS continues processing it normally. If you're an employer or worker who missed this year's window, cap-exempt H-1B options and other visa categories may still apply — that determination depends on your specific job and employer, so it's worth a conversation with an immigration attorney about alternatives.",
      ht: "USCIS konfime li resevwa ase petisyon H-1B pou ranpli tou de plafon regilye 65,000 lan ak egzansyon diplòm avanse 20,000 lan pou ane fiskal 2027, fèmen nouvo depo ki sou plafon pou ane a. Si anplwayè ou te deja depoze yon petisyon ki te seleksyone, USCIS kontinye trete li nòmalman. Si ou se yon anplwayè oswa travayè ki te rate fenèt ane sa a, opsyon H-1B ki egzante plafon ak lòt kategori viza ka toujou aplike — detèminasyon sa a depann de travay espesifik ou ak anplwayè ou, kidonk li vo lapenn yon konvèsasyon ak yon avoka imigrasyon sou altènatif.",
      fr: "L'USCIS a confirmé avoir reçu suffisamment de pétitions H-1B pour combler à la fois le plafond régulier de 65 000 et l'exemption de diplôme avancé de 20 000 pour l'exercice 2027, fermant les nouveaux dépôts soumis au plafond pour l'année. Si votre employeur a déjà déposé une pétition sélectionnée, l'USCIS continue de la traiter normalement. Si vous êtes un employeur ou un travailleur qui a manqué la fenêtre de cette année, des options H-1B exemptées du plafond et d'autres catégories de visa peuvent encore s'appliquer — cette détermination dépend de votre emploi et employeur spécifiques."
    },
    source: { label: "Boundless: This Week in Immigration, July 24 2026 · USCIS H-1B cap announcements", url: "https://www.uscis.gov/newsroom" }
  },
  {
    date: { en: "August Visa Bulletin (released July 2026)", ht: "Bilten Viza Out (pibliye Jiyè 2026)", fr: "Bulletin des visas d'août (publié juillet 2026)" },
    tags: ['Green Card', 'Family'],
    title: { en: "Family-based green card categories move forward for August", ht: "Kategori kat vèt baze sou fanmi avanse pou mwa Out", fr: "Les catégories de carte verte familiale avancent pour août" },
    summary: {
      en: "The State Department's August 2026 Visa Bulletin advanced several family-sponsored green card categories: F1 moved forward 5.5 months, F2B moved forward 7 months, F3 advanced 3 months, and F4 advanced 3.5 months for most countries. This means some people who applied years ago may now be eligible to move to the next step. Employment-based categories saw smaller movement, with EB-2 India and EB-5 India remaining unavailable. Check your priority date against the current bulletin at travel.state.gov to see if this affects your family petition.",
      ht: "Bilten Viza Out 2026 Depatman Deta a avanse plizyè kategori kat vèt sponsorize pa fanmi: F1 avanse 5.5 mwa, F2B avanse 7 mwa, F3 avanse 3 mwa, epi F4 avanse 3.5 mwa pou pifò peyi. Sa vle di kèk moun ki te aplike plizyè ane pase ka kounye a kalifye pou pase nan pwochen etap la. Kategori ki baze sou travay yo te wè mwens mouvman, ak EB-2 End ak EB-5 End rete pa disponib. Tcheke dat priyorite ou kont bilten aktyèl la nan travel.state.gov pou wè si sa afekte petisyon fanmi ou.",
      fr: "Le Bulletin des visas d'août 2026 du Département d'État a fait avancer plusieurs catégories de carte verte parrainées par la famille : F1 a avancé de 5,5 mois, F2B de 7 mois, F3 de 3 mois, et F4 de 3,5 mois pour la plupart des pays. Cela signifie que certaines personnes ayant déposé une demande il y a des années peuvent désormais être éligibles pour passer à l'étape suivante. Les catégories basées sur l'emploi ont vu un mouvement plus modeste, EB-2 Inde et EB-5 Inde restant indisponibles."
    },
    source: { label: "travel.state.gov — Visa Bulletin for August 2026", url: "https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html" }
  }
];
