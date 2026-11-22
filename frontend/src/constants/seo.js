import { getYearsOfExperience } from "./doctor.js";

export const SITE_ORIGIN = "https://dentist-olimjon.uz";

const years = getYearsOfExperience();

/**
 * Per-page, per-language SEO copy with deep local, clinical, and search-intent optimization.
 * Tailored for Google Search, Yandex, and Generative AI Search engines (SearchGPT, Perplexity, Gemini, Yandex Neuro).
 */
export const PAGE_SEO = {
  home: {
    uz: {
      title: "Tish Davolash, Tish Qo'yish va Stomatologiya Andijon — Dr. Olimjon Murzajanov",
      description: `Andijonda zamonaviy stomatologiya: og'riqsiz tish davolash, tish qo'yish (tish qoyish), tsirkoniy karonkalar, tish implanti (Osstem), vinirlar va kechki tish og'rig'ini qoldirish. Dr. Olimjon Murzajanov (Sevdo Denta, Eski Shahar). Tel: +998 94 001-01-56.`,
    },
    ru: {
      title: "Стоматология в Андижане — Врач-стоматолог Д-р Олимжон Мурзажанов | Sevdo Denta",
      description: `Стоматология в Андижане: безболезненное лечение зубов, вставить зубы, циркониевые коронки, импланты и снятие ночной боли у Д-ра Олимжона Мурзажанова (Sevdo Denta, Эски Шахар). Тел: +998 94 001-01-56.`,
    },
    en: {
      title: "Dentistry & Tooth Restoration in Andijan — Dr. Olimjon Murzajanov",
      description: `Modern dentistry in Andijan by Dr. Olimjon Murzajanov (Sevdo Denta Clinic): painless root canals, zirconia crowns, dental implants, veneers & emergency toothache relief. Call: +998 (94) 001-01-56.`,
    },
  },
  services: {
    uz: {
      title: "Xizmatlar Katalogi — Dr. Olimjon | Sevdo Denta Andijon",
      description:
        "Andijonda og'riqsiz tish davolash, tsirkoniy karonka, E-max vinirlar, sifatli implantlar va ZOOM 4 oqartirish. Kafolat. Tel: +998 (94) 001-01-56.",
    },
    ru: {
      title: "Услуги Стоматолога в Андижане — Д-р Олимжон | Sevdo Denta",
      description:
        "Стоматология в Андижане: лечение кариеса и каналов без боли, циркониевые коронки, виниры E-max, имплантация и отбеливание. Тел: +998 (94) 001-01-56.",
    },
    en: {
      title: "Dental Services in Andijan — Dr. Olimjon | Sevdo Denta",
      description:
        "Painless dentistry in Andijan: composite fillings, root canals, zirconia crowns, E-max veneers, titanium implants & whitening. Tel: +998 (94) 001-01-56.",
    },
  },
  about: {
    uz: {
      title: "Dr. Olimjon Murzajanov — Stomatolog & Ortoped Andijon",
      description: `Dr. Olimjon Murzajanov — Andijondagi Sevdo Denta klinikasi stomatologi. ${years}+ yil tajriba, 1,000+ bemor, ADTI diplomi va sertifikatlar.`,
    },
    ru: {
      title: "О Докторе Олимжоне Мурзажанове — Стоматолог в Андижане",
      description: `Д-р Олимжон Мурзажанов — стоматолог-ортопед клиники Sevdo Denta в Андижане. ${years}+ лет практики, 1 000+ вылеченных пациентов. Тел: +998 94 001-01-56.`,
    },
    en: {
      title: "About Dr. Olimjon Murzajanov — Dentist in Andijan",
      description: `Meet Dr. Olimjon Murzajanov, dentist and prosthodontist at Sevdo Denta Clinic in Andijan: ${years}+ years experience, 1,000+ patients. Tel: +998 94 001-01-56.`,
    },
  },
  contact: {
    uz: {
      title: "Aloqa va Manzil — Sevdo Denta Andijon | Dr. Olimjon",
      description:
        "Andijon, Eski Shahar (Old City), 1-qavat, Sevdo Denta klinikasi. Dr. Olimjon qabuliga yozilish: +998 (94) 001-01-56, Telegram: @httmurzajanov.",
    },
    ru: {
      title: "Контакты и Адрес — Клиника Sevdo Denta | Д-р Олимжон",
      description:
        "г. Андижан, Эски Шахар (Old City), 1-й этаж, стоматология Sevdo Denta. Запись на приём к Д-ру Олимжону: +998 (94) 001-01-56, Telegram: @httmurzajanov.",
    },
    en: {
      title: "Contact & Location — Sevdo Denta Clinic | Dr. Olimjon",
      description:
        "Visit Dr. Olimjon Murzajanov at Sevdo Denta Clinic, Old City, 1st Floor, Andijan. Book by phone +998 (94) 001-01-56 or Telegram: @httmurzajanov.",
    },
  },
  booking: {
    uz: {
      title: "Onlayn Qabulga Yozilish — Dr. Olimjon | Sevdo Denta",
      description:
        "Dr. Olimjon Murzajanov qabuliga onlayn yoziling: bo'sh kun va soatni tanlang. Andijon, Eski Shahar, Sevdo Denta klinikasi. Tel: +998 (94) 001-01-56.",
    },
    ru: {
      title: "Онлайн-Запись на Приём — Д-р Олимжон | Sevdo Denta",
      description:
        "Онлайн-запись к Д-ру Олимжону: выберите свободный день и время приёма. Клиника Sevdo Denta, г. Андижан, Эски Шахар. Телефон: +998 (94) 001-01-56.",
    },
    en: {
      title: "Book Dental Appointment — Dr. Olimjon | Sevdo Denta",
      description:
        "Online appointment booking with Dr. Olimjon Murzajanov at Sevdo Denta Clinic in Andijan. Choose your available date and time. Tel: +998 (94) 001-01-56.",
    },
  },
  qabul: {
    uz: {
      title: "Qabul Vaqtini Tanlang — Dr. Olimjon | Sevdo Denta",
      description: "Dr. Olimjon Murzajanov qabuliga navbatsiz onlayn yoziling. 100% og'riqsiz ko'rik va bepul konsultatsiya. Tel: +998 (94) 001-01-56.",
    },
    ru: {
      title: "Запись к Стоматологу — Д-р Олимжон | Андижан",
      description: "Онлайн запись на прием к стоматологу-ортопеду в Андижане без очередей. Клиника Sevdo Denta, Эски Шахар. Тел: +998 (94) 001-01-56.",
    },
    en: {
      title: "Schedule Consultation — Dr. Olimjon | Andijan",
      description: "Schedule your dental consultation with Dr. Olimjon Murzajanov in Andijan. Zero waiting time, gentle treatment. Call +998 (94) 001-01-56.",
    },
  },
  notFound: {
    uz: {
      title: "Sahifa topilmadi (404) — Dr. Olimjon Murzajanov",
      description: "Siz qidirgan sahifa topilmadi. Bosh sahifaga qayting yoki stomatologik xizmatlarimiz bilan tanishing.",
    },
    ru: {
      title: "Страница не найдена (404) — Д-р Олимжон",
      description: "Запрашиваемая страница не найдена. Вернитесь на главную или выберите нужную стоматологическую услугу.",
    },
    en: {
      title: "Page Not Found (404) — Dr. Olimjon Murzajanov",
      description: "The page you requested could not be found. Return to the homepage or browse our dental services.",
    },
  },

  // 1. Restorative & Root Canal Therapy
  "tish-davolash": {
    uz: {
      title: "Tish Davolash va Plomba Andijon — Dr. Olimjon",
      description:
        "Andijonda karies, pulpit va tish ildiz kanallarini 100% og'riqsiz davolash. Germaniya (3M Filtek) va Yaponiya plombalari. Tel: +998 (94) 001-01-56.",
    },
    ru: {
      title: "Лечение Зубов и Каналов Без Боли в Андижане | Д-р Олимжон",
      description:
        "Безболезненное лечение кариеса, пульпита и периодонтита в Андижане. Световые нано-пломбы 3M Filtek (Германия) и Estelite. Запись: +998 (94) 001-01-56.",
    },
    en: {
      title: "Painless Tooth Decay & Root Canal in Andijan | Dr. Olimjon",
      description:
        "Gentle, painless root canal therapy and cavity fillings in Andijan using premium 3M Filtek & Estelite composites. Call +998 (94) 001-01-56.",
    },
  },

  // 2. Prosthodontics & Zirconia Crowns (Tish Qo'yish, Tsirkon Karonkalar)
  ortopediya: {
    uz: {
      title: "Tish Qo'yish va Tsirkoniy Karonka Andijon — Dr. Olimjon",
      description:
        "Andijonda sifatli tish qo'yish (tish qoyish): monolit tsirkoniy karonkalar (tish koronkasi), ko'prik protezlar va singan tishni tiklash. 2–3 kunda og'riqsiz, 10 yil kafolat. Tel: +998 94 001-01-56.",
    },
    ru: {
      title: "Вставить Зуб и Циркониевые Коронки в Андижане | Д-р Олимжон",
      description:
        "Установка безметалловых циркониевых коронок и мостов в Андижане. 3D CAD/CAM моделирование, идеальная эстетика десны, гарантия до 10 лет. Тел: +998 (94) 001-01-56.",
    },
    en: {
      title: "Tooth Replacement & Zirconia Crowns in Andijan | Dr. Olimjon",
      description:
        "Monolithic CAD/CAM zirconia crowns & dental bridges in Andijan. Biocompatible, zero dark gumlines, up to 10-year warranty. Tel: +998 (94) 001-01-56.",
    },
  },

  // 3. Cosmetic Dentistry & E-max Veneers
  "estetik-stomatologiya": {
    uz: {
      title: "E-max Vinirlar va Estetik Tabassum Andijon — Dr. Olimjon",
      description:
        "Gollivud tabassumi Andijonda! 0.3 mm ultra-yupqa E-max keramik vinirlar va badiiy restavratsiya. Qahva va choydan sarg'aymaydi. Tel: +998 (94) 001-01-56.",
    },
    ru: {
      title: "Керамические Виниры E-max в Андижане | Д-р Олимжон",
      description:
        "Ультратонкие виниры E-max (0.3 мм) и эстетическая реставрация зоны улыбки в Андижане. Натуральная прозрачность, стойкий цвет. Тел: +998 (94) 001-01-56.",
    },
    en: {
      title: "E-max Porcelain Veneers in Andijan | Dr. Olimjon",
      description:
        "Get a stunning Hollywood smile in Andijan with ultra-thin 0.3mm E-max porcelain veneers. Stain-resistant, natural translucency. Tel: +998 (94) 001-01-56.",
    },
  },

  // 4. Dental Implants (Tish Implanti, Osstem & Straumann)
  implantatsiya: {
    uz: {
      title: "Tish Implanti va Implantatsiya Andijon (Osstem) — Dr. Olimjon",
      description:
        "Andijonda tish implanti (tish ektirish): Janubiy Koreya (Osstem) va Shveysariya (Straumann) biotitan implantlari. 20 daqiqada 100% og'riqsiz, umrbod kafolat. Tel: +998 94 001-01-56.",
    },
    ru: {
      title: "Зубные Импланты и Имплантация в Андижане (Osstem) | Д-р Олимжон",
      description:
        "Надёжная дентальная имплантация в Андижане за 20 минут без боли. Оригинальные титановые системы Osstem (Корея) и Straumann. Пожизненная гарантия. Запись: +998 (94) 001-01-56.",
    },
    en: {
      title: "Dental Implants & Tooth Replacement in Andijan | Dr. Olimjon",
      description:
        "Painless dental implants in Andijan using genuine South Korean (Osstem) and Swiss (Straumann) titanium systems with lifetime warranty. Tel: +998 94 001-01-56.",
    },
  },

  // 5. Laser Whitening & Prophylaxis
  "tish-oqartirish": {
    uz: {
      title: "Philips ZOOM 4 Tish Oqartirish Andijon — Dr. Olimjon",
      description:
        "Andijonda Philips ZOOM 4 lazerli oqartirish va AirFlow tozalash. Tish emaliga bezarar, 8-10 tongacha xavfsiz oqartirish. Tel: +998 (94) 001-01-56.",
    },
    ru: {
      title: "Отбеливание Зубов ZOOM 4 в Андижане | Д-р Олимжон",
      description:
        "Безопасное лазерное отбеливание зубов Philips ZOOM 4 на 8–10 тонов и профессиональная чистка AirFlow в Андижане. Без вреда эмали. Тел: +998 (94) 001-01-56.",
    },
    en: {
      title: "Philips ZOOM 4 Teeth Whitening in Andijan | Dr. Olimjon",
      description:
        "Philips ZOOM 4 cold-LED teeth whitening up to 8–10 shades brighter and ultrasonic AirFlow scaling in Andijan. Safe enamel care. Tel: +998 94 001-01-56.",
    },
  },

  // 6. Oral Surgery & Atraumatic Tooth Extraction (Tish Olish, Aql Tishi)
  xirurgiya: {
    uz: {
      title: "Tish Olish va Aql Tishini Oldirish Andijon (Og'riqsiz) — Dr. Olimjon",
      description:
        "Andijonda 100% og'riqsiz tish olish (tish oldirish, sug'urish), chirigan ildizlarni olish va aql tishini (8-tish) asoratsiz oldirish. 2 bosqichli anesteziya, shishsiz tez bitish. Tel: +998 (94) 001-01-56.",
    },
    ru: {
      title: "Удаление Зуба и Зуба Мудрости Без Боли в Андижане | Д-р Олимжон",
      description:
        "Атравматичное удаление зубов любой сложности и зубов мудрости в Андижане без боли (0% боли). Полное обезболивание, быстрое заживление лунки без отёка. Запись: +998 (94) 001-01-56.",
    },
    en: {
      title: "Tooth Extraction & Wisdom Tooth Removal in Andijan | Dr. Olimjon",
      description:
        "Atraumatic, 100% painless tooth and wisdom tooth extraction in Andijan. Gentle microsurgical technique with rapid swelling-free recovery. Tel: +998 94 001-01-56.",
    },
  },

  // 7. Digital Radiovisiography Diagnostics
  "rentgen-diagnostika": {
    uz: {
      title: "Raqamli Tish Rentgen Diagnostika Andijon — Dr. Olimjon",
      description:
        "Andijonda 90% kam nurlanishli raqamli viziograf orqali tish ildiz kanallari va yashirin kariesni 2 soniyada aniqlash. Xavfsiz. Tel: +998 (94) 001-01-56.",
    },
    ru: {
      title: "Цифровой Рентген Зуба (Визиограф) в Андижане | Д-р Олимжон",
      description:
        "Мгновенный цифровой снимок зуба в Андижане. Лучевая нагрузка на 90% ниже плёночного рентгена, результат за 2 секунды. Телефон: +998 (94) 001-01-56.",
    },
    en: {
      title: "Digital Dental X-Ray & Diagnostics in Andijan | Dr. Olimjon",
      description:
        "Low-dose high-definition digital radiovisiography in Andijan. 90% less radiation than film, crystal-clear 2-second imaging. Tel: +998 (94) 001-01-56.",
    },
  },
};

// Aliases for route slugs matching "services/<id>"
PAGE_SEO["services/tish-davolash"] = PAGE_SEO["tish-davolash"];
PAGE_SEO["services/ortopediya"] = PAGE_SEO["ortopediya"];
PAGE_SEO["services/estetik-stomatologiya"] = PAGE_SEO["estetik-stomatologiya"];
PAGE_SEO["services/implantatsiya"] = PAGE_SEO["implantatsiya"];
PAGE_SEO["services/tish-oqartirish"] = PAGE_SEO["tish-oqartirish"];
PAGE_SEO["services/xirurgiya"] = PAGE_SEO["xirurgiya"];
PAGE_SEO["services/rentgen-diagnostika"] = PAGE_SEO["rentgen-diagnostika"];

export const PAGE_KEYWORDS = {
  uz: "tish qoyish, tish qo'yish, tish qoyish narxi andijon, oq tish qo'yish narxi 2026, tish implanti, tish implantatsiyasi, tish olish, tish oldirish, og'riqsiz tish olish, tish sug'urish, kechki payt tishim ogriyapti, kechki payt ogriyapti, kechasi tish og'rig'i, tish karonkalari, tish koronkasi, sirkoniy karonka, tsirkon tish narxi, tish breketlari, tish tekislash, stomatolog olimjon, dentist olimjon, implantolog olimjon, doktor olimjon, vrach olimjon, olimjon murzajanov, dr olimjon murzajanov, sevdo denta andijon, eski shahar stomatolog, andijonda stomatologiya, andijonda stomatolog, andijon stomatologiya klinikalari, andijonda tish shifokori, stomatolog andijon, tish shifokori andijon, ortoped stomatolog andijon, tish davolash andijon, tish qo'yish andijon, tsirkon tish narxi andijon, tsirkoniy karonka andijon, implantatsiya andijon, osstem implant andijon, straumann implant andijon, vinirlar andijon, e-max vinirlar, tish oqartirish zoom 4 andijon, aql tishini oldirish andijon, tish rentgen andijon, yaxshi stomatolog andijon, eng yaxshi stomatolog andijon, og'riqsiz tish davolash, tish klinika andijon, tish og'rig'i andijon, stomatologiya andijon narxlari, tish plomba narxi andijon, nurli plomba andijon, 24 soat stomatolog andijon, shoshilinch tish yordami andijon, tishim og'riyapti, tish og'rig'ini qoldirish, tishim lo'qillab og'riyapti, tish nervi shamollashi, tish qamashishi, issiq sovuqqa tish og'rishi, tishim sinib ketdi, plombam tushib ketdi, tishim teshildi, milk qonashi sabablari, tish yuvganda milkdan qon kelishi, milk shishishi, flyus davolash andijon, tish ostida yiring, og'izdan hid kelishi sababi, tish toshlarini tozalash narxi, tish sarg'ayishi, aql tishim chiqyapti, 8 tish og'rig'i, tishim qimirlayapti, tish qo'ydirish narxi andijon, tish yo'qligida nima qilish kerak, tish og'rig'iga dori, tish ukoli og'riqlimi, tish oldirish og'riqlimi, bolalar tishi davolash, homiladorlikda tish davolash andijon, arzon tish davolash andijon, asaka stomatolog, shahrixon stomatolog, oltinko'l stomatolog, xo'jaobod stomatolog, marhamat stomatolog, qo'rg'ontepa stomatolog, farg'ona vodiysi stomatologiya, тиш қўйиш, тиш қўйиш нархи, тиш импланти, тиш олиш, кечки пайт тишим оғрияпти, тиш коронкалари, цирконий коронка, тиш брекетлари, стоматолог олимжон, олимжон мурзажанов, севдо дента, эски шаҳар стоматология",
  ru: "вставить зуб андижан, поставить коронку андижан, циркониевые коронки на зубы андижан, коронки на зубы цена андижан, зубные импланты андижан, имплантация зубов андижан, удаление зуба андижан, удалить зуб без боли андижан, болит зуб ночью что делать, пульсирует зуб ночью, стоматолог олимжон, доктор олимжон мурзажанов, стоматология в андижане, стоматолог в андижане, стоматология андижан, стоматолог андижан, клиники стоматологии андижан, лучшие стоматологи андижана, хороший стоматолог в андижане, клиника севдо дента андижан, олимжон стоматолог, эски шахар стоматолог, стоматолог ортопед андижан, лечение зубов андижан, лечение зубов без боли андижан, лечение кариеса и каналов андижан, циркониевые коронки андижан, коронка на зуб цена андижан, протезирование зубов андижан, зубные импланты осстем андижан, импланты штрауман андижан, виниры емакс андижан, голливудская улыбка андижан, отбеливание зубов зум 4 андижан, профессиональная чистка зубов андижан, удаление зуба мудрости андижан, рентген зуба андижан, лучшая стоматология в андижане, сколько стоит поставить коронку в андижане, сколько стоит имплант в андижане, частная стоматологическая клиника андижан, болит зуб что делать, острая зубная боль снять в домашних условиях, зуб ноет ночью, зуб пульсирует, зуб реагирует на горячее и холодное, чувствительность зубов, откололся зуб что делать, выпала пломба, дырка в зубе, потемнел зуб, шатается зуб, кровоточат десны при чистке, опухла десна флюс, гной в десне лечение, неприятный запах изо рта как избавиться, зубной камень удаление ультразвуком, желтые зубы как отбелить, режется зуб мудрости опухла щека, болит челюсть, сколько стоит вставить зуб в андижане, больно ли лечить зубы, больно ли ставить укол в десну, лечение зубов при беременности андижан, круглосуточная стоматология андижан, экстренная помощь при зубной боли андижан, хороший стоматолог в андижане отзывы, стоматология асака, стоматология шахрихан",
  en: "tooth replacement andijan, dental crowns andijan, zirconia crowns andijan, dental implants andijan, tooth extraction andijan, wisdom tooth removal andijan, severe toothache at night, throbbing tooth pain relief, dentist olimjon, dr olimjon murzajanov, dentistry in andijan, dentist in andijan, dental clinic andijan uzbekistan, dental clinics in andijan, best dentist andijan, top rated dentist andijan, sevdo denta clinic andijan, prosthodontist andijan, osstem implants andijan, straumann dental implants andijan, porcelain veneers andijan, emax veneers andijan, teeth whitening zoom 4 andijan, painless root canal andijan, emergency dentist andijan, english speaking dentist uzbekistan, toothache relief andijan, tooth sensitive to hot and cold, chipped tooth repair andijan, lost dental filling what to do, bleeding gums treatment, swollen gum abscess relief, bad breath cure andijan, broken tooth extraction andijan, wisdom tooth pain swelling, how much dental crown cost andijan, painless dental care andijan, emergency toothache relief andijan",
};

/**
 * Service-specific high-intent keyword matrices
 */
export const SERVICE_KEYWORDS = {
  "tish-davolash": {
    uz: "kechki payt tishim ogriyapti, kechki payt ogriyapti, kechasi tish ogrishi, tishim loqillayapti, tish davolash andijon, tish plomba narxi andijon, nurli plomba andijon, fotopolimer plomba narxi, tish nervini olish andijon, pulpit davolash andijon, karies davolash andijon, periodontit davolash, 3m filtek plomba andijon, estelite quick plomba, ogriqsiz tish davolash, tish qamashishi davolash, tish ogriq qoldirish, ildiz kanalini tozalash, apekslokator bilan davolash, old tishni plombalash, orqa tishni davolash, tish yemirilishi, emal shikastlanishi, tishim ogriyapti, issiq sovuqqa qamashish, chuchuk tish, tish teshilishi, tishda qora dog, plomba tushib qoldi, old tish sinishi, karies davolash narxi, ildiz kanalini davolash, тиш даволаш андижон, тиш пломба нархи, нурли пломба, тиш оғриғи, кечки пайт тишим оғрияпти, кариес даволаш, пульпит даволаш, тишим оғрияпти, тиш қамашиши",
    ru: "болит зуб ночью что делать, пульсирует зуб ночью, ноющая зубная боль, лечение зубов андижан, лечение кариеса андижан, лечение пульпита без боли андижан, световая пломба андижан, пломбирование каналов зуба андижан, 3m filtek андижан, estelite quick андижан, зубной врач андижан, зубная боль андижан, лечение периодонтита андижан, чистка каналов зуба андижан, качественная пломба цена андижан, сколько стоит вылечить зуб в андижане, болит зуб что делать, зуб реагирует на горячее и холодное, чувствительность эмали, потемнел зуб",
    en: "severe toothache at night, tooth throbbing at night, tooth decay treatment andijan, cavity filling andijan, painless root canal andijan, dental fillings 3m filtek, composite filling andijan, estelite quick composite, emergency toothache relief andijan, endodontist andijan, pulpitis treatment andijan, sensitive teeth treatment, lost filling replacement, deep cavity restoration",
  },
  ortopediya: {
    uz: "tish qoyish, tish qo'yish, tish qoyish narxi andijon, oq tish qo'yish narxi 2026, tish karonkalari, tish koronkasi, sirkoniy karonka, tsirkon tish narxi andijon, tsirkoniy karonka andijon, tsirkon qoplama narxi, ortoped stomatolog andijon, tish protez narxlari andijon, tishga karonka qoyish, e-max karonka andijon, germaniya tsirkon karonka, avstraliya keramikasi, xitoy tsirkon karonkasi, koprik protez andijon, metallokeramika almashtirish, tish tushib qolganda, tish yoqligida nima qilish kerak, chaynash tishlariga karonka, sirkon tish andijon, tish sinib ketdi, ildizi qolgan tishni tiklash, bitta tish qoyish, butun jag tish qoyish, тиш қўйиш, тиш қўйиш нархи, тиш коронкалари, циркон тиш нархи андижон, цирконий коронка, тиш қўйиш андижон, протез тишлар нархи, синган тишни тиклаш",
    ru: "вставить зуб андижан, вставить зубы цена андижан, коронки на зубы андижан, циркониевые коронки андижан, коронка из диоксида циркония андижан, коронка из циркония цена андижан, поставить коронку на зуб цена андижан, протезирование зубов андижан, стоматолог ортопед андижан, мостовидный протез андижан, безметалловая керамика андижан, коронки емакс андижан, цирконий германия австралия, замена металлокерамики на цирконий, откололся зуб под корень, восстановление сломанного зуба, сколько стоит поставить коронку в андижане",
    en: "tooth replacement andijan, dental crowns andijan, zirconia crowns andijan, dental crowns price andijan, prosthodontist andijan, dental bridges andijan, cad cam zirconia andijan, emax crowns andijan, metal free crowns andijan, full mouth rehabilitation andijan, tooth crown replacement andijan, broken tooth restoration, post and core buildup andijan",
  },
  "estetik-stomatologiya": {
    uz: "tish breketlari, tish tekislash, vinirlar andijon, vinir narxi andijon, emax vinirlar andijon, keramik vinir narxi, gollivud tabassumi andijon, estetik stomatologiya andijon, tish restavratsiyasi andijon, badiiy tish restavratsiyasi, diastema yopish andijon, tishlar orasidagi ochiqlikni yopish, tish qiyshiqligini vinir bilan togirlash, tish oqligi, tabassum dizayni, kompozit vinir andijon, tishlar orasidagi tirqish, tish qiyshiqligi, sariq tishlarni oqartirish, old tish restavratsiyasi, винирлар андижон, винир нархи, голливуд табассуми, эмакс винирлар, тиш реставрацияси",
    ru: "брекеты андижан, выравнивание зубов андижан, виниры андижан, керамические виниры emax андижан, виниры цена андижан, виниры на зубы цена в андижане, голливудская улыбка андижан, эстетическая стоматология андижан, художественная реставрация зубов андижан, закрыть щель между зубами диастема, композитные виниры андижан, выравнивание зубов винирами, щель между зубами, как сделать красивую улыбку",
    en: "clear aligners andijan, dental veneers andijan, porcelain veneers emax andijan, cosmetic dentistry andijan, smile makeover andijan, aesthetic restoration andijan, hollywood smile andijan, diastema closure veneers, composite bonding andijan, cosmetic dentist andijan, gap between front teeth closure",
  },
  implantatsiya: {
    uz: "tish implanti, tish implantatsiyasi, tish ektirish, implantatsiya andijon, tish implant narxi andijon, osstem implant andijon narxi, straumann implant andijon, koreyski implant andijon, shveysariya implant, tish ektirish narxi andijon, tish implantolog andijon, bir bosqichli implantatsiya, suyak yetishmovchiligi implant, ogriqsiz tish implantatsiyasi, suniy tish ildizi, butun jag implantatsiyasi, all on 4 andijon, all on 6 andijon, tish tushib qolganda, tish sugurgandan keyin implant, implant qoyish ogriqlimi, bitta tish implantatsiyasi, тиш импланти, тиш имплантацияси, имплантация андижон, тиш имплант нархи, осстем имплант, штрауман имплант, тиш экиш нархи",
    ru: "зубные импланты андижан, имплантация зубов андижан, зубной имплант цена андижан, импланты осстем цена андижан, имплантация штрауман андижан, поставить имплант цена андижан, лучший имплантолог андижан, корейские импланты осстем, швейцарские импланты штрауман, одноэтапная имплантация андижан, имплантация зубов под ключ андижан, приживаемость имплантов, нет зуба что делать, имплант или мост, сколько стоит вставить зуб имплант андижан",
    en: "dental implants andijan, tooth implant andijan, osstem implants andijan, straumann dental implants andijan, tooth replacement implant andijan, dental surgery uzbekistan, dental implantologist andijan, immediate implant placement, single tooth implant cost andijan, all on 4 dental implants uzbekistan, missing tooth solution, tooth extraction with immediate implant",
  },
  "tish-oqartirish": {
    uz: "tish oqartirish andijon narxi, zoom 4 tish oqartirish andijon, lazerli tish oqartirish, tish toshlarini tozalash andijon, airflow tozalash andijon, ultratovushli tish tozalash, kashanda tishlarini tozalash, choy va kofe doglarini ketkazish, tish sargayishi sababi, tish toshini oldirish narxi andijon, emalni oqartirish, tish toshini oldirish, milk qonashi tozalash, kashanda tishlari sariqligi, ogizdan hid kelishi, emalni oqartirish zararsizmi, тиш оқартириш андижон, зум 4 оқартириш, тиш тошларини тозалаш, эйрфлоу тозалаш, тиш сарғайиши",
    ru: "отбеливание зубов андижан, отбеливание зум 4 андижан, безопасное отбеливание зубов андижан, профессиональная чистка зубов андижан, ультразвуковая чистка зубов андижан, удаление зубного камня андижан, эйрфлоу андижан, снятие налета курильщика андижан, чистка зубов цена андижан, полировка зубов пастой, желтые зубы чистка, кровоточат десны налет, камень на зубах удалить ультразвуком",
    en: "teeth whitening andijan, laser teeth whitening zoom 4 andijan, dental cleaning andijan, airflow dental andijan, remove tartar teeth andijan, ultrasonic scaling and polishing andijan, professional dental hygiene andijan, safe enamel brightening, remove yellow teeth stains, bad breath dental scaling",
  },
  xirurgiya: {
    uz: "tish olish, tish oldirish, ogriqsiz tish olish, tish sugurish, aql tishini oldirish andijon, 8 tishni oldirish narxi andijon, donolik tishi ogriq, ogriqsiz tish sugurish andijon, tish oldirish narxi andijon, murakkab tish olish, ildiz qolib ketganda olish, atravmatik jarrohlik, jarroh stomatolog andijon, aql tishi yalliglanishi, perikoronit davolash, aql tishim chiqyapti, 8 tish ogrishi, aql tishi milk shishi, ogiz ochilmayapti tish ogrigi, tish sugurish ogriqlimi, tish oldirgandan keyin shish, тиш олиш, тиш олдириш, тиш суғуриш, ақл тишини олдириш, тиш жарроҳи, саккизинчи тиш оғриғи",
    ru: "удаление зуба андижан, удалить зуб без боли андижан, вырвать зуб андижан, удаление зуба мудрости андижан, удаление зуба мудрости цена андижан, безболезненное удаление зуба андижан, хирург стоматолог андижан, удаление восьмерки андижан, сложное удаление зуба с корнями, перикоронит зуба мудрости андижан, атравматичное удаление, режется зуб мудрости, опухла щека зуб мудрости",
    en: "tooth extraction andijan, painless dental extraction andijan, wisdom tooth removal andijan, oral surgeon andijan, impacted wisdom tooth andijan, third molar extraction cost, surgical tooth removal, atraumatic bone preserving extraction, wisdom tooth swelling jaw pain relief",
  },
  "rentgen-diagnostika": {
    uz: "tish rentgen andijon, viziografiya andijon, tishni rentgen qilish andijon, tish rasmi tushirish narxi, raqamli tish diagnostikasi, 3d rentgen andijon, tish ildizi rasmi, yashirin kariesni aniqlash, radioviziograf andijon, tish rasmi tushirish, tishim nega ogriyapti rentgen, 3d tish tekshirish, тиш рентген андижон, визиография андижон, тиш сурати, рақамли рентген",
    ru: "рентген зуба андижан, снимок зуба андижан, визиография зубов андижан, прицельный снимок зуба андижан, компьютерная диагностика зубов андижан, где сделать снимок зуба в андижане, цифровой рентген зуба цена, радиовизиограф андижан, снимок корня зуба, скрытый кариес снимок",
    en: "dental x-ray andijan, digital dental imaging andijan, radiovisiography andijan, tooth scan andijan, periapical x-ray andijan, low radiation dental x-ray, root canal imaging andijan, digital radiovisiograph andijan",
  },
};

export const getPageSeo = (page, lang) => {
  const entry = PAGE_SEO[page];
  if (!entry) return null;
  return entry[lang] || entry.uz;
};
