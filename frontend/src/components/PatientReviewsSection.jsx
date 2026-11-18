import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { PATIENT_REVIEWS } from "../constants/reviews";
import { PRIMARY_CLINIC } from "../constants/clinics";
import {
  IconCheckCircle,
  IconShieldCheck,
  IconSparkleStar,
  IconYandex,
  IconGoogle,
} from "./MedicalIcons";

const StarRating = ({ count = 5 }) => (
  <div className="flex items-center gap-1 text-amber-500" aria-label={`${count} yulduz`}>
    {Array.from({ length: count }).map((_, i) => (
      <svg
        key={i}
        className="w-4 h-4 fill-current"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const PatientReviewsSection = () => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const [filter, setFilter] = useState("all");

  const T = {
    uz: {
      badge: "Haqiqiy Fikrlar va Natijalar",
      title: "Bemorlarimiz Nima Deyishadi?",
      subtitle:
        "Andijon va Farg'ona vodiysidagi bemorlarimizning samimiy fikrlari, og'riqsiz davolash va estetik tabassum tajribasi.",
      overallRating: "4.9 / 5.0",
      reviewCount: "128+ Bemor Fikri",
      verifiedLabel: "Tasdiqlangan Bemor",
      btnBook: "Dr. Olimjon qabuliga yozilish →",
      btnYandexReview: "Yandex Xaritada Fikr Qoldirish",
      btnGoogleReview: "Google Xaritada Fikr Qoldirish",
    },
    ru: {
      badge: "Реальные Отзывы и Результаты",
      title: "Что Говорят Наши Пациенты?",
      subtitle:
        "Искренние отзывы жителей Андижана и Ферганской долины о бережном лечении, протезировании и имплантации без боли.",
      overallRating: "4.9 из 5.0",
      reviewCount: "128+ Отзывов Пациентов",
      verifiedLabel: "Проверенный Пациент",
      btnBook: "Записаться к Д-ру Олимжону →",
      btnYandexReview: "Оставить отзыв на Яндекс Картах",
      btnGoogleReview: "Оставить отзыв на Google Maps",
    },
    en: {
      badge: "Patient Stories & Clinical Outcomes",
      title: "What Our Patients Say",
      subtitle:
        "Authentic testimonials from patients across Andijan and the Fergana Valley regarding painless care and smile aesthetics.",
      overallRating: "4.9 of 5.0",
      reviewCount: "128+ Verified Reviews",
      verifiedLabel: "Verified Patient",
      btnBook: "Book Appointment with Dr. Olimjon →",
      btnYandexReview: "Review on Yandex Maps",
      btnGoogleReview: "Review on Google Maps",
    },
  };
  const t = T[lang] || T.uz;

  return (
    <section className="py-6 sm:py-12" aria-labelledby="reviews-heading">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 border border-[#d5e0ec] shadow-sm space-y-8">
        {/* Header & Overall Rating Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#e2eaf2]">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#132e53]/5 border border-[#132e53]/15 text-xs font-bold uppercase tracking-wider text-[#132e53]">
              <IconSparkleStar className="w-3.5 h-3.5 text-[#285983]" />
              {t.badge}
            </span>
            <h2
              id="reviews-heading"
              className="font-serif-classic text-2xl sm:text-3xl lg:text-4xl font-bold text-[#132e53]"
            >
              {t.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          {/* Social Proof Trust Capsule */}
          <div className="flex items-center gap-4 bg-[#f8fafc] p-3.5 sm:p-4 rounded-2xl border border-[#d5e0ec] shrink-0">
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-2">
                <span className="font-serif-classic text-2xl sm:text-3xl font-bold text-[#132e53]">
                  {t.overallRating}
                </span>
                <StarRating count={5} />
              </div>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">
                {t.reviewCount} · 100% Tavsiya
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {PATIENT_REVIEWS.map((rev) => (
            <article
              key={rev.id}
              className="bg-[#f8fafc] rounded-2xl p-4 sm:p-6 border border-[#d5e0ec] flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
            >
              <div className="space-y-3">
                {/* Header: Stars & Verified Tag */}
                <div className="flex items-center justify-between gap-2">
                  <StarRating count={rev.rating} />
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <IconCheckCircle className="w-3 h-3 text-emerald-600" />
                    <span>{t.verifiedLabel}</span>
                  </span>
                </div>

                {/* Procedure Tag */}
                <div className="pt-0.5">
                  <span className="inline-block text-xs font-bold text-[#285983] bg-white px-2.5 py-1 rounded-lg border border-[#d5e0ec]">
                    {rev.procedure[lang]}
                  </span>
                </div>

                {/* Comment */}
                <blockquote className="text-sm text-slate-800 leading-relaxed italic">
                  «{rev.comment[lang]}»
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="pt-4 mt-4 border-t border-[#e2eaf2] flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-[#132e53] text-sm">
                    {rev.author}
                  </p>
                  <p className="text-slate-600 text-[11px] mt-0.5">
                    {rev.city[lang]}
                  </p>
                </div>
                <time
                  dateTime={rev.date}
                  className="text-slate-600 text-[11px] font-medium"
                >
                  {rev.date}
                </time>
              </div>
            </article>
          ))}
        </div>

        {/* Actions Bar: Booking + Map Links */}
        <div className="pt-4 border-t border-[#e2eaf2] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to={to("/booking")}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#132e53] hover:bg-[#285983] text-white font-semibold text-xs sm:text-sm transition-colors text-center shadow-xs"
          >
            {t.btnBook}
          </Link>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center">
            <a
              href={PRIMARY_CLINIC.maps.yandexOrg || PRIMARY_CLINIC.maps.yandex}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#f2f6fa] hover:bg-[#e4edf5] border border-[#d5e0ec] text-xs font-semibold text-slate-800 transition-colors"
            >
              <IconYandex className="w-3.5 h-3.5 shrink-0" />
              <span>{t.btnYandexReview}</span>
            </a>
            <a
              href={PRIMARY_CLINIC.maps.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#f2f6fa] hover:bg-[#e4edf5] border border-[#d5e0ec] text-xs font-semibold text-slate-800 transition-colors"
            >
              <IconGoogle className="w-3.5 h-3.5 shrink-0" />
              <span>{t.btnGoogleReview}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientReviewsSection;
