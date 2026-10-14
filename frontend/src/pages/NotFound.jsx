import { useNavigate } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { DOCTOR_INFO } from "../constants/doctor";
import { PAGE_SEO } from "../constants/seo";
import Seo from "../components/Seo";
import { IconPhone, IconSparkleStar } from "../components/MedicalIcons";

const NotFound = () => {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const seo = PAGE_SEO.notFound[lang] || PAGE_SEO.notFound.uz;

  const copyMap = {
    uz: {
      badge: "404 · SAHIFA TOPILMADI",
      title: "Kechirasiz, siz izlagan sahifa topilmadi",
      desc: "Manzil noto'g'ri kiritilgan bo'lishi yoki sahifa boshqa joyga ko'chirilgan bo'lishi mumkin. Bosh sahifaga qayting yoki stomatologik xizmatlarimiz bilan tanishing.",
      homeBtn: "Bosh Sahifaga Qaytish",
      servicesBtn: "Xizmatlarni Ko'rish",
    },
    ru: {
      badge: "404 · СТРАНИЦА НЕ НАЙДЕНА",
      title: "К сожалению, страница не найдена",
      desc: "Возможно, ссылка устарела или была введена с ошибкой. Вернитесь на главную страницу или перейдите в каталог стоматологических услуг.",
      homeBtn: "На Главную",
      servicesBtn: "Все Услуги",
    },
    en: {
      badge: "404 · PAGE NOT FOUND",
      title: "Sorry, we couldn't find that page",
      desc: "The link may be outdated or mistyped. Return to the homepage or explore Dr. Olimjon Murzajanov's dental services.",
      homeBtn: "Back to Home",
      servicesBtn: "View Services",
    },
  };
  const copy = copyMap[lang] || copyMap.uz;

  return (
    <section className="py-12 sm:py-20">
      <Seo title={seo.title} description={seo.description} noindex />
      <div className="max-w-2xl mx-auto bg-white rounded-[32px] p-8 sm:p-12 border border-slate-200/80 shadow-luxury text-center space-y-5">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-blue-50 text-[#122d52] border border-blue-200/60">
          <IconSparkleStar className="w-3.5 h-3.5 text-[#0284c7]" />
          <span>{copy.badge}</span>
        </span>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {copy.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {copy.desc}
        </p>

        <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => navigate(to("/"))}
            className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#122d52] to-[#0284c7] text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-blue-900/20 cursor-pointer"
          >
            {copy.homeBtn} →
          </button>
          <button
            type="button"
            onClick={() => navigate(to("/services"))}
            className="px-6 py-3.5 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-[#122d52] font-bold text-xs sm:text-sm transition-colors cursor-pointer"
          >
            {copy.servicesBtn}
          </button>
          <a
            href={DOCTOR_INFO.phoneHref}
            className="px-5 py-3.5 rounded-full bg-white border border-slate-200 text-[#122d52] font-bold text-xs sm:text-sm inline-flex items-center gap-2"
          >
            <IconPhone className="w-4 h-4 text-[#122d52]" />
            <span>{DOCTOR_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
