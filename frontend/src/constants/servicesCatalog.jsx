import {
  IconTherapeuticTooth,
  IconVeneerTooth,
  IconToothCrown,
  IconDentalImplant,
  IconLaserWhitening,
  IconAtraumaticSurgery,
  IconDigitalXray,
} from "../components/MedicalIcons";
import { assets } from "../assets/assets";

export const SERVICES_CATALOG = [
  {
    id: "tish-davolash",
    icon: <IconTherapeuticTooth className="w-7 h-7" />,
    image: assets.service_therapy,
    category: { uz: "Terapiya va Endodontiya", ru: "Терапия и Эндодонтия", en: "Restorative & Endodontics" },
    title: {
      uz: "Og'riqsiz Tish Davolash va Fotopolimer Plombalar",
      ru: "Безболезненное Лечение Зубов и Нано-Пломбы",
      en: "Painless Tooth Decay & Root Canal Therapy",
    },
    shortDesc: {
      uz: "O'tkir tish og'rig'ini 1-qabuldayoq bartaraf etish, karies, pulpit va periodontitni mikroskopik aniqlikda davolash.",
      ru: "Снятие острой боли за 1 визит, лечение кариеса, пульпита и периодонтита с японскими и немецкими пломбами.",
      en: "Immediate toothache relief and precision treatment of cavities, pulpitis, and root canals using German & Japanese composites.",
    },
    aeoSummary: {
      uz: "Tish davolash (terapevtik stomatologiya) — karies, tish nervi shamollashi (pulpit) va ildiz kanali infeksiyasini tozalab, tishni asl funksiyasi hamda rangiga qaytaruvchi muolajadir. Andijonda Dr. Olimjon Murzajanov 2 bosqichli og'riqsiz anesteziya va Germaniya (3M Filtek), Yaponiya (Estelite) plombalari yordamida o'tkir kechki tish og'rig'ini birinchi tashrifdayoq butunlay to'xtatadi.",
      ru: "Терапевтическое лечение зубов — это устранение кариеса, воспаления нерва (пульпита) и инфекции каналов с анатомическим восстановлением зуба. В Андижане Д-р Олимжон Мурзажанов применяет двухэтапную анестезию без боли и оригинальные нанокомпозиты 3M Filtek (Германия) и Estelite (Япония), снимая острую боль уже на первом визите.",
      en: "Restorative dental therapy treats tooth decay, nerve inflammation (pulpitis), and root canal infections while preserving natural tooth anatomy. In Andijan, Dr. Olimjon Murzajanov uses a painless two-stage anesthesia protocol with authentic 3M Filtek (Germany) and Estelite (Japan) composites to eliminate acute pain on the first visit.",
    },
    duration: { uz: "30 – 50 daqiqa", ru: "30 – 50 минут", en: "30 – 50 mins" },
    warranty: { uz: "5 yilgacha kafolat", ru: "Гарантия до 5 лет", en: "Up to 5-year warranty" },
    materials: {
      uz: "3M Filtek (Germaniya), Estelite (Yaponiya), DenFil (Koreya)",
      ru: "3M Filtek (Германия), Estelite (Япония), DenFil (Корея)",
      en: "3M Filtek (Germany), Estelite (Japan), DenFil (Korea)",
    },
    anesthesia: {
      uz: "2 bosqichli og'riqsiz: muzlatuvchi gel + mikro-anestetik",
      ru: "Двухэтапная анестезия: гель + европейский анестетик",
      en: "Two-stage painless: topical numbing gel + micro-injection",
    },
    highlights: {
      uz: [
        "Germaniya (3M Filtek), Yaponiya (Estelite), Koreya (DenFil) va Rossiya plomba tanlovi",
        "2 bosqichli anesteziya: ukol og'rig'i ham sezilmaydi",
        "Apeks-lokator va raqamli rentgen nazorati ostida kanal tozalash",
        "Tishning tabiiy chaynash yuzasi va rangini 100% tiklash",
      ],
      ru: [
        "Оригинальные фотополимеры 3M Filtek (Германия), Estelite (Япония) и DenFil (Корея)",
        "Двухэтапное обезболивание: гель + анестетик без боли от укола",
        "Пломбировка корневых каналов под контролем апекслокатора и рентгена",
        "Полное восстановление анатомической формы и цвета зуба",
      ],
      en: [
        "Genuine 3M Filtek (Germany), Estelite (Japan), and DenFil (Korea) composites",
        "Two-step anesthesia: numbing gel + painless micro-injection",
        "Root canal therapy guided by electronic apex locator & digital X-ray",
        "Seamless restoration of natural tooth anatomy and shade",
      ],
    },
    indications: {
      uz: [
        "Kechki payt yoki tunda kuchayuvchi lo'qillovchi tish og'rig'i (o'tkir pulpit)",
        "Issiq choy, muzdek suv yoki shirinlikka nisbatan keskin tish qamashishi",
        "Tishda qora dog', karies teshigi paydo bo'lishi yoki eski plomba tushib qolishi",
        "Ovqat chaynaganda tishda noqulaylik yoki bosim og'rig'i (periodontit)",
      ],
      ru: [
        "Ноющая или пульсирующая зубная боль ночью, когда таблетки не помогают (пульпит)",
        "Резкая реакция зуба на холодное, горячее или сладкое",
        "Тёмное пятно, полость (дырка) в зубе или выпадение старой пломбы",
        "Боль при накусывании или дискомфорт под коронкой (периодонтит)",
      ],
      en: [
        "Throbbing nocturnal toothache that worsens when lying down (acute pulpitis)",
        "Sharp sensitivity to cold drinks, hot tea, or sweet foods",
        "Visible dark spot, cavity hole, chipped edge, or a lost filling",
        "Pain when biting down or chewing pressure (apical periodontitis)",
      ],
    },
    steps: {
      uz: [
        { num: "01", title: "Ko'rik va Raqamli Viziografiya", desc: "Karies chuqurligi va ildiz kanallari holati 2 soniyalik kam nurlanishli raqamli rentgen orqali aniq tekshiriladi." },
        { num: "02", title: "2 Bosqichli Og'riqsiz Anesteziya", desc: "Milk avval mevali muzlatuvchi gel bilan uvushtiriladi, so'ngra Yevropa mikro-anestetigi yuboriladi — ukol ignasi sezilmaydi." },
        { num: "03", title: "Karies Tozalash va Kanal Endodontiyasi", desc: "Zararlangan to'qima ehtiyotkorlik bilan tozalanadi; nerv shamollagan bo'lsa, apeks-lokator nazoratida kanallar sterillanadi." },
        { num: "04", title: "Estetik Nanokompozit Tiklash", desc: "Tanlangan Germaniya (3M Filtek) yoki Yaponiya (Estelite) fotopolimeri qatlamma-qatlam yotqizilib, tabiiy emaldek silliqlanadi." },
      ],
      ru: [
        { num: "01", title: "Осмотр и Цифровая Визиография", desc: "Точная диагностика глубины кариеса и состояния корневых каналов за 2 секунды на безопасном визиографе." },
        { num: "02", title: "Двухэтапная Анестезия Без Боли", desc: "Сначала десна замораживается аппликационным гелем, затем вводится европейский анестетик — укол не ощущается." },
        { num: "03", title: "Очистка Кариеса и Эндодонтия", desc: "Бережное удаление поражённых тканей; при пульпите — очистка и герметичная обработка каналов под контролем апекслокатора." },
        { num: "04", title: "Анатомическая Нано-Реставрация", desc: "Послойное восстановление зуба немецким или японским фотополимером с точной подгонкой прикуса и полировкой." },
      ],
      en: [
        { num: "01", title: "Exam & Digital X-Ray Check", desc: "Cavities and root canal anatomy are assessed within 2 seconds using a low-dose digital radiovisiograph." },
        { num: "02", title: "Two-Stage Topical + Local Numbing", desc: "A soothing numbing gel precedes gentle European local anesthesia so you feel zero needle pinch." },
        { num: "03", title: "Decay Removal & Apex-Guided Endodontics", desc: "Decayed dentin is removed conservatively; inflamed nerves are sanitized under electronic apex-locator control." },
        { num: "04", title: "Layered Nano-Composite Restoration", desc: "3M Filtek or Estelite composite is sculpted layer-by-layer to restore natural anatomy, shade, and bite." },
      ],
    },
    comparisonTable: {
      title: {
        uz: "Plomba Materiallari Taqqoslash Jadvali",
        ru: "Сравнение Пломбировочных Материалов",
        en: "Dental Filling Materials Comparison",
      },
      headers: {
        uz: ["Material / Brend", "Ishlab chiqaruvchi", "Afzalligi", "Xizmat muddati"],
        ru: ["Материал / Бренд", "Страна", "Преимущество", "Срок службы"],
        en: ["Material / Brand", "Origin", "Key Advantage", "Durability"],
      },
      rows: {
        uz: [
          ["3M™ Filtek / Charisma", "Germaniya", "Yuqori mustahkamlik va rang turg'unligi", "8–10+ yil"],
          ["Estelite / GC Gradia", "Yaponiya", "Xameleon effekt — old tishlar uchun ideal jilo", "7–10 yil"],
          ["DenFil / DiaDent", "Janubiy Koreya", "Ishonchli mikro-gibrid chaynash yuklamasi", "5–8 yil"],
          ["VladMiVa Estelight", "Rossiya", "Hamyonbop va mustahkam bazaviy yechim", "3–5 yil"],
        ],
        ru: [
          ["3M™ Filtek / Charisma", "Германия", "Максимальная прочность и стойкость цвета", "8–10+ лет"],
          ["Estelite / GC Gradia", "Япония", "Эффект хамелеона — идеален для передних зубов", "7–10 лет"],
          ["DenFil / DiaDent", "Южная Корея", "Надёжный микрогибрид для жевательных зубов", "5–8 лет"],
          ["ВладМиВа Эстелайт", "Россия", "Доступное и прочное терапевтическое решение", "3–5 лет"],
        ],
        en: [
          ["3M™ Filtek / Charisma", "Germany", "Superior flexural strength and stain resistance", "8–10+ years"],
          ["Estelite / GC Gradia", "Japan", "Chameleon light blending for invisible front repairs", "7–10 years"],
          ["DenFil / DiaDent", "South Korea", "Durable micro-hybrid composite for molars", "5–8 years"],
          ["VladMiVa Estelight", "Russia", "Cost-effective therapeutic composite option", "3–5 years"],
        ],
      },
    },
    costFactors: {
      uz: "Tish davolash narxi 3 ta omilga bog'liq: 1) Karies chuqurligi (oddiy yuzaki plomba yoki nerv kanallarini tozalash — pulpit); 2) Kanallar soni (1, 2 yoki 3–4 kanalli chaynov tishlari); 3) Tanlangan plomba materiali (Germaniya, Yaponiya, Koreya yoki Rossiya). Aniq narx ko'rikdan so'ng muolaja boshlanishidan avval ochiq aytiladi.",
      ru: "Стоимость лечения зависит от 3 факторов: 1) Глубины поражения (поверхностный кариес или лечение пульпита с пломбировкой каналов); 2) Количества каналов (от 1 до 3–4 у жевательных зубов); 3) Выбранного материала (Германия, Япония, Корея или Россия). Точная сумма называется до начала работы.",
      en: "Treatment cost depends on three factors: 1) Decay depth (simple cavity vs. nerve pulpitis root canal therapy); 2) Number of root canals (1 to 4 canals in molars); 3) Selected composite brand (Germany, Japan, Korea, or Russia). Exact pricing is quoted upfront before treatment starts.",
    },
    safetyAndCare: {
      uz: "Shoshilinch ogohlantirish: tishingiz kechasi og'riyotgan bo'lsa, yonoqqa ASLO issiq kompress qo'ymang va tish ustiga dori bosmang — bu yiringlash va milk kuyishiga olib keladi. Barcha asboblar B-klass avtoklavda sterillanib, ko'z oldingizda ochiladi.",
      ru: "Важное предупреждение: при ночной боли НИКОГДА не грейте щеку и не кладите таблетку прямо на десну — это ускоряет гнойный процесс и вызывает ожог слизистой. Инструменты вскрываются из стерильного крафт-пакета при вас.",
      en: "Urgent clinical warning: for nighttime toothache, NEVER apply a warm compress or crush a pill directly against the gum—heat accelerates infection and pills burn soft tissue. All instruments are opened from sealed sterile pouches in front of you.",
    },
  },
  {
    id: "ortopediya",
    icon: <IconToothCrown className="w-7 h-7 text-[#132e53]" />,
    image: assets.service_crowns,
    category: { uz: "Ortopedik Stomatologiya", ru: "Ортопедия и Протезирование", en: "Prosthodontics" },
    title: {
      uz: "Tish Qo'yish: Tsirkoniy (Zirconia) Karonkalar va Ko'prik Protezlar",
      ru: "Вставить Зуб: Циркониевые Коронки и Современное Протезирование",
      en: "Zirconia Crowns & Modern Dental Bridges",
    },
    shortDesc: {
      uz: "Sinib ketgan yoki yo'qotilgan tishlarni metall-siz, allergiya chaqirmaydigan mustahkam tsirkoniy va E-max qoplamalar bilan 2–3 kunda tiklash.",
      ru: "Надёжное восстановление разрушенных и утраченных зубов биосовместимыми безметалловыми коронками из диоксида циркония за 2–3 дня.",
      en: "Biocompatible, metal-free zirconia and E-max crowns engineered for strength and natural aesthetics in 2–3 days.",
    },
    aeoSummary: {
      uz: "Tish qo'yish (ortopedik stomatologiya) — yemirilgan, singan yoki tushib ketgan tishlarni sun'iy karonkalar va ko'prik protezlar yordamida tiklash usulidir. Andijonda Dr. Olimjon Murzajanov CAD/CAM 3D aniqlikdagi Germaniya, Avstraliya va Xitoy tsirkoniy karonkalarini 2–3 kun ichida o'rnatadi (10 yilgacha kafolat, milk qorayishi mutlaqo kuzatilmaydi).",
      ru: "Ортопедическое протезирование (вставить зубы) восстанавливает разрушенные или утраченные зубы коронками и мостами. В Андижане Д-р Олимжон Мурзажанов изготавливает и фиксирует 3D CAD/CAM циркониевые коронки (Германия, Австралия, Китай) за 2–3 дня с гарантией до 10 лет без посинения десны.",
      en: "Prosthodontic tooth replacement restores fractured or missing teeth using precision dental crowns and bridges. In Andijan, Dr. Olimjon Murzajanov crafts 3D CAD/CAM zirconia crowns (Germany, Australia, China) within 2–3 days backed by up to a 10-year warranty and zero dark gum lines.",
    },
    duration: { uz: "2 – 3 kun", ru: "2 – 3 дня", en: "2 – 3 days" },
    warranty: { uz: "10 yilgacha kafolat", ru: "Гарантия до 10 лет", en: "Up to 10-year warranty" },
    materials: {
      uz: "Monolit Tsirkoniy (Germaniya, Xitoy) va Avstraliya / Shveysariya E-max",
      ru: "Диоксид циркония (Германия, Китай) и керамика (Австралия, E-max)",
      en: "Monolithic Zirconia (Germany, China) & Australia / E-max Ceramics",
    },
    anesthesia: {
      uz: "100% og'riqsiz mikro-anesteziya",
      ru: "100% безболезненная микро-анестезия",
      en: "100% painless local micro-anesthesia",
    },
    highlights: {
      uz: [
        "Milk ko'karishi va temir ta'mi mutlaqo bo'lmaydi (100% biomoslashuvchan)",
        "CAD/CAM 3D raqamli frezerlash orqali mikron aniqlikda tayyorlash",
        "Tayyorlanish davrida vaqtinchalik estetik karonka o'rnatib beriladi",
        "Old tishlar uchun tabiiy jilo, orqa chaynov tishlar uchun maksimal mustahkamlik",
      ],
      ru: [
        "Никакого посинения десны и металлического привкуса (100% биосовместимость)",
        "Цифровое CAD/CAM моделирование с микронной точностью прилегания",
        "Временные эстетические коронки на период изготовления",
        "Естественная эстетика для передних и высокая прочность для жевательных зубов",
      ],
      en: [
        "Zero dark gum lines or metallic taste (100% biocompatible zirconia)",
        "Digital CAD/CAM 3D milling for micron-level margin precision",
        "Temporary aesthetic crowns provided during fabrication",
        "High flexural strength suitable for both front and molar teeth",
      ],
    },
    indications: {
      uz: [
        "Tishning 50% dan ortiq qismi sinib yoki kariesdan yemirilgan bo'lsa",
        "Ildizi sog'lom qolgan tishni sug'urtirmasdan kultavaya vkladka va karonka bilan saqlab qolish",
        "1–2 ta tish yo'qligida ko'prik protez (most) yoki implant ustiga toj qo'yish",
        "Milk chetini qoraytirib qo'ygan eski metallokeramik karonkalarni tsirkoniyga almashtirish",
      ],
      ru: [
        "Разрушение коронки зуба более чем на 50% или глубокий скол",
        "Спасение зуба при здоровом корне с помощью культевой вкладки и коронки",
        "Восстановление отсутствующих зубов мостом или коронкой на имплант",
        "Замена старой металлокерамики, вызвавшей потемнение или воспаление десны",
      ],
      en: [
        "Over 50% crown loss from fracture or large decay where fillings won't hold",
        "Preserving an intact natural root with a custom post-and-core and crown",
        "Replacing missing teeth with zirconia bridges or implant-supported crowns",
        "Upgrading old metal-ceramic crowns causing grey gum lines",
      ],
    },
    steps: {
      uz: [
        { num: "01", title: "Diagnostika va 3D Ortopedik Reja", desc: "Tish ildizlari rentgen orqali tekshiriladi, tishlam (prikus) tahlil qilinib, old yoki chaynov tishiga mos material tanlanadi." },
        { num: "02", title: "Minimal Silliqlash va Vaqtinchalik Karonka", desc: "Og'riqsiz anesteziya ostida tish ehtiyotkorlik bilan tayyorlanadi, aniq o'lchov olinadi va darhol vaqtinchalik himoya tish qo'yiladi." },
        { num: "03", title: "CAD/CAM 3D Frezerlash (2–3 Kun)", desc: "Tish shakli va rangi qo'shni tabiiy tishlar rangiga 100% moslab kompyuterda modellashtiriladi va tsirkoniydan kesiladi." },
        { num: "04", title: "Klinik Sinov va Mustahkam Fiksatsiya", desc: "Chaynash qulayligi va milk tutashuvi tekshirilgach, karonka mustahkam bio-sement bilan abadiy o'rnatiladi." },
      ],
      ru: [
        { num: "01", title: "Диагностика и Ортопедический План", desc: "Оценка корней на снимке, анализ прикуса и подбор материала (Германия, Австралия, Китай)." },
        { num: "02", title: "Бережная Подготовка и Временная Коронка", desc: "Безболезненная обработка, снятие высокоточного оттиска и установка временной коронки в тот же день." },
        { num: "03", title: "Цифровая Фрезеровка CAD/CAM (2–3 дня)", desc: "Компьютерное моделирование анатомии и цвета с микронной точностью краевого прилегания." },
        { num: "04", title: "Примерка и Герметичная Фиксация", desc: "Контроль прилегания у десны, выверка прикуса и фиксация на современный адгезивный цемент." },
      ],
      en: [
        { num: "01", title: "Diagnostics & Prosthodontic Plan", desc: "Root evaluation via digital X-ray, bite analysis, and selection of German, Australian, or Chinese ceramic." },
        { num: "02", title: "Conservative Prep & Temporary Crown", desc: "Gentle tooth shaping under local numbing, precision impression, and same-day temporary aesthetics." },
        { num: "03", title: "Digital CAD/CAM Milling (2–3 Days)", desc: "Custom shade matching and computer-milled monolithic zirconia fabrication for exact margin seal." },
        { num: "04", title: "Bite Check & Permanent Bonding", desc: "Verification of gum fit and bite comfort before permanent cementation." },
      ],
    },
    comparisonTable: {
      title: {
        uz: "Tish Karonkalari Turlari Taqqoslash Jadvali",
        ru: "Сравнение Видов Зубных Коронок",
        en: "Dental Crowns Comparison Table",
      },
      headers: {
        uz: ["Karonka Turi", "Material / Kelib chiqishi", "Milk va Estetika", "Tavsiya etiladi"],
        ru: ["Тип Коронки", "Материал / Страна", "Эстетика и Десна", "Рекомендуется"],
        en: ["Crown System", "Origin / Type", "Gum & Aesthetics", "Best For"],
      },
      rows: {
        uz: [
          ["Monolit Tsirkoniy Premium", "Germaniya (CAD/CAM)", "Milk qoraymaydi, tabiiy yorug'lik", "Old va chaynov tishlari (10+ yil)"],
          ["Avstraliya Keramikasi", "Avstraliya", "Yuqori shaffoflik, 100% biomos", "Tabassum zonasi va kompleks protez"],
          ["Ivoclar E-max Karonka", "Shveysariya", "Tabiiy emaldan ajratib bo'lmaydi", "Old tishlar va maksimal estetika"],
          ["Tsirkoniy Standart", "Xitoy", "Metall-siz, baquvvat va hamyonbop", "Chaynash tishlari va ko'priklar"],
          ["Klassik Metallokeramika", "Metall + Keramika", "Vaqt o'tib milk cheti qorayishi mumkin", "Asosan iqtisodiy byudjet varianti"],
        ],
        ru: [
          ["Монолитный Цирконий", "Германия (CAD/CAM)", "Не синеет десна, натуральный цвет", "Передние и жевательные зубы (10+ лет)"],
          ["Австралийская Керамика", "Австралия", "Премиальная биосовместимость и прочность", "Зона улыбки и комплексное протезирование"],
          ["Коронка Ivoclar E-max", "Швейцария", "Неотличима от природной эмали", "Передние зубы, высшая эстетика"],
          ["Цирконий Стандарт", "Китай", "Без металла, прочно и доступно", "Жевательные зубы и мосты"],
          ["Металлокерамика", "Металл + Керамика", "Возможна тёмная полоса у десны со временем", "Бюджетное протезирование"],
        ],
        en: [
          ["Monolithic Zirconia Premium", "Germany (CAD/CAM)", "Zero dark gumline, lifelike translucency", "Front & posterior teeth (10+ yrs)"],
          ["Australian Ceramic Crown", "Australia", "Biocompatible, ultra-strong structure", "High-load chewing & smile zones"],
          ["Ivoclar E-max Ceramic", "Switzerland", "Indistinguishable from real enamel", "Anterior aesthetics & smile zone"],
          ["Standard Zirconia Crown", "China", "Metal-free strength at accessible cost", "Back teeth and dental bridges"],
          ["Metal-Ceramic (PFM)", "Metal Alloy Core", "May show grey margin after gum shift", "Budget-focused restoration"],
        ],
      },
    },
    costFactors: {
      uz: "2026-yilda oq tish qo'yish (tsirkoniy karonka) narxi qoplanadigan tishlar soni, tanlangan material (Xitoy tsirkoniysi, Germaniya tsirkoniysi, Avstraliya keramikasi yoki Shveysariya E-max), shuningdek ildizni oldindan davolash yoki kultavaya vkladka qo'yish zaruratiga qarab belgilanadi. Konsultatsiyadan so'ng aniq narx ochiq taqdim etiladi.",
      ru: "Цена циркониевых коронок и протезирования зависит от количества восстанавливаемых зубов, страны-производителя материала (Китай, Германия, Австралия, Швейцария E-max) и необходимости предварительного лечения каналов или установки культевой вкладки.",
      en: "Tooth replacement cost depends on the number of units, selected origin (China, Germany, Australia, or Swiss E-max), and whether root canal preparation or a custom core buildup is needed beforehand. Transparent pricing is always agreed upon before treatment.",
    },
    safetyAndCare: {
      uz: "Parvarish qoidasi: tsirkoniy karonkalar yong'oq po'chog'i chaqishdan saqlanganda 10–15 yildan ortiq xizmat qiladi. Tish ipi (floss) va irrigator yordamida karonka atrofi toza saqlansa, milk sog'lom va pushti holatda qoladi.",
      ru: "Рекомендации по уходу: не раскалывайте коронками скорлупу орехов, очищайте межзубные промежутки ирригатором и проходите осмотр раз в 6 месяцев — тогда цирконий прослужит 10–15+ лет.",
      en: "Care guidance: never crack nutshells or ice with crowns. Daily flossing or water irrigation keeps gum margins healthy so monolithic zirconia lasts 10 to 15+ years.",
    },
  },
  {
    id: "estetik-stomatologiya",
    icon: <IconVeneerTooth className="w-7 h-7" />,
    image: assets.service_veneers,
    category: { uz: "Estetik Stomatologiya", ru: "Эстетическая Стоматология", en: "Cosmetic Dentistry" },
    title: {
      uz: "E-max Keramik Vinirlar, Tish Tekislash va Badiiy Restavratsiya",
      ru: "Керамические Виниры E-max, Выравнивание и Реставрация Зубов",
      en: "E-max Porcelain Veneers, Alignment Planning & Smile Makeover",
    },
    shortDesc: {
      uz: "Old tishlar shaklini, rangi va tishlar orasidagi ochiqliklarni (diastema) 1–2 tashrifda tiklash hamda breket/elayner ortodontik diagnostikasi.",
      ru: "Идеальная зона улыбки за 1–2 визита: ультратонкие виниры E-max, реставрация передних зубов и ортодонтическое планирование (брекеты/элайнеры).",
      en: "Natural smile enhancement in 1–2 visits with ultra-thin E-max ceramic veneers, composite bonding, and orthodontic alignment diagnostics.",
    },
    aeoSummary: {
      uz: "Estetik stomatologiya va vinirlar — old tishlarning rangi, shakli, sinishi hamda tishlar orasidagi tirqishlarni (diastema) tabiiy va uzoq muddatli go'zallikka keltirish usulidir. Dr. Olimjon Murzajanov Andijonda Shveysariya 0.3 mm ultra-yupqa E-max vinirlari, badiiy kompozit restavratsiya va funksional ortodontik tekislash (breket va elayner diagnostikasi) bo'yicha xizmat ko'rsatadi.",
      ru: "Эстетическая стоматология — это преображение зоны улыбки без потери живых зубов. Д-р Олимжон Мурзажанов в Андижане устанавливает ультратонкие виниры E-max (0.3 мм), выполняет художественную реставрацию передних зубов и проводит сертифицированное ортодонтическое планирование (брекеты, элайнеры).",
      en: "Cosmetic dentistry transforms smile harmony while conserving healthy enamel. In Andijan, Dr. Olimjon Murzajanov crafts ultra-thin 0.3mm E-max porcelain veneers, artistic composite restorations, and certified orthodontic diagnostics for braces or clear aligners.",
    },
    duration: { uz: "1 – 2 tashrif", ru: "1 – 2 визита", en: "1 – 2 visits" },
    warranty: { uz: "10+ yil xizmat muddati", ru: "Срок службы 10+ лет", en: "10+ years durability" },
    materials: {
      uz: "Ivoclar Vivadent E-max press-keramika (0.3–0.5 mm) & Nano-kompozitlar",
      ru: "Пресс-керамика Ivoclar Vivadent E-max (0.3–0.5 мм) и нанокомпозиты",
      en: "Ivoclar Vivadent E-max press-ceramic (0.3–0.5 mm) & Nano-composites",
    },
    anesthesia: {
      uz: "Mikro-anesteziya (nervga tegilmaydi, tish tirik qoladi)",
      ru: "Микро-анестезия (без депульпации, зуб остаётся живым)",
      en: "Micro-anesthesia (no nerve removal, tooth stays vital)",
    },
    highlights: {
      uz: [
        "0.3 mm ultra-yupqa E-max press-keramika vinirlari (tish nervi saqlanadi)",
        "Jakhongir Najimov Functional Orthodontics bo'yicha rasmiy ortodontik diagnostika",
        "Qahva va choydan sarg'aymaydigan g'ovaksiz keramik emal",
        "Tishlar orasidagi tirqish (diastema) va qiyshiqlikni individual tuzatish",
      ],
      ru: [
        "Ультратонкие виниры E-max (0.3 мм) с сохранением живого нерва зуба",
        "Сертифицированная функциональная диагностика прикуса (брекеты и элайнеры)",
        "Стойкость к окрашиванию от кофе и чая на долгие годы",
        "Закрытие диастемы (щелей) и эстетическая коррекция формы зубов",
      ],
      en: [
        "Ultra-thin 0.3mm E-max press-ceramic veneers keeping teeth completely vital",
        "Certified functional orthodontic diagnostics & biomechanics planning",
        "Permanent stain resistance against coffee, tea, and berries",
        "Gap closure (diastema) and personalized smile architecture",
      ],
    },
    indications: {
      uz: [
        "Old tishlar orasidagi keng tirqish (diastema yoki trema)",
        "Tishlarning qiyshiqligi, noto'g'ri tishlam (breket / shaffof elayner yoki vinir bilan tekislash)",
        "Oqartirish bilan ketmaydigan dog'lar, flyuoroz yoki eski sarg'aygan plombalar",
        "Old tish burchagi uchib ketishi va notekis tish chetlari",
      ],
      ru: [
        "Щель между передними зубами (диастема) и межзубные промежутки",
        "Скученность, неровное положение зубов (ортодонтия или коррекция винирами)",
        "Стойкая пигментация, флюороз, тетрациклиновые зубы или старые пломбы",
        "Сколы режущего края и возрастная стираемость передних зубов",
      ],
      en: [
        "Visible gaps between front teeth (diastema)",
        "Crowded or tilted teeth requiring braces, aligners, or veneer harmonization",
        "Intrinsic discoloration resistant to bleaching or discolored old bonding",
        "Chipped front tooth edges and uneven smile symmetry",
      ],
    },
    steps: {
      uz: [
        { num: "01", title: "Tabassum Dizayni va Ortodontik Diagnostika", desc: "Yuz mutanosibligi va tishlam biomexanikasi tekshirilib, vinir, restavratsiya yoki breket/elayner rejasi tanlanadi." },
        { num: "02", title: "Ultra-Nozik Tayyorlash (0.3 mm)", desc: "Vinir uchun tish emalining faqat tashqi yuza qavati mikro-silliqlanadi — tish tirik va sezuvchanliksiz qoladi." },
        { num: "03", title: "Individual E-max Tayyorlash / Restavratsiya", desc: "Shveysariya Ivoclar E-max keramik plastinkalari yorug'lik o'tkazuvchan tabiiy emal ko'rinishida tayyorlanadi." },
        { num: "04", title: "Adgeziv Fiksatsiya va Sayqallash", desc: "Har bir vinir tish bilan molekulyar darajada birikuvchi maxsus adgeziv yordamida mustahkam o'rnatiladi." },
      ],
      ru: [
        { num: "01", title: "Дизайн Улыбки и Диагностика Прикуса", desc: "Анализ пропорций лица и биомеханики челюсти: подбор виниров, реставрации или брекетов/элайнеров." },
        { num: "02", title: "Минимальная Препаровка (0.3 мм)", desc: "Деликатная полировка только переднего слоя эмали без депульпации — зубы остаются живыми." },
        { num: "03", title: "Изготовление E-max / Реставрация", desc: "Создание тончайших стеклокерамических накладок с естественной прозрачностью режущего края." },
        { num: "04", title: "Адгезивная Фиксация", desc: "Прочное склеивание виниров на световой композит без зазоров с финальной полировкой." },
      ],
      en: [
        { num: "01", title: "Smile Design & Bite Diagnostics", desc: "Evaluating facial proportions and occlusal biomechanics to select veneers, bonding, or braces/aligners." },
        { num: "02", title: "Ultra-Thin Enamel Prep (0.3 mm)", desc: "Conservative conditioning limited to facial enamel; tooth vitality and nerve health remain untouched." },
        { num: "03", title: "Custom E-max Fabrication / Artistry", desc: "Ivoclar press-ceramic shells crafted with lifelike incisal translucency and shade matching." },
        { num: "04", title: "Adhesive Bonding & Polishing", desc: "Molecular-level adhesive bonding ensuring seamless margins and lifelong stain protection." },
      ],
    },
    comparisonTable: {
      title: {
        uz: "Tabassum Tiklash Usullari Taqqoslash Jadvali",
        ru: "Сравнение Методов Эстетической Коррекции",
        en: "Smile Aesthetic Methods Comparison",
      },
      headers: {
        uz: ["Usul", "Qancha vaqt oladi", "Chidamliligi", "Afzalligi"],
        ru: ["Метод", "Срок лечения", "Срок службы", "Главное преимущество"],
        en: ["Treatment Option", "Timeline", "Longevity", "Primary Strength"],
      },
      rows: {
        uz: [
          ["E-max Keramik Vinirlar", "1–2 tashrif", "10–15+ yil", "Mutlaqo sarg'aymaydi, tabiiy yorug'lik o'tkazadi"],
          ["Badiiy Kompozit Restavratsiya", "1 ta tashrif (1 soat)", "5–7 yil", "Tishni charxlamasdan tezkor va hamyonbop tiklash"],
          ["Breket / Shaffof Elaynerlar", "Rejalashtirilgan kurs", "Doimiy natija", "Tishlarni tabiiy o'z ildizidan to'liq tekislaydi"],
        ],
        ru: [
          ["Керамические виниры E-max", "1–2 визита", "10–15+ лет", "Абсолютная стойкость цвета и естественный блеск"],
          ["Композитная реставрация", "1 визит (1 час)", "5–7 лет", "Быстрое исправление сколов и щелей без обточки"],
          ["Брекеты / Элайнеры", "Курс ортодонтии", "Постоянный результат", "Физиологичное выравнивание собственных зубов"],
        ],
        en: [
          ["E-max Porcelain Veneers", "1–2 visits", "10–15+ years", "Permanent stain proof, lifelike glass translucency"],
          ["Composite Smile Bonding", "1 visit (1 hr)", "5–7 years", "Same-day conservative edge & gap reshaping"],
          ["Braces / Clear Aligners", "Planned course", "Permanent", "Moves natural teeth cleanly into ideal alignment"],
        ],
      },
    },
    costFactors: {
      uz: "Estetik stomatologiya narxi tanlangan usulga (kompozit badiiy restavratsiya, E-max press-keramik vinirlar yoki ortodontik breket/elayner rejasi) hamda tiklanadigan old tishlar soniga (masalan, 4, 6 yoki 8–10 tishlik tabassum zonasi) bog'liq.",
      ru: "Стоимость зависит от выбранной методики (композитная реставрация, керамика E-max или ортодонтия) и количества восстанавливаемых зубов в зоне улыбки.",
      en: "Cost depends on the method chosen (artistic composite bonding, E-max press-ceramics, or orthodontic plan) and the number of teeth in the smile zone.",
    },
    safetyAndCare: {
      uz: "Eslatma: vinir qo'yilgan old tishlar bilan pista, yong'oq po'chog'i chaqish yoki qadoq tishlash mumkin emas. Yumshoq cho'tka va irrigator bilan parvarish qilinsa, tabassumingiz 10–15 yil asl jilosini yo'qotmaydi.",
      ru: "Рекомендация: винирами нельзя грызть семечки, орехи и твёрдую пищу на отрыв. Регулярное использование ирригатора сохраняет идеальный край десны на долгие годы.",
      en: "Care tip: avoid cracking seeds, nutshells, or packaging with front veneers. Soft brushing and water flossing preserve gum health and ceramic shine for 10–15+ years.",
    },
  },
  {
    id: "implantatsiya",
    icon: <IconDentalImplant className="w-7 h-7" />,
    image: assets.service_implant,
    category: { uz: "Xirurgik Implantologiya", ru: "Дентальная Имплантация", en: "Dental Implantology" },
    title: {
      uz: "Tish Implantatsiyasi (Osstem Koreya / Straumann Shveysariya)",
      ru: "Имплантация Зубов (Osstem Корея / Straumann Швейцария)",
      en: "Titanium Dental Implants (Osstem & Straumann)",
    },
    shortDesc: {
      uz: "Yo'qotilgan bir yoki bir nechta tishlarni qo'shni sog'lom tishlarni charxlamasdan 20 daqiqada og'riqsiz qayta tiklash.",
      ru: "Восстановление одного или нескольких утраченных зубов за 20 минут без боли и без обточки соседних зубов.",
      en: "Replace single or multiple missing teeth in 20 minutes without grinding adjacent healthy teeth.",
    },
    aeoSummary: {
      uz: "Tish implantatsiyasi — yo'qolgan tish o'rniga jag' suyagiga biomoslashuvchan sun'iy ildiz (titan implant) o'rnatish va ustiga tsirkoniy karonka kiydirish usulidir. Andijonda Dr. Olimjon Murzajanov original Janubiy Koreya (Osstem) va Shveysariya (Straumann) implantlarini 20 daqiqada 100% og'riqsiz o'rnatadi (99.2% suyakka birikish, umrbod implant kafolati).",
      ru: "Имплантация зубов — это установка в челюстную кость биосовместимого титанового корня с последующей фиксацией коронки без обточки соседних зубов. В Андижане Д-р Олимжон Мурзажанов устанавливает сертифицированные импланты Osstem (Корея) и Straumann (Швейцария) за 20 минут без боли с приживаемостью 99.2%.",
      en: "Dental implantation replaces a missing tooth root with a biocompatible titanium fixture topped by a custom zirconia crown without grinding adjacent healthy teeth. In Andijan, Dr. Olimjon Murzajanov places genuine Osstem (Korea) and Straumann (Switzerland) implants painlessly in 20 minutes with a 99.2% success rate.",
    },
    duration: { uz: "20 – 30 daqiqa", ru: "20 – 30 минут", en: "20 – 30 mins" },
    warranty: { uz: "Umrbod implant kafolati", ru: "Пожизненная гарантия", en: "Lifetime implant warranty" },
    materials: {
      uz: "Osstem (Janubiy Koreya) va Straumann SLActive (Shveysariya)",
      ru: "Osstem (Южная Корея) и Straumann SLActive (Швейцария)",
      en: "Osstem (South Korea) & Straumann SLActive (Switzerland)",
    },
    anesthesia: {
      uz: "2 bosqichli og'riqsiz anesteziya (jarayon 0% og'riq)",
      ru: "Двухэтапная анестезия (процесс без боли — 0% боли)",
      en: "Two-stage anesthesia (100% painless procedure — 0% pain)",
    },
    highlights: {
      uz: [
        "99.2% suyakka muvaffaqiyatli birikish (osteointegratsiya) ko'rsatkichi",
        "Qo'shni sog'lom tishlar charxlanmaydi va tirik saqlanib qolinadi",
        "Original Osstem (Janubiy Koreya) va Straumann (Shveysariya) seriyali pasporti",
        "Bir bosqichli (ekspress) implantatsiya bo'yicha Moissanite Dental sertifikati",
      ],
      ru: [
        "99.2% успешная приживаемость (остеоинтеграция) титановых имплантов",
        "Соседние здоровые зубы не обтачиваются и остаются полностью живыми",
        "Официальный серийный паспорт Osstem (Корея) / Straumann (Швейцария)",
        "Сертифицированная методика одноэтапной имплантации (Moissanite Dental)",
      ],
      en: [
        "99.2% clinical osseointegration success rate",
        "Adjacent healthy teeth remain completely untouched",
        "Official serial passport for Osstem (Korea) & Straumann (Switzerland)",
        "Certified in one-stage implantology protocols (Moissanite Dental)",
      ],
    },
    indications: {
      uz: [
        "Bitta tish yo'qolganda — qo'shni sog'lom tishlarni ko'prik uchun charxlamaslik maqsadida",
        "Yonma-yon bir nechta tish yoki oxirgi chaynash tishlari bo'lmaganda",
        "Tishni olishga to'g'ri kelganda — bir bosqichli (ekspress) implantni o'sha kuni qo'yish",
        "Jag'da tishlar butunlay yo'qolib, olinadigan protezlar noqulaylik tug'dirganda",
      ],
      ru: [
        "Отсутствие 1 зуба — восстановление без обточки соседних здоровых зубов",
        "Потеря нескольких зубов подряд или концевых жевательных зубов",
        "Необходимость удаления зуба — одномоментная установка импланта в день удаления",
        "Полное отсутствие зубов и дискомфорт от съёмных протезов",
      ],
      en: [
        "Single missing tooth — restores function without shaving healthy neighbors",
        "Multiple missing back molars where bridgework lacks rear support",
        "Non-restorable fractured tooth eligible for immediate same-day implant placement",
        "Denture discomfort where fixed implant retention restores natural chewing",
      ],
    },
    steps: {
      uz: [
        { num: "01", title: "Diagnostika va Suyak Tahlili", desc: "Raqamli rentgen / 3D KT orqali jag' suyagi qalinligi, balandligi va nerv kanallari joylashuvi aniq o'lchanadi." },
        { num: "02", title: "Biotitan Implant O'rnatish (20–30 Daqiqa)", desc: "2 bosqichli og'riqsiz anesteziya ostida suyakka steril Osstem yoki Straumann titan ildizi ehtiyotkorlik bilan joylashtiriladi." },
        { num: "03", title: "Osteointegratsiya (Suyakka Birikish — 2–4 Oy)", desc: "Titan suyak to'qimasi bilan tabiiy birikadi (Straumann SLActive tizimida 3–4 haftagacha tezlashadi). Zaruratda vaqtinchalik estetika beriladi." },
        { num: "04", title: "Abatment va Tsirkoniy Karonka O'rnatish", desc: "Implant ustiga ulovchi qism (abatment) hamda 3D CAD/CAM monolit tsirkoniy toj mahkamlanib, tish qatori tiklanadi." },
      ],
      ru: [
        { num: "01", title: "Диагностика и Оценка Кости", desc: "Снимок и оценка плотности кости, расположения нервных каналов и планирование точной позиции импланта." },
        { num: "02", title: "Установка Титанового Импланта (20–30 мин)", desc: "Под двухэтапной безболезненной анестезией бережно устанавливается оригинальный имплант Osstem или Straumann." },
        { num: "03", title: "Остеоинтеграция (Приживление 2–4 месяца)", desc: "Естественное срастание биотитана с костной тканью (с поверхностью Straumann SLActive ускоряется до 3–4 недель)." },
        { num: "04", title: "Абатмент и Циркониевая Коронка", desc: "Установка соединительного элемента и постоянной 3D CAD/CAM циркониевой коронки с пожизненной гарантией на имплант." },
      ],
      en: [
        { num: "01", title: "Digital Diagnostics & Bone Mapping", desc: "Evaluating jawbone volume, density, and nerve safety margins prior to guided placement." },
        { num: "02", title: "Painless Titanium Placement (20–30 mins)", desc: "Under two-step local anesthesia, a sterile Osstem or Straumann fixture is gently placed into the socket." },
        { num: "03", title: "Osseointegration (2–4 Months)", desc: "Jawbone integrates naturally with medical-grade titanium (accelerated to 3–4 weeks on Straumann SLActive)." },
        { num: "04", title: "Abutment & Custom Zirconia Crown", desc: "Attaching a precision abutment and CAD/CAM zirconia crown for lifelong natural biting power." },
      ],
    },
    comparisonTable: {
      title: {
        uz: "Implant Tish Turlari va Tiklash Usullari Taqqoslash Jadvali",
        ru: "Сравнение Систем Имплантации и Протезирования",
        en: "Dental Implant Systems & Options Comparison",
      },
      headers: {
        uz: ["Tizim / Usul", "Kelib chiqishi", "Birikish muddati", "Asosiy xususiyati"],
        ru: ["Система / Метод", "Страна", "Срок приживления", "Ключевая особенность"],
        en: ["System / Method", "Origin", "Integration", "Key Clinical Benefit"],
      },
      rows: {
        uz: [
          ["Osstem Implant", "Janubiy Koreya", "2–4 oy (99.2%)", "Yuqori ishonchlilik va eng maqbul narx-sifat muvozanati"],
          ["Straumann SLActive", "Shveysariya", "3–6 hafta (tezkor)", "Gidrofil faol yuza, qandli diabet va murakkab holatlarda ham a'lo"],
          ["Bir bosqichli (Ekspress)", "Koreya / Shveysariya", "Tish olingan kuni", "Ildiz olinishi bilanoq implant qo'yish (kamroq jarrohlik)"],
          ["Oddiy Ko'prik (Implantlarsiz)", "Ortopedik most", "2–3 kun", "Qo'shni 2 ta sog'lom tishni charxlash talab etiladi"],
        ],
        ru: [
          ["Osstem Implant", "Южная Корея", "2–4 месяца (99.2%)", "Оптимальное соотношение цены, качества и надёжности"],
          ["Straumann SLActive", "Швейцария", "3–6 недель (ускоренно)", "Гидрофильная поверхность, высокая приживаемость в сложных случаях"],
          ["Одномоментная (Экспресс)", "Корея / Швейцария", "В день удаления зуба", "Установка импланта сразу в лунку удалённого зуба"],
          ["Классический Мост", "Без имплантов", "2–3 дня", "Требует обточки двух соседних здоровых зубов"],
        ],
        en: [
          ["Osstem Implant", "South Korea", "2–4 months (99.2%)", "Proven reliability with balanced cost-efficiency"],
          ["Straumann SLActive", "Switzerland", "3–6 weeks (rapid)", "Hydrophilic surface suited even for complex bone cases"],
          ["Immediate Same-Day Implant", "Korea / Swiss", "Day of extraction", "Placed immediately after extraction—avoids second surgery"],
          ["Traditional Bridge", "Non-implant", "2–3 days", "Requires grinding down two adjacent healthy teeth"],
        ],
      },
    },
    costFactors: {
      uz: "2026-yilda implant tish narxi quyidagilarga bog'liq: 1) Implant brendi (Janubiy Koreya Osstem yoki Shveysariya Straumann); 2) To'liq «kalit ostida» (implant vinti + shakllantiruvchi + abatment + tsirkoniy karonka) yoki faqat jarrohlik bosqichi; 3) Suyak to'qimasi yetishmaganda suyak plastikasi (sinus-lifting) zarurati. Ko'rikda barcha bosqichlar narxi aniq va shaffof aytiladi.",
      ru: "Цена имплантации зубов в 2026 году формируется с учётом: 1) Бренда системы (Osstem Корея или Straumann Швейцария); 2) Формата оплаты («под ключ» с коронкой или поэтапно); 3) Объёма костной ткани (нужна ли костная пластика). Все этапы рассчитываются открыто на осмотре.",
      en: "Dental implant cost in 2026 depends on: 1) System selected (Korean Osstem vs. Swiss Straumann); 2) Surgery-only vs. complete crown restoration (fixture + abutment + zirconia crown); 3) Bone density and whether grafting is needed. Every fee is detailed openly before treatment.",
    },
    safetyAndCare: {
      uz: "Xavfsizlik, «zararlari» va «halolmi?» savoli: sertifikatlangan titan implantlari (Osstem, Straumann) inson tanasiga 100% biomoslashuvchan bo'lib, allergiya yoki zaharlanish bermaydi — faqat sterillik buzilsa yoki gigiyena qilinmasa asorat chiqishi mumkin. Diniy jihatdan esa O'zbekiston Musulmonlari Idorasi fatvosiga muvofiq yo'qolgan tishni biotitan sun'iy ildiz bilan tiklash joiz (halol) hisoblanadi, cho'chqa yoki inson suyagi qo'llanilmaydi.",
      ru: "Безопасность, мифы о вреде и вопрос халяль: сертифицированный медицинский титан 100% биосовместим и безопасен. Риск осложнений возникает лишь при нарушении стерильности или гигиены. Согласно разъяснениям духовного управления, восстановление утраченных зубов биотитановыми имплантами без запрещённых компонентов разрешено (халяль).",
      en: "Safety & Ethics: Certified medical-grade titanium is 100% biocompatible and inert; complications occur only with poor hygiene or compromised sterility. Faith-conscious note: per guidance from Uzbekistan's religious authorities, restoring missing teeth with pure bio-titanium fixtures (using zero porcine or human bone materials) is permissible (Halal).",
    },
  },
  {
    id: "tish-oqartirish",
    icon: <IconLaserWhitening className="w-7 h-7" />,
    image: assets.service_whitening,
    category: { uz: "Oqartirish va Profilaktika", ru: "Отбеливание и Гигиена", en: "Whitening & Prophylaxis" },
    title: {
      uz: "Philips ZOOM 4 Lazerli Oqartirish va AirFlow Gigiyena",
      ru: "Лазерное Отбеливание Philips ZOOM 4 и Чистка AirFlow",
      en: "Philips ZOOM 4 Laser Whitening & AirFlow Cleaning",
    },
    shortDesc: {
      uz: "Sovuq LED texnologiyasi yordamida emalga zarar yetkazmasdan tishlarni 8–10 tongacha oqartirish va ultratovushli tosh tozalash.",
      ru: "Безопасное осветление эмали на 8–10 тонов холодным светом Philips ZOOM 4 и удаление зубного камня AirFlow.",
      en: "Cold-LED Philips ZOOM 4 whitening up to 8–10 shades brighter plus ultrasonic AirFlow tartar removal.",
    },
    aeoSummary: {
      uz: "Professional tish oqartirish va gigiyena — tish toshlarini ultratovush hamda AirFlow bilan og'riqsiz tozalab, Philips ZOOM 4 sovuq LED nuri yordamida emalni 8–10 tongacha zararsiz oqartirishdir. Andijonda Dr. Olimjon Murzajanov amaliyotida tish nervi qizimaydi, milk qonashi hamda og'izdagi hid bartaraf etilib, ACP himoya geli emalni mustahkamlaydi.",
      ru: "Профессиональная гигиена и отбеливание зубов объединяют безболезненное снятие зубного камня (ультразвук + AirFlow) и безопасное осветление эмали на 8–10 тонов системой Philips ZOOM 4 в Андижане. Холодный LED-свет исключает перегрев нерва, а гель ACP укрепляет эмаль.",
      en: "Professional whitening and prophylaxis combine ultrasonic + Swiss AirFlow tartar removal with Philips ZOOM 4 cold-LED brightening by 8–10 shades in Andijan. Zero nerve overheating occurs, gum bleeding resolves, and ACP enamel gel reinforces mineral strength.",
    },
    duration: { uz: "45 daqiqa", ru: "45 минут", en: "45 mins" },
    warranty: { uz: "1–3 yil natija", ru: "Эффект 1–3 года", en: "1–3 years brightness" },
    materials: {
      uz: "Philips ZOOM 4 (AQSH) va Shveysariya EMS AirFlow",
      ru: "Philips ZOOM 4 (США) и порошок AirFlow (Швейцария)",
      en: "Philips ZOOM 4 (USA) & Swiss EMS AirFlow",
    },
    anesthesia: {
      uz: "Zarurat yo'q (emal qizdirilmaydi, sovuq LED nuri)",
      ru: "Не требуется (холодный LED-свет без нагрева)",
      en: "Not required (cold LED light, zero overheating)",
    },
    highlights: {
      uz: [
        "Emalni qizdirmaydigan sovuq LED nuri va ACP himoya geli",
        "Ultratovush + AirFlow orqali milk osti va usti toshlarini tozalash",
        "Muolajadan so'ng ftorli remineralizatsiya (sezuvchanlik bo'lmaydi)",
        "1 seansda yorqin tabassum va toza nafas",
      ],
      ru: [
        "Холодный LED-свет без перегрева нерва и укрепляющий гель ACP",
        "Ультразвуковой скейлинг + швейцарский порошок AirFlow",
        "Глубокое фторирование эмали после процедуры против чувствительности",
        "Видимый результат сразу после первого визита",
      ],
      en: [
        "Cold-LED light activation with ACP enamel-protecting gel",
        "Ultrasonic scaling + gentle Swiss AirFlow stain polishing",
        "Post-treatment fluoride remineralization for zero sensitivity",
        "Instant radiant results in a single 45-minute appointment",
      ],
    },
    indications: {
      uz: [
        "Tishlar choy, qahva yoki tamaki (kashandalik) sababli sarg'aygan bo'lsa",
        "Tish yuvayotganda milkdan qon kelishi va qattiq tish toshlari (kamen) yig'ilishi",
        "Og'izdan muntazam noxush hid kelishi (milk osti bakterial karashi)",
        "To'y, muhim tadbir yoki old tishlarga vinir/plomba qo'yishdan oldin tabiiy oq rang tanlash",
      ],
      ru: [
        "Потемнение эмали от чая, кофе и курения («налёт курильщика»)",
        "Кровоточивость дёсен при чистке, твёрдый зубной камень",
        "Стойкий неприятный запах изо рта из-за поддесневого налёта",
        "Подготовка к свадьбе, фотосессии или подбору оттенка новых пломб/виниров",
      ],
      en: [
        "Yellowing or surface stains caused by tea, coffee, or smoking",
        "Gums bleeding when brushing due to hardened tartar deposits",
        "Persistent halitosis driven by subgingival plaque biofilm",
        "Preparing for weddings, milestones, or matching shades before new restorations",
      ],
    },
    steps: {
      uz: [
        { num: "01", title: "Ultratovush + AirFlow Tosh Tozalash", desc: "Milk osti va tishlar orasidagi qattiq toshlar hamda kofe/choy dog'lari emalga zarar bermasdan tozalanadi." },
        { num: "02", title: "Milkni Himoya Qilish (Koffer-izolyatsiya)", desc: "Oqartiruvchi gel milkka tegmasligi uchun maxsus himoya to'siq qatlami qo'yiladi." },
        { num: "03", title: "Philips ZOOM 4 Sovuq LED Aktivatsiyasi", desc: "3 bosqichda 15 daqiqalik sovuq nur seanslari bilan tish rangi 8–10 tongacha yorqinlashtiriladi." },
        { num: "04", title: "ACP Remineralizatsiya (Ftorlash)", desc: "Muolaja yakunida emal mikroskopik teshikchalari kaltsiy va ftor geli bilan yopiladi — sezuvchanlik bo'lmaydi." },
      ],
      ru: [
        { num: "01", title: "Ультразвук и Чистка AirFlow", desc: "Бережное удаление зубного камня и пигментированного налёта от кофе и сигарет." },
        { num: "02", title: "Защита Дёсен", desc: "Нанесение изолирующего барьера, защищающего мягкие ткани на 100%." },
        { num: "03", title: "Холодный Свет Philips ZOOM 4", desc: "Три мягких 15-минутных цикла осветления эмали на 8–10 тонов без нагрева пульпы." },
        { num: "04", title: "Реминерализация Эмали (Гель ACP)", desc: "Восстановление минерального баланса эмали для комфорта без чувствительности." },
      ],
      en: [
        { num: "01", title: "Ultrasonic Scaling & AirFlow Polish", desc: "Removing mineralized tartar and coffee/tea pigmentation comfortably." },
        { num: "02", title: "Gum Barrier Protection", desc: "Applying a light-cured liquid barrier so whitening gel never contacts delicate gums." },
        { num: "03", title: "Philips ZOOM 4 Cold-LED Cycles", desc: "Three gentle 15-minute light-activated cycles brightening shade by up to 8–10 tones." },
        { num: "04", title: "ACP Enamel Remineralization", desc: "Applying amorphous calcium phosphate gel to seal tubules and prevent sensitivity." },
      ],
    },
    comparisonTable: {
      title: {
        uz: "Tish Tozalash va Oqartirish Usullari Farqi",
        ru: "Отличие Профессиональной Чистки от Отбеливания",
        en: "Dental Cleaning vs. Laser Whitening",
      },
      headers: {
        uz: ["Muolaja", "Nimani hal qiladi", "Natija rangi", "Tavsiya etilgan davriylik"],
        ru: ["Процедура", "Что решает", "Результат", "Регулярность"],
        en: ["Procedure", "Target Issue", "Result", "Recommended Frequency"],
      },
      rows: {
        uz: [
          ["Ultratovush + AirFlow", "Tish toshlari, milk qonashi, og'iz hidi, dog'lar", "Tishning o'z asl tabiiy toza rangi", "Har 6 oyda 1 marta"],
          ["Philips ZOOM 4 Oqartirish", "Ichki emal sarg'ayishini tubdan oqartirish", "8–10 ton yorqinroq «Gollivud» oqligi", "1–3 yilda 1 marta"],
          ["Soda / Uyda ishqalash", "Emalni tirnaydi va milkni kuydiradi!", "Vaqtincha zararli ta'sir", "Stomatologlar tavsiya etmaydi"],
        ],
        ru: [
          ["Ультразвук + AirFlow", "Зубной камень, кровоточивость дёсен, запах", "Природный чистый оттенок эмали", "Раз в 6 месяцев"],
          ["Philips ZOOM 4", "Глубокое осветление оттенка эмали", "Белоснежная улыбка на 8–10 тонов светлее", "Раз в 1–3 года"],
          ["Сода и домашние абразивы", "Царапают эмаль и вызывают гиперчувствительность", "Вред для эмали", "Не рекомендуется"],
        ],
        en: [
          ["Ultrasonic + AirFlow", "Calculus, bleeding gums, odor, coffee stains", "Restores true clean natural tooth shade", "Every 6 months"],
          ["Philips ZOOM 4", "Deep intrinsic tooth brightening", "8–10 shades brighter white luster", "Every 1–3 years"],
          ["Baking soda / DIY scrubs", "Scratches enamel permanently, burns gums", "Abusive to enamel", "Not recommended"],
        ],
      },
    },
    costFactors: {
      uz: "Tish oqartirish va tozalash narxi faqat gigiyenik tozalash (Ultratovush + AirFlow) yoki to'liq Philips ZOOM 4 apparat oqartirish + remineralizatsiya kompleksi tanlanishiga bog'liq.",
      ru: "Цена зависит от выбранного объёма: только профессиональная гигиена (ультразвук + AirFlow) или полный комплекс с лазерным отбеливанием Philips ZOOM 4 и реминерализацией.",
      en: "Pricing depends on whether you select hygienic scaling + AirFlow alone or the full Philips ZOOM 4 whitening + ACP remineralization protocol.",
    },
    safetyAndCare: {
      uz: "Muolajadan keyingi 48 soat «Oq parhez» qoidasi: qora choy, qahva, kola, shokolad va rangli mevalardan saqlaning. Shunda natija 1.5–3 yil davomida yorqin qoladi.",
      ru: "«Белая диета» 48 часов: исключите крепкий чай, кофе, колу и красящие продукты в первые двое суток для фиксации максимальной белизны на 1.5–3 года.",
      en: "48-Hour 'White Diet': avoid black tea, coffee, cola, and dark berries for two days after whitening to lock in brightness for 1.5–3 years.",
    },
  },
  {
    id: "xirurgiya",
    icon: <IconAtraumaticSurgery className="w-7 h-7" />,
    image: assets.service_surgery,
    category: { uz: "Jarrohlik Stomatologiyasi", ru: "Хирургическая Стоматология", en: "Oral Surgery" },
    title: {
      uz: "Atravmatik Og'riqsiz Tish Olish va Aql Tishini Oldirish",
      ru: "Атравматичное Удаление Зубов и Зубов Мудрости Без Боли",
      en: "Atraumatic Painless Tooth & Wisdom Tooth Extraction",
    },
    shortDesc: {
      uz: "Oddiy, murakkab va noto'g'ri o'sgan aql tishlarini (8-tish) suyak to'qimasini shikastlamasdan 100% og'riqsiz olish.",
      ru: "Бережное удаление сложных и ретинированных зубов мудрости без боли, страха и послеоперационных отёков.",
      en: "Gentle microsurgical extraction of damaged teeth and impacted wisdom teeth with rapid, swelling-free healing.",
    },
    aeoSummary: {
      uz: "Atravmatik tish olish (jarrohlik stomatologiyasi) — tiklab bo'lmaydigan chirigan ildizlar yoki noto'g'ri o'sgan aql tishlarini (8-tish) atrofdagi jag' suyagini sindirmasdan ehtiyotkorlik bilan olish usulidir. Andijonda Dr. Olimjon Murzajanov 2 bosqichli kuchaytirilgan anesteziya (0% og'riq) hamda shishsiz tez bitiruvchi kollagen gubka protokolidan foydalanadi.",
      ru: "Атравматичное удаление зубов — это бережное извлечение разрушенных корней или ретинированных зубов мудрости (восьмёрок) без травмирования костной лунки. В Андижане Д-р Олимжон Мурзажанов применяет усиленную двухэтапную анестезию (0% боли) и коллагеновую губку для заживления без отёка.",
      en: "Atraumatic tooth extraction removes non-restorable roots or impacted wisdom teeth without damaging surrounding jawbone. In Andijan, Dr. Olimjon Murzajanov performs 0%-pain microsurgery under reinforced two-step anesthesia with sterile collagen socket plugs for swelling-free healing.",
    },
    duration: { uz: "15 – 30 daqiqa", ru: "15 – 30 минут", en: "15 – 30 mins" },
    warranty: { uz: "Tez va shishsiz bitish", ru: "Быстрое заживление", en: "Rapid healing protocol" },
    materials: {
      uz: "Atravmatik mikroxirurgiya va steril kollagen gemostatik gubka",
      ru: "Атравматичная микрохирургия и стерильная коллагеновая губка",
      en: "Atraumatic microsurgery & sterile collagen healing sponge",
    },
    anesthesia: {
      uz: "Kuchaytirilgan 2 bosqichli mikro-anesteziya (0% og'riq)",
      ru: "Усиленная двухэтапная анестезия (0% боли)",
      en: "Reinforced two-stage local anesthesia (0% pain)",
    },
    highlights: {
      uz: [
        "Kuchaytirilgan anesteziya — jarayon davomida 0% og'riq",
        "Kelajakda implant qo'yish uchun suyak devorlarini asrab qolish",
        "Tez bitiruvchi kollagen gubka va o'z-o'zidan so'riluvchi choklar",
        "Shifokorning shaxsiy nazorati va parvarish bo'yicha yo'riqnoma",
      ],
      ru: [
        "Усиленная анестезия — полное отсутствие боли во время процедуры",
        "Сохранение костной лунки для возможной будущей имплантации",
        "Коллагеновая гемостатическая губка для быстрого заживления",
        "Послеоперационное сопровождение и рекомендации врача",
      ],
      en: [
        "Complete local anesthesia ensuring 0% pain during extraction",
        "Socket bone preservation for future implant readiness",
        "Collagen healing plug placement for smooth, swelling-free recovery",
        "Direct post-op follow-up care from Dr. Olimjon",
      ],
    },
    indications: {
      uz: [
        "Qiyshiq o'sib qo'shni tishni surayotgan yoki milkni yallig'lantirgan aql tishi (8-tish / perikoronit)",
        "Aql tishi chiqib og'iz ochilishi qiyinlashishi yoki yonoqda shish paydo bo'lishi",
        "Karonka yoki shtift bilan tiklash imkonsiz bo'lgan singan ildizlar",
        "Tish ildizi ostida davolab bo'lmaydigan katta kista yoki kuchli qimirlash",
      ],
      ru: [
        "Неправильный рост зуба мудрости (восьмёрки), давление на зубной ряд, перикоронит",
        "Затруднённое открывание рта или отёк десны из-за ретинированного зуба",
        "Глубокий перелом корня, не подлежащий восстановлению вкладкой и коронкой",
        "Крупная киста на верхушке корня или подвижность зуба III–IV степени",
      ],
      en: [
        "Impacted or angled wisdom tooth crowding adjacent molars or causing pericoronitis",
        "Gum hood swelling and jaw stiffness from an erupting third molar",
        "Deeply fractured tooth roots unsuitable for crown buildup",
        "Severe mobility or untreatable periapical cyst where preservation fails",
      ],
    },
    steps: {
      uz: [
        { num: "01", title: "Raqamli Rentgen Tekshiruvi", desc: "Tish ildizlari shakli va nerv kanali bilan masofa 2 soniyada raqamli viziografda aniq ko'riladi." },
        { num: "02", title: "2 Bosqichli To'liq Og'riqsizlantirish", desc: "Milk muzlatilgach, kuchli Yevropa anestetigi yuboriladi — tish olinayotganda og'riq mutlaqo sezilmaydi." },
        { num: "03", title: "Atravmatik Segmentli Olish (10–25 Daqiqa)", desc: "Murakkab aql tishlari suyak devorlariga bosim o'tkazmasdan nozik qismlarga ajratilib olinadi." },
        { num: "04", title: "Kollagen Gubka va Shishsiz Bitish Nazorati", desc: "Tish teshigiga qon to'xtatuvchi steril kollagen gubka qo'yiladi va 24 soatlik parvarish qoidasi tushuntiriladi." },
      ],
      ru: [
        { num: "01", title: "Цифровой Снимок Корней", desc: "Оценка положения корней зуба мудрости относительно нерва на безопасном визиографе." },
        { num: "02", title: "Усиленная Двухэтапная Анестезия", desc: "Полное отключение болевой чувствительности (0% боли) без страха и дискомфорта." },
        { num: "03", title: "Атравматичное Извлечение (10–25 мин)", desc: "Деликатное разделение и извлечение сложного зуба с сохранением костных стенок лунки." },
        { num: "04", title: "Коллагеновая Губка и Памятка", desc: "Закладка гемостатической губки (и при необходимости саморассасывающихся швов) для быстрого заживления." },
      ],
      en: [
        { num: "01", title: "Digital Root Assessment", desc: "Mapping root curvature and nerve proximity via instant low-dose digital X-ray." },
        { num: "02", title: "Reinforced Pain-Free Numbing", desc: "Topical gel + deep local nerve block ensuring total comfort throughout surgery." },
        { num: "03", title: "Microsurgical Sectioning (10–25 mins)", desc: "Careful separation of impacted teeth without levering against surrounding jawbone." },
        { num: "04", title: "Collagen Socket Stabilization", desc: "Placing a sterile collagen healing plug to safeguard the clot and minimize post-op swelling." },
      ],
    },
    comparisonTable: {
      title: {
        uz: "Tish Olish Murakkabligi Bo'yicha Taqqoslash",
        ru: "Виды Удаления Зубов и Сроки Заживления",
        en: "Tooth Extraction Types & Recovery",
      },
      headers: {
        uz: ["Jarayon Turi", "Vaqti", "Usul", "Bitish davri"],
        ru: ["Сложность", "Время", "Методика", "Заживление"],
        en: ["Extraction Complexity", "Duration", "Technique", "Initial Recovery"],
      },
      rows: {
        uz: [
          ["Oddiy tish olish", "5–10 daqiqa", "Atravmatik yumshoq olish", "1–2 kunda tinchiydi"],
          ["Singan ildizni olish", "10–15 daqiqa", "Mikro-elevator yordamida suyakni asrash", "1–2 kun (implantga tayyor)"],
          ["Murakkab aql tishi (8-tish)", "15–30 daqiqa", "Segmentli olish + kollagen gubka + chok", "2–3 kunda shishsiz bitadi"],
        ],
        ru: [
          ["Простое удаление", "5–10 минут", "Атравматичное щадящее удаление", "Комфорт через 1–2 дня"],
          ["Удаление разрушенного корня", "10–15 минут", "Микро-инструменты, сохранение кости", "1–2 дня (готово к импланту)"],
          ["Сложный зуб мудрости (8-ка)", "15–30 минут", "Деликатное разделение + коллаген + швы", "2–3 дня без отёка"],
        ],
        en: [
          ["Simple extraction", "5–10 mins", "Gentle atraumatic loosening", "1–2 days comfort"],
          ["Fractured root removal", "10–15 mins", "Micro-elevators preserving socket walls", "1–2 days (implant-ready)"],
          ["Impacted wisdom tooth", "15–30 mins", "Sectional removal + collagen plug", "2–3 days minimal swelling"],
        ],
      },
    },
    costFactors: {
      uz: "Tish olish narxi tishning oddiy yoki murakkabligiga (ildizlar soni, milk ostida retensiyalangan aql tishi yoki ochiq joylashganligi, shuningdek chok va kollagen gubka qo'llanilishiga) qarab rentgen ko'rigidan keyin aniq belgilanadi.",
      ru: "Стоимость зависит от сложности случая: простое удаление подвижного зуба, извлечение разрушенного корня или сложная хирургия ретинированного зуба мудрости с коллагеновой губкой.",
      en: "Extraction pricing reflects surgical complexity: simple mobile extraction vs. sectioned impacted wisdom tooth surgery with collagen healing stabilization.",
    },
    safetyAndCare: {
      uz: "MUHIM: Tish oldirgandan keyingi dastlabki 24 soatda og'izni KUCHLI CHAYQAMANG! Tish o'rnidagi qon laxtasi (tromb) suyakni mikroblardan himoya qiladi. Shuningdek 2–3 kun issiq hammom, issiq choy va og'ir jismoniy mehnatdan saqlaning.",
      ru: "ВАЖНО: В первые 24 часа КАТЕГОРИЧЕСКИ НЕ полощите рот! Кровяной сгусток защищает лунку от воспаления (альвеолита). Исключите баню и горячую пищу на 2–3 дня.",
      en: "CRITICAL POST-OP RULE: Do NOT rinse vigorously for the first 24 hours—preserving the blood clot prevents painful dry socket. Avoid hot baths and hot foods for 48 hours.",
    },
  },
  {
    id: "rentgen-diagnostika",
    icon: <IconDigitalXray className="w-7 h-7 text-[#132e53]" />,
    image: assets.service_xray,
    category: { uz: "Raqamli Diagnostika", ru: "Цифровая Диагностика", en: "Digital Diagnostics" },
    title: {
      uz: "Raqamli Viziografiya va Tish Rentgen Diagnostikasi",
      ru: "Цифровая Рентген-Диагностика (Радиовизиограф)",
      en: "Low-Dose Digital Dental X-Ray & Diagnostics",
    },
    shortDesc: {
      uz: "Oddiy rentgenga qaraganda 90% kam nurlanishli zamonaviy raqamli sensor yordamida ildiz kanallari va yashirin kariesni 2 soniyada aniqlash.",
      ru: "Мгновенный прицельный снимок на цифровом визиографе с лучевой нагрузкой на 90% ниже плёночного рентгена.",
      en: "High-resolution digital X-ray sensor with 90% lower radiation for instant root canal and bone assessment.",
    },
    aeoSummary: {
      uz: "Raqamli tish rentgeni (viziografiya) — eski plyonkali rentgenga nisbatan 90% kam nurlanishli datchik yordamida tish ildizi, nerv kanallari va suyak to'qimasini 2 soniyada kompyuter ekraniga chiqaruvchi xavfsiz tashxis usulidir. Dr. Olimjon Murzajanov qabulida har bir murakkab davolash va implantatsiya aniq rentgen nazoratida olib boriladi.",
      ru: "Цифровая визиография (прицельный рентген зуба) — высокоточная диагностика корней, каналов и скрытого кариеса за 2 секунды со сниженной на 90% лучевой нагрузкой. В клинике Д-ра Олимжона Мурзажанова снимок сразу выводится на монитор кресла для 100% контроля качества лечения.",
      en: "Digital radiovisiography produces instant high-definition dental X-rays in 2 seconds with up to 90% less radiation than legacy film. Dr. Olimjon Murzajanov uses chairside digital imaging to detect hidden decay, verify root canal fillings, and assess bone levels with complete safety.",
    },
    duration: { uz: "2 daqiqa", ru: "2 минуты", en: "2 mins" },
    warranty: { uz: "100% xavfsiz", ru: "100% безопасно", en: "90% lower radiation" },
    materials: {
      uz: "Yuqori aniqlikdagi raqamli datchik (90% kam nurlanish)",
      ru: "Высокоточный цифровой сенсор (на 90% ниже нагрузка)",
      en: "High-resolution digital sensor (90% lower radiation)",
    },
    anesthesia: {
      uz: "Talab etilmaydi (kontaktsiz va og'riqsiz)",
      ru: "Не требуется (бесконтактно и безболезненно)",
      en: "Not required (contactless & painless)",
    },
    highlights: {
      uz: [
        "Tasvir 2 soniyada kompyuter ekraniga yuqori aniqlikda chiqadi",
        "Kanal uzunligi va plomba sifatini 100% nazorat qilish",
        "Bolalar va kattalar uchun minimal xavfsiz nurlanish",
        "Yashirin karies va ildiz kistasini erta bosqichda topish",
      ],
      ru: [
        "Снимок высокой чёткости появляется на экране за 2 секунды",
        "100% контроль качества пломбировки корневых каналов",
        "Минимальная безопасная доза излучения",
        "Точное выявление скрытого кариеса и воспалений у корня",
      ],
      en: [
        "Crystal-clear diagnostic image on screen in 2 seconds",
        "100% precision verification of root canal filling depth",
        "Ultra-low radiation safe for routine diagnostics",
        "Early detection of hidden interproximal cavities and cysts",
      ],
    },
    indications: {
      uz: [
        "Tashqaridan sog'lom ko'ringan, ammo og'riyotgan tishlardagi yashirin kariesni topish",
        "Pulpit va periodontitda ildiz kanallari uzunligi hamda plomba zichligini tekshirish",
        "Aql tishini (8-tish) olishdan oldin ildiz egilishi va nervga yaqinligini ko'rish",
        "Shtift, karonka yoki implant qo'yishdan avval suyak va ildiz mustahkamligini baholash",
      ],
      ru: [
        "Выявление скрытого кариеса между зубами или под старыми пломбами",
        "Контроль длины и качества пломбирования корневых каналов",
        "Оценка положения корней зуба мудрости перед атравматичным удалением",
        "Проверка состояния корня и кости перед протезированием или имплантацией",
      ],
      en: [
        "Detecting hidden interproximal cavities or secondary decay under old fillings",
        "Verifying root canal working length and 3D seal density during endodontics",
        "Evaluating wisdom tooth root curvature before surgical extraction",
        "Checking root health and bone support prior to crowns or dental implants",
      ],
    },
    steps: {
      uz: [
        { num: "01", title: "Himoya Fartuk va Steril Datchik", desc: "Bemorga qo'rg'oshinli himoya yopinchig'i taqiladi va raqamli sensor bir martalik steril qoplama ichida joylanadi." },
        { num: "02", title: "1 Soniyalik Mikro-Impuls", desc: "Og'riqsiz va shovqinsiz raqamli fokuslanish — oddiy nurlanishdan 90% kam mikrodaza qo'llaniladi." },
        { num: "03", title: "2 Soniyada Ekranda Tahlil", desc: "Tasvir darhol monitorda kattalashtirilib, sizga tishingiz ildizi, karies yoki kista holati batafsil ko'rsatiladi." },
        { num: "04", title: "Aniq Davolash Rejasini Tuzish", desc: "Diagnostika natijasiga ko'ra shaffof, bosqichma-bosqich davolash va narx rejasi tuziladi." },
      ],
      ru: [
        { num: "01", title: "Защитный Фартук и Стерильный Сенсор", desc: "Датчик помещается в одноразовый стерильный чехол, пациент защищается свинцовым фартуком." },
        { num: "02", title: "Мгновенный Микро-Импульс", desc: "Быстрое экспонирование с дозой излучения на 90% ниже плёночного рентгена." },
        { num: "03", title: "Изображение за 2 Секунды на Экране", desc: "Врач увеличивает снимок на мониторе и наглядно показывает состояние корней и каналов." },
        { num: "04", title: "Точный План Лечения", desc: "Составление безошибочного плана терапии, ортопедии или удаления." },
      ],
      en: [
        { num: "01", title: "Lead Apron & Sterile Sensor Barrier", desc: "Protective shielding is placed and the digital sensor uses a fresh sterile sleeve." },
        { num: "02", title: "Instant Micro-Pulse Exposure", desc: "Quick contactless capture using 90% less radiation than traditional X-ray film." },
        { num: "03", title: "2-Second Chairside Display", desc: "High-definition tooth and root structures appear magnified immediately on screen." },
        { num: "04", title: "Accurate Treatment Planning", desc: "Clear clinical walkthrough so you see exactly what treatment is required." },
      ],
    },
    comparisonTable: {
      title: {
        uz: "Raqamli Viziograf vs Eski Plyonkali Rentgen",
        ru: "Цифровой Визиограф vs Плёночный Рентген",
        en: "Digital Radiovisiograph vs. Film X-Ray",
      },
      headers: {
        uz: ["Ko'rsatkich", "Raqamli Viziograf (Klinikamizda)", "Eski Plyonkali Rentgen"],
        ru: ["Параметр", "Цифровой Визиограф", "Плёночный Рентген"],
        en: ["Metric", "Digital Radiovisiograph", "Legacy X-Ray Film"],
      },
      rows: {
        uz: [
          ["Nurlanish dozasi", "90% kam (mikro-doza)", "Yuqori nurlanish"],
          ["Natija chiqish vaqti", "2 soniya (darhol ekranda)", "10–15 daqiqa (kimyoviy yuvish)"],
          ["Tasvir aniqligi", "Ekranda 20x kattalashtirish, tiniq", "Kichik plyonka, detallar xira"],
        ],
        ru: [
          ["Доза облучения", "На 90% ниже (безопасно)", "Повышенная нагрузка"],
          ["Время ожидания", "2 секунды на мониторе", "10–15 минут проявки"],
          ["Точность деталей", "Увеличение до 20x на экране", "Маленький плёночный квадрат"],
        ],
        en: [
          ["Radiation Dose", "90% lower ultra-safe microdose", "Higher exposure"],
          ["Turnaround Time", "2 seconds instant screen view", "10–15 mins darkroom wait"],
          ["Diagnostic Clarity", "Up to 20x digital zoom", "Small low-contrast film"],
        ],
      },
    },
    costFactors: {
      uz: "Raqamli viziografiya surati davolash jarayonining tarkibiy qismi sifatida minimal xarajat bilan to'g'ridan-to'g'ri shifokor xonasining o'zida bajariladi — alohida rentgen markazlariga borib navbat kutish shart emas.",
      ru: "Цифровой снимок делается прямо в кресле врача без необходимости ехать в другой конец города — доступная стоимость уточняется на приёме.",
      en: "Chairside digital X-rays are captured right inside Dr. Olimjon's suite—eliminating trips to outside diagnostic centers and keeping cost minimal.",
    },
    safetyAndCare: {
      uz: "Xavfsizlik: 1 ta raqamli viziografik tasvirning nurlanish dozasi quyoshli kunda ko'chada 1–2 soat yurish bilan teng. Homiladorlikning 1- va 3-trimestrida faqat shifokor ko'rsatmasi va qo'sh himoya bilan shoshilinch hollarda qo'llaniladi.",
      ru: "Безопасность: доза 1 цифрового снимка сопоставима с 1 часом обычной прогулки на солнце. Во время беременности применяется строго по экстренным показаниям с двойной защитой.",
      en: "Safety note: radiation from one digital exposure matches roughly 1–2 hours of natural outdoor sunlight. During pregnancy, imaging is reserved strictly for urgent diagnostics with full shielding.",
    },
  },
];
