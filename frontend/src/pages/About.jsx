import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { DOCTOR_INFO, getYearsOfExperience, getExperienceBadge } from "../constants/doctor";
import { PAGE_SEO, PAGE_KEYWORDS, SITE_ORIGIN } from "../constants/seo";
import Seo from "../components/Seo";
import { buildAboutPageSchema } from "../utils/structuredData";
import ClinicLocationMap from "../components/ClinicLocationMap";
import CertificatesShowcase from "../components/CertificatesShowcase";
import {
  IconAward,
  IconShieldCheck,
  IconSparkleStar,
  IconPhone,
  IconTelegram,
  IconInstagram,
  IconCheckCircle,
} from "../components/MedicalIcons";

const About = () => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const seo = PAGE_SEO.about[lang] || PAGE_SEO.about.uz;
  const years = getYearsOfExperience();

  const timeline = [
    {
      year: {
        uz: `${DOCTOR_INFO.careerStartYear} – Hozirgacha`,
        ru: `${DOCTOR_INFO.careerStartYear} – По настоящее время`,
        en: `${DOCTOR_INFO.careerStartYear} – Present`,
      },
      title: {
        uz: `Vrach-Stomatolog, Ortoped va Implantolog (${years}+ Yillik Tajriba)`,
        ru: `Врач-Стоматолог, Ортопед и Имплантолог (${years}+ Лет Практики)`,
        en: `Restorative Dentist & Prosthodontist (${years}+ Years Clinical Practice)`,
      },
      desc: {
        uz: "Andijon shahri Eski Shahar (Old City) hududidagi klinikamizda 1,000+ dan ortiq bemorlarning tishlarini og'riqsiz davolash, tsirkoniy karonka va E-max vinirlar bilan estetik tiklash.",
        ru: "Более 1 000 успешно вылеченных пациентов в Андижане: эндодонтия, циркониевые коронки, виниры E-max и имплантация.",
        en: "Over 1,000 patients treated in Andijan across endodontics, zirconia crowns, E-max porcelain veneers, and dental implants.",
      },
    },
    {
      year: {
        uz: "2024 – 2025",
        ru: "2024 – 2025",
        en: "2024 – 2025",
      },
      title: {
        uz: "Ixtisoslashtirilgan Implantologiya, Ortopedik Rejalashtirish va Funksional Ortodontiya",
        ru: "Специализированная Имплантология, Ортопедическое Планирование и Функциональная Ортодонтия",
        en: "Advanced Implantology, Prosthodontic Planning & Functional Orthodontics",
      },
      desc: {
        uz: "Moissanite Dental (Dr. E. Mustafaev) bir bosqichli biotitan implantologiya, Samarqand Dental Academy (Sardor Mirakhmedov) 18 soatlik ortopedik davo rejasi hamda Jakhongir Najimov Functional Orthodontics (Toshkent) kurslarida muvaffaqiyatli malaka oshirish.",
        ru: "Курсы повышения квалификации: одноэтапная имплантология Moissanite Dental (Д-р Э. Мустафаев), 18-часовой ортопедический курс Dental Academy (Самарканд, Сардор Мирахмедов) и функциональная ортодонтия Жахонгира Нажимова (Ташкент).",
        en: "Certified advanced masterclasses: Moissanite Dental one-stage implantology (Dr. E. Mustafaev), Dental Academy prosthodontic planning (Samarkand, Sardor Mirakhmedov), and Jakhongir Najimov Functional Orthodontics (Tashkent).",
      },
    },
    {
      year: {
        uz: "Klinik Standart",
        ru: "Стандарт Качества",
        en: "Clinical Standard",
      },
      title: {
        uz: "100% Og'riqsiz va Steril Stomatologik Yondashuv",
        ru: "100% Безболезненный и Стерильный Клинический Подход",
        en: "100% Painless & Hospital-Grade Sterile Standard",
      },
      desc: {
        uz: "Har bir bemor uchun individual sterillangan kraft-paketlar, 2 bosqichli og'riqsiz mikro-anesteziya va Germaniya, Yaponiya hamda Avstraliyaning original materiallari.",
        ru: "Индивидуальные стерильные крафт-пакеты, двухэтапная анестезия без боли и оригинальные пломбировочные и ортопедические материалы.",
        en: "Individual autoclaved instrument pouches, two-stage painless anesthesia, and genuine restorative materials from Germany, Japan, and Australia.",
      },
    },
  ];

  const values = [
    {
      icon: <IconShieldCheck className="w-6 h-6 text-[#132e53]" />,
      title: {
        uz: "100% Sterillik (Anti-SPID / Anti-Gepatit)",
        ru: "100% Стерильность (Анти-СПИД / Гепатит)",
        en: "100% Sterility (Anti-HIV / Hepatitis)",
      },
      desc: {
        uz: "Har bir bemor uchun alohida kraft-paketda avtoklavlangan steril asboblar ko'z oldingizda ochiladi.",
        ru: "Индивидуальный крафт-пакет со стерильными инструментами вскрывается прямо перед пациентом.",
        en: "Autoclaved sterile instrument pouches are unsealed right in front of every patient.",
      },
    },
    {
      icon: <IconSparkleStar className="w-6 h-6 text-[#132e53]" />,
      title: {
        uz: "Ikki Bosqichli Og'riqsiz Anesteziya",
        ru: "Двухэтапная Анестезия Без Боли",
        en: "Two-Stage Painless Anesthesia",
      },
      desc: {
        uz: "Avval milk maxsus gel bilan muzlatiladi, so'ng Yevropa anestetigi yuboriladi — ukol og'rig'i mutlaqo sezilmaydi.",
        ru: "Десна предварительно обезболивается гелем, поэтому вы не почувствуете даже укола.",
        en: "Topical numbing gel is applied before gentle European anesthesia so you never feel the needle.",
      },
    },
    {
      icon: <IconAward className="w-6 h-6 text-[#132e53]" />,
      title: {
        uz: "Germaniya, Yaponiya va Koreya Materiallari",
        ru: "Материалы из Германии, Японии и Кореи",
        en: "German, Japanese & Korean Materials",
      },
      desc: {
        uz: "3M Filtek (Germaniya), Estelite (Yaponiya), Osstem (Koreya) va Straumann (Shveysariya) original mahsulotlari.",
        ru: "Оригинальные материалы 3M Filtek (Германия), Estelite (Япония), Osstem (Корея) и Straumann (Швейцария).",
        en: "Authentic 3M Filtek, Tokuyama Estelite, Osstem, and Straumann materials with formal clinical warranty.",
      },
    },
  ];

  const breadcrumbs = [
    {
      name: lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa",
      path: "/",
    },
    {
      name: lang === "ru" ? "О докторе" : lang === "en" ? "About Doctor" : "Dr. Olimjon haqida",
      path: "/about",
    },
  ];
  const aboutSchema = buildAboutPageSchema(lang, breadcrumbs);

  return (
    <div className="py-4 sm:py-8 space-y-12">
      <Seo
        title={seo.title}
        description={seo.description}
        keywords={PAGE_KEYWORDS[lang]}
        schemaJson={aboutSchema}
      />

      {/* Semantic Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="text-xs sm:text-sm font-semibold text-slate-500 flex items-center gap-2">
        <Link
          to={to("/")}
          className="hover:text-[#132e53] transition-colors"
        >
          {lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa"}
        </Link>
        <span>/</span>
        <span className="text-[#132e53] font-bold" aria-current="page">
          {lang === "ru" ? "О докторе" : lang === "en" ? "About Doctor" : "Dr. Olimjon haqida"}
        </span>
      </nav>

      {/* Hero Bio Card */}
      <section className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 border border-[#d5e0ec] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
        {/* Left Dual Portrait Showcase (5 cols) */}
        <div className="lg:col-span-5">
          <div className="relative max-w-sm mx-auto space-y-3">
            <div className="rounded-2xl overflow-hidden border border-[#d5e0ec] bg-[#f8fafc]">
              <img
                src={assets.dr_olimjon_portrait}
                alt="Dr. Olimjon Murzajanov — Stomatolog va Ortoped Andijon"
                width={760}
                height={760}
                fetchPriority="high"
                decoding="async"
                className="w-full h-[320px] sm:h-[420px] object-cover object-top"
              />
            </div>

            {/* In Clinic Card */}
            <div className="grid grid-cols-12 gap-2 sm:gap-3 items-center bg-[#f8fafc] p-2 min-[360px]:p-2.5 sm:p-3 rounded-2xl border border-[#d5e0ec] shadow-xs">
              <img
                src={assets.dr_olimjon_clinic}
                alt={
                  lang === "uz"
                    ? "Dr. Olimjon Murzajanov qabul xonasi — Sevdo Denta Andijon"
                    : lang === "ru"
                    ? "Кабинет Д-ра Олимжона Мурзажанова — Sevdo Denta Андижан"
                    : "Dr. Olimjon Murzajanov Dental Office — Sevdo Denta Andijan"
                }
                width={200}
                height={200}
                loading="lazy"
                decoding="async"
                className="col-span-4 w-full h-18 min-[360px]:h-20 sm:h-24 rounded-xl object-cover object-center border border-[#d5e0ec]"
              />
              <div className="col-span-8 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#285983] block">
                  {lang === "uz"
                    ? "Andijon · Ish Xonasi"
                    : lang === "ru"
                    ? "Андижан · Рабочий Кабинет"
                    : "Andijan · Dental Operatory"}
                </span>
                <p className="text-xs font-bold text-[#132e53] leading-snug">
                  {lang === "uz"
                    ? "Sevdo Denta, 1-qavat"
                    : lang === "ru"
                    ? "Sevdo Denta, 1-й этаж"
                    : "Sevdo Denta, 1st Floor"}
                </p>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-0.5">
                  <a
                    href={DOCTOR_INFO.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#285983] hover:text-[#132e53]"
                  >
                    <IconTelegram className="w-3.5 h-3.5 text-[#285983]" />
                    <span>{DOCTOR_INFO.telegramHandle}</span>
                  </a>
                  <span className="text-slate-300">·</span>
                  <a
                    href={DOCTOR_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#132e53] hover:text-[#285983]"
                  >
                    <IconInstagram className="w-3.5 h-3.5 text-[#132e53]" />
                    <span>{DOCTOR_INFO.instagramHandle}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Biography Copy (7 cols) */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#285983]">
            {lang === "uz"
              ? `Stomatolog · Ortoped · ${years}+ Yillik Tajriba`
              : lang === "ru"
              ? `Стоматолог-ортопед · ${years}+ Лет Опыта`
              : `Dentist & Prosthodontist · ${years}+ Years Experience`}
          </p>

          <h1 className="font-serif-classic text-3xl sm:text-4xl md:text-5xl font-bold text-[#132e53] leading-tight">
            Dr. Olimjon Murzajanov
          </h1>

          <p className="text-sm sm:text-base md:text-lg font-semibold text-[#285983]">
            {lang === "uz"
              ? "Andijon shahri vrach-stomatologi, stomatolog-ortoped va implantolog"
              : lang === "ru"
              ? "Врач-стоматолог, ортопед и имплантолог (г. Андижан)"
              : "Restorative Dentist, Prosthodontist & Implantologist, Andijan"}
          </p>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
            {lang === "uz"
              ? `Dr. Olimjon Murzajanov ${years} yildan ortiq vaqt davomida Andijon shahri va Farg'ona vodiysi aholisiga zamonaviy, 100% og'riqsiz va yuqori aniqlikdagi stomatologik xizmat ko'rsatib kelmoqda. Uning klinik yondashuvi tabiiy tishlarni maksimal darajada saqlab qolish, zamonaviy tsirkoniy va E-max keramik protezlash hamda xavfsiz implantatsiyaga asoslangan.`
              : lang === "ru"
              ? `Д-р Олимжон Мурзажанов более ${years} лет оказывает жителям Андижана и Ферганской долины современную, безболезненную стоматологическую помощь. Его специализация объединяет бережное сохранение зубов, высокоточное протезирование циркониевыми коронками и винирами E-max, а также дентальную имплантацию.`
              : `For over ${years} years, Dr. Olimjon Murzajanov has provided patients across Andijan and the Fergana Valley with modern, 100% painless restorative and prosthetic dental care. His clinical focus combines tooth-preserving endodontics, zirconia crowns, E-max veneers, and guided titanium implantology.`}
          </p>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-2">
            <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#f8fafc] border border-[#d5e0ec] text-center">
              <p className="font-serif-classic text-xl sm:text-2xl lg:text-3xl font-bold text-[#132e53]">{years}+</p>
              <p className="text-[10px] sm:text-xs text-slate-600 font-medium mt-0.5 leading-tight">
                {lang === "uz" ? "Yil Tajriba" : lang === "ru" ? "Лет Опыта" : "Years Exp."}
              </p>
            </div>
            <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#f8fafc] border border-[#d5e0ec] text-center">
              <p className="font-serif-classic text-xl sm:text-2xl lg:text-3xl font-bold text-[#132e53]">1,000+</p>
              <p className="text-[10px] sm:text-xs text-slate-600 font-medium mt-0.5 leading-tight">
                {lang === "uz" ? "Mamnun Bemor" : lang === "ru" ? "Пациентов" : "Patients"}
              </p>
            </div>
            <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#f8fafc] border border-[#d5e0ec] text-center">
              <p className="font-serif-classic text-xl sm:text-2xl lg:text-3xl font-bold text-[#132e53]">99.2%</p>
              <p className="text-[10px] sm:text-xs text-slate-600 font-medium mt-0.5 leading-tight">
                {lang === "uz" ? "Implant Muvaffaqiyati" : lang === "ru" ? "Приживаемость" : "Implant Success"}
              </p>
            </div>
            <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#f8fafc] border border-[#d5e0ec] text-center">
              <p className="font-serif-classic text-xl sm:text-2xl lg:text-3xl font-bold text-[#285983]">100%</p>
              <p className="text-[10px] sm:text-xs text-slate-600 font-medium mt-0.5 leading-tight">
                {lang === "uz" ? "Steril va Og'riqsiz" : lang === "ru" ? "Без Боли" : "Painless Care"}
              </p>
            </div>
          </div>

          <div className="pt-3 flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3">
            <Link
              to={to("/booking")}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#132e53] hover:bg-[#285983] text-white font-semibold text-xs sm:text-sm transition-colors text-center inline-block"
            >
              {lang === "uz"
                ? "Dr. Olimjon Qabuliga Yozilish →"
                : lang === "ru"
                ? "Записаться к Д-ру Олимжону →"
                : "Book Appointment with Dr. Olimjon →"}
            </Link>
            <a
              href={DOCTOR_INFO.phoneHref}
              className="w-full sm:w-auto justify-center px-6 py-3.5 rounded-xl bg-[#f8fafc] hover:bg-[#e4edf5] border border-[#d5e0ec] text-[#132e53] font-bold text-xs sm:text-sm transition-colors flex items-center gap-2"
            >
              <IconPhone className="w-4 h-4 text-[#285983]" />
              <span>{DOCTOR_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3 Core Clinical Guarantees */}
      <section>
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#285983]">
            {lang === "uz" ? "Kafolat va Xavfsizlik" : lang === "ru" ? "Гарантия и Безопасность" : "Safety & Warranty"}
          </p>
          <h2 className="mt-1.5 font-serif-classic text-2xl sm:text-3xl md:text-4xl font-bold text-[#132e53]">
            {lang === "uz"
              ? "Klinikamizning 3 Asosiy Qoidasi"
              : lang === "ru"
              ? "3 Главных Стандарта Нашей Клиники"
              : "3 Core Standards of Our Clinic"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-[#d5e0ec] shadow-sm space-y-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#f2f6fa] border border-[#d5e0ec] flex items-center justify-center">
                {v.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#132e53]">
                {v.title[lang]}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {v.desc[lang]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Career & Education Timeline */}
      <section className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border border-[#d5e0ec] shadow-sm">
        <h2 className="font-serif-classic text-2xl sm:text-3xl font-bold text-[#132e53] mb-5 sm:mb-6">
          {lang === "uz"
            ? "Kasbiy Faoliyat va Malaka Bosqichlari"
            : lang === "ru"
            ? "Профессиональный Путь и Квалификация"
            : "Clinical Experience & Qualifications"}
        </h2>

        <div className="space-y-3 sm:space-y-4">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#f8fafc] border border-[#d5e0ec]"
            >
              <span className="inline-block px-3 py-1 rounded-lg bg-[#132e53] text-white text-xs font-semibold shrink-0 self-start">
                {typeof item.year === "object" ? item.year[lang] : item.year}
              </span>
              <div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#132e53]">
                  {item.title[lang]}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Official Diplomas & International Certificates */}
      <CertificatesShowcase />

      {/* Location Map */}
      <ClinicLocationMap compact />
    </div>
  );
};

export default About;
