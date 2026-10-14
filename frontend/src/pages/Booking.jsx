import { useSearchParams, Link } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import Seo from "../components/Seo";
import InlineBookingSection from "../components/InlineBookingSection";
import { DOCTOR_INFO, OPENING_HOURS, getYearsOfExperience } from "../constants/doctor";
import { assets } from "../assets/assets";
import { buildPageWithBreadcrumbs } from "../utils/structuredData";

const T = {
  uz: {
    seoTitle: "Onlayn Qabulga Yozilish | Dr. Olimjon Murzajanov — Sevdo Denta Andijon",
    seoDesc:
      "Dr. Olimjon Murzajanov qabuliga onlayn yozilish. Andijon shahri, Eski Shahar, «Sevdo Denta» klinikasi. Bo'sh kun va soatni tanlang.",
    name: "Dr. Olimjon Murzajanov",
    specialty: "Vrach-Stomatolog, Terapevt, Ortoped va Implantolog",
    clinicLabel: "Klinika",
    clinicVal: "«Sevdo Denta» · Andijon, Eski Shahar (1-qavat)",
    expLabel: "Tajriba",
    expVal: (y) => `${y}+ yillik amaliyot`,
    aboutLabel: "Shifokor haqida",
    aboutVal:
      "100% og'riqsiz terapevtik davolash, Germaniya va Yaponiya fotopolimer plombalari, tsirkoniy karonkalar, E-max vinirlar hamda dental implantatsiya bo'yicha mutaxassis.",
    onlineHours: "Onlayn qabul: Dushanba – Shanba, 08:00 – 18:00",
    lunch: "Tushlik: 12:00 – 13:00",
    sunday: "Yakshanba: oldindan yozilish bo'yicha",
    note: "Barcha ma'lumotlar to'g'ridan-to'g'ri shifokorning MedInson qabul taqvimiga yetkaziladi.",
    badge: "Dr. Olimjon Murzajanov · MedInson Qabul",
  },
  ru: {
    seoTitle: "Онлайн Запись | Д-р Олимжон Мурзажанов — Клиника Sevdo Denta Андижан",
    seoDesc:
      "Онлайн запись к Д-ру Олимжону Мурзажанову. г. Андижан, Эски Шахар, клиника «Sevdo Denta». Выберите удобный день и свободное время.",
    name: "Д-р Олимжон Мурзажанов",
    specialty: "Врач-Стоматолог, Терапевт, Ортопед и Имплантолог",
    clinicLabel: "Клиника",
    clinicVal: "«Sevdo Denta» · г. Андижан, Эски Шахар (1-й этаж)",
    expLabel: "Опыт",
    expVal: (y) => `${y}+ лет практики`,
    aboutLabel: "О враче",
    aboutVal:
      "Специалист по безболезненному лечению кариеса и каналов, протезированию циркониевыми коронками, винирам E-max и дентальной имплантации.",
    onlineHours: "Онлайн приём: Понедельник – Суббота, 08:00 – 18:00",
    lunch: "Обед: 12:00 – 13:00",
    sunday: "Воскресенье: по предварительной записи",
    note: "Все данные передаются напрямую в календарь приёма MedInson.",
    badge: "Д-р Олимжон Мурзажанов · Приём MedInson",
  },
  en: {
    seoTitle: "Book Online Appointment | Dr. Olimjon Murzajanov — Sevdo Denta Andijan",
    seoDesc:
      "Online appointment booking with Dr. Olimjon Murzajanov in Andijan at «Sevdo Denta» Clinic. Select an available date and time.",
    name: "Dr. Olimjon Murzajanov",
    specialty: "Restorative Dentist, Prosthodontist & Implantologist",
    clinicLabel: "Clinic",
    clinicVal: "«Sevdo Denta» · Andijan, Old City (1st Floor)",
    expLabel: "Experience",
    expVal: (y) => `${y}+ years practice`,
    aboutLabel: "About the Doctor",
    aboutVal:
      "Specialist in 100% painless restorative care, German & Japanese nano-fillings, zirconia crowns, E-max veneers, and titanium dental implants.",
    onlineHours: "Online booking: Monday – Saturday, 08:00 – 18:00",
    lunch: "Lunch break: 12:00 – 13:00",
    sunday: "Sunday: by prior arrangement",
    note: "Your appointment details are delivered directly to Dr. Olimjon's MedInson calendar.",
    badge: "Dr. Olimjon Murzajanov · MedInson Booking",
  },
};

const Booking = () => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const [searchParams] = useSearchParams();
  const t = T[lang] || T.uz;
  const years = getYearsOfExperience();

  const initialService = searchParams.get("service") || null;
  const initialNote = searchParams.get("note") || "";

  const breadcrumbs = [
    {
      name: lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa",
      path: "/",
    },
    {
      name: lang === "ru" ? "Запись на приём" : lang === "en" ? "Appointment Booking" : "Qabulga yozilish",
      path: "/booking",
    },
  ];
  const bookingSchema = buildPageWithBreadcrumbs(
    "MedicalWebPage",
    "/booking",
    t.seoTitle,
    lang,
    breadcrumbs
  );

  return (
    <div className="py-4 sm:py-8 space-y-8">
      <Seo
        page="booking"
        path="/booking"
        title={t.seoTitle}
        description={t.seoDesc}
        schemaJson={bookingSchema}
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
          {lang === "ru" ? "Запись на приём" : lang === "en" ? "Appointment Booking" : "Qabulga yozilish"}
        </span>
      </nav>

      {/* 1. Classic Doctor Profile Card */}
      <article className="bg-white rounded-3xl border border-[#d5e0ec] shadow-sm overflow-hidden">
        <div className="h-1.5 w-full bg-gradient-to-r from-[#132e53] to-[#285983]" />
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <figure className="lg:col-span-5 bg-[#f8fafc] flex items-center justify-center p-5 sm:p-6 m-0">
            <img
              src={assets.dr_olimjon_portrait}
              alt={t.name}
              width={420}
              height={520}
              className="w-full max-w-[340px] h-auto max-h-[420px] rounded-2xl object-cover object-top border border-[#d5e0ec]"
              loading="eager"
              decoding="async"
            />
          </figure>

          <section className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-center gap-5 text-left">
            <header>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#285983]">
                {t.badge}
              </p>
              <h1 className="font-serif-classic text-3xl sm:text-4xl font-bold text-[#132e53] mt-1">
                {t.name}
              </h1>
              <p className="text-slate-600 mt-1 text-sm sm:text-base font-medium">
                {t.specialty}
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm border-y border-[#e2eaf2] py-4">
              <div>
                <p className="text-slate-400 text-xs">{t.clinicLabel}</p>
                <p className="font-bold text-[#132e53] mt-0.5">{t.clinicVal}</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs">{t.expLabel}</p>
                <p className="font-bold text-[#132e53] mt-0.5">{t.expVal(years)}</p>
              </div>
            </div>

            <div>
              <p className="text-slate-400 text-xs mb-1">{t.aboutLabel}</p>
              <p className="text-slate-700 leading-relaxed text-sm">{t.aboutVal}</p>
            </div>

            <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 bg-[#f8fafc] rounded-2xl p-4 border border-[#d5e0ec]">
              <li className="font-semibold text-[#132e53]">• {t.onlineHours}</li>
              <li>• {t.lunch}</li>
              <li>• {t.sunday}</li>
              <li className="pt-1 text-xs text-slate-500">{t.note}</li>
            </ul>
          </section>
        </div>
      </article>

      {/* 2. Live MedInson Inline Booking Section */}
      <InlineBookingSection
        initialService={initialService}
        initialNote={initialNote}
        sectionId="booking"
      />
    </div>
  );
};

export default Booking;
