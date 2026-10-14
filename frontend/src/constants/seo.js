import { getYearsOfExperience } from "./doctor.js";

export const SITE_ORIGIN = "https://dentist-olimjon.uz";

const years = getYearsOfExperience();

/**
 * Per-page, per-language SEO copy.
 *
 * Every indexable route gets a distinct title and description in all three
 * languages so search engines see unique metadata on each URL rather than one
 * Uzbek string repeated across the whole site.
 */
export const PAGE_SEO = {
  home: {
    uz: {
      title: "Dr. Olimjon Murzajanov — Stomatolog va Ortoped Andijon | Sevdo Denta",
      description: `Andijon Eski Shahar «Sevdo Denta» klinikasida zamonaviy stomatolog va ortoped Dr. Olimjon Murzajanov. ${years}+ yil tajriba, 1,000+ mamnun bemor, 100% og'riqsiz tish davolash, tsirkoniy karonka, vinirlar va implantatsiya. Tel: +998 (94) 001-01-56.`,
    },
    ru: {
      title: "Д-р Олимжон Мурзажанов — Стоматолог-ортопед в Андижане | Клиника Sevdo Denta",
      description: `Современный стоматолог-ортопед и терапевт в Андижане Д-р Олимжон Мурзажанов (клиника «Sevdo Denta», Эски Шахар). ${years}+ лет опыта, 1000+ пациентов, лечение зубов без боли, циркониевые коронки, виниры E-max и имплантация.`,
    },
    en: {
      title: "Dr. Olimjon Murzajanov — Modern Dentist & Prosthodontist in Andijan | Sevdo Denta",
      description: `Dr. Olimjon Murzajanov at «Sevdo Denta» Clinic in Andijan (Old City). ${years}+ years of clinical experience, 1,000+ happy patients, 100% painless dental treatment, zirconia crowns, E-max veneers, and dental implants.`,
    },
  },
  services: {
    uz: {
      title: "Stomatologik Xizmatlar — Dr. Olimjon Murzajanov | Sevdo Denta Andijon",
      description:
        "Andijonda 100% og'riqsiz tish davolash, tsirkoniy karonka va ko'priklar, E-max vinirlar, Koreya va Shveysariya implantlari, lazerli oqartirish va jarrohlik.",
    },
    ru: {
      title: "Стоматологические Услуги — Д-р Олимжон Мурзажанов | Андижан",
      description:
        "Полный спектр стоматологических услуг в Андижане: лечение кариеса и каналов без боли, циркониевые коронки, виниры E-max, имплантация Osstem и Straumann, отбеливание ZOOM 4.",
    },
    en: {
      title: "Dental Services in Andijan — Dr. Olimjon Murzajanov | Sevdo Denta",
      description:
        "Comprehensive painless dentistry in Andijan: restorative fillings, root canals, zirconia crowns, E-max veneers, Osstem & Straumann implants, and ZOOM 4 whitening.",
    },
  },
  about: {
    uz: {
      title: `Dr. Olimjon Murzajanov Haqida — ${years}+ Yillik Tajribaga Ega Stomatolog va Ortoped`,
      description: `Dr. Olimjon Murzajanov — Andijondagi «Sevdo Denta» klinikasi stomatolog-ortopedi va terapevti. ${years}+ yil tajriba, 1,000+ mamnun bemor va xalqaro sertifikatlar.`,
    },
    ru: {
      title: `О Докторе Олимжоне Мурзажанове — Стоматолог-ортопед с ${years}+ Летним Опытом`,
      description: `Д-р Олимжон Мурзажанов — стоматолог-ортопед, терапевт и имплантолог клиники «Sevdo Denta» в Андижане. ${years}+ лет клинической практики и более 1 000 успешных работ.`,
    },
    en: {
      title: `About Dr. Olimjon Murzajanov — Dentist & Prosthodontist with ${years}+ Years Experience`,
      description: `Meet Dr. Olimjon Murzajanov, restorative dentist and prosthodontist at «Sevdo Denta» Clinic in Andijan with ${years}+ years of experience and 1,000+ treated patients.`,
    },
  },
  contact: {
    uz: {
      title: "Aloqa va Manzil — Sevdo Denta Klinikasi (Andijon, Eski Shahar) | Dr. Olimjon",
      description:
        "Andijon shahri, Eski Shahar (Old City), 1-qavat, «Sevdo Denta» stomatologiya klinikasi. Qabulga yozilish: +998 (94) 001-01-56, Telegram: @httmurzajanov.",
    },
    ru: {
      title: "Контакты и Адрес — Клиника Sevdo Denta (Андижан, Эски Шахар) | Д-р Олимжон",
      description:
        "г. Андижан, Эски Шахар (Old City), 1-й этаж, стоматология «Sevdo Denta». Запись на приём: +998 (94) 001-01-56, Telegram: @httmurzajanov.",
    },
    en: {
      title: "Contact & Clinic Location — Sevdo Denta Clinic Andijan | Dr. Olimjon Murzajanov",
      description:
        "Visit Dr. Olimjon Murzajanov at «Sevdo Denta» Clinic, Old City (Eski Shahar), 1st Floor, Andijan. Book by phone +998 (94) 001-01-56 or Telegram @httmurzajanov.",
    },
  },
  booking: {
    uz: {
      title: "Uchrashuv Vaqtini Tanlang — Dr. Olimjon Murzajanov | Sevdo Denta Andijon",
      description:
        "Dr. Olimjon Murzajanov qabuliga onlayn yozilish: bo'sh kunlar va soatlarni tanlang. Andijon, Eski Shahar, «Sevdo Denta» klinikasi. Tel: +998 (94) 001-01-56.",
    },
    ru: {
      title: "Выберите Время Приёма — Д-р Олимжон Мурзажанов | Sevdo Denta Андижан",
      description:
        "Онлайн-запись к Д-ру Олимжону Мурзажанову: выберите свободный день и время приёма. Клиника «Sevdo Denta», г. Андижан, Эски Шахар. +998 (94) 001-01-56.",
    },
    en: {
      title: "Select Appointment Time — Dr. Olimjon Murzajanov | Sevdo Denta Andijan",
      description:
        "Direct online appointment booking with Dr. Olimjon Murzajanov in Andijan at «Sevdo Denta» Clinic. Choose an available date and time slot. +998 (94) 001-01-56.",
    },
  },
  notFound: {
    uz: {
      title: "Sahifa topilmadi (404) — Dr. Olimjon Murzajanov",
      description: "Siz qidirgan sahifa topilmadi. Bosh sahifaga qayting yoki stomatologik xizmatlarimiz bilan tanishing.",
    },
    ru: {
      title: "Страница не найдена (404) — Д-р Олимжон Мурзажанов",
      description: "Запрашиваемая страница не найдена. Вернитесь на главную или выберите нужную стоматологическую услугу.",
    },
    en: {
      title: "Page Not Found (404) — Dr. Olimjon Murzajanov",
      description: "The page you requested could not be found. Return to the homepage or browse our dental services.",
    },
  },
};

export const PAGE_KEYWORDS = {
  uz: "stomatolog andijon, tish shifokori andijon, dr olimjon murzajanov, olimjon stomatolog, dentist olimjon, sevdo denta andijon, eski shahar stomatolog, ortoped stomatolog andijon, tish davolash andijon, tsirkon karonka andijon, implantatsiya andijon, vinirlar andijon",
  ru: "стоматолог андижан, стоматолог ортопед андижан, олимжон мурзажанов, севдо дента андижан, эски шахар стоматолог, лечение зубов андижан, циркониевые коронки андижан, имплантация зубов андижан, виниры андижан",
  en: "dentist in andijan, prosthodontist andijan, dr olimjon murzajanov, sevdo denta clinic andijan, dental implants andijan, zirconia crowns andijan, dental veneers andijan",
};

export const getPageSeo = (page, lang) => {
  const entry = PAGE_SEO[page];
  if (!entry) return null;
  return entry[lang] || entry.uz;
};

