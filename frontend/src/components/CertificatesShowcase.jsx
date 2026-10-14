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
  },
];

const CertificatesShowcase = () => {
  const { lang } = useLanguage();
  const a11y = getA11yLabels(lang);
  const [activeCert, setActiveCert] = useState(null);
  const closeCert = () => setActiveCert(null);
  const modalRef = useModalA11y(Boolean(activeCert), closeCert);

  return (
    <section className="py-12 sm:py-16 bg-[#f8fafc] border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-amber-50 text-amber-800 border border-amber-200/80">
            <IconAward className="w-4 h-4 text-amber-600" />
            <span>
              {lang === "uz"
                ? "DIPLOM VA XALQARO SERTIFIKATLAR"
                : lang === "ru"
                ? "ДИПЛОМЫ И МЕЖДУНАРОДНЫЕ СЕРТИФИКАТЫ"
                : "DIPLOMAS & CLINICAL CERTIFICATIONS"}
            </span>
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {lang === "uz"
              ? "Tasdiqlangan Tibbiy Malaka & Xalqaro Tajriba"
              : lang === "ru"
              ? "Подтверждённая Квалификация и Опыт"
              : "Verified Medical Credentials & Honors"}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            {lang === "uz"
              ? "Dr. Olimjon Murzajanov har yili Janubiy Koreya, Yevropa va O'zbekistonning yetakchi stomatologiya akademiyalarida malaka oshiradi."
              : lang === "ru"
              ? "Д-р Олимжон Мурзажанов регулярно проходит повышение квалификации в ведущих стоматологических центрах Южной Кореи, Европы и Узбекистана."
              : "Dr. Olimjon Murzajanov continuously completes advanced clinical fellowships across South Korea, Europe, and Uzbekistan."}
          </p>
        </div>

        {/* 4 Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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
              className="group bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#122d52]"
            >
              {/* Subtle Gold Top Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#122d52] via-[#0284c7] to-[#122d52]" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-3 pt-1">
                  <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-blue-50 text-[#122d52] border border-blue-200/60">
                    {cert.badge[lang]}
                  </span>
                  <span className="text-xs font-black text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/60">
                    {cert.year}
                  </span>
                </div>

                {/* Stylized Certificate Frame Preview */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/40 border border-slate-200/80 mb-3.5">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
                      {cert.org}
                    </span>
                    <IconAward className="w-4 h-4 text-amber-500 shrink-0" />
                  </div>
                  <h3 className="text-sm font-black text-slate-900 leading-snug group-hover:text-[#122d52] transition-colors">
                    {cert.title[lang]}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {cert.desc[lang]}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="font-mono text-slate-400 font-semibold">
                  #{cert.serial}
                </span>
                <span className="font-bold text-[#122d52] group-hover:translate-x-0.5 transition-transform">
                  {lang === "uz" ? "Ko'rish →" : lang === "ru" ? "Открыть →" : "Inspect →"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox for Certificate Details */}
        {activeCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm"
            onClick={closeCert}
          >
            <div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-label={`${a11y.certificateModal}: ${activeCert.title[lang]}`}
              tabIndex={-1}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border-2 border-amber-300 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeCert}
                aria-label={a11y.closeModal}
                className="absolute top-4 right-4 w-11 h-11 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-700 flex items-center justify-center font-bold cursor-pointer transition-colors"
              >
                ✕
              </button>

              <div className="text-center border-2 border-dashed border-amber-300/80 rounded-2xl p-5 sm:p-6 bg-gradient-to-b from-amber-50/30 to-white">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-3">
                  <IconAward className="w-6 h-6 text-amber-600" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#0284c7] block">
                  {activeCert.org} · {activeCert.year}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-1.5">
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
                  <IconCheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>
                    {lang === "uz"
                      ? `TASDIQLANGAN ORIGINAL SERTIFIKAT · #${activeCert.serial}`
                      : lang === "ru"
                      ? `ПОДТВЕРЖДЁННЫЙ ОРИГИНАЛЬНЫЙ СЕРТИФИКАТ · #${activeCert.serial}`
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
