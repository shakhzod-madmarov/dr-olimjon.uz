import { getYearsOfExperience } from "./doctor.js";

export const SITE_ORIGIN = "https://dentist-olimjon.uz";

const years = getYearsOfExperience();

/**
 * Per-page, per-language SEO copy with concise 50–60 char titles and 140–158 char descriptions
 * so Google, Yandex, and AI Overviews display full un-truncated titles, procedures, location, and phone.
 */
export const PAGE_SEO = {
  home: {
    uz: {
      title: "Stomatolog va Tish Implantatsiyasi Andijon — Dr. Olimjon",
      description:
        "Andijonda og'riqsiz tish davolash, tish implanti (Osstem), tish qo'yish (tsirkoniy), aql tishi olish. Dr. Olimjon (Sevdo Denta). Tel: +998 94 001-01-56",
    },
    ru: {
      title: "Стоматология и Имплантация Зубов Андижан — Д-р Олимжон",
      description:
        "Безболезненное лечение зубов, импланты Osstem, циркониевые коронки, виниры и удаление зубов мудрости в Андижане (Sevdo Denta). Тел: +998 94 001-01-56",
    },
    en: {
      title: "Dentist & Dental Implants in Andijan — Dr. Olimjon",
      description:
        "Painless dentistry in Andijan: Osstem implants, zirconia crowns, E-max veneers & wisdom tooth removal by Dr. Olimjon (Sevdo Denta). +998 94 001-01-56",
    },
  },
  services: {
    uz: {
      title: "Tish Davolash, Qo'yish va Implantlar — Dr. Olimjon Andijon",
      description:
        "Andijon stomatologiya xizmatlari: plomba, tsirkoniy karonka, E-max vinir, Osstem implant, ZOOM 4 oqartirish, aql tishi olish, rentgen. +998 94 001-01-56",
    },
    ru: {
      title: "Услуги Стоматолога в Андижане — Д-р Олимжон | Sevdo Denta",
      description:
        "Лечение кариеса и каналов без боли, циркониевые коронки, виниры E-max, импланты Osstem, ZOOM 4 и удаление зубов в Андижане. Тел: +998 94 001-01-56",
    },
    en: {
      title: "Dental Services & Treatments in Andijan — Dr. Olimjon",
      description:
        "Painless dentistry in Andijan: composite fillings, root canals, zirconia crowns, E-max veneers, titanium implants & whitening. Tel: +998 94 001-01-56",
    },
  },
  about: {
    uz: {
      title: "Dr. Olimjon Murzajanov — Stomatolog & Ortoped Andijon",
      description: `Dr. Olimjon Murzajanov — Andijon (Sevdo Denta) stomatolog-implantologi. ${years}+ yil tajriba, 1,000+ bemor, ADTI diplomi va sertifikatlar. +998 94 001-01-56`,
    },
    ru: {
      title: "О Докторе Олимжоне Мурзажанове — Стоматолог в Андижане",
      description: `Д-р Олимжон Мурзажанов — стоматолог-ортопед и имплантолог в Андижане (Sevdo Denta). ${years}+ лет практики, 1 000+ пациентов. Тел: +998 94 001-01-56`,
    },
    en: {
      title: "About Dr. Olimjon Murzajanov — Dentist in Andijan",
      description: `Meet Dr. Olimjon Murzajanov, dentist and implantologist at Sevdo Denta in Andijan: ${years}+ years experience, 1,000+ patients. Tel: +998 94 001-01-56`,
    },
  },
  contact: {
    uz: {
      title: "Aloqa va Manzil — Dr. Olimjon | Sevdo Denta Andijon",
      description:
        "Andijon, Eski Shahar, Abdurauf Fitrat 243A (Sevdo Denta, 1-qavat). Dr. Olimjon qabuliga yozilish: +998 94 001-01-56, Telegram: @httmurzajanov",
    },
    ru: {
      title: "Контакты и Адрес — Д-р Олимжон | Sevdo Denta Андижан",
      description:
        "г. Андижан, Эски Шахар, ул. Абдурауфа Фитрата 243А (Sevdo Denta, 1-й этаж). Запись к Д-ру Олимжону: +998 94 001-01-56, Telegram: @httmurzajanov",
    },
    en: {
      title: "Contact & Location — Dr. Olimjon | Sevdo Denta Andijan",
      description:
        "Visit Dr. Olimjon Murzajanov at Sevdo Denta, 243A Abdurauf Fitrat St, Old City, Andijan. Book: +998 94 001-01-56 or Telegram @httmurzajanov",
    },
  },
  booking: {
    uz: {
      title: "Onlayn Qabulga Yozilish — Dr. Olimjon | Sevdo Denta",
      description:
        "Dr. Olimjon Murzajanov qabuliga navbatsiz onlayn yoziling: bo'sh kun va soatni tanlang. Andijon, Eski Shahar, Sevdo Denta. Tel: +998 94 001-01-56",
    },
    ru: {
      title: "Онлайн-Запись на Приём — Д-р Олимжон | Андижан",
      description:
        "Онлайн-запись к Д-ру Олимжону без очередей: выберите свободный день и время. Клиника Sevdo Denta, г. Андижан. Тел: +998 94 001-01-56",
    },
    en: {
      title: "Book Dental Appointment — Dr. Olimjon | Andijan",
      description:
        "Book online with Dr. Olimjon Murzajanov at Sevdo Denta Clinic in Andijan. Zero waiting line, choose your available slot. Tel: +998 94 001-01-56",
    },
  },
  qabul: {
    uz: {
      title: "Qabul Vaqtini Tanlang — Dr. Olimjon | Sevdo Denta",
      description:
        "Dr. Olimjon Murzajanov qabuliga navbatsiz onlayn yoziling. 100% og'riqsiz ko'rik va aniq davolash rejasi. Andijon, Eski Shahar. +998 94 001-01-56",
    },
    ru: {
      title: "Запись к Стоматологу — Д-р Олимжон | Андижан",
      description:
        "Онлайн запись на приём к стоматологу-ортопеду в Андижане без очередей. Клиника Sevdo Denta, Эски Шахар. Тел: +998 94 001-01-56",
    },
    en: {
      title: "Schedule Consultation — Dr. Olimjon | Andijan",
      description:
        "Schedule your dental consultation with Dr. Olimjon Murzajanov in Andijan. Zero waiting time, gentle treatment. Call +998 94 001-01-56",
    },
  },
  notFound: {
    uz: {
      title: "Sahifa topilmadi (404) — Dr. Olimjon Murzajanov",
      description:
        "Siz qidirgan sahifa topilmadi. Bosh sahifaga qayting yoki Andijondagi stomatologik xizmatlarimiz bilan tanishing.",
    },
    ru: {
      title: "Страница не найдена (404) — Д-р Олимжон",
      description:
        "Запрашиваемая страница не найдена. Вернитесь на главную или выберите нужную стоматологическую услугу.",
    },
    en: {
      title: "Page Not Found (404) — Dr. Olimjon Murzajanov",
      description:
        "The page you requested could not be found. Return to the homepage or browse our dental services in Andijan.",
    },
  },

  // 1. Restorative & Root Canal Therapy
  "tish-davolash": {
    uz: {
      title: "Og'riqsiz Tish Davolash va Plomba Andijon — Dr. Olimjon",
      description:
        "Andijonda tish og'rig'i, karies va nerv (pulpit) davolash. Germaniya 3M Filtek va Yaponiya Estelite plombalari. 0% og'riq. +998 94 001-01-56",
    },
    ru: {
      title: "Лечение Зубов и Каналов Без Боли в Андижане — Д-р Олимжон",
      description:
        "Безболезненное лечение кариеса, пульпита и ночной зубной боли в Андижане. Немецкие и японские пломбы 3M Filtek, Estelite. +998 94 001-01-56",
    },
    en: {
      title: "Painless Tooth Decay & Root Canal in Andijan — Dr. Olimjon",
      description:
        "Gentle, painless root canal therapy and cavity fillings in Andijan using genuine 3M Filtek & Estelite nano-composites. Tel: +998 94 001-01-56",
    },
  },

  // 2. Prosthodontics & Zirconia Crowns
  ortopediya: {
    uz: {
      title: "Tish Qo'yish va Tsirkoniy Karonka Andijon — Dr. Olimjon",
      description:
        "Andijonda sifatli tish qo'yish (tish qoyish): Germaniya va Avstraliya tsirkoniy karonkalari, ko'prik protezlar. 2-3 kunda, 10 yil kafolat. +998 94 001-01-56",
    },
    ru: {
      title: "Вставить Зуб и Циркониевые Коронки в Андижане — Д-р Олимжон",
      description:
        "Установка безметалловых циркониевых коронок и мостов в Андижане за 2–3 дня. 3D CAD/CAM точность, без посинения десны, гарантия 10 лет. +998 94 001-01-56",
    },
    en: {
      title: "Tooth Replacement & Zirconia Crowns in Andijan — Dr. Olimjon",
      description:
        "Monolithic CAD/CAM zirconia crowns & dental bridges in Andijan in 2–3 days. Metal-free aesthetics, up to 10-year warranty. Tel: +998 94 001-01-56",
    },
  },

  // 3. Cosmetic Dentistry, Veneers & Alignment Planning
  "estetik-stomatologiya": {
    uz: {
      title: "Vinirlar (E-max) va Tish Tekislash Andijon — Dr. Olimjon",
      description:
        "Andijonda E-max keramik vinirlar, diastema yopish va breket/elayner bilan tish tekislash. Tabiiy Gollivud tabassumi, 10+ yil kafolat. +998 94 001-01-56",
    },
    ru: {
      title: "Виниры E-max и Выравнивание Зубов в Андижане — Д-р Олимжон",
      description:
        "Ультратонкие керамические виниры E-max (0.3 мм), закрытие диастемы и эстетическая реставрация улыбки в Андижане. Тел: +998 94 001-01-56",
    },
    en: {
      title: "E-max Porcelain Veneers & Smile Design Andijan — Dr. Olimjon",
      description:
        "Ultra-thin 0.3mm E-max porcelain veneers, diastema closure, and smile design in Andijan. Natural stain-resistant translucency. Tel: +998 94 001-01-56",
    },
  },

  // 4. Dental Implants
  implantatsiya: {
    uz: {
      title: "Tish Implantatsiyasi Andijon (Osstem, Straumann) — Olimjon",
      description:
        "Andijonda tish implanti: Koreya (Osstem) va Shveysariya (Straumann) implantatsiyasi. 20 daqiqada og'riqsiz, umrbod kafolat, 99.2% natija. +998 94 001-01-56",
    },
    ru: {
      title: "Имплантация Зубов и Импланты Osstem в Андижане — Д-р Олимжон",
      description:
        "Дентальная имплантация в Андижане за 20 минут без боли: оригинальные титановые системы Osstem (Корея) и Straumann. Приживаемость 99.2%. +998 94 001-01-56",
    },
    en: {
      title: "Dental Implants (Osstem, Straumann) in Andijan — Dr. Olimjon",
      description:
        "Painless dental implants in Andijan: South Korean Osstem & Swiss Straumann titanium fixtures placed in 20 mins with lifetime warranty. +998 94 001-01-56",
    },
  },

  // 5. Laser Whitening & Prophylaxis
  "tish-oqartirish": {
    uz: {
      title: "Tish Oqartirish ZOOM 4 va Tosh Tozalash Andijon — Olimjon",
      description:
        "Andijonda Philips ZOOM 4 lazerli tish oqartirish va AirFlow tosh tozalash. Emalga zarar yetkazmaydi, milk qonashini to'xtatadi. +998 94 001-01-56",
    },
    ru: {
      title: "Отбеливание ZOOM 4 и Чистка Зубов в Андижане — Д-р Олимжон",
      description:
        "Безопасное осветление зубов Philips ZOOM 4 холодным LED-светом и ультразвуковая чистка AirFlow в Андижане без повреждения эмали. +998 94 001-01-56",
    },
    en: {
      title: "Philips ZOOM 4 Teeth Whitening & AirFlow Andijan — Dr. Olimjon",
      description:
        "Safe cold-LED Philips ZOOM 4 teeth whitening and Swiss AirFlow tartar scaling in Andijan. Zero enamel damage or sensitivity. Tel: +998 94 001-01-56",
    },
  },

  // 6. Oral Surgery & Wisdom Tooth Extraction
  xirurgiya: {
    uz: {
      title: "Og'riqsiz Tish Olish va Aql Tishi Andijon — Dr. Olimjon",
      description:
        "Andijonda og'riqsiz tish olish (sug'urish), singan ildiz va aql tishini (8-tish) atravmatik olish. 2 bosqichli anesteziya, shishsiz bitish. +998 94 001-01-56",
    },
    ru: {
      title: "Удаление Зуба и Зуба Мудрости Без Боли Андижан — Олимжон",
      description:
        "Атравматичное удаление зубов любой сложности и зубов мудрости в Андижане без боли и отёка. Коллагеновая губка для заживления. Тел: +998 94 001-01-56",
    },
    en: {
      title: "Painless Tooth & Wisdom Tooth Extraction Andijan — Olimjon",
      description:
        "Atraumatic, 100% painless tooth and wisdom tooth extraction in Andijan. Bone-preserving technique with rapid swelling-free healing. +998 94 001-01-56",
    },
  },

  // 7. Digital Radiovisiography Diagnostics
  "rentgen-diagnostika": {
    uz: {
      title: "Raqamli Tish Rentgen (Viziograf) Andijon — Dr. Olimjon",
      description:
        "Andijonda 90% kam nurlanishli raqamli tish rentgeni. 2 soniyada yashirin karies, ildiz kanallari va suyakni aniq ko'rish. Tel: +998 94 001-01-56",
    },
    ru: {
      title: "Цифровой Рентген Зуба (Визиограф) в Андижане — Д-р Олимжон",
      description:
        "Мгновенный цифровой снимок зуба в Андижане за 2 секунды: лучевая нагрузка на 90% ниже плёночного рентгена, точный контроль каналов. +998 94 001-01-56",
    },
    en: {
      title: "Digital Dental X-Ray (Radiovisiograph) Andijan — Dr. Olimjon",
      description:
        "Low-dose high-definition digital radiovisiography in Andijan: 90% less radiation and crystal-clear 2-second root canal imaging. Tel: +998 94 001-01-56",
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
  uz: "tish implantatsiyasi, tish implantatsiyasi andijon, implant tish narxi, implant tish narxi 2026, tish qo yish narxlari, tish implantatsiya nima, implant tish qo yish jarayoni, implant tish halolmi, implant tish zararlari, implant tish turlari, tish qoyish, tish qo'yish, tish qoyish narxi andijon, oq tish qo'yish narxi 2026, tish implanti, tish olish, tish oldirish, og'riqsiz tish olish, tish sug'urish, kechki payt tishim ogriyapti, kechasi tish og'rig'iga nima qilish kerak, tish og'rig'iga issiq qo'ysa bo'ladimi, tish karonkalari, tish koronkasi, sirkoniy karonka, tsirkon tish narxi, tish breketlari, tish tekislash, stomatolog olimjon, dentist olimjon, implantolog olimjon, doktor olimjon, vrach olimjon, olimjon murzajanov, dr olimjon murzajanov, sevdo denta andijon, eski shahar stomatolog, abdurauf fitrat stomatolog, andijonda stomatologiya, andijonda stomatolog, andijon stomatologiya klinikalari, yaxshi stomatolog andijon, eng yaxshi stomatolog andijon, og'riqsiz tish davolash, tishim lo'qillab og'riyapti, tish nervi shamollashi, tish qamashishi, issiq sovuqqa tish og'rishi, tishim sinib ketdi, plombam tushib ketdi, milk qonashi sabablari, og'izdan hid kelishi sababi, tish toshlarini tozalash narxi, aql tishini oldirish andijon, 8 tish og'rig'i, asaka stomatolog, shahrixon stomatolog, oltinko'l stomatolog, xo'jaobod stomatolog, marhamat stomatolog, qo'rg'ontepa stomatolog, buloqboshi stomatolog, farg'ona vodiysi stomatologiya, тиш имплантацияси, имплант тиш нархи, тиш қўйиш нархи, тиш импланти, имплант тиш ҳалолми, имплант тиш зарарлари, тиш олиш, кечки пайт тишим оғрияпти, тиш коронкалари, цирконий коронка, тиш брекетлари, стоматолог олимжон, олимжон мурзажанов, севдо дента",
  ru: "имплантация зубов андижан, имплантация зубов андижан цена 2026, зубные импланты андижан, импланты осстем штрауман андижан, виды зубных имплантов, вредны ли импланты зубов, можно ли ставить имплант халяль, вставить зуб андижан, сколько стоит вставить зуб андижан, поставить коронку андижан, циркониевые коронки на зубы андижан, коронки на зубы цена андижан, удаление зуба андижан, удалить зуб мудрости без боли андижан, болит зуб ночью что делать, пульсирует зуб ночью, можно ли греть щеку при зубной боли, стоматолог олимжон, доктор олимжон мурзажанов, стоматология в андижане, стоматолог в андижане, клиники стоматологии андижан, лучшие стоматологи андижана, хороший стоматолог в андижане отзывы, клиника севдо дента андижан, эски шахар стоматолог, стоматолог ортопед андижан, лечение зубов без боли андижан, световая пломба 3m filtek андижан, виниры емакс андижан, голливудская улыбка андижан, отбеливание зубов зум 4 андижан, чистка зубов airflow андижан, рентген зуба андижан, откололся зуб что делать, выпала пломба, кровоточат десны, неприятный запах изо рта, стоматология асака, стоматология шахрихан",
  en: "dental implants andijan, tooth implant cost uzbekistan, osstem straumann implants andijan, tooth replacement andijan, dental crowns andijan, zirconia crowns andijan, porcelain veneers andijan, emax veneers andijan, tooth extraction andijan, wisdom tooth removal andijan, severe toothache at night relief, dentist olimjon, dr olimjon murzajanov, dentistry in andijan, best dentist in andijan, sevdo denta clinic andijan, prosthodontist andijan, teeth whitening zoom 4 andijan, painless root canal andijan, emergency dentist andijan, digital dental x-ray andijan",
};

/**
 * Service-specific high-intent keyword matrices covering clinical synonyms,
 * cost/safety/halal/timeline queries, and colloquial variants (Latin & Cyrillic).
 */
export const SERVICE_KEYWORDS = {
  "tish-davolash": {
    uz: "tish davolash andijon, kechki payt tishim ogriyapti, kechasi tish og'riganda nima qilish kerak, tish og'rig'iga issiq qo'yish mumkinmi, tishim loqillayapti, tish og'rig'iga dori, tish plomba narxi andijon, nurli plomba andijon, 3m filtek plomba germaniya, estelite yaponiya plomba, denfil koreya plomba, vladmiva rossiya plomba, tish nervini olish og'riqlimi, pulpit davolash andijon, karies davolash andijon, periodontit davolash, og'riqsiz tish davolash, tish qamashishi davolash, issiq sovuqqa tish qamashishi, ildiz kanalini tozalash apekslokator, plomba tushib qoldi, tishda qora dog, old tish sinishi, tish ukoli og'riqlimi, тиш даволаш андижон, тиш пломба нархи, нурли пломба, тиш оғриғи, кечки пайт тишим оғрияпти, кариес даволаш, пульпит даволаш",
    ru: "лечение зубов андижан, болит зуб ночью что делать, пульсирует зуб ночью, ноющая зубная боль, лечение кариеса андижан, лечение пульпита без боли андижан, световая пломба андижан, пломбирование каналов зуба андижан, 3m filtek германия андижан, estelite япония, denfil корея, зубной врач андижан, сколько стоит вылечить зуб в андижане, чувствительность эмали, потемнел зуб, выпала пломба",
    en: "tooth decay treatment andijan, severe toothache at night relief, cavity filling andijan, painless root canal andijan, 3m filtek estelite composite filling, emergency toothache relief andijan, pulpitis treatment andijan, sensitive teeth treatment, lost filling replacement",
  },
  ortopediya: {
    uz: "tish qoyish, tish qo'yish, tish qo yish narxlari, tish qoyish narxi andijon, oq tish qo'yish narxi 2026, tish karonkalari, tish koronkasi, sirkoniy karonka, tsirkoniy karonka andijon, germaniya tsirkon karonka, avstraliya keramikasi, xitoy tsirkon karonkasi, tsirkon va metallokeramika farqi, e-max karonka andijon, ko'prik protez andijon, kultavaya vkladka ildizni tiklash, ortoped stomatolog andijon, tish sinib ketdi, bitta tish qo'yish, butun jag' tish qo'yish, milk qoraymaydigan karonka, 2-3 kunda tish qo'yish, cad cam 3d tish, тиш қўйиш, тиш қўйиш нархи, тиш коронкалари, циркон тиш нархи андижон, цирконий коронка",
    ru: "вставить зуб андижан, сколько стоит вставить зубы в андижане, коронки на зубы андижан, циркониевые коронки андижан, цирконий германия австралия китай, отличие циркония от металлокерамики, поставить коронку на зуб цена андижан, протезирование зубов андижан, стоматолог ортопед андижан, мостовидный протез андижан, культевая вкладка спасти корень зуба",
    en: "tooth replacement andijan, dental crowns andijan, zirconia crowns andijan, zirconia vs metal ceramic crowns, prosthodontist andijan, dental bridges andijan, cad cam 3d zirconia andijan, post and core buildup andijan",
  },
  "estetik-stomatologiya": {
    uz: "vinirlar andijon, e-max vinirlar andijon, keramik vinir narxi, gollivud tabassumi andijon, estetik stomatologiya andijon, tish breketlari, tish tekislash andijon, elaynerlar andijon, tish ortodontiyasi, diastema yopish, tishlar orasidagi ochiqlikni yopish, old tish restavratsiyasi, kompozit vinir andijon, vinirlar tishni charxlaydimi, vinirlar sarg'ayadimi, винирлар андижон, голливуд табассуми, эмакс винирлар, тиш брекетлари, тиш текислаш андижон",
    ru: "виниры андижан, керамические виниры emax андижан, виниры на зубы цена в андижане, голливудская улыбка андижан, эстетическая стоматология андижан, брекеты и элайнеры андижан, выравнивание зубов андижан, художественная реставрация зубов андижан, закрыть щель между зубами диастема",
    en: "porcelain veneers emax andijan, cosmetic dentistry andijan, smile makeover andijan, clear aligners braces planning andijan, hollywood smile andijan, diastema closure veneers, composite bonding andijan",
  },
  implantatsiya: {
    uz: "tish implantatsiyasi, tish implanti, tish implantatsiyasi andijon, implant tish narxi, implant tish narxi 2026, tish implantatsiya nima, implant tish qo yish jarayoni, implant tish halolmi, implant tish zararlari, implant tish turlari, tish implanti bosqichlari, osteointegratsiya muddati, tish ektirish narxi andijon, osstem implant andijon, straumann implant andijon, koreyski implant andijon, shveysariya implant, bir bosqichli implantatsiya, tish olingan kuni implant, suyak plastikasi, og'riqsiz tish implantatsiyasi, tish implantolog andijon, 20 daqiqada implant, 99.2% kafolat, тиш имплантацияси, тиш импланти, имплант тиш нархи 2026, имплант тиш ҳалолми, имплант тиш зарарлари, осстем имплант, штрауман имплант",
    ru: "имплантация зубов андижан, зубные импланты андижан, зубной имплант цена андижан 2026, этапы имплантации зубов, импланты осстем цена андижан, имплантация штрауман андижан, вредны ли импланты зубов противопоказания, можно ли ставить импланты халяль, одномоментная имплантация в день удаления, сколько приживается имплант, лучший имплантолог андижан",
    en: "dental implants andijan, tooth implant cost 2026 andijan, osstem implants andijan, straumann dental implants andijan, dental implant stages osteointegration, immediate implant placement, single tooth implant andijan, implant safety contraindications",
  },
  "tish-oqartirish": {
    uz: "tish oqartirish andijon narxi, zoom 4 tish oqartirish andijon, philips zoom 4 lazerli oqartirish, tish toshlarini tozalash andijon, airflow tozalash andijon, ultratovushli tish tozalash, kashanda tishlarini tozalash, choy va kofe doglarini ketkazish, oq parhez 48 soat, milk qonashi tozalash, ogizdan hid kelishi sababi davolash, tish oqartirish emalga zarar qilmaydimi, acp himoya geli, тиш оқартириш андижон, зум 4 оқартириш, тиш тошларини тозалаш, эйрфлоу тозалаш",
    ru: "отбеливание зубов андижан, отбеливание philips zoom 4 андижан, безопасное отбеливание зубов андижан, белая диета после отбеливания, профессиональная чистка зубов airflow андижан, ультразвуковая чистка удаление камня андижан, кровоточат десны запах изо рта",
    en: "teeth whitening andijan, philips zoom 4 laser whitening andijan, airflow tartar scaling andijan, ultrasonic dental cleaning andijan, bleeding gums bad breath treatment, safe enamel whitening",
  },
  xirurgiya: {
    uz: "tish olish, tish oldirish, og'riqsiz tish olish, tish sug'urish, aql tishini oldirish andijon, 8 tishni oldirish narxi andijon, donolik tishi og'riq, retensiyalangan aql tishi, murakkab tish olish, ildiz milk ichida qolganda olish, atravmatik jarrohlik, kollagen gubka, shishsiz tish olish, perikoronit milk shishi davolash, tish oldirgandan keyin og'iz chayqash mumkinmi, alveolit oldini olish, jarroh stomatolog andijon, тиш олиш, тиш олдириш, ақл тишини олдириш, тиш суғуриш андижон",
    ru: "удаление зуба андижан, удалить зуб без боли андижан, удаление зуба мудрости андижан, удаление восьмерки цена андижан, сложное удаление ретинированного зуба мудрости, удаление корня зуба, атравматичное удаление без отёка, можно ли полоскать рот после удаления зуба, перикоронит опухла десна, хирург стоматолог андижан",
    en: "tooth extraction andijan, painless wisdom tooth removal andijan, impacted third molar extraction, atraumatic oral surgery andijan, post extraction care dry socket prevention, broken root removal",
  },
  "rentgen-diagnostika": {
    uz: "tish rentgen andijon, viziografiya andijon, raqamli tish rentgeni, tish rasmi tushirish andijon, 90 foiz kam nurlanish, 2 soniyada tish surati, tish ildizi rasmi, yashirin kariesni aniqlash, implant oldi rentgen diagnostikasi, aql tishi rentgeni, homiladorlikda tish rentgeni xavfsizmi, bolalar tish rentgeni, тиш рентген андижон, визиография андижон, тиш сурати",
    ru: "рентген зуба андижан, снимок зуба андижан, цифровой визиограф андижан, безопасный рентген зубов снижение нагрузки на 90 процентов, прицельный снимок корня зуба, скрытый кариес диагностика",
    en: "dental x-ray andijan, digital radiovisiography andijan, low dose tooth x-ray, instant 2 second dental imaging, hidden cavity and root canal scan",
  },
};

export const getPageSeo = (page, lang) => {
  const entry = PAGE_SEO[page];
  if (!entry) return null;
  return entry[lang] || entry.uz;
};
