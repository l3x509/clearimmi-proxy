// Career finder quiz catalog — BLS wage data, general (not state-specific).

const careers = [
  {
    id: 'cna',
    name: { en: "Certified Nurse Aide (CNA)", ht: "Asistan Enfimyè Sètifye (CNA)", fr: "Aide-soignant certifié (CNA)" },
    income: { en: "Median pay: $39,530/yr (BLS, May 2024)", ht: "Salè medyàn: $39,530/ane (BLS, Me 2024)", fr: "Salaire médian : 39 530 $/an (BLS, mai 2024)" },
    start: { en: "Start in weeks — 3-7 week training", ht: "Kòmanse nan kèk semèn — fòmasyon 3-7 semèn", fr: "Commencez en quelques semaines — formation de 3 à 7 semaines" },
    why: { en: "Fast entry into healthcare, huge demand, and a proven first step toward LPN and RN.", ht: "Antre rapid nan swen sante, gwo demann, ak yon premye etap pwouve pou LPN ak RN.", fr: "Entrée rapide dans la santé, forte demande, et une première étape éprouvée vers LPN et RN." },
    pathway: 'nursing',
    weights: { care: 3, health: 3, now: 3, yes: 2, months: 1 }
  },
  {
    id: 'hha',
    name: { en: "Home Health Aide", ht: "Èd Sante nan Kay", fr: "Aide à domicile" },
    income: { en: "Healthcare support median: $37,180/yr (BLS, May 2024)", ht: "Medyàn sipò swen sante: $37,180/ane (BLS, Me 2024)", fr: "Médiane du soutien en santé : 37 180 $/an (BLS, mai 2024)" },
    start: { en: "Fastest start — minimal training, 765,800 openings/yr projected", ht: "Kòmansman ki pi rapid — fòmasyon minimal, 765,800 pòs/ane pwojte", fr: "Démarrage le plus rapide — formation minimale, 765 800 postes/an prévus" },
    why: { en: "The fastest-growing entry job in healthcare — one-on-one care in people's homes.", ht: "Travay antre ki grandi pi vit nan swen sante — swen youn-a-youn lakay moun.", fr: "L'emploi d'entrée qui croît le plus vite en santé — des soins individuels à domicile." },
    pathway: null,
    weights: { care: 3, health: 2, now: 3, yes: 2 }
  },
  {
    id: 'truck',
    name: { en: "Truck Driver (CDL)", ht: "Chofè Kamyon (CDL)", fr: "Chauffeur de camion (CDL)" },
    income: { en: "Median pay: $57,440/yr (BLS, May 2024)", ht: "Salè medyàn: $57,440/ane (BLS, Me 2024)", fr: "Salaire médian : 57 440 $/an (BLS, mai 2024)" },
    start: { en: "Start in ~2-3 months — CDL training + licensing", ht: "Kòmanse nan ~2-3 mwa — fòmasyon CDL + lisans", fr: "Commencez en 2-3 mois — formation CDL + permis" },
    why: { en: "Strong pay without a degree, ~237,600 openings a year, and independence on the job.", ht: "Bon salè san diplòm, ~237,600 pòs pa ane, ak endepandans nan travay la.", fr: "Bon salaire sans diplôme, ~237 600 postes par an, et de l'indépendance au travail." },
    pathway: 'cdl',
    weights: { move: 3, road: 3, months: 2, yes: 2, detail: 1 }
  },
  {
    id: 'para',
    name: { en: "School Paraprofessional", ht: "Parapwofesyonèl Lekòl", fr: "Paraprofessionnel scolaire" },
    income: { en: "Pay varies by district — typically school-year schedule", ht: "Salè varye selon distri — anjeneral orè ane eskolè", fr: "Salaire variable selon le district — généralement horaire scolaire" },
    start: { en: "Start within months — no state license required", ht: "Kòmanse nan kèk mwa — pa bezwen lisans eta", fr: "Commencez en quelques mois — aucune licence d'État requise" },
    why: { en: "Work in schools right away, use your languages as an asset, and bridge toward a teaching license.", ht: "Travay nan lekòl touswit, sèvi ak lang ou yo kòm yon avantaj, epi fè pon pou yon lisans anseyman.", fr: "Travaillez dans les écoles tout de suite, valorisez vos langues, et faites le pont vers une licence d'enseignement." },
    pathway: 'teaching',
    weights: { kids: 3, school: 3, months: 2, light: 2, care: 1 }
  },
  {
    id: 'cosmetologist',
    name: { en: "Cosmetologist / Stylist", ht: "Kosmetològ / Estilis", fr: "Cosmétologue / Styliste", es: "Cosmetóloga/o / Estilista", pt: "Cosmetólogo(a) / Estilista" },
    income: { en: "Median: ~$36,000/yr — top stylists and salon owners earn significantly more (BLS 2024)", ht: "Medyàn: ~$36,000/ane — pi bon estilis ak pwopriyetè salon touche plis (BLS 2024)", fr: "Médiane : ~36 000 $/an — les meilleurs stylistes et propriétaires de salon gagnent beaucoup plus (BLS 2024)", es: "Mediano: ~$36,000/año — los mejores estilistas y dueños de salón ganan significativamente más (BLS 2024)", pt: "Mediano: ~US$36.000/ano — os melhores estilistas e donos de salão ganham significativamente mais (BLS 2024)" },
    start: { en: "1,000 hours training (~7-12 months) · if trained abroad, your hours may count", ht: "1,000 èdtan fòmasyon (~7-12 mwa) · si ou fòme aletranje, èdtan ou ka konte", fr: "1 000 heures de formation (~7-12 mois) · si formé à l'étranger, vos heures peuvent compter", es: "1,000 horas de formación (~7-12 meses) · si te formaste en el extranjero, tus horas pueden contar", pt: "1.000 horas de treinamento (~7-12 meses) · se você se formou no exterior, suas horas podem contar" },
    why: { en: "Self-employment ceiling is high — experienced stylists who build a clientele can far exceed the median. Immigrant communities are strong salon markets, and your language skills bring loyal clients.", ht: "Plafon travay endepandan an wo — estilis eksperyanse ki bati yon klyantèl ka depase medyàn an. Kominote imigran se bon mache salon, ak konpetans lang ou pote kliyan fidèl.", fr: "Le plafond du travail indépendant est élevé — les stylistes expérimentés qui se constituent une clientèle peuvent largement dépasser la médiane. Les communautés immigrantes sont de forts marchés de salons, et vos compétences linguistiques fidélisent.", es: "El techo del trabajo independiente es alto — los estilistas experimentados que construyen clientela pueden superar con creces la mediana. Las comunidades inmigrantes son fuertes mercados de salones, y tus idiomas generan clientes leales.", pt: "O teto do trabalho autônomo é alto — estilistas experientes que constroem clientela podem superar muito a mediana. Comunidades imigrantes são fortes mercados de salão, e seus idiomas fidelizam clientes." },
    pathway: 'cosmetology',
    weights: { beauty: 3, light: 2, months: 2, now: 1 }
  },
  {
    id: 'medassist',
    name: { en: "Medical Assistant", ht: "Asistan Medikal", fr: "Assistant médical", es: "Asistente Médico", pt: "Assistente Médico" },
    income: { en: "Median pay: $46,120/yr (BLS, May 2025)", ht: "Salè medyàn: $46,120/ane (BLS, Me 2025)", fr: "Salaire médian : 46 120 $/an (BLS, mai 2025)", es: "Pago mediano: $46,120/año (BLS, mayo 2025)", pt: "Salário mediano: US$46.120/ano (BLS, maio 2025)" },
    start: { en: "Start in ~9-12 months — certificate program", ht: "Kòmanse nan ~9-12 mwa — pwogram sètifika", fr: "Commencez en 9-12 mois — programme de certificat", es: "Empieza en ~9-12 meses — programa de certificado", pt: "Comece em ~9-12 meses — programa de certificado" },
    why: { en: "A mix of patient care and organized office work in clinics — a steady, growing field.", ht: "Yon melanj swen pasyan ak travay biwo òganize nan klinik — yon domèn estab k ap grandi.", fr: "Un mélange de soins aux patients et de travail de bureau organisé en clinique — un domaine stable et en croissance.", es: "Una mezcla de cuidado de pacientes y trabajo de oficina organizado en clínicas — un campo estable y en crecimiento.", pt: "Uma mistura de cuidado de pacientes e trabalho de escritório organizado em clínicas — uma área estável e em crescimento." },
    pathway: null,
    weights: { detail: 2, office: 2, care: 2, health: 2, train: 1, light: 1 }
  },
  {
    id: 'cook',
    name: { en: "Cook / Restaurant Worker", ht: "Kizinyè / Travayè Restoran", fr: "Cuisinier / Employé de restaurant", es: "Cocinero/a / Trabajador/a de restaurante", pt: "Cozinheiro(a) / Trabalhador(a) de restaurante" },
    income: { en: "Restaurant cook median: $35,760/yr · Chef/head cook: $66,700/yr (BLS, May 2024)", ht: "Kizinyè restoran medyàn: $35,760/ane · Chèf: $66,700/ane (BLS, Me 2024)", fr: "Cuisinier médian : 35 760 $/an · Chef : 66 700 $/an (BLS, mai 2024)", es: "Cocinero de restaurante mediano: $35,760/año · Chef: $66,700/año (BLS, mayo 2024)", pt: "Cozinheiro de restaurante mediano: US$35.760/ano · Chef: US$66.700/ano (BLS, maio 2024)" },
    start: { en: "Start immediately — no credential needed, ~2.6M openings/yr projected", ht: "Kòmanse touswit — pa bezwen diplòm, ~2.6M pòs/ane pwojte", fr: "Commencez immédiatement — aucun diplôme requis, ~2,6 M postes/an projetés", es: "Empieza de inmediato — sin título, ~2.6M vacantes/año proyectadas", pt: "Comece imediatamente — sem diploma, ~2,6 M vagas/ano projetadas" },
    why: { en: "Instant entry anywhere. Foreign cooking skills transfer directly — and the path from line cook to chef is real, especially in a food city like Boston.", ht: "Antre touswit nenpòt kote. Konpetans kwizin etranje transfere dirèkteman — ak chemen soti kizinyè rive chèf reyèl, espesyalman nan yon vil manje tankou Boston.", fr: "Entrée immédiate. Les compétences culinaires étrangères se transfèrent directement — et le chemin de cuisinier à chef est réel, surtout dans une ville gastronomique comme Boston.", es: "Entrada instantánea. Las habilidades culinarias extranjeras se transfieren directamente — y el camino de cocinero a chef es real, especialmente en Boston.", pt: "Entrada instantânea. Habilidades culinárias estrangeiras se transferem diretamente — e o caminho de cozinheiro a chef é real, especialmente em Boston." },
    pathway: null,
    weights: { food: 3, yes: 2, now: 2, health: 1 }
  },
  {
    id: 'electrician',
    name: { en: "Electrician (apprenticeship)", ht: "Elektrisyen (apwantisaj)", fr: "Électricien (apprentissage)", es: "Electricista (aprendizaje)", pt: "Eletricista (aprendizagem)" },
    income: { en: "Apprentice start ~$44,080/yr → journeyman median $62,350/yr (BLS 2024/2025)", ht: "Kòmansman apwanti ~$44,080/ane → medyàn konpagnon $62,350/ane (BLS 2024/2025)", fr: "Début apprenti ~44 080 $/an → médiane compagnon 62 350 $/an (BLS 2024/2025)", es: "Inicio aprendiz ~$44,080/año → mediano oficial $62,350/año (BLS 2024/2025)", pt: "Início aprendiz ~US$44.080/ano → mediana oficial US$62.350/ano (BLS 2024/2025)" },
    start: { en: "5-year apprenticeship — paid from day one, 9% job growth projected", ht: "Apwantisaj 5 ane — peye depi premye jou, 9% kwasans travay pwojte", fr: "Apprentissage de 5 ans — payé dès le premier jour, 9 % de croissance projetée", es: "Aprendizaje de 5 años — pagado desde el primer día, 9% de crecimiento proyectado", pt: "Aprendizagem de 5 anos — pago desde o primeiro dia, 9% de crescimento projetado" },
    why: { en: "No degree, earn while you learn, one of the fastest-growing trades in the US. Foreign electrical experience may qualify you to enter at a higher apprenticeship level.", ht: "San diplòm, touche pandan w aprann, youn nan metye ki grandi pi vit. Eksperyans elektrik etranje ka ba ou aksè nan yon nivo apwantisaj pi wo.", fr: "Sans diplôme, gagnez en apprenant, l'un des métiers qui croît le plus vite. L'expérience électrique étrangère peut vous qualifier pour un niveau d'apprentissage plus élevé.", es: "Sin título, gana mientras aprendes, uno de los oficios que más crece. La experiencia eléctrica extranjera puede calificarte para entrar a un nivel más alto.", pt: "Sem diploma, ganhe enquanto aprende, um dos ofícios que mais cresce. A experiência elétrica estrangeira pode qualificá-lo para um nível mais alto." },
    pathway: null,
    weights: { build: 3, yes: 2, train: 2, road: 1 }
  },
  {
    id: 'plumber',
    name: { en: "Plumber / HVAC Technician", ht: "Plonbye / Teknis HVAC", fr: "Plombier / Technicien CVC", es: "Plomero/a / Técnico/a HVAC", pt: "Encanador(a) / Técnico(a) de HVAC" },
    income: { en: "Plumber mean $72,170/yr · HVAC mean $68,120/yr (BLS, May 2025)", ht: "Plonbye mwayen $72,170/ane · HVAC mwayen $68,120/ane (BLS, Me 2025)", fr: "Plombier moyen 72 170 $/an · HVAC moyen 68 120 $/an (BLS, mai 2025)", es: "Plomero promedio $72,170/año · HVAC promedio $68,120/año (BLS, mayo 2025)", pt: "Encanador médio US$72.170/ano · HVAC médio US$68.120/ano (BLS, maio 2025)" },
    start: { en: "Apprenticeship 4-5 years — paid from day one, strong demand", ht: "Apwantisaj 4-5 ane — peye depi premye jou, demann solid", fr: "Apprentissage 4-5 ans — payé dès le premier jour, forte demande", es: "Aprendizaje 4-5 años — pagado desde el primer día, fuerte demanda", pt: "Aprendizagem 4-5 anos — pago desde o primeiro dia, forte demanda" },
    why: { en: "Two of the highest-paying trades in the US. Chronic worker shortage means strong job security. Foreign plumbing or HVAC experience may count toward your apprenticeship level.", ht: "De nan metye ki pi peye. Pénuri travayè vle di sekirite travay solid. Eksperyans plonbri oswa HVAC etranje ka konte pou nivo apwantisaj ou.", fr: "Deux des métiers les mieux payés aux États-Unis. La pénurie de travailleurs signifie une forte sécurité d'emploi. L'expérience étrangère peut compter pour votre niveau d'apprentissage.", es: "Dos de los oficios mejor pagados. La escasez de trabajadores significa fuerte seguridad laboral. La experiencia extranjera puede contar para tu nivel de aprendizaje.", pt: "Dois dos ofícios mais bem pagos. A escassez de trabalhadores significa forte segurança no emprego. A experiência estrangeira pode contar para o seu nível de aprendizagem." },
    pathway: null,
    weights: { build: 3, yes: 2, train: 2, road: 1 }
  },
  {
    id: 'security',
    name: { en: "Security Guard", ht: "Gadyen Sekirite", fr: "Agent de sécurité", es: "Guardia de seguridad", pt: "Guarda de segurança" },
    income: { en: "Median: $42,470/yr (BLS, May 2025)", ht: "Medyàn: $42,470/ane (BLS, Me 2025)", fr: "Médiane : 42 470 $/an (BLS, mai 2025)", es: "Mediano: $42,470/año (BLS, mayo 2025)", pt: "Mediano: US$42.470/ano (BLS, maio 2025)" },
    start: { en: "Start in weeks — MA requires a license but training is short", ht: "Kòmanse nan kèk semèn — MA mande yon lisans men fòmasyon an kout", fr: "Commencez en quelques semaines — le MA exige une licence mais la formation est courte", es: "Empieza en semanas — MA exige una licencia pero la formación es corta", pt: "Comece em semanas — MA exige uma licença mas o treinamento é curto" },
    why: { en: "One of the most accessible entry paths. Many employers sponsor the licensing. Bilingual guards are in high demand at hospitals, universities, and government buildings.", ht: "Youn nan chemen antre ki pi aksesib. Anpil anplwayè patwone lisans lan. Gadyen bileng an gwo demann nan lopital, inivèsite, ak bilding gouvènman.", fr: "L'un des parcours les plus accessibles. Beaucoup d'employeurs parrainent la licence. Les agents bilingues sont très demandés dans les hôpitaux, universités et bâtiments gouvernementaux.", es: "Uno de los caminos de entrada más accesibles. Muchos empleadores patrocinan la licencia. Los guardias bilingües tienen alta demanda en hospitales, universidades y edificios gubernamentales.", pt: "Um dos caminhos de entrada mais acessíveis. Muitos empregadores patrocinam a licença. Guardas bilíngues têm alta demanda em hospitais, universidades e prédios governamentais." },
    pathway: null,
    weights: { safety: 3, yes: 2, now: 2, light: 1, office: 1 }
  },
  {
    id: 'paralegal',
    name: { en: "Paralegal / Legal Assistant", ht: "Paralegal / Asistan Legal", fr: "Parajuriste / Assistant juridique", es: "Paralegal / Asistente legal", pt: "Paralegal / Assistente jurídico(a)" },
    income: { en: "MA median ~$75,000/yr (BLS 2024) — among highest-paid states for paralegals", ht: "Medyàn MA ~$75,000/ane (BLS 2024) — youn nan eta ki pi peye pou paralegal", fr: "Médiane MA ~75 000 $/an (BLS 2024) — parmi les États les mieux payés pour les parajuristes", es: "Mediano MA ~$75,000/año (BLS 2024) — entre los estados mejor pagados para paralegales", pt: "Mediano MA ~US$75.000/ano (BLS 2024) — entre os estados mais bem pagados para paralegais" },
    start: { en: "Certificate in ~1 year or on-the-job training — no law degree needed", ht: "Sètifika nan ~1 ane oswa fòmasyon nan travay — pa bezwen diplòm lwa", fr: "Certificat en ~1 an ou formation sur le tas — aucun diplôme en droit requis", es: "Certificado en ~1 año o formación en el trabajo — sin título de derecho", pt: "Certificado em ~1 ano ou treinamento no trabalho — sem diploma de direito" },
    why: { en: "The realistic legal path for anyone interested in law — including foreign-trained lawyers. Foreign law degrees don't transfer directly to US bar admission, but paralegal work is open, well-paid in Boston, and builds real legal experience.", ht: "Chemen legal reyalis pou nenpòt moun ki enterese nan lwa — enkli avoka fòme aletranje. Diplòm lwa etranje pa transfere dirèkteman pou ba Etazini, men travay paralegal ouvè, byen peye nan Boston, epi bati eksperyans legal.", fr: "Le parcours juridique réaliste pour toute personne intéressée par le droit — y compris les avocats formés à l'étranger. Les diplômes juridiques étrangers ne se transfèrent pas directement au barreau américain, mais le travail de parajuriste est ouvert, bien payé à Boston, et construit une vraie expérience juridique.", es: "El camino legal realista para cualquiera interesado en el derecho — incluidos los abogados formados en el extranjero. Los títulos de derecho extranjeros no se transfieren al colegio de abogados de EE.UU., pero el trabajo paralegal es accesible, bien pagado en Boston, y construye experiencia legal real.", pt: "O caminho jurídico realista para qualquer pessoa interessada em direito — incluindo advogados formados no exterior. Diplomas de direito estrangeiros não se transferem para a OAB dos EUA, mas o trabalho paralegal é acessível, bem pago em Boston, e constrói experiência jurídica real." },
    pathway: null,
    weights: { law: 3, detail: 2, office: 2, light: 1, train: 1 }
  },
  {
    id: 'bookkeeper',
    name: { en:"Bookkeeper / Accountant",ht:"Kontab / Kontablè",fr:"Comptable / Gestionnaire financier",es:"Contador / Gestor financiero",pt:"Contador / Gestor financeiro"},
    income: { en:"Bookkeeper median: $49,210/yr · Accountant median: $81,680/yr · Boston area pays above national median (BLS May 2024)",ht:"Medyàn kontab: $49,210/ane · Medyàn kontablè: $81,680/ane · Boston peye pi wo pase medyàn nasyonal (BLS Me 2024)",fr:"Médiane comptable : 49 210 $/an · Médiane comptable : 81 680 $/an · Zone Boston : au-dessus de la médiane nationale (BLS mai 2024)",es:"Mediano contador: $49,210/año · Mediano contable: $81,680/año · Área de Boston: por encima de la mediana nacional (BLS mayo 2024)",pt:"Mediano contador: US$49.210/ano · Mediano contábil: US$81.680/ano · Área de Boston: acima da mediana nacional (BLS maio 2024)"},
    start: { en:"Bookkeeper: start in months with foreign business degree + QuickBooks · CPA: 2-3 years including exam",ht:"Kontab: kòmanse nan kèk mwa ak diplòm biznis etranje + QuickBooks · CPA: 2-3 ane enkli egzamen",fr:"Comptable : commencez en quelques mois avec diplôme étranger + QuickBooks · CPA : 2-3 ans incluant l'examen",es:"Contador: empieza en meses con título extranjero + QuickBooks · CPA: 2-3 años incluyendo el examen",pt:"Contador: comece em meses com diploma estrangeiro + QuickBooks · CPA: 2-3 anos incluindo o exame"},
    why: { en:"Your foreign degree in gestión, comptabilité, administração, or contabilidad transfers directly into U.S. bookkeeping and accounting roles — no re-credentialing at the entry level. A clear ladder exists: bookkeeper → accountant → licensed CPA.",ht:"Diplòm etranje ou nan kontablite oswa administrasyon biznis transfere dirèkteman nan wòl kontablite Ameriken. Yon echèl klè egziste: kontab → kontablè → CPA lisansye.",fr:"Votre diplôme étranger en gestion ou comptabilité se transfère directement dans les rôles comptables américains sans re-accréditation au niveau débutant. Progression claire : comptable → gestionnaire → CPA agréé.",es:"Tu título extranjero en administración o contabilidad se transfiere directamente a roles contables de EE.UU. sin re-certificación inicial. Escalera clara: contador → contable → CPA con licencia.",pt:"Seu diploma estrangeiro em administração ou contabilidade se transfere diretamente para cargos contábeis nos EUA sem re-credenciamento inicial. Escada clara: contador → contábil → CPA licenciado."},
    pathway: 'accounting',
    weights: { detail: 3, office: 3, light: 2, train: 1 }
  },
  {
    id: 'socialworker',
    name: { en: "Social Worker / Case Manager", ht: "Travayè Sosyal / Manadjè Ka", fr: "Travailleur social / Gestionnaire de cas", es: "Trabajador/a social / Gestor/a de casos", pt: "Assistente social / Gestor(a) de casos" },
    income: { en: "Community/social service median: ~$49,350/yr · Licensed MSW: $60K–$80K+ (BLS 2024)", ht: "Medyàn sèvis sosyal: ~$49,350/ane · MSW lisansye: $60K–$80K+ (BLS 2024)", fr: "Médiane services communautaires : ~49 350 $/an · MSW diplômé : 60K–80K$ + (BLS 2024)", es: "Mediano servicios sociales: ~$49,350/año · MSW licenciado: $60K–$80K+ (BLS 2024)", pt: "Mediano serviços sociais: ~US$49.350/ano · MSW licenciado: US$60K–80K+ (BLS 2024)" },
    start: { en: "Community aide: start quickly. Licensed Social Worker (LCSW): bachelor's or master's required", ht: "Èd kominotè: kòmanse vit. Travayè Sosyal Lisansye (LCSW): bezwen bachelor oswa master", fr: "Aide communautaire : commencez vite. Travailleur social certifié (LCSW) : licence ou master requis", es: "Auxiliar comunitario: empieza rápido. Trabajador social licenciado (LCSW): licenciatura o maestría requerida", pt: "Auxiliar comunitário: comece rápido. Assistente social licenciado (LCSW): bacharelado ou mestrado necessário" },
    why: { en: "Immigrant communities urgently need case workers who speak their languages and understand their realities. Your lived experience as an immigrant is a genuine professional asset here.", ht: "Kominote imigran bezwen ijan travayè ka ki pale lang yo ak konprann reyalite yo. Eksperyans ou kòm imigran se yon atou pwofesyonèl reyèl isit.", fr: "Les communautés immigrantes ont un besoin urgent de travailleurs sociaux qui parlent leurs langues et comprennent leurs réalités. Votre expérience vécue en tant qu'immigrant est un véritable atout professionnel.", es: "Las comunidades inmigrantes necesitan urgentemente trabajadores de casos que hablen sus idiomas y entiendan sus realidades. Tu experiencia vivida como inmigrante es un activo profesional genuino aquí.", pt: "As comunidades imigrantes precisam urgentemente de assistentes sociais que falem seus idiomas e entendam suas realidades. Sua experiência vivida como imigrante é um ativo profissional genuíno aqui." },
    pathway: null,
    weights: { public: 3, care: 2, kids: 1, light: 2, train: 1 }
  },
  {
    id: 'govworker',
    name: { en: "Government / Municipal Worker", ht: "Travayè Gouvènman / Minisipal", fr: "Agent gouvernemental / municipal", es: "Trabajador/a gubernamental / municipal", pt: "Servidor(a) público(a) / municipal" },
    income: { en: "Wide range — many MA state/municipal jobs open to permanent residents: $40K–$80K+", ht: "Gam laj — anpil travay eta/minisipal MA ouvè pou rezidan pèmanan: $40K–$80K+", fr: "Large gamme — beaucoup de postes MA ouverts aux résidents permanents : 40K–80K$+", es: "Amplio rango — muchos empleos estatales/municipales de MA abiertos a residentes permanentes: $40K–$80K+", pt: "Ampla faixa — muitos empregos estaduais/municipais de MA abertos a residentes permanentes: US$40K–80K+" },
    start: { en: "Varies by role — many entry positions open to permanent residents (not citizenship required)", ht: "Varye selon wòl — anpil pòs antre ouvè pou rezidan pèmanan (pa bezwen sitwayennete)", fr: "Varie selon le poste — beaucoup de postes d'entrée ouverts aux résidents permanents", es: "Varía según el rol — muchos puestos de entrada abiertos a residentes permanentes (sin necesidad de ciudadanía)", pt: "Varia por função — muitas posições de entrada abertas a residentes permanentes (sem necessidade de cidadania)" },
    why: { en: "Strong benefits, job security, and pension. Important: federal jobs above certain levels require US citizenship, but many MA state and city jobs do not. Always check the specific posting for citizenship requirements.", ht: "Avantaj solid, sekirite travay, ak pansyon. Enpòtan: travay federal nan sèten nivo mande sitwayennete Ameriken, men anpil travay eta ak lavil MA pa mande li. Toujou tcheke pòs la pou egzijans sitwayennete.", fr: "Avantages solides, sécurité et retraite. Important : les emplois fédéraux au-dessus de certains niveaux exigent la citoyenneté, mais beaucoup d'emplois d'État et municipaux du MA ne l'exigent pas. Vérifiez toujours l'offre spécifique.", es: "Buenos beneficios, seguridad laboral y pensión. Importante: los empleos federales por encima de ciertos niveles requieren ciudadanía, pero muchos empleos estatales y municipales de MA no. Siempre revisa la oferta específica.", pt: "Bons benefícios, segurança no emprego e aposentadoria. Importante: empregos federais acima de certos níveis exigem cidadania, mas muitos empregos estaduais e municipais de MA não exigem. Sempre verifique o anúncio específico." },
    pathway: null,
    weights: { public: 3, detail: 2, light: 2, train: 1, safety: 1 }
  },
  {
    id: 'phlebotomist',
    name: { en: "Phlebotomist", ht: "Flebotomis (Pran San)", fr: "Phlébotomiste (Préleveur)", es: "Flebotomista", pt: "Flebotomista" },
    income: { en: "Median pay: $43,660/yr (BLS, May 2024)", ht: "Salè medyàn: $43,660/ane (BLS, Me 2024)", fr: "Salaire médian : 43 660 $/an (BLS, mai 2024)", es: "Salario mediano: $43,660/año (BLS, mayo 2024)", pt: "Salário mediano: US$43.660/ano (BLS, maio 2024)" },
    start: { en: "Certificate program in as little as 4-8 weeks", ht: "Pwogram sètifika nan 4-8 semèn sèlman", fr: "Programme de certificat en 4-8 semaines seulement", es: "Programa de certificado en tan solo 4-8 semanas", pt: "Programa de certificado em apenas 4-8 semanas" },
    why: { en: "One of the fastest doors into healthcare — draw blood in hospitals and labs, with ~18,400 openings a year and a clear bridge to other medical careers.", ht: "Youn nan pòt ki pi rapid pou antre nan swen sante — pran san nan lopital ak laboratwa, ak ~18,400 pòs pa ane ak yon pon klè pou lòt karyè medikal.", fr: "L'une des portes les plus rapides vers la santé — prélèvements en hôpitaux et laboratoires, ~18 400 postes par an et une passerelle claire vers d'autres carrières médicales.", es: "Una de las puertas más rápidas a la salud — extraer sangre en hospitales y laboratorios, con ~18,400 vacantes al año y un puente claro a otras carreras médicas.", pt: "Uma das portas mais rápidas para a saúde — coleta de sangue em hospitais e laboratórios, com ~18.400 vagas por ano e uma ponte clara para outras carreiras médicas." },
    pathway: null,
    weights: { care: 3, health: 3, now: 2, months: 2, light: 1 }
  },
  {
    id: 'dentassist',
    name: { en: "Dental Assistant", ht: "Asistan Dantis", fr: "Assistant(e) dentaire", es: "Asistente dental", pt: "Auxiliar de dentista" },
    income: { en: "Median pay: $47,300/yr (BLS, May 2024)", ht: "Salè medyàn: $47,300/ane (BLS, Me 2024)", fr: "Salaire médian : 47 300 $/an (BLS, mai 2024)", es: "Salario mediano: $47,300/año (BLS, mayo 2024)", pt: "Salário mediano: US$47.300/ano (BLS, maio 2024)" },
    start: { en: "Some roles start with on-the-job training — ~52,900 openings/yr", ht: "Kèk wòl kòmanse ak fòmasyon sou travay la — ~52,900 pòs/ane", fr: "Certains postes commencent par une formation sur le tas — ~52 900 postes/an", es: "Algunos puestos empiezan con capacitación en el trabajo — ~52,900 vacantes/año", pt: "Algumas funções começam com treinamento no trabalho — ~52.900 vagas/ano" },
    why: { en: "Pays above most healthcare support jobs, regular office hours, and growing 6% — faster than average.", ht: "Peye plis pase pifò travay sipò sante, orè biwo regilye, epi ap grandi 6% — pi vit pase mwayèn.", fr: "Mieux payé que la plupart des emplois de soutien en santé, horaires réguliers, et croissance de 6 % — plus rapide que la moyenne.", es: "Paga más que la mayoría de los trabajos de apoyo en salud, horario regular, y crece 6% — más rápido que el promedio.", pt: "Paga mais que a maioria dos empregos de apoio à saúde, horário regular, e cresce 6% — mais rápido que a média." },
    pathway: null,
    weights: { care: 2, health: 3, months: 2, light: 2 }
  },
  {
    id: 'pharmtech',
    name: { en: "Pharmacy Technician", ht: "Teknisyen Famasi", fr: "Technicien(ne) en pharmacie", es: "Técnico/a de farmacia", pt: "Técnico(a) de farmácia" },
    income: { en: "Median pay: about $44,000/yr (BLS, May 2024)", ht: "Salè medyàn: apeprè $44,000/ane (BLS, Me 2024)", fr: "Salaire médian : environ 44 000 $/an (BLS, mai 2024)", es: "Salario mediano: unos $44,000/año (BLS, mayo 2024)", pt: "Salário mediano: cerca de US$44.000/ano (BLS, maio 2024)" },
    start: { en: "Train on the job or via short certificate programs", ht: "Fòme sou travay la oswa nan pwogram sètifika kout", fr: "Formation sur le tas ou via de courts programmes de certificat", es: "Capacítate en el trabajo o con programas cortos de certificado", pt: "Treine no trabalho ou em programas curtos de certificado" },
    why: { en: "Steady work in pharmacies and hospitals, climate-controlled setting, and a natural step toward pharmacy careers.", ht: "Travay estab nan famasi ak lopital, anviwònman konfòtab, ak yon etap natirèl pou karyè famasi.", fr: "Travail stable en pharmacie et hôpital, environnement confortable, et une étape naturelle vers les carrières pharmaceutiques.", es: "Trabajo estable en farmacias y hospitales, ambiente cómodo, y un paso natural hacia carreras farmacéuticas.", pt: "Trabalho estável em farmácias e hospitais, ambiente confortável, e um passo natural para carreiras farmacêuticas." },
    pathway: null,
    weights: { care: 2, detail: 2, health: 2, office: 2, months: 2, light: 2 }
  },
  {
    id: 'hvac',
    name: { en: "HVAC Technician", ht: "Teknisyen HVAC (Chofaj/Klimatizasyon)", fr: "Technicien(ne) CVC (chauffage/climatisation)", es: "Técnico/a de HVAC (climatización)", pt: "Técnico(a) de HVAC (climatização)" },
    income: { en: "Median pay: $59,810/yr (BLS, May 2024)", ht: "Salè medyàn: $59,810/ane (BLS, Me 2024)", fr: "Salaire médian : 59 810 $/an (BLS, mai 2024)", es: "Salario mediano: $59,810/año (BLS, mayo 2024)", pt: "Salário mediano: US$59.810/ano (BLS, maio 2024)" },
    start: { en: "Trade school or apprenticeship — earn while you learn", ht: "Lekòl metye oswa aprantisaj — touche pandan w ap aprann", fr: "École de métiers ou apprentissage — gagnez en apprenant", es: "Escuela de oficios o aprendizaje — gana mientras aprendes", pt: "Escola técnica ou aprendizado — ganhe enquanto aprende" },
    why: { en: "Growing 8% — much faster than average — with ~40,100 openings a year and top earners above $91,000. Cold winters and hot summers keep demand year-round.", ht: "Ap grandi 8% — pi vit anpil pase mwayèn — ak ~40,100 pòs pa ane ak pi gwo salè depase $91,000. Ivè frèt ak ete cho kenbe demann tout ane a.", fr: "Croissance de 8 % — bien plus rapide que la moyenne — avec ~40 100 postes par an et les mieux payés au-dessus de 91 000 $. Hivers froids et étés chauds maintiennent la demande toute l'année.", es: "Crece 8% — mucho más rápido que el promedio — con ~40,100 vacantes al año y los mejores sueldos sobre $91,000. Inviernos fríos y veranos calurosos mantienen la demanda todo el año.", pt: "Cresce 8% — muito mais rápido que a média — com ~40.100 vagas por ano e os maiores salários acima de US$91.000. Invernos frios e verões quentes mantêm a demanda o ano todo." },
    pathway: null,
    weights: { build: 3, road: 2, train: 2, yes: 2, months: 1 }
  },
  {
    id: 'welder',
    name: { en: "Welder", ht: "Soudè", fr: "Soudeur/Soudeuse", es: "Soldador/a", pt: "Soldador(a)" },
    income: { en: "Median pay: $51,000/yr (BLS, May 2024)", ht: "Salè medyàn: $51,000/ane (BLS, Me 2024)", fr: "Salaire médian : 51 000 $/an (BLS, mai 2024)", es: "Salario mediano: $51,000/año (BLS, mayo 2024)", pt: "Salário mediano: US$51.000/ano (BLS, maio 2024)" },
    start: { en: "Certificate programs in months — ~45,600 openings/yr", ht: "Pwogram sètifika nan kèk mwa — ~45,600 pòs/ane", fr: "Programmes de certificat en quelques mois — ~45 600 postes/an", es: "Programas de certificado en meses — ~45,600 vacantes/año", pt: "Programas de certificado em meses — ~45.600 vagas/ano" },
    why: { en: "A hands-on skill the country's aging bridges and buildings depend on — top 10% earn over $75,850, and skilled welders can work anywhere.", ht: "Yon konpetans pratik pon ak bilding peyi a depann sou li — top 10% touche plis pase $75,850, epi soudè kalifye ka travay nenpòt kote.", fr: "Une compétence pratique dont dépendent les ponts et bâtiments vieillissants du pays — le top 10 % gagne plus de 75 850 $, et les soudeurs qualifiés peuvent travailler partout.", es: "Una habilidad práctica de la que dependen los puentes y edificios del país — el 10% superior gana más de $75,850, y los soldadores calificados pueden trabajar en cualquier lugar.", pt: "Uma habilidade prática da qual dependem as pontes e edifícios do país — os 10% melhores ganham mais de US$75.850, e soldadores qualificados podem trabalhar em qualquer lugar." },
    pathway: null,
    weights: { build: 3, train: 2, yes: 2, road: 1, months: 2 }
  },
  {
    id: 'automech',
    name: { en: "Auto Mechanic / Service Technician", ht: "Mekanisyen Otomobil", fr: "Mécanicien(ne) automobile", es: "Mecánico/a automotriz", pt: "Mecânico(a) de automóveis" },
    income: { en: "Median pay: $49,670/yr (BLS, May 2024)", ht: "Salè medyàn: $49,670/ane (BLS, Me 2024)", fr: "Salaire médian : 49 670 $/an (BLS, mai 2024)", es: "Salario mediano: $49,670/año (BLS, mayo 2024)", pt: "Salário mediano: US$49.670/ano (BLS, maio 2024)" },
    start: { en: "Start in a shop and build skills — ~70,000 openings/yr", ht: "Kòmanse nan yon atelye epi devlope konpetans — ~70,000 pòs/ane", fr: "Commencez dans un atelier et développez vos compétences — ~70 000 postes/an", es: "Empieza en un taller y desarrolla habilidades — ~70,000 vacantes/año", pt: "Comece em uma oficina e desenvolva habilidades — ~70.000 vagas/ano" },
    why: { en: "If you fixed cars back home, that skill travels with you — ASE certifications turn experience into higher pay, and top earners pass $80,850.", ht: "Si ou te ranje machin lakay ou, konpetans sa a vwayaje avè w — sètifikasyon ASE fè eksperyans tounen pi gwo salè, epi pi gwo salè depase $80,850.", fr: "Si vous répariez des voitures dans votre pays, cette compétence voyage avec vous — les certifications ASE transforment l'expérience en meilleur salaire, et les mieux payés dépassent 80 850 $.", es: "Si arreglabas autos en tu país, esa habilidad viaja contigo — las certificaciones ASE convierten la experiencia en mejor pago, y los mejores superan $80,850.", pt: "Se você consertava carros no seu país, essa habilidade viaja com você — as certificações ASE transformam experiência em melhor salário, e os melhores ultrapassam US$80.850." },
    pathway: null,
    weights: { build: 3, move: 2, months: 2, yes: 2, road: 1 }
  },
  {
    id: 'solar',
    name: { en: "Solar Panel Installer", ht: "Enstalatè Panno Solè", fr: "Installateur/Installatrice de panneaux solaires", es: "Instalador/a de paneles solares", pt: "Instalador(a) de painéis solares" },
    income: { en: "Median pay: $51,860/yr (BLS, May 2024)", ht: "Salè medyàn: $51,860/ane (BLS, Me 2024)", fr: "Salaire médian : 51 860 $/an (BLS, mai 2024)", es: "Salario mediano: $51,860/año (BLS, mayo 2024)", pt: "Salário mediano: US$51.860/ano (BLS, maio 2024)" },
    start: { en: "Most learn on the job — no degree required", ht: "Pifò aprann sou travay la — pa bezwen diplòm", fr: "La plupart apprennent sur le tas — aucun diplôme requis", es: "La mayoría aprende en el trabajo — sin título requerido", pt: "A maioria aprende no trabalho — sem diploma necessário" },
    why: { en: "The fastest-growing trade in America — projected to grow 42% by 2034. Get in early on an industry that's expanding everywhere.", ht: "Metye k ap grandi pi vit Ozetazini — pwojte pou grandi 42% rive 2034. Antre bonè nan yon endistri k ap elaji toupatou.", fr: "Le métier qui croît le plus vite en Amérique — croissance prévue de 42 % d'ici 2034. Entrez tôt dans une industrie en pleine expansion.", es: "El oficio de más rápido crecimiento en Estados Unidos — se proyecta crecer 42% para 2034. Entra temprano a una industria en expansión.", pt: "O ofício que mais cresce nos Estados Unidos — projeção de crescimento de 42% até 2034. Entre cedo em uma indústria em expansão." },
    pathway: null,
    weights: { build: 3, road: 3, yes: 3, now: 1, months: 2 }
  },
  {
    id: 'itsupport',
    name: { en: "IT Support Specialist", ht: "Espesyalis Sipò Enfòmatik", fr: "Spécialiste du support informatique", es: "Especialista de soporte de TI", pt: "Especialista de suporte de TI" },
    income: { en: "Median pay: $60,340/yr (BLS, May 2024)", ht: "Salè medyàn: $60,340/ane (BLS, Me 2024)", fr: "Salaire médian : 60 340 $/an (BLS, mai 2024)", es: "Salario mediano: $60,340/año (BLS, mayo 2024)", pt: "Salário mediano: US$60.340/ano (BLS, maio 2024)" },
    start: { en: "Entry certificates (CompTIA A+, Google IT) in 3-6 months — no degree needed", ht: "Sètifika antre (CompTIA A+, Google IT) nan 3-6 mwa — pa bezwen diplòm", fr: "Certificats d'entrée (CompTIA A+, Google IT) en 3-6 mois — sans diplôme", es: "Certificados de entrada (CompTIA A+, Google IT) en 3-6 meses — sin título", pt: "Certificados de entrada (CompTIA A+, Google IT) em 3-6 meses — sem diploma" },
    why: { en: "Office work with strong pay and ~50,500 openings a year — help desk roles are the classic first rung into the tech industry.", ht: "Travay biwo ak bon salè ak ~50,500 pòs pa ane — wòl help desk se premye baro klasik pou antre nan endistri teknoloji a.", fr: "Travail de bureau bien payé avec ~50 500 postes par an — le help desk est le premier échelon classique vers l'industrie technologique.", es: "Trabajo de oficina bien pagado con ~50,500 vacantes al año — los puestos de help desk son el primer peldaño clásico hacia la industria tecnológica.", pt: "Trabalho de escritório bem pago com ~50.500 vagas por ano — funções de help desk são o primeiro degrau clássico para a indústria de tecnologia." },
    pathway: null,
    weights: { detail: 3, office: 3, train: 2, light: 2, months: 2 }
  },
  {
    id: 'interpreter',
    name: { en: "Interpreter / Translator", ht: "Entèprèt / Tradiktè", fr: "Interprète / Traducteur(-trice)", es: "Intérprete / Traductor(a)", pt: "Intérprete / Tradutor(a)" },
    income: { en: "Median pay: $59,440/yr (BLS, May 2024)", ht: "Salè medyàn: $59,440/ane (BLS, Me 2024)", fr: "Salaire médian : 59 440 $/an (BLS, mai 2024)", es: "Salario mediano: $59,440/año (BLS, mayo 2024)", pt: "Salário mediano: US$59.440/ano (BLS, maio 2024)" },
    start: { en: "Your languages ARE the qualification — court/medical certification adds pay", ht: "Lang ou yo SE kalifikasyon an — sètifikasyon tribinal/medikal ogmante salè", fr: "Vos langues SONT la qualification — la certification judiciaire/médicale augmente le salaire", es: "Tus idiomas SON la calificación — la certificación judicial/médica aumenta el pago", pt: "Seus idiomas SÃO a qualificação — certificação judicial/médica aumenta o salário" },
    why: { en: "The one career where being bilingual isn't just an asset — it's the whole job. Hospitals, courts, and schools pay for exactly what you already have. Top 10% earn over $99,830.", ht: "Sèl karyè kote pale de lang pa jis yon avantaj — se tout travay la. Lopital, tribinal, ak lekòl peye pou egzakteman sa ou deja genyen. Top 10% touche plis pase $99,830.", fr: "La seule carrière où être bilingue n'est pas juste un atout — c'est tout le métier. Hôpitaux, tribunaux et écoles paient pour exactement ce que vous avez déjà. Le top 10 % gagne plus de 99 830 $.", es: "La única carrera donde ser bilingüe no es solo una ventaja — es todo el trabajo. Hospitales, tribunales y escuelas pagan por exactamente lo que ya tienes. El 10% superior gana más de $99,830.", pt: "A única carreira onde ser bilíngue não é apenas uma vantagem — é o trabalho inteiro. Hospitais, tribunais e escolas pagam exatamente pelo que você já tem. Os 10% melhores ganham mais de US$99.830." },
    pathway: null,
    weights: { public: 2, law: 2, community: 2, office: 2, detail: 1, months: 2, light: 2, kids: 1, care: 1 }
  },
  {
    id: 'barber',
    name: { en: "Barber", ht: "Kwafè (Babye)", fr: "Barbier/Barbière", es: "Barbero/a", pt: "Barbeiro(a)" },
    income: { en: "Income varies — many barbers build their own client base and set their own schedule", ht: "Revni varye — anpil kwafè bati pwòp kliyantèl yo epi fikse pwòp orè yo", fr: "Revenus variables — beaucoup de barbiers construisent leur clientèle et fixent leur horaire", es: "Ingresos variables — muchos barberos construyen su clientela y fijan su horario", pt: "Renda variável — muitos barbeiros constroem sua clientela e definem seu horário" },
    start: { en: "Licensed trade — barber programs are shorter than full cosmetology", ht: "Metye ak lisans — pwogram kwafè pi kout pase kosmetoloji konplè", fr: "Métier licencié — les programmes de barbier sont plus courts que la cosmétologie complète", es: "Oficio con licencia — los programas de barbería son más cortos que la cosmetología completa", pt: "Ofício licenciado — programas de barbeiro são mais curtos que cosmetologia completa" },
    why: { en: "A chair in the right neighborhood is a business of your own — barbershops are community anchors, and your community may already be your clientele.", ht: "Yon chèz nan bon katye a se yon biznis pou ou menm — babye se poto kominote, epi kominote ou ka deja kliyantèl ou.", fr: "Une chaise dans le bon quartier, c'est votre propre entreprise — les salons de barbier sont des piliers communautaires, et votre communauté peut déjà être votre clientèle.", es: "Una silla en el barrio correcto es tu propio negocio — las barberías son anclas comunitarias, y tu comunidad puede ya ser tu clientela.", pt: "Uma cadeira no bairro certo é o seu próprio negócio — barbearias são âncoras comunitárias, e sua comunidade pode já ser sua clientela." },
    pathway: 'cosmetology',
    weights: { beauty: 3, now: 1, yes: 2, months: 2 }
  },
  {
    id: 'baker',
    name: { en: "Baker", ht: "Boulanje", fr: "Boulanger/Boulangère", es: "Panadero/a", pt: "Padeiro(a)" },
    income: { en: "Income varies by employer — specialty and artisan bakers earn more", ht: "Revni varye selon anplwayè — boulanje espesyalite ak atizanal touche plis", fr: "Revenus variables selon l'employeur — les boulangers artisanaux gagnent plus", es: "Ingresos varían según el empleador — panaderos artesanales ganan más", pt: "Renda varia por empregador — padeiros artesanais ganham mais" },
    start: { en: "Start now — most bakers learn on the job, no license required", ht: "Kòmanse kounye a — pifò boulanje aprann sou travay la, pa bezwen lisans", fr: "Commencez maintenant — la plupart apprennent sur le tas, aucune licence requise", es: "Empieza ahora — la mayoría aprende en el trabajo, sin licencia", pt: "Comece agora — a maioria aprende no trabalho, sem licença" },
    why: { en: "Bread from home sells — bakeries with authentic recipes from your country stand out, and baking skills can grow into your own food business.", ht: "Pen lakay vann — boulanjri ak resèt otantik peyi ou fè diferans, epi konpetans boulanjri ka grandi vin pwòp biznis manje ou.", fr: "Le pain du pays se vend — les boulangeries aux recettes authentiques de votre pays se démarquent, et ces compétences peuvent devenir votre propre entreprise alimentaire.", es: "El pan de tu tierra se vende — las panaderías con recetas auténticas de tu país destacan, y estas habilidades pueden crecer hasta tu propio negocio de comida.", pt: "O pão da sua terra vende — padarias com receitas autênticas do seu país se destacam, e essas habilidades podem virar seu próprio negócio de comida." },
    pathway: null,
    weights: { food: 3, now: 2, yes: 2, months: 1 }
  },
  {
    id: 'chw',
    name: { en: "Community Health Worker", ht: "Ajan Sante Kominotè", fr: "Agent(e) de santé communautaire", es: "Promotor(a) de salud comunitaria", pt: "Agente comunitário(a) de saúde" },
    income: { en: "Pay varies by organization — often hospital- or nonprofit-based with benefits", ht: "Salè varye selon òganizasyon — souvan nan lopital oswa san bi likratif ak avantaj", fr: "Salaire variable selon l'organisation — souvent en hôpital ou OBNL avec avantages", es: "Pago varía según la organización — a menudo en hospitales u ONG con beneficios", pt: "Salário varia por organização — geralmente em hospitais ou ONGs com benefícios" },
    start: { en: "Short certificate programs — your community connection is the core qualification", ht: "Pwogram sètifika kout — koneksyon kominotè ou se kalifikasyon prensipal la", fr: "Programmes de certificat courts — votre lien communautaire est la qualification principale", es: "Programas cortos de certificado — tu conexión comunitaria es la calificación principal", pt: "Programas curtos de certificado — sua conexão comunitária é a qualificação principal" },
    why: { en: "Hospitals and health centers hire people who speak the community's languages and have its trust — you may already be doing this work informally.", ht: "Lopital ak sant sante anboche moun ki pale lang kominote a epi ki gen konfyans li — ou ka deja ap fè travay sa a enfòmèlman.", fr: "Les hôpitaux et centres de santé embauchent des personnes qui parlent les langues de la communauté et ont sa confiance — vous faites peut-être déjà ce travail informellement.", es: "Los hospitales y centros de salud contratan a personas que hablan los idiomas de la comunidad y tienen su confianza — quizás ya haces este trabajo informalmente.", pt: "Hospitais e centros de saúde contratam pessoas que falam os idiomas da comunidade e têm sua confiança — você talvez já faça esse trabalho informalmente." },
    pathway: null,
    weights: { care: 2, public: 3, community: 3, months: 2, light: 1, health: 1 }
  },
  {
    id: 'busdriver',
    name: { en: "Bus Driver (School / Transit)", ht: "Chofè Bis (Lekòl / Transpò)", fr: "Chauffeur de bus (scolaire / transport)", es: "Conductor(a) de autobús (escolar / tránsito)", pt: "Motorista de ônibus (escolar / trânsito)" },
    income: { en: "Pay varies by district and system — many offer benefits and pensions", ht: "Salè varye selon distri ak sistèm — anpil ofri avantaj ak pansyon", fr: "Salaire variable selon le district — beaucoup offrent avantages et retraite", es: "Pago varía según el distrito — muchos ofrecen beneficios y pensión", pt: "Salário varia por distrito — muitos oferecem benefícios e aposentadoria" },
    start: { en: "Many school districts and transit systems sponsor your CDL-B training", ht: "Anpil distri lekòl ak sistèm transpò peye fòmasyon CDL-B ou", fr: "Beaucoup de districts scolaires et réseaux de transport financent votre formation CDL-B", es: "Muchos distritos escolares y sistemas de tránsito patrocinan tu capacitación CDL-B", pt: "Muitos distritos escolares e sistemas de trânsito patrocinam seu treinamento CDL-B" },
    why: { en: "Sponsored training means no upfront cost — school routes offer daytime hours and school-year schedules that work for parents.", ht: "Fòmasyon esponsorize vle di pa gen depans davans — wout lekòl ofri orè lajounen ak orè ane eskolè ki bon pou paran.", fr: "Formation financée = aucun coût initial — les circuits scolaires offrent des horaires de jour adaptés aux parents.", es: "Capacitación patrocinada significa sin costo inicial — las rutas escolares ofrecen horarios diurnos que funcionan para padres.", pt: "Treinamento patrocinado significa custo zero — rotas escolares oferecem horários diurnos que funcionam para pais." },
    pathway: 'cdl',
    weights: { move: 3, road: 3, kids: 1, school: 1, months: 2, yes: 1 }
  },
  {
    id: 'dispatcher',
    name: { en: "Dispatcher (911 / Transport)", ht: "Dispatchè (911 / Transpò)", fr: "Répartiteur(-trice) (911 / transport)", es: "Despachador(a) (911 / transporte)", pt: "Despachante (911 / transporte)" },
    income: { en: "Pay varies — public safety dispatch roles are often municipal jobs with benefits", ht: "Salè varye — wòl dispatch sekirite piblik souvan travay minisipal ak avantaj", fr: "Salaire variable — les postes de répartition en sécurité publique sont souvent municipaux avec avantages", es: "Pago varía — los puestos de despacho de seguridad pública suelen ser municipales con beneficios", pt: "Salário varia — funções de despacho de segurança pública costumam ser municipais com benefícios" },
    start: { en: "Paid on-the-job training — strong communication is the key skill", ht: "Fòmasyon peye sou travay la — bon kominikasyon se konpetans kle a", fr: "Formation rémunérée sur le tas — la communication est la compétence clé", es: "Capacitación pagada en el trabajo — la comunicación es la habilidad clave", pt: "Treinamento pago no trabalho — comunicação é a habilidade chave" },
    why: { en: "Serious, steady work coordinating help — being bilingual is a real advantage when callers can't explain their emergency in English.", ht: "Travay serye ak estab pou kowòdone èd — pale de lang se yon vrè avantaj lè moun k ap rele pa ka esplike ijans yo an Anglè.", fr: "Travail sérieux et stable pour coordonner les secours — être bilingue est un vrai avantage quand les appelants ne peuvent pas expliquer leur urgence en anglais.", es: "Trabajo serio y estable coordinando ayuda — ser bilingüe es una ventaja real cuando quienes llaman no pueden explicar su emergencia en inglés.", pt: "Trabalho sério e estável coordenando ajuda — ser bilíngue é uma vantagem real quando quem liga não consegue explicar a emergência em inglês." },
    pathway: null,
    weights: { safety: 3, detail: 2, office: 2, light: 2, months: 2, now: 1 }
  }
];
