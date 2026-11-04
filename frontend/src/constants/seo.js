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
      title: "Dr. Olimjon Murzajanov — Stomatolog Andijon | Sevdo Denta",
      description: `Andijon Eski Shaharda stomatolog Dr. Olimjon Murzajanov: og'riqsiz tish davolash, tsirkoniy karonka, vinirlar va implantlar. Tel: +998 94 001-01-56.`,
    },
    ru: {
      title: "Д-р Олимжон Мурзажанов — Стоматолог в Андижане | Sevdo Denta",
      description: `Стоматолог в Андижане Д-р Олимжон Мурзажанов (Sevdo Denta, Эски Шахар): лечение зубов без боли, циркониевые коронки, виниры и импланты. Тел: +998 94 001-01-56.`,
    },
    en: {
      title: "Dr. Olimjon Murzajanov — Dentist in Andijan | Sevdo Denta",
      description: `Dr. Olimjon Murzajanov at Sevdo Denta Clinic in Andijan: painless dental therapy, zirconia crowns, E-max veneers and implants. Call: +998 (94) 001-01-56.`,
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

  // 2. Prosthodontics & Zirconia Crowns
  ortopediya: {
    uz: {
      title: "Tsirkoniy Karonka va Protez Andijon — Dr. Olimjon",
      description:
        "Andijonda tsirkoniy va E-max keramik karonkalar. 100% biomoslashuvchan, milk ko'karmaydi, CAD/CAM 3D aniqlik va 10 yil kafolat. Tel: +998 94 001-01-56.",
    },
    ru: {
      title: "Циркониевые Коронки и Мосты в Андижане | Д-р Олимжон",
      description:
        "Установка безметалловых циркониевых коронок и мостов в Андижане. 3D CAD/CAM моделирование, идеальная эстетика десны, гарантия. Тел: +998 (94) 001-01-56.",
    },
    en: {
      title: "Zirconia Crowns & Dental Bridges in Andijan | Dr. Olimjon",
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

  // 4. Dental Implants (Osstem & Straumann)
  implantatsiya: {
    uz: {
      title: "Tish Implantatsiyasi Andijon (Osstem) — Dr. Olimjon",
      description:
        "Andijonda tish implantatsiyasi: Janubiy Koreya (Osstem) va Shveysariya (Straumann) biotitan implantlari. 20 daqiqada og'riqsiz, kafolat. Tel: +998 94 001-01-56.",
    },
    ru: {
      title: "Имплантация Зубов в Андижане (Osstem) | Д-р Олимжон",
      description:
        "Надёжная дентальная имплантация в Андижане за 20 минут без боли. Оригинальные титановые системы Osstem (Корея) и Straumann. Запись: +998 (94) 001-01-56.",
    },
    en: {
      title: "Titanium Dental Implants in Andijan | Dr. Olimjon",
      description:
        "Painless dental implants in Andijan using genuine South Korean (Osstem) and Swiss (Straumann) titanium systems with warranty. Tel: +998 94 001-01-56.",
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

  // 6. Oral Surgery & Atraumatic Tooth Extraction
  xirurgiya: {
    uz: {
      title: "Og'riqsiz Aql Tishini Oldirish Andijon — Dr. Olimjon",
      description:
        "Andijonda oddiy va murakkab aql tishlarini 100% og'riqsiz, suyakni shikastlamasdan olish. Kuchaytirilgan anesteziya va tez bitish. Tel: +998 (94) 001-01-56.",
    },
    ru: {
      title: "Удаление Зуба Мудрости Без Боли в Андижане | Д-р Олимжон",
      description:
        "Атравматичное удаление зубов любой сложности и зубов мудрости в Андижане. Полное обезболивание, быстрое заживление лунки. Запись: +998 (94) 001-01-56.",
    },
    en: {
      title: "Wisdom Tooth Extraction in Andijan | Dr. Olimjon",
      description:
        "Atraumatic, painless tooth and wisdom tooth removal in Andijan. Gentle microsurgical technique with rapid swelling-free recovery. Tel: +998 94 001-01-56.",
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
  uz: "stomatolog andijon, tish shifokori andijon, dr olimjon murzajanov, olimjon stomatolog, dentist olimjon, sevdo denta andijon, eski shahar stomatolog, ortoped stomatolog andijon, tish davolash andijon, tish qo'yish andijon, tsirkon tish narxi andijon, tsirkoniy karonka andijon, implantatsiya andijon, osstem implant andijon, vinirlar andijon, e-max vinirlar, tish oqartirish zoom 4 andijon, aql tishini oldirish andijon, tish rentgen andijon, yaxshi stomatolog andijon, og'riqsiz tish davolash, tish klinika andijon, tish og'rig'i andijon, stomatologiya andijon narxlari, стоматолог андижон, тиш шифокори андижон, тиш даволаш андижон, циркон тиш нархи, имплантация андижон, винирлар андижон, олимжон стоматолог, севдо дента",
  ru: "стоматолог андижан, стоматология андижан, клиника севдо дента андижан, доктор олимжон мурзажанов, олимжон стоматолог, эски шахар стоматолог, стоматолог ортопед андижан, лечение зубов андижан, лечение зубов без боли андижан, циркониевые коронки андижан, коронка на зуб цена андижан, протезирование зубов андижан, имплантация зубов андижан, зубные импланты осстем андижан, виниры емакс андижан, голливудская улыбка андижан, отбеливание зубов зум 4 андижан, удаление зуба мудрости андижан, рентген зуба андижан, лучшая стоматология в андижане, сколько стоит поставить коронку в андижане",
  en: "dentist in andijan, dental clinic andijan uzbekistan, dr olimjon murzajanov, sevdo denta clinic andijan, prosthodontist andijan, dental implants andijan, osstem implants andijan, zirconia crowns andijan, porcelain veneers andijan, emax veneers andijan, teeth whitening zoom 4 andijan, painless root canal andijan, wisdom tooth extraction andijan, best dentist andijan, english speaking dentist uzbekistan",
};

/**
 * Service-specific high-intent keyword matrices
 */
export const SERVICE_KEYWORDS = {
  "tish-davolash": {
    uz: "tish davolash andijon, tish plomba narxi andijon, nurli plomba andijon, tish nervini olish andijon, pulpit davolash, karies davolash andijon, 3m filtek plomba, ogriqsiz tish davolash, тиш даволаш андижон, тиш пломба нархи, нурли пломба, тиш оғриғи",
    ru: "лечение зубов андижан, лечение кариеса андижан, лечение пульпита без боли, световая пломба андижан, пломбирование каналов зуба андижан, 3m filtek андижан, зубной врач андижан",
    en: "tooth decay treatment andijan, cavity filling andijan, painless root canal andijan, dental fillings 3m filtek, emergency toothache relief andijan",
  },
  ortopediya: {
    uz: "tsirkon tish narxi andijon, tsirkoniy karonka andijon, tish qoyish andijon, ortoped stomatolog andijon, tish protez narxlari andijon, tishga karonka qoyish, циркон тиш нархи андижон, цирконий коронка, тиш қўйиш андижон",
    ru: "циркониевые коронки андижан, коронка из диоксида циркония андижан, протезирование зубов андижан, стоматолог ортопед андижан, мостовидный протез андижан, поставить коронку цена",
    en: "zirconia crowns andijan, dental crowns price andijan, prosthodontist andijan, dental bridges andijan, cad cam zirconia andijan",
  },
  "estetik-stomatologiya": {
    uz: "vinirlar andijon, vinir narxi andijon, emax vinirlar andijon, gollivud tabassumi andijon, estetik stomatologiya andijon, tish restavratsiyasi andijon, diastema yopish, винирлар андижон, винир нархи, голливуд табассуми",
    ru: "виниры андижан, керамические виниры emax андижан, виниры цена андижан, голливудская улыбка андижан, эстетическая стоматология андижан, реставрация зубов андижан",
    en: "dental veneers andijan, porcelain veneers emax andijan, cosmetic dentistry andijan, smile makeover andijan, aesthetic restoration andijan",
  },
  implantatsiya: {
    uz: "implantatsiya andijon, tish implant narxi andijon, osstem implant andijon, straumann implant andijon, tish ektirish narxi andijon, tish implantolog andijon, имплантация андижон, тиш имплант нархи, осстем имплант",
    ru: "имплантация зубов андижан, зубные импланты андижан, импланты осстем цена андижан, имплантация штрауман андижан, поставить имплант цена, лучший имплантолог андижан",
    en: "dental implants andijan, osstem implants andijan, straumann dental implants andijan, tooth replacement implant andijan, dental surgery uzbekistan",
  },
  "tish-oqartirish": {
    uz: "tish oqartirish andijon, zoom 4 tish oqartirish andijon, tish toshlarini tozalash andijon, airflow tozalash andijon, ultratovushli tish tozalash, тиш оқартириш андижон, зум 4 оқартириш, тиш тошларини тозалаш",
    ru: "отбеливание зубов андижан, отбеливание зум 4 андижан, профессиональная чистка зубов андижан, ультразвуковая чистка зубов андижан, удаление зубного камня андижан, эйрфлоу андижан",
    en: "teeth whitening andijan, laser teeth whitening zoom 4 andijan, dental cleaning andijan, airflow dental andijan, remove tartar teeth andijan",
  },
  xirurgiya: {
    uz: "tish oldirish andijon, aql tishini oldirish andijon, 8 tishni oldirish narxi andijon, ogriqsiz tish sugurish andijon, donolik tishi ogriq, jarroh stomatolog andijon, тиш олдириш андижон, ақл тишини олдириш, тиш жарроҳи",
    ru: "удаление зуба андижан, удаление зуба мудрости андижан, безболезненное удаление зуба андижан, удалить зуб без боли андижан, хирург стоматолог андижан, удаление восьмерки андижан",
    en: "tooth extraction andijan, wisdom tooth removal andijan, painless dental extraction andijan, oral surgeon andijan, impacted wisdom tooth andijan",
  },
  "rentgen-diagnostika": {
    uz: "tish rentgen andijon, viziografiya andijon, tishni rentgen qilish andijon, raqamli tish diagnostikasi, тиш рентген андижон, визиография андижон, тиш сурати",
    ru: "рентген зуба андижан, снимок зуба андижан, визиография зубов андижан, прицельный снимок зуба андижан, компьютерная диагностика зубов андижан",
    en: "dental x-ray andijan, digital dental imaging andijan, radiovisiography andijan, tooth scan andijan",
  },
};

export const getPageSeo = (page, lang) => {
  const entry = PAGE_SEO[page];
  if (!entry) return null;
  return entry[lang] || entry.uz;
};
