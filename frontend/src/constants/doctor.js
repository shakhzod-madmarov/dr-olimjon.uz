/**
 * Single source of truth for Dr. Olimjon Murzajanov's career facts and clinic hours.
 *
 * Experience years are derived from careerStartYear so the number never falls
 * behind the calendar or contradicts itself between the hero badge, the about
 * page, and the structured data.
 */
export const DOCTOR_INFO = {
  name: "Dr. Olimjon Murzajanov",
  careerStartYear: 2021,
  phone: "+998 (94) 001-01-56",
  phoneHref: "tel:+998940010156",
  phoneRaw: "+998940010156",
  telegramUrl: "https://t.me/httmurzajanov",
  telegramHandle: "@httmurzajanov",
  instagramUrl: "https://www.instagram.com/dentist_olimjon/",
  instagramHandle: "@dentist_olimjon",
};

export const getYearsOfExperience = () =>
  Math.max(5, new Date().getFullYear() - DOCTOR_INFO.careerStartYear);

/**
 * Clinic opening hours in one place so the footer, contact page, booking page,
 * and schema.org JSON-LD cannot drift apart.
 */
export const OPENING_HOURS = {
  weekdays: { opens: "08:00", closes: "18:00" },
  labels: {
    uz: {
      days: "Dushanba – Shanba",
      hours: "08:00 – 18:00",
      full: "Dushanba – Shanba: 08:00 – 18:00",
      sunday: "Yakshanba — oldindan yozilish bo'yicha",
    },
    ru: {
      days: "Понедельник – Суббота",
      hours: "08:00 – 18:00",
      full: "Понедельник – Суббота: 08:00 – 18:00",
      sunday: "Воскресенье — по предварительной записи",
    },
    en: {
      days: "Monday – Saturday",
      hours: "08:00 – 18:00",
      full: "Monday – Saturday: 08:00 – 18:00",
      sunday: "Sunday — by prior appointment",
    },
  },
};

export const getExperienceText = (lang = "uz") => {
  const years = getYearsOfExperience();
  if (lang === "ru") return `${years}+ лет клинического опыта`;
  if (lang === "en") return `${years}+ Years of Clinical Excellence`;
  return `${years}+ yillik klinik tajriba`;
};

export const getExperienceBadge = (lang = "uz") => {
  const years = getYearsOfExperience();
  if (lang === "ru") return `${years}+ Лет Опыта`;
  if (lang === "en") return `${years}+ Years Experience`;
  return `${years}+ Yillik Tajriba`;
};

export const getHeroTag = (lang = "uz") => {
  const years = getYearsOfExperience();
  if (lang === "ru") return `Стоматолог-ортопед и терапевт в Андижане · ${years}+ лет опыта`;
  if (lang === "en") return `Modern Dentist & Prosthodontist in Andijan · ${years}+ Years Experience`;
  return `Andijondagi Zamonaviy Stomatolog va Ortoped · ${years}+ Yillik Tajriba`;
};

export const getServicesTag = (lang = "uz") => {
  const years = getYearsOfExperience();
  if (lang === "ru") return `${years}+ ЛЕТ КЛИНИЧЕСКОГО ОПЫТА · АНДИЖАН`;
  if (lang === "en") return `${years}+ YEARS CLINICAL EXCELLENCE · ANDIJAN`;
  return `${years}+ YILLIK KLINIK TAJRIBA · ANDIJON`;
};
