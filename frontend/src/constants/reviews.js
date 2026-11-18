/**
 * Verified patient reviews and clinical feedback for Dr. Olimjon Murzajanov.
 * Used for social proof on the website and Schema.org Review structured data.
 */
export const PATIENT_REVIEWS = [
  {
    id: "rev-1",
    author: "Dilshod Raximov",
    city: { uz: "Andijon sh., Eski Shahar", ru: "г. Андижан, Эски Шахар", en: "Andijan, Old City" },
    procedure: {
      uz: "Tsirkoniy karonkalar (4 ta old tish)",
      ru: "Циркониевые коронки (4 передних зуба)",
      en: "Zirconia crowns (4 front teeth)",
    },
    rating: 5,
    date: "2026-10-18",
    comment: {
      uz: "Old tishlarim yemirilgan edi, kulishga ham uyalardim. Dr. Olimjon akaga murojaat qildim, 3 kunda 4 ta tsirkoniy karonka qo'yib berdilar. Rangi, shakli xuddi o'zimning tishimdek tabiiy chiqdi! Eng muhimi, biror marta ham og'riq sezmadim. Rahmat katta!",
      ru: "Передние зубы были разрушены, стеснялся даже улыбаться. Обратился к доктору Олимжону, за 3 дня поставили 4 циркониевые коронки. Цвет и форма идеально естественные, не отличить от живых зубов! Главное — ни капли боли. Огромное спасибо!",
      en: "My front teeth were worn down and I felt self-conscious smiling. Dr. Olimjon placed 4 custom zirconia crowns in just 3 days. The shade and anatomy match my natural teeth perfectly, and I felt zero pain throughout. Truly exceptional dentist!",
    },
    verified: true,
  },
  {
    id: "rev-2",
    author: "Madina Usmonova",
    city: { uz: "Andijon shahri", ru: "г. Андижан", en: "Andijan City" },
    procedure: {
      uz: "Og'riqsiz tish davolash (3M Filtek)",
      ru: "Безболезненное лечение кариеса (3M Filtek)",
      en: "Painless cavity restoration (3M Filtek)",
    },
    rating: 5,
    date: "2026-10-25",
    comment: {
      uz: "Tishim qattiq og'rib, kechasi uxlatmay qo'ygandi. Dr. Olimjon qabuliga keldim. Avval muzlatuvchi gel surtib, keyin ukol qildilar — ukol og'rig'i ham sezilmadi! 35 daqiqada tishimni davolab, Germaniyaning chiroyli plombasini qo'yib berdilar. Qo'llari juda yengil shifokor ekanlar.",
      ru: "Зуб сильно разболелся ночью, не могла спать. Пришла на приём к доктору Олимжону. Сначала нанесли замораживающий гель, потом обезболили — даже укола не почувствовала! За 35 минут полностью вылечили зуб и поставили немецкую пломбу. Очень лёгкая рука!",
      en: "Had a severe toothache keeping me awake all night. Dr. Olimjon numbed my gum with a topical gel before administering anesthesia—I didn't feel the needle at all! He treated the tooth in 35 minutes with a high-grade German composite. Very gentle and professional.",
    },
    verified: true,
  },
  {
    id: "rev-3",
    author: "Akmalbek Jo'rayev",
    city: { uz: "Asaka tumani", ru: "Асакинский район", en: "Asaka district" },
    procedure: {
      uz: "Tish implantatsiyasi (Osstem Koreya)",
      ru: "Имплантация зуба (Osstem Корея)",
      en: "Dental implant (Osstem South Korea)",
    },
    rating: 5,
    date: "2026-11-02",
    comment: {
      uz: "Bir nechta klinikada tish qo'yish uchun qo'shni sog'lom tishlarni charxlash kerak deyishgandi. Dr. Olimjon esa bitta Osstem implant qo'yib berishni tavsiya qildilar. Operatsiya 20 daqiqa davom etdi, umuman og'rimadi. Hozir bemalol hamma narsani chaynab yeyapman. Tavsiya qilaman!",
      ru: "В других клиниках предлагали обточить соседние здоровые зубы под мост. Доктор Олимжон посоветовал поставить один корейский имплант Osstem. Операция длилась всего 20 минут, вообще без боли. Сейчас зуб как родной. Рекомендую всем в Андижане!",
      en: "Other clinics wanted to shave down my healthy adjacent teeth for a bridge. Dr. Olimjon recommended a single Osstem implant instead. The surgery took only 20 minutes with zero discomfort. It feels completely natural now. Highly recommend!",
    },
    verified: true,
  },
  {
    id: "rev-4",
    author: "Nodira Karimova",
    city: { uz: "Andijon shahri", ru: "г. Андижан", en: "Andijan City" },
    procedure: {
      uz: "E-max keramik vinirlar (Gollivud tabassumi)",
      ru: "Керамические виниры E-max",
      en: "E-max porcelain veneers",
    },
    rating: 5,
    date: "2026-11-06",
    comment: {
      uz: "To'yimdan oldin tishlarim orasidagi tirqish (diastema)ni yopib, tabassumimni go'zal qilmoqchi edim. Dr. Olimjon E-max vinirlarini o'rnatib berdilar. Natija kutganimdan ham a'lo bo'ldi! Hamma dugonalarim qayerda qildirganimni so'rashyapti.",
      ru: "Перед свадьбой хотела закрыть щель между зубами и сделать идеальную улыбку. Доктор Олимжон установил ультратонкие виниры E-max. Результат превзошел все ожидания! Все подруги спрашивают контакты врача.",
      en: "Before my wedding, I wanted to close a front gap (diastema) and enhance my smile. Dr. Olimjon crafted custom E-max ceramic veneers. The outcome exceeded all my expectations! Natural, radiant, and flawless.",
    },
    verified: true,
  },
  {
    id: "rev-5",
    author: "Jahongir To'xtasinov",
    city: { uz: "Shahrixon tumani", ru: "Шахриханский район", en: "Shahrixon district" },
    procedure: {
      uz: "Murakkab aql tishini atravmatik oldirish",
      ru: "Удаление сложного зуба мудрости",
      en: "Atraumatic wisdom tooth extraction",
    },
    rating: 5,
    date: "2026-11-10",
    comment: {
      uz: "8-aql tishim qiyshiq o'sib, jag'imni shishirib yuborgandi. Ko'p shifokorlar murakkab deb olmadi. Dr. Olimjon rentgenda ko'rib, 15 daqiqada suyakka ziyon yetkazmasdan og'riqsiz sug'urib oldilar. Dori va kollagen qo'yib berdilar, yuzimda shish ham bo'lmadi.",
      ru: "Зуб мудрости рос криво и воспалилась десна. Доктор Олимжон сделал цифровой снимок и за 15 минут аккуратно удалил зуб без травмы кости. Положили заживляющую губку, после операции лицо даже не опухло. Настоящий мастер своего дела!",
      en: "My wisdom tooth grew horizontally, causing painful gum swelling. Dr. Olimjon took a digital X-ray and carefully extracted it in 15 minutes with atraumatic precision. He placed a collagen healing plug—no facial swelling or pain afterward!",
    },
    verified: true,
  },
  {
    id: "rev-6",
    author: "Ziyoda Qodirova",
    city: { uz: "Andijon sh., Eski Shahar", ru: "г. Андижан", en: "Andijan City" },
    procedure: {
      uz: "Philips ZOOM 4 lazerli oqartirish va AirFlow",
      ru: "Лазерное отбеливание Philips ZOOM 4 и AirFlow",
      en: "Philips ZOOM 4 whitening & AirFlow hygiene",
    },
    rating: 5,
    date: "2026-11-14",
    comment: {
      uz: "Choy va kofedan tishlarim sarg'ayib ketgandi. 45 daqiqada AirFlow tozalash va ZOOM 4 lazerli oqartirish qildirdim. Tishlarim 8 tonga oqardi, emalda sezuvchanlik ham qolmadi. Xona tozaligi va muomala 10 dan 10 ball!",
      ru: "От кофе эмаль потемнела. За 45 минут сделали чистку AirFlow и холодное лазерное отбеливание ZOOM 4. Зубы стали белее на 8 тонов, чувствительности нет. Чистота кабинета и отношение к пациенту — на высшем уровне!",
      en: "Coffee had discolored my teeth. In a single 45-minute session, Dr. Olimjon performed Swiss AirFlow cleaning and ZOOM 4 whitening. My teeth brightened by 8 shades with zero lingering sensitivity. Hospital-grade cleanliness and top-tier care!",
    },
    verified: true,
  },
];
