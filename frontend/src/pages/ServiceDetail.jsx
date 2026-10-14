import { useParams, Link } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { SERVICES_CATALOG } from "../constants/servicesCatalog";
import { DOCTOR_INFO, getExperienceBadge } from "../constants/doctor";
import { PAGE_KEYWORDS, SITE_ORIGIN } from "../constants/seo";
import Seo from "../components/Seo";
import { buildMedicalProcedureSchema } from "../utils/structuredData";
import {
  IconCheckCircle,
  IconClock,
  IconShieldCheck,
  IconPhone,
  IconTelegram,
  IconAward,
} from "../components/MedicalIcons";

const ServiceDetail = () => {
  const { serviceId, slug } = useParams();
  const activeServiceId = serviceId || slug;
  const { lang } = useLanguage();
  const to = useLocalizedPath();

  const service =
    SERVICES_CATALOG.find((s) => s.id === activeServiceId) || SERVICES_CATALOG[0];

  const steps = {
    uz: [
      {
        num: "01",
        title: "Ko'rik va Raqamli Rentgen Diagnostika",
        desc: "Dr. Olimjon Murzajanov tish holatini diqqat bilan tekshiradi, zarur bo'lsa raqamli rentgen orqali ildiz kanallari ko'riladi va aniq davolash rejasi tuziladi.",
      },
      {
        num: "02",
        title: "2 Bosqichli Og'riqsiz Anesteziya",
        desc: "Avval milk maxsus muzlatuvchi gel bilan og'riqsizlantiriladi, so'ng Yevropa anestetigi yuboriladi — bemor hatto igna sanchilishini ham sezmaydi.",
      },
      {
        num: "03",
        title: "Mikroskopik Aniqlikda Asosiy Muolaja",
        desc: "Germaniya, Yaponiya va Janubiy Koreyaning original sertifikatlangan materiallari yordamida tish funksiyasi va estetikasi tiklanadi.",
      },
      {
        num: "04",
        title: "Sifat Nazorati va Kafolat",
        desc: "Muolaja yakunida tishning chaynash balansi tekshiriladi, sayqallanadi va uzoq muddatli kafolat hamda parvarish tavsiyalari beriladi.",
      },
    ],
    ru: [
      {
        num: "01",
        title: "Осмотр и Цифровая Рентген-Диагностика",
        desc: "Д-р Олимжон Мурзажанов проводит детальный осмотр, при необходимости делает прицельный цифровой снимок и составляет прозрачный план лечения.",
      },
      {
        num: "02",
        title: "Двухэтапная Анестезия Без Боли",
        desc: "Десна предварительно обрабатывается обезболивающим гелем, после чего мягко вводится европейский анестетик.",
      },
      {
        num: "03",
        title: "Основной Этап Лечения / Реставрации",
        desc: "Работа выполняется с использованием сертифицированных материалов из Германии, Японии и Южной Кореи в условиях 100% стерильности.",
      },
      {
        num: "04",
        title: "Финальная Полировка и Гарантия",
        desc: "Проверка прикуса, полировка до естественного блеска эмали и выдача рекомендаций с официальной гарантией.",
      },
    ],
    en: [
      {
        num: "01",
        title: "Consultation & Digital X-Ray Diagnostics",
        desc: "Dr. Olimjon Murzajanov performs a thorough exam and digital X-ray imaging to create a transparent treatment plan.",
      },
      {
        num: "02",
        title: "Two-Stage Painless Anesthesia",
        desc: "Topical numbing gel is applied to the gum before gentle European anesthesia so you never feel the needle.",
      },
      {
        num: "03",
        title: "Precision Restorative Procedure",
        desc: "Treatment is carried out in a 100% sterile suite using genuine German, Japanese, and South Korean dental materials.",
      },
      {
        num: "04",
        title: "Quality Verification & Warranty",
        desc: "Bite calibration, high-gloss enamel polishing, and formal clinical warranty with personalized aftercare guidance.",
      },
    ],
  }[lang];

  const seoSuffix = {
    uz: "Dr. Olimjon Murzajanov | Stomatolog Andijon",
    ru: "Д-р Олимжон Мурзажанов | Стоматолог Андижан",
    en: "Dr. Olimjon Murzajanov | Dentist Andijan",
  }[lang];
  const serviceImageUrl = service.image?.startsWith("http")
    ? service.image
    : `${SITE_ORIGIN}${service.image}`;

  const breadcrumbs = [
    {
      name: lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa",
      path: "/",
    },
    {
      name: lang === "ru" ? "Услуги" : lang === "en" ? "Services" : "Xizmatlar",
      path: "/services",
    },
    {
      name: service.title[lang] || service.title.uz,
      path: `/services/${service.id}`,
    },
  ];
  const procedureSchema = buildMedicalProcedureSchema(service, lang, breadcrumbs);

  return (
    <div className="py-6 sm:py-10 space-y-12">
      <Seo
        title={`${service.title[lang]} — ${seoSuffix}`}
        description={service.shortDesc[lang]}
        keywords={PAGE_KEYWORDS[lang]}
        ogImage={serviceImageUrl}
        schemaJson={procedureSchema}
      />

      {/* Semantic Breadcrumbs & Back Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <nav aria-label="Breadcrumb" className="text-xs sm:text-sm font-semibold text-slate-500 flex items-center gap-2 flex-wrap">
          <Link
            to={to("/")}
            className="hover:text-[#132e53] transition-colors"
          >
            {lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa"}
          </Link>
          <span>/</span>
          <Link
            to={to("/services")}
            className="hover:text-[#132e53] transition-colors"
          >
            {lang === "ru" ? "Услуги" : lang === "en" ? "Services" : "Xizmatlar"}
          </Link>
          <span>/</span>
          <span className="text-[#132e53] font-bold" aria-current="page">
            {service.title[lang]}
          </span>
        </nav>

        <Link
          to={to("/services")}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#132e53] transition-colors"
        >
          <span>←</span>
          <span>
            {lang === "uz"
              ? "Barcha xizmatlarga qaytish"
              : lang === "ru"
              ? "Назад ко всем услугам"
              : "Back to all services"}
          </span>
        </Link>
      </div>

      {/* Hero Card */}
      <div className="bg-[#132e53] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-[#285983]/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-[#9cb8d4] text-xs font-bold uppercase tracking-wider">
            {service.category[lang]}
          </span>
          <h1 className="font-serif-classic text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            {service.title[lang]}
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
            {service.shortDesc[lang]}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs font-semibold">
              <IconClock className="w-4 h-4 text-[#9cb8d4]" />
              <span>{service.duration[lang]}</span>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-semibold">
              <IconShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>{service.warranty[lang]}</span>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#285983]/50 border border-white/15 text-white text-xs font-semibold">
              <IconAward className="w-4 h-4 text-[#9cb8d4]" />
              <span>Dr. Olimjon Murzajanov · {getExperienceBadge(lang)}</span>
            </span>
          </div>

          <div className="pt-3 flex flex-wrap gap-3">
            <Link
              to={`${to("/booking")}?service=${service.id}`}
              className="px-6 py-3.5 rounded-xl bg-white text-[#132e53] hover:bg-[#f2f6fa] font-bold text-xs sm:text-sm shadow-sm transition-colors text-center inline-block"
            >
              {lang === "uz"
                ? "Ushbu Muolajaga Yozilish →"
                : lang === "ru"
                ? "Записаться на Процедуру →"
                : "Book This Procedure →"}
            </Link>
            <a
              href={DOCTOR_INFO.phoneHref}
              className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors"
            >
              <IconPhone className="w-4 h-4 text-[#9cb8d4]" />
              <span>{DOCTOR_INFO.phone}</span>
            </a>
            <a
              href={DOCTOR_INFO.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-[#285983] hover:bg-[#326c9c] text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors"
            >
              <IconTelegram className="w-4 h-4 text-white" />
              <span>Telegram</span>
            </a>
          </div>
        </div>

        {/* Service Photo Frame (5 cols) */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden border border-white/20 shadow-md bg-slate-900">
            <img
              src={service.image}
              alt={service.title[lang]}
              width={900}
              height={600}
              fetchPriority="high"
              decoding="async"
              className="w-full h-64 sm:h-80 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Advantages & Procedure Steps */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#d5e0ec] shadow-sm space-y-5">
          <h2 className="font-serif-classic text-2xl font-bold text-[#132e53]">
            {lang === "uz"
              ? "Asosiy Ustunliklar va Texnologiya"
              : lang === "ru"
              ? "Преимущества и Технология Лечения"
              : "Key Clinical Advantages"}
          </h2>

          <ul className="space-y-3.5">
            {service.highlights[lang].map((point, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#f8fafc] border border-[#d5e0ec] text-sm text-slate-800 font-medium"
              >
                <IconCheckCircle className="w-5 h-5 text-[#285983] shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Step-by-Step Procedure */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#d5e0ec] shadow-sm space-y-5">
          <h2 className="font-serif-classic text-2xl font-bold text-[#132e53]">
            {lang === "uz"
              ? "Muolaja Qanday Bosqichlarda O'tadi?"
              : lang === "ru"
              ? "Этапы Проведения Процедуры"
              : "Step-by-Step Treatment Process"}
          </h2>

          <div className="space-y-4">
            {steps.map((st) => (
              <div
                key={st.num}
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#f8fafc] border border-[#d5e0ec]"
              >
                <span className="w-9 h-9 rounded-xl bg-[#132e53] text-white font-bold text-xs flex items-center justify-center shrink-0">
                  {st.num}
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#132e53]">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Other Services Navigation */}
      <div className="pt-4">
        <h2 className="font-serif-classic text-xl font-bold text-[#132e53] mb-4">
          {lang === "uz"
            ? "Boshqa Stomatologik Xizmatlar:"
            : lang === "ru"
            ? "Другие Стоматологические Услуги:"
            : "Explore Other Dental Services:"}
        </h2>
        <div className="flex flex-wrap gap-2.5">
          {SERVICES_CATALOG.filter((s) => s.id !== service.id).map((other) => (
            <Link
              key={other.id}
              to={to(`/services/${other.id}`)}
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-[#f2f6fa] text-[#132e53] border border-[#d5e0ec] text-xs font-semibold transition-colors inline-block"
            >
              {other.title[lang]} →
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
