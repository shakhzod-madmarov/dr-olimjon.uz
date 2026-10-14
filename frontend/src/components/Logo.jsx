import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Logo = ({ className = "h-10", inverted = false }) => {
  const { lang } = useLanguage();

  const subtitle =
    lang === "ru"
      ? "Стоматолог · Ортопед"
      : lang === "en"
      ? "Dentist · Prosthodontist"
      : "Stomatolog · Ortoped";

  const altText =
    lang === "ru"
      ? "Д-р Олимжон Мурзажанов — Стоматолог в Андижане"
      : lang === "en"
      ? "Dr. Olimjon Murzajanov — Dentist in Andijan"
      : "Dr. Olimjon Murzajanov — Stomatolog Andijon";

  return (
    <div className="inline-flex items-center gap-2 sm:gap-3 select-none">
      <img
        src="/logo.png"
        alt={altText}
        width={48}
        height={48}
        decoding="async"
        className={`${className} w-auto object-contain shrink-0`}
      />
      <div className="flex flex-col leading-none text-left min-w-0">
        <span
          className={`font-serif-classic text-[13.5px] sm:text-lg lg:text-xl font-bold tracking-tight truncate ${
            inverted ? "text-white" : "text-[#132e53]"
          }`}
        >
          Dr. Olimjon Murzajanov
        </span>
        <span
          className={`text-[8px] sm:text-[10px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.18em] mt-0.5 sm:mt-1 truncate ${
            inverted ? "text-[#9cb8d4]" : "text-[#285983]"
          }`}
        >
          {subtitle}
        </span>
      </div>
    </div>
  );
};

export default Logo;
