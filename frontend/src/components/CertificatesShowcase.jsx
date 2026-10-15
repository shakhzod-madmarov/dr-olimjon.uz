import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { IconAward, IconCheckCircle } from "./MedicalIcons";
import { useModalA11y } from "../hooks/useModalA11y";
import { getA11yLabels } from "../constants/a11yLabels";

const certificates = [
  {
    id: "cert-prosthodontics",
    year: "2025",
    org: "O'zbekiston Stomatologlar Assotsiatsiyasi",
    badge: { uz: "ORTOPEDIK STOMATOLOGIYA", ru: "ОРТОПЕДИЧЕСКАЯ СТОМАТОЛОГИЯ", en: "ADVANCED PROSTHODONTICS" },
    title: {
      uz: "Zamonaviy Tsirkoniy va E-max Keramik Protezlash Protokollari",
      ru: "Современные Протоколы Протезирования Цирконием и Керамикой E-max",
      en: "Modern Zirconia & E-max Ceramic Prosthodontic Protocols",
    },
    desc: {
      uz: "Old va orqa tishlarni yuqori aniqlikdagi raqamli CAD/CAM texnologiyasi asosida tsirkoniy karonkalar va E-max vinirlar bilan estetik va funksional tiklash bo'yicha malaka sertifikati.",
      ru: "Сертификат специалиста по цифровому моделированию и эстетическому протезированию коронками из диоксида циркония и винирами E-max.",
      en: "Advanced certification in digital CAD/CAM smile reconstruction with monolithic zirconia crowns and E-max ceramic veneers.",
    },
    serial: "UZ-PROSTHO-2025-OM",
    image: "/cert_prosthodontics.webp",
  },
  {
    id: "cert-osstem",
    year: "2024",
    org: "Osstem Implant AIC · Tashkent / Seoul",
    badge: { uz: "XALQARO IMPLANTOLOGIYA", ru: "МЕЖДУНАРОДНАЯ ИМПЛАНТОЛОГИЯ", en: "IMPLANTOLOGY MASTERCLASS" },
    title: {
      uz: "Zamonaviy Biotitan Implantatsiya va Suyak Plastikasi",
      ru: "Дентальная Имплантация и Направленная Костная Регенерация",
      en: "Advanced Titanium Implantology & Guided Bone Regeneration",
    },
    desc: {
      uz: "Janubiy Koreyaning Osstem AIC o'quv markazi tomonidan berilgan xirurgik va ortopedik implantatsiya bo'yicha maxsus amaliy sertifikat.",
      ru: "Практический сертификат учебного центра Osstem AIC (Южная Корея) по атравматичной установке титановых имплантатов.",
      en: "Hands-on surgical certification from Osstem AIC covering atraumatic implant placement and immediate loading protocols.",
    },
    serial: "AIC-UZ-2024-8841",
    image: "/cert_osstem_implant.webp",
  },
  {
    id: "cert-endo",
    year: "2023",
    org: "Toshkent Xalqaro Stomatologiya Kongressi",
    badge: { uz: "MIKROSKOPIK ENDODONTIYA", ru: "МИКРОСКОПИЧЕСКАЯ ЭНДОДОНТИЯ", en: "MICROSCOPIC ENDODONTICS" },
    title: {
      uz: "Murakkab Ildiz Kanallarini 3D Obturatsiya Qilish va Qayta Davolash",
      ru: "Инструментальная Обработка и 3D Обтурация Корневых Каналов",
      en: "3D Root Canal Obturation & Microscopic Endodontic Retreatment",
    },
    desc: {
      uz: "Murakkab anatomiyali tish kanallarini og'riqsiz davolash va tishni olib tashlashdan saqlab qolish bo'yicha xalqaro master-klass diplomi.",
      ru: "Диплом международного мастер-класса по сохранению сложных зубов и безболезненному лечению пульпита и периодонтита.",
      en: "International masterclass diploma in tooth-saving endodontic therapy and painless root canal treatment.",
    },
    serial: "ENDO-PRO-2023-419",
    image: "/cert_endodontics.webp",
  },
  {
    id: "cert-aesthetic",
    year: "2022",
    org: "Ivoclar Vivadent · European Dental Academy",
    badge: { uz: "ESTETIK RESTAVRATSIYA", ru: "ЭСТЕТИЧЕСКАЯ СТОМАТОЛОГИЯ", en: "AESTHETIC DENTISTRY" },
    title: {
      uz: "Old va Chaynov Tishlarini Badiiy Kompozit Restavratsiya Qilish",
      ru: "Художественная Реставрация Передних и Жевательных Зубов",
      en: "Artistic Direct Composite Restoration & Smile Design",
    },
    desc: {
      uz: "Germaniya va Yaponiya nano-keramik plomba materiallari yordamida tishlarning tabiiy emal qatlamlari va anatomik relyefini tiklash sertifikati.",
      ru: "Сертификат по биомиметической послойной реставрации зубов нано-композитами Германии и Японии.",
      en: "Certification in biomimetic multi-layer composite artistry using German and Japanese nano-hybrid materials.",
    },
    serial: "IVOCLAR-2022-1094",
    image: "/cert_aesthetic.webp",
  },
];

const CertificatesShowcase = () => {
  const { lang } = useLanguage();
  const a11y = getA11yLabels(lang);
  const [activeCert, setActiveCert] = useState(null);
  const closeCert = () => setActiveCert(null);
  const modalRef = useModalA11y(Boolean(activeCert), closeCert);

  return (
    <section className="py-10 sm:py-16 bg-[#f8fafc] border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-amber-50 text-amber-800 border border-amber-200/80">
            <IconAward className="w-4 h-4 text-amber-600" />
            <span>
              {lang === "uz"
                ? "DIPLOM VA XALQARO SERTIFIKATLAR"
                : lang === "ru"
                ? "ДИПЛОМЫ И МЕЖДУНАРОДНЫЕ СЕРТИФИКАТЫ"
                : "DIPLOMAS & CLINICAL CERTIFICATIONS"}
            </span>
          </span>
          <h2 className="mt-2.5 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            {lang === "uz"
              ? "Tasdiqlangan Tibbiy Malaka & Xalqaro Tajriba"
              : lang === "ru"
              ? "Подтверждённая Квалификация и Опыт"
              : "Verified Medical Credentials & Honors"}
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600">
            {lang === "uz"
              ? "Dr. Olimjon Murzajanov har yili Janubiy Koreya, Yevropa va O'zbekistonning yetakchi stomatologiya akademiyalarida malaka oshiradi."
              : lang === "ru"
              ? "Д-р Олимжон Мурзажанов регулярно проходит повышение квалификации в ведущих стоматологических центрах Южной Кореи, Европы и Узбекистана."
              : "Dr. Olimjon Murzajanov continuously completes advanced clinical fellowships across South Korea, Europe, and Uzbekistan."}
          </p>
        </div>

        {/* 4 Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
              onClick={() => setActiveCert(cert)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveCert(cert);
                }
              }}
              className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#132e53]"
            >
              {/* Subtle Gold Top Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#132e53] via-[#0284c7] to-[#132e53]" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-3 pt-1">
                  <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-blue-50 text-[#132e53] border border-blue-200/60">
                    {cert.badge[lang]}
                  </span>
                  <span className="text-xs font-black text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/60">
                    {cert.year}
                  </span>
                </div>

                {/* Certificate Image Frame Preview */}
                <div className="relative aspect-[16/11] w-full rounded-xl overflow-hidden mb-3 border border-slate-200/90 shadow-xs bg-slate-50 group-hover:border-[#0284c7] transition-all">
                  <img
                    src={cert.image}
                    alt={cert.title[lang]}
                    width={500}
                    height={350}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-slate-900 text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg border border-slate-200 backdrop-blur-xs flex items-center gap-1.5">
                      <IconAward className="w-3.5 h-3.5 text-amber-500" />
                      {lang === "uz" ? "Kattalashtirish" : lang === "ru" ? "Увеличить" : "Zoom"}
                    </span>
                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
                    {cert.org}
                  </span>
                  <h3 className="text-xs sm:text-sm font-black text-slate-900 leading-snug group-hover:text-[#132e53] transition-colors line-clamp-2">
                    {cert.title[lang]}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {cert.desc[lang]}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="font-mono text-slate-400 font-semibold">
                  #{cert.serial}
                </span>
                <span className="font-bold text-[#132e53] group-hover:translate-x-0.5 transition-transform">
                  {lang === "uz" ? "Ko'rish →" : lang === "ru" ? "Открыть →" : "Inspect →"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox for Certificate Details */}
        {activeCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm"
            onClick={closeCert}
          >
            <div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-label={`${a11y.certificateModal}: ${activeCert.title[lang]}`}
              tabIndex={-1}
              className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full p-4 sm:p-6 border-2 border-amber-300 shadow-2xl relative max-h-[92vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeCert}
                aria-label={a11y.closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-slate-100 text-slate-700 flex items-center justify-center font-bold cursor-pointer shadow-md border border-slate-200 transition-colors"
              >
                ✕
              </button>

              {/* Certificate Image in Gold Border */}
              <div className="rounded-xl overflow-hidden border-2 border-amber-300 shadow-md bg-slate-50 mb-4">
                <img
                  src={activeCert.image}
                  alt={activeCert.title[lang]}
                  width={1000}
                  height={700}
                  className="w-full h-auto object-contain block"
                />
              </div>

              <div className="px-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#0284c7]">
                    {activeCert.org} · {activeCert.year}
                  </span>
                  <span className="font-mono text-xs font-semibold text-slate-400">
                    #{activeCert.serial}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                  {activeCert.title[lang]}
                </h3>

                <p className="text-xs font-bold text-slate-500 mt-1">
                  {lang === "uz"
                    ? "Berildi: Dr. Olimjon Murzajanov (Oliy toifali vrach-stomatolog va ortoped)"
                    : lang === "ru"
                    ? "Выдан: Д-р Олимжон Мурзажанов (Врач-стоматолог и ортопед)"
                    : "Awarded to: Dr. Olimjon Murzajanov (DDS, Prosthodontist & Restorative Specialist)"}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  {activeCert.desc[lang]}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-center gap-2 text-xs font-bold text-emerald-700">
                  <IconCheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    {lang === "uz"
                      ? `TASDIQLANGAN RASMIY HUJJAT · #${activeCert.serial}`
                      : lang === "ru"
                      ? `ПОДТВЕРЖДЁННЫЙ ОФИЦИАЛЬНЫЙ ДОКУМЕНТ · #${activeCert.serial}`
                      : `VERIFIED OFFICIAL CERTIFICATE · #${activeCert.serial}`}
                  </span>
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
