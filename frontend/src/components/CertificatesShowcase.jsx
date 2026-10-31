import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { IconAward, IconCheckCircle } from "./MedicalIcons";
import { useModalA11y } from "../hooks/useModalA11y";
import { getA11yLabels } from "../constants/a11yLabels";

const certificates = [
  {
    id: "cert-implant-onestage",
    year: "2024",
    date: "22.06.2024",
    duration: {
      uz: "8 Soatlik amaliy mahorat darsi",
      ru: "8-часовой практический курс",
      en: "8-Hour Hands-on Masterclass",
    },
    city: {
      uz: "Andijon / O'zbekiston",
      ru: "Андижан / Узбекистан",
      en: "Andijan / Uzbekistan",
    },
    org: "Moissanite Dental Academy",
    trainer: "Dr. E. Mustafaev",
    badge: {
      uz: "XIRURGIK IMPLANTOLOGIYA · 8 SOAT",
      ru: "ХИРУРГИЧЕСКАЯ ИМПЛАНТОЛОГИЯ · 8 Ч",
      en: "ONE-STAGE IMPLANTOLOGY · 8 HRS",
    },
    title: {
      uz: "One-Stage Implant — Bir Bosqichli Biotitan Implantatsiya",
      ru: "One-Stage Implant — Одноэтапная Дентальная Имплантация",
      en: "One-Stage Implant — Immediate Dental Implantology",
    },
    desc: {
      uz: "Moissanite Dental o'quv markazining 8 soatlik amaliy kursi: bir bosqichli biotitan implantatsiya texnikasi, suyak bilan ishlash va zudlik bilan yuklama berish protokoli bo'yicha rasmiy malaka sertifikati.",
      ru: "Официальный сертификат 8-часового практического курса Moissanite Dental по протоколам немедленной одноэтапной имплантации и остеоинтеграции.",
      en: "Official certification of completion for the 8-hour hands-on masterclass in single-stage titanium implant placement and immediate loading.",
    },
    awardedTo: "Dr. Murzajanov Alimjon",
    serial: "MOISSANITE-2024-OM",
    image: "/cert_implant_onestage.webp",
    orientation: "portrait",
  },
  {
    id: "cert-prostho-planning",
    year: "2024",
    date: "09-10.11.2024",
    duration: {
      uz: "18 Soatlik intensiv leksiya",
      ru: "18-часовой интенсивный курс",
      en: "18-Hour Intensive Lecture Series",
    },
    city: {
      uz: "Samarqand / O'zbekiston",
      ru: "Самарканд / Узбекистан",
      en: "Samarkand / Uzbekistan",
    },
    org: "Dental Academy & Dr. R. Ikramov Clinic",
    trainer: "Sardor Mirakhmedov",
    badge: {
      uz: "ORTOPEDIK DAVO REJASI · 18 SOAT",
      ru: "ОРТОПЕДИЧЕСКИЙ ПЛАН · 18 Ч",
      en: "PROSTHODONTIC PLANNING · 18 HRS",
    },
    title: {
      uz: "Ortopedik Davo Rejasi va CAD/CAM Protezlash Protokollari",
      ru: "План Ортопедического Лечения и Протезирование",
      en: "Comprehensive Prosthodontic Treatment Planning",
    },
    desc: {
      uz: "Dental Academy hamda Dr. R. Ikramov implant va dental klinikasi tomonidan Samarqandda o'tkazilgan 18 soatlik intensiv leksiya: tsirkoniy, keramika va murakkab tish qatorlarini to'g'ri rejalashtirish.",
      ru: "Сертификат об участии в 18-часовой интенсивной лекции в Самарканде по комплексному планированию ортопедического лечения и протезированию.",
      en: "Certificate for participation in an 18-hour master lecture series on comprehensive prosthodontic diagnosis and CAD/CAM restorative treatment.",
    },
    awardedTo: "Murzajonov Olimjon",
    serial: "DENTAL-ACAD-2024-SAM",
    image: "/cert_prosthodontic_planning.webp",
    orientation: "landscape",
  },
  {
    id: "cert-ortho-diagnostics",
    year: "2025",
    date: "09-12.05.2025",
    duration: {
      uz: "4 Kunlik nazariy va amaliy kurs",
      ru: "4-дневный теоретико-практический курс",
      en: "4-Day Clinical & Theoretical Course",
    },
    city: {
      uz: "Toshkent / O'zbekiston",
      ru: "Ташкент / Узбекистан",
      en: "Tashkent / Uzbekistan",
    },
    org: "Jakhongir Najimov Functional Orthodontics",
    trainer: "Najimov Jakhongir",
    badge: {
      uz: "FUNKSIONAL ORTODONTIYA · 2025",
      ru: "ФУНКЦИОНАЛЬНАЯ ОРТОДОНТИЯ · 2025",
      en: "FUNCTIONAL ORTHODONTICS · 2025",
    },
    title: {
      uz: "Diagnostika, Ortodontik Davolashni Rejalashtirish va Biomexanika Asoslari",
      ru: "Диагностика, Планирование Ортодонтического Лечения и Биомеханика",
      en: "Orthodontic Diagnostics, Treatment Planning & Biomechanics",
    },
    desc: {
      uz: "Toshkent shahrida Jakhongir Najimov Functional Orthodontics markazida tish qatorlari diagnostikasi, tishlarni tekislash va biomexanika asoslari bo'yicha nazariy va amaliy kurs sertifikati.",
      ru: "Сертификат об успешном окончании курса по диагностике, планированию ортодонтического лечения и основам биомеханики зубного ряда.",
      en: "Certificate of successful completion in diagnostic workflow, functional orthodontic planning, and biomechanics principles.",
    },
    awardedTo: "Murzajanov Olimjon Azamjanovich",
    serial: "NAJIMOV-ORTHO-2025-TAS",
    image: "/cert_orthodontic_diagnostics.webp",
    orientation: "landscape",
  },
];

const CertificatesShowcase = () => {
  const { lang } = useLanguage();
  const a11y = getA11yLabels(lang);
  const [activeIndex, setActiveIndex] = useState(null);
  const activeCert = activeIndex !== null ? certificates[activeIndex] : null;

  const closeCert = () => setActiveIndex(null);
  const modalRef = useModalA11y(Boolean(activeCert), closeCert);

  const showPrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : certificates.length - 1));
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev < certificates.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        showPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        showNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <section id="certificates" className="scroll-mt-24 py-10 sm:py-16 bg-[#f8fafc] border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-amber-50 text-amber-900 border border-amber-200/90 shadow-xs">
            <IconAward className="w-4 h-4 text-amber-600" />
            <span>
              {lang === "uz"
                ? "TASDIQLANGAN DIPLOM VA SERTIFIKATLAR"
                : lang === "ru"
                ? "ПОДТВЕРЖДЁННЫЕ ДИПЛОМЫ И СЕРТИФИКАТЫ"
                : "VERIFIED CLINICAL CERTIFICATIONS"}
            </span>
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            {lang === "uz"
              ? "Dr. Olimjon Murzajanovning Rasmiy Malaka Sertifikatlari"
              : lang === "ru"
              ? "Официальные Квалификационные Сертификаты"
              : "Official Credentials & Advanced Masterclasses"}
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {lang === "uz"
              ? "Dr. Olimjon Murzajanov nomiga rasmiy berilgan barcha 3 ta asl malaka sertifikatlari: bir bosqichli implantologiya, 18 soatlik ortopedik rejalashtirish hamda funksional ortodontiya."
              : lang === "ru"
              ? "Все 3 подлинных квалификационных сертификата, выданных на имя Д-ра Олимжона Мурзажанова: хирургическая имплантология, ортопедическое планирование и функциональная ортодонтия."
              : "All 3 authentic clinical certificates officially issued to Dr. Olimjon Murzajanov: single-stage implantology, prosthodontic planning, and functional orthodontics."}
          </p>
        </div>

        {/* 3 Prominent Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {certificates.map((cert, idx) => (
            <div
              key={cert.id}
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
              onClick={() => setActiveIndex(idx)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveIndex(idx);
                }
              }}
              className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#132e53]"
            >
              {/* Subtle Gold/Blue Gradient Top Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#132e53] via-amber-400 to-[#132e53]" />

              <div>
                {/* Header Pills */}
                <div className="flex items-center justify-between gap-2 mb-3 pt-1">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-[#132e53] border border-blue-200/70">
                    {cert.badge[lang]}
                  </span>
                  <span className="text-xs font-black text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/70">
                    {cert.year}
                  </span>
                </div>

                {/* Certificate Document Frame Preview */}
                <div className="relative h-56 sm:h-60 w-full rounded-xl sm:rounded-2xl overflow-hidden mb-3.5 border border-slate-200/90 shadow-inner bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] group-hover:border-[#0284c7] transition-all flex items-center justify-center p-2.5">
                  <img
                    src={cert.image}
                    alt={cert.title[lang]}
                    width={800}
                    height={550}
                    loading="lazy"
                    decoding="async"
                    className="max-h-full max-w-full object-contain rounded-md shadow-md ring-1 ring-black/10 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center pointer-events-none">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-slate-200 backdrop-blur-xs flex items-center gap-1.5">
                      <IconAward className="w-3.5 h-3.5 text-amber-500" />
                      {lang === "uz" ? "Kattalashtirish" : lang === "ru" ? "Увеличить" : "Zoom"}
                    </span>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="space-y-1.5 mb-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold">
                    <span className="uppercase tracking-wider truncate font-medium text-slate-500">{cert.org}</span>
                    <span className="shrink-0 font-mono text-[10px] text-slate-500">· {cert.date}</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900 leading-snug group-hover:text-[#132e53] transition-colors line-clamp-2">
                    {cert.title[lang]}
                  </h3>
                  <div className="text-[11px] text-[#285983] font-semibold flex items-center gap-1">
                    <span>Lektor:</span>
                    <span className="font-bold text-slate-800">{cert.trainer}</span>
                    <span className="text-slate-300">·</span>
                    <span className="text-slate-500">{cert.city[lang]}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {cert.desc[lang]}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                  <IconCheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  {lang === "uz" ? "Asl Hujjat" : lang === "ru" ? "Оригинал" : "Verified"}
                </span>
                <span className="font-bold text-[#132e53] group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  <span>{lang === "uz" ? "Ko'rish" : lang === "ru" ? "Открыть" : "Inspect"}</span>
                  <span className="text-blue-500">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox for Certificate Full View */}
        {activeCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md"
            onClick={closeCert}
          >
            <div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-label={`${a11y.certificateModal}: ${activeCert.title[lang]}`}
              tabIndex={-1}
              className="bg-white rounded-2xl sm:rounded-3xl max-w-4xl w-full p-4 sm:p-7 border-2 border-amber-300 shadow-2xl relative max-h-[94vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={closeCert}
                aria-label={a11y.closeModal}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/95 hover:bg-slate-100 text-slate-700 flex items-center justify-center font-bold cursor-pointer shadow-md border border-slate-200 transition-colors"
              >
                ✕
              </button>

              {/* Certificate Image in Frame with Previous / Next Arrows */}
              <div className="relative rounded-xl overflow-hidden border-2 border-amber-300/80 shadow-md bg-slate-900/5 mb-4 max-h-[60vh] flex items-center justify-center p-2 sm:p-3">
                <img
                  src={activeCert.image}
                  alt={activeCert.title[lang]}
                  width={1600}
                  height={1100}
                  className="max-h-[56vh] w-auto max-w-full object-contain rounded-lg shadow-sm"
                />

                {/* Lightbox Prev / Next Arrows */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showPrev();
                  }}
                  aria-label={a11y.prevCertificate}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg border border-slate-200 hover:scale-105 transition-all cursor-pointer font-black text-lg"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showNext();
                  }}
                  aria-label={a11y.nextCertificate}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg border border-slate-200 hover:scale-105 transition-all cursor-pointer font-black text-lg"
                >
                  ›
                </button>
              </div>

              {/* Thumbnails switcher strip */}
              <div className="flex items-center justify-center gap-3 mb-4">
                {certificates.map((c, idx) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      idx === activeIndex
                        ? "border-[#132e53] ring-2 ring-amber-400 scale-105"
                        : "border-slate-200 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={c.image}
                      alt={c.title[lang]}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Details */}
              <div className="px-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-100">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#0284c7] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60">
                      {activeCert.org}
                    </span>
                    <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
                      {activeCert.date}
                    </span>
                    <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded-md">
                      {activeCert.duration[lang]}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-semibold text-slate-500">
                    Lektor: {activeCert.trainer} ({activeCert.city[lang]})
                  </span>
                </div>

                <h3 className="text-lg sm:text-2xl font-black text-slate-900 leading-snug">
                  {activeCert.title[lang]}
                </h3>

                <p className="text-xs sm:text-sm font-bold text-[#132e53] mt-2 flex items-center gap-1.5">
                  <IconAward className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>
                    {lang === "uz"
                      ? `Rasmiy Tasdiqlangan Ega: ${activeCert.awardedTo}`
                      : lang === "ru"
                      ? `Официальный Владелец: ${activeCert.awardedTo}`
                      : `Officially Awarded To: ${activeCert.awardedTo}`}
                  </span>
                </p>

                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {activeCert.desc[lang]}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-emerald-700 bg-emerald-50/60 p-2.5 rounded-xl border border-emerald-200/60">
                  <div className="flex items-center gap-2">
                    <IconCheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      {lang === "uz"
                        ? "100% RASMIY TASDIQLANGAN HUSUSIY SERTIFIKAT"
                        : lang === "ru"
                        ? "100% ОФИЦИАЛЬНО ПОДТВЕРЖДЁННЫЙ СЕРТИФИКАТ"
                        : "100% VERIFIED OFFICIAL CLINICAL CERTIFICATE"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={activeCert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold text-[#132e53] hover:underline"
                    >
                      {lang === "uz"
                        ? "Asl HD formatda ochish ↗"
                        : lang === "ru"
                        ? "Открыть в HD разрешении ↗"
                        : "Open in High-Res ↗"}
                    </a>
                    <span className="font-mono text-slate-600">
                      #{activeCert.serial}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificatesShowcase;
