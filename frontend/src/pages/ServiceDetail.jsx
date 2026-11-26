import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { SERVICES_CATALOG } from "../constants/servicesCatalog";
import { SERVICE_FAQS } from "../constants/serviceFaq";
import { DOCTOR_INFO, getExperienceBadge } from "../constants/doctor";
import { getPageSeo, PAGE_KEYWORDS, SERVICE_KEYWORDS, SITE_ORIGIN } from "../constants/seo";
import Seo from "../components/Seo";
import { buildMedicalProcedureSchema } from "../utils/structuredData";
import {
  IconCheckCircle,
  IconClock,
  IconShieldCheck,
  IconPhone,
  IconTelegram,
  IconAward,
  IconSparkleStar,
} from "../components/MedicalIcons";

const ServiceDetail = () => {
  const { serviceId, slug } = useParams();
  const activeServiceId = serviceId || slug;
  const { lang } = useLanguage();
  const to = useLocalizedPath();

  const service =
    SERVICES_CATALOG.find((s) => s.id === activeServiceId) || SERVICES_CATALOG[0];

  const steps = service.steps?.[lang] || service.steps?.uz || [];
  const aeoSummary = service.aeoSummary?.[lang] || service.shortDesc?.[lang];
  const indications = service.indications?.[lang] || [];
  const tableData = service.comparisonTable;
  const costFactors = service.costFactors?.[lang];
  const safetyAndCare = service.safetyAndCare?.[lang];

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
  const [openFaqIdx, setOpenFaqIdx] = useState(0);
  const faqs = SERVICE_FAQS[service.id] || [];
  const procedureSchema = buildMedicalProcedureSchema(service, lang, breadcrumbs, faqs);
  const serviceSeo = getPageSeo(service.id, lang);
  const resolvedTitle = serviceSeo?.title || `${service.title[lang]} — ${seoSuffix}`;
  const resolvedDesc = serviceSeo?.description || service.shortDesc[lang];
  const resolvedKeywords =
    SERVICE_KEYWORDS[service.id]?.[lang] || PAGE_KEYWORDS[lang];

  return (
    <div className="py-6 sm:py-10 space-y-10 sm:space-y-12">
      <Seo
        title={resolvedTitle}
        description={resolvedDesc}
        keywords={resolvedKeywords}
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
      <div className="bg-[#132e53] text-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 shadow-sm border border-[#285983]/30 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-[#9cb8d4] text-xs font-bold uppercase tracking-wider">
            {service.category[lang]}
          </span>
          <h1 className="font-serif-classic text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            {service.title[lang]}
          </h1>
          <p className="text-sm sm:text-base text-slate-100 leading-relaxed max-w-2xl">
            {service.shortDesc[lang]}
          </p>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 border border-white/15 text-[11px] sm:text-xs font-semibold">
              <IconClock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#9cb8d4]" />
              <span>{service.duration[lang]}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-[11px] sm:text-xs font-semibold">
              <IconShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-300" />
              <span>{service.warranty[lang]}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#285983]/50 border border-white/15 text-white text-[11px] sm:text-xs font-semibold">
              <IconAward className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#9cb8d4]" />
              <span>Dr. Olimjon Murzajanov · {getExperienceBadge(lang)}</span>
            </span>
          </div>

          <div className="pt-3 flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3">
            <Link
              to={`${to("/booking")}?service=${service.id}`}
              className="w-full sm:w-auto px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-white text-[#132e53] hover:bg-[#f2f6fa] font-bold text-xs sm:text-sm shadow-sm transition-colors text-center inline-block"
            >
              {lang === "uz"
                ? "Ushbu Muolajaga Yozilish →"
                : lang === "ru"
                ? "Записаться на Процедуру →"
                : "Book This Procedure →"}
            </Link>
            <a
              href={DOCTOR_INFO.phoneHref}
              className="w-full sm:w-auto justify-center px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors"
            >
              <IconPhone className="w-4 h-4 text-[#9cb8d4]" />
              <span>{DOCTOR_INFO.phone}</span>
            </a>
            <a
              href={DOCTOR_INFO.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto justify-center px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl bg-[#285983] hover:bg-[#326c9c] text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors"
            >
              <IconTelegram className="w-4 h-4 text-white" />
              <span>Telegram</span>
            </a>
          </div>
        </div>

        {/* Service Photo Frame (5 cols) */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden border border-white/20 shadow-md bg-slate-100">
            <img
              src={service.image}
              alt={service.title[lang]}
              width={900}
              height={600}
              fetchPriority="high"
              decoding="async"
              className="w-full h-52 sm:h-72 lg:h-80 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Quick Clinical Facts Table + AEO Definition Answer Capsule */}
      <section aria-label="Klinik Ko'rsatkichlar" className="bg-[#f8fafc] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#d5e0ec] shadow-xs space-y-5">
        {aeoSummary && (
          <div data-aeo-summary className="bg-white p-4 sm:p-5 rounded-2xl border border-[#d5e0ec] space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#285983]">
              {lang === "uz"
                ? "Muolaja Haqida Qisqacha (Asosiy Ma'lumot)"
                : lang === "ru"
                ? "Кратко о Процедуре (Медицинская Справка)"
                : "Clinical Overview"}
            </h2>
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
              {aeoSummary}
            </p>
          </div>
        )}

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#285983] mb-3">
            {lang === "uz" ? "Tezkor Klinik Ko'rsatkichlar" : lang === "ru" ? "Краткая Клиническая Справка" : "Clinical Quick Facts"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-white p-3.5 rounded-xl border border-[#d5e0ec]">
              <div className="flex items-center gap-2 text-[#285983] text-xs font-bold uppercase tracking-wider">
                <IconClock className="w-4 h-4 text-[#285983] shrink-0" />
                <span>{lang === "uz" ? "Davomiyligi" : lang === "ru" ? "Длительность" : "Duration"}</span>
              </div>
              <p className="mt-1.5 text-sm sm:text-base font-bold text-[#132e53]">
                {service.duration[lang]}
              </p>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-[#d5e0ec]">
              <div className="flex items-center gap-2 text-[#285983] text-xs font-bold uppercase tracking-wider">
                <IconShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{lang === "uz" ? "Kafolat" : lang === "ru" ? "Гарантия" : "Warranty"}</span>
              </div>
              <p className="mt-1.5 text-sm sm:text-base font-bold text-[#132e53]">
                {service.warranty[lang]}
              </p>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-[#d5e0ec]">
              <div className="flex items-center gap-2 text-[#285983] text-xs font-bold uppercase tracking-wider">
                <IconAward className="w-4 h-4 text-[#285983] shrink-0" />
                <span>{lang === "uz" ? "Materiallar" : lang === "ru" ? "Материалы" : "Materials"}</span>
              </div>
              <p className="mt-1.5 text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                {service.materials?.[lang] || "Sertifikatlangan original materiallar"}
              </p>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-[#d5e0ec]">
              <div className="flex items-center gap-2 text-[#285983] text-xs font-bold uppercase tracking-wider">
                <IconSparkleStar className="w-4 h-4 text-[#285983] shrink-0" />
                <span>{lang === "uz" ? "Og'riqsizlantirish" : lang === "ru" ? "Анестезия" : "Anesthesia"}</span>
              </div>
              <p className="mt-1.5 text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                {service.anesthesia?.[lang] || "100% og'riqsiz anesteziya"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages + When Is It Needed + Procedure Steps */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#d5e0ec] shadow-sm space-y-4">
            <h2 className="font-serif-classic text-xl sm:text-2xl font-bold text-[#132e53]">
              {lang === "uz"
                ? "Asosiy Ustunliklar va Texnologiya"
                : lang === "ru"
                ? "Преимущества и Технология Лечения"
                : "Key Clinical Advantages"}
            </h2>

            <ul className="space-y-3">
              {service.highlights[lang].map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#f8fafc] border border-[#d5e0ec] text-sm text-slate-800 font-medium"
                >
                  <IconCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#285983] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {indications.length > 0 && (
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#d5e0ec] shadow-sm space-y-4">
              <h2 className="font-serif-classic text-xl sm:text-2xl font-bold text-[#132e53]">
                {lang === "uz"
                  ? "Qachon Murojaat Qilish Kerak? (Ko'rsatmalar)"
                  : lang === "ru"
                  ? "Когда Необходима Процедура (Показания)"
                  : "When Is This Procedure Needed? (Indications)"}
              </h2>
              <ul className="space-y-2.5">
                {indications.map((ind, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#285983] shrink-0 mt-2" />
                    <span>{ind}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Procedure-Specific Step-by-Step Guide */}
        <div className="lg:col-span-6 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#d5e0ec] shadow-sm space-y-4 sm:space-y-5 h-fit">
          <h2 className="font-serif-classic text-xl sm:text-2xl font-bold text-[#132e53]">
            {lang === "uz"
              ? "Muolaja Qanday Bosqichlarda O'tadi?"
              : lang === "ru"
              ? "Этапы Проведения и Сроки"
              : "Step-by-Step Clinical Stages"}
          </h2>

          <div className="space-y-3 sm:space-y-4">
            {steps.map((st) => (
              <div
                key={st.num}
                className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#f8fafc] border border-[#d5e0ec]"
              >
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#132e53] text-white font-bold text-xs flex items-center justify-center shrink-0">
                  {st.num}
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#132e53]">
                    {st.title}
                  </h3>
                  <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Table (Rich Snippet & AI Overview Magnet) */}
      {tableData && (
        <section className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#d5e0ec] shadow-sm space-y-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#285983]">
              {lang === "uz" ? "Materiallar va Turlari" : lang === "ru" ? "Сравнение Систем" : "Options & Systems"}
            </p>
            <h2 className="mt-1 font-serif-classic text-xl sm:text-2xl font-bold text-[#132e53]">
              {tableData.title[lang]}
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#d5e0ec]">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#132e53] text-white">
                  {tableData.headers[lang].map((h, i) => (
                    <th key={i} className="py-3 px-3.5 sm:px-4 font-bold whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2eaf2]">
                {tableData.rows[lang].map((row, rIdx) => (
                  <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"}>
                    {row.map((cell, cIdx) => (
                      <td
                        key={cIdx}
                        className={`py-3 px-3.5 sm:px-4 ${
                          cIdx === 0 ? "font-bold text-[#132e53]" : "text-slate-700"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* 2026 Cost Factors + Safety, Ethics & Post-Op Care */}
      {(costFactors || safetyAndCare) && (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {costFactors && (
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#d5e0ec] shadow-sm space-y-2.5">
              <h2 className="font-serif-classic text-lg sm:text-xl font-bold text-[#132e53]">
                {lang === "uz"
                  ? "2026-yilda Narxlar Nimalarga Bog'liq?"
                  : lang === "ru"
                  ? "От Чего Зависит Стоимость в 2026 Году?"
                  : "What Determines 2026 Treatment Costs?"}
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {costFactors}
              </p>
              <div className="pt-2">
                <Link
                  to={`${to("/booking")}?service=${service.id}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#285983] hover:text-[#132e53] hover:underline"
                >
                  {lang === "uz"
                    ? "Bepul ko'rik va aniq narx hisobi uchun yozilish →"
                    : lang === "ru"
                    ? "Записаться на осмотр и точный расчёт →"
                    : "Book an exam for a transparent price quote →"}
                </Link>
              </div>
            </div>
          )}

          {safetyAndCare && (
            <div className="bg-[#f8fafc] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#d5e0ec] shadow-sm space-y-2.5">
              <h2 className="font-serif-classic text-lg sm:text-xl font-bold text-[#132e53] flex items-center gap-2">
                <IconShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  {lang === "uz"
                    ? "Xavfsizlik, Qarshi Ko'rsatmalar va Parvarish"
                    : lang === "ru"
                    ? "Безопасность, Противопоказания и Уход"
                    : "Clinical Safety & Aftercare Guidance"}
                </span>
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {safetyAndCare}
              </p>
            </div>
          )}
        </section>
      )}

      {/* Service-Specific FAQ Section (All answers kept in DOM for search crawlers & AI) */}
      {faqs.length > 0 && (
        <section className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#d5e0ec] shadow-sm space-y-4 sm:space-y-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#285983]">
              {lang === "uz"
                ? "Tez-tez So'raladigan Savollar"
                : lang === "ru"
                ? "Частые Вопросы по Процедуре"
                : "Procedure FAQs"}
            </p>
            <h2 className="mt-1 font-serif-classic text-xl sm:text-2xl font-bold text-[#132e53]">
              {lang === "uz"
                ? `${service.title[lang]} Haqida Ko'p Beriladigan Savollar`
                : lang === "ru"
                ? `Вопросы и Ответы: ${service.title[lang]}`
                : `Frequently Asked Questions: ${service.title[lang]}`}
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((item, idx) => {
              const isOpen = openFaqIdx === idx;
              const panelId = `service-faq-panel-${idx}`;
              const btnId = `service-faq-btn-${idx}`;
              return (
                <div
                  key={idx}
                  className={`rounded-xl border transition-colors duration-150 ${
                    isOpen
                      ? "bg-[#f2f6fa] border-[#285983]"
                      : "bg-[#f8fafc] border-[#d5e0ec] hover:bg-slate-50"
                  }`}
                >
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenFaqIdx(isOpen ? -1 : idx)}
                    className="w-full px-4 py-3 sm:py-3.5 text-left flex items-center justify-between gap-3 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#132e53]">
                      {item.q[lang]}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? "bg-[#132e53] text-white rotate-45"
                          : "bg-white text-[#132e53] border border-[#d5e0ec]"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    hidden={!isOpen}
                    className={
                      isOpen
                        ? "px-4 pb-4 pt-2 text-sm text-slate-700 leading-relaxed border-t border-[#d5e0ec]"
                        : "hidden"
                    }
                  >
                    {item.a[lang]}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* E-E-A-T Medical Reviewer Attribution Bar */}
      <aside className="bg-[#f2f6fa] rounded-2xl p-4 sm:p-5 border border-[#d5e0ec] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-slate-700">
        <div className="flex items-start sm:items-center gap-2.5">
          <IconAward className="w-5 h-5 text-[#132e53] shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="text-[#132e53]">
              {lang === "uz"
                ? "Tibbiy jihatdan tekshirdi va tasdiqladi:"
                : lang === "ru"
                ? "Проверено и подтверждено врачом:"
                : "Medically reviewed by:"}
            </strong>{" "}
            <Link to={to("/about")} className="font-bold text-[#285983] hover:underline">
              Dr. Olimjon Murzajanov
            </Link>{" "}
            {lang === "uz"
              ? `(${DOCTOR_INFO.education.uz}, ${getExperienceBadge("uz")}) · Andijon, Eski Shahar (Sevdo Denta)`
              : lang === "ru"
              ? `(${DOCTOR_INFO.education.ru}, ${getExperienceBadge("ru")}) · г. Андижан, Эски Шахар (Sevdo Denta)`
              : `(${DOCTOR_INFO.education.en}, ${getExperienceBadge("en")}) · Old City, Andijan`}
          </p>
        </div>
        <span className="text-xs text-slate-500 font-semibold shrink-0">
          {lang === "uz" ? "Yangilangan: 2026" : lang === "ru" ? "Обновлено: 2026" : "Updated: 2026"}
        </span>
      </aside>

      {/* Other Services Navigation */}
      <div className="pt-2">
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
