import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { PAGE_SEO, PAGE_KEYWORDS } from "../constants/seo";
import Seo from "../components/Seo";
import {
  IconSparkleStar,
  IconCheckCircle,
  IconClock,
  IconShieldCheck,
  IconAward,
} from "../components/MedicalIcons";
import { useModalA11y } from "../hooks/useModalA11y";
import { getA11yLabels } from "../constants/a11yLabels";

const Gallery = () => {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const a11y = getA11yLabels(lang);
  const seo = PAGE_SEO.gallery[lang] || PAGE_SEO.gallery.uz;
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedFacility, setSelectedFacility] = useState(null);
  const closeFacility = () => setSelectedFacility(null);
  const facilityModalRef = useModalA11y(Boolean(selectedFacility), closeFacility);

  const filters = [
    { id: "all", label: { uz: "Barchasi (6)", ru: "Все Категории (6)", en: "All Facilities (6)" } },
    { id: "suites", label: { uz: "Davolash Xonalari", ru: "Кабинеты", en: "Treatment Suites" } },
    { id: "sterilization", label: { uz: "Sterilizatsiya & Gigiyena", ru: "Стерилизация", en: "Sterility & Hygiene" } },
    { id: "diagnostics", label: { uz: "Diagnostika & Rentgen", ru: "Диагностика", en: "Diagnostics" } },
    { id: "materials", label: { uz: "Sertifikatlangan Materiallar", ru: "Материалы", en: "Certified Materials" } },
  ];

  const galleryItems = [
    {
      id: "treatment-suite-1",
      category: "suites",
      image: assets.clinic_treatment_room,
      tag: { uz: "ASOSIY DAVOLASH XONASI", ru: "ГЛАВНЫЙ КАБИНЕТ", en: "PRIMARY TREATMENT SUITE" },
      title: {
        uz: "Ergonomik Stomatologik Kreslo va Tinchlantiruvchi Muhit",
        ru: "Эргономичная Установка и Комфортная Обстановка",
        en: "Ergonomic Dental Unit & Relaxing Environment",
      },
      subtitle: {
        uz: "Anatomik yumshoq matras, be-soya LED jarrohlik chirog'i va raqamli boshqaruv",
        ru: "Анатомическая поддержка пациента, бестеневой свет и цифровое управление",
        en: "Anatomical memory foam support, shadowless surgical lighting, and digital controls",
      },
      specs: [
        { uz: "Kreslo: Italiya/Yaponiya ergonomik standarti", ru: "Установка: Итальянский/японский стандарт", en: "Unit: Italian/Japanese ergonomic standard" },
        { uz: "Yoritish: 55,000 Lux sovuq jarrohlik nuri", ru: "Свет: 55 000 Lux бестеневой LED", en: "Lighting: 55,000 Lux cold surgical LED" },
        { uz: "Tozalik: Har bir bemordan so'ng 100% dezinfeksiya", ru: "Обработка: 100% дезинфекция после каждого пациента", en: "Cleansing: 100% disinfection after each patient" },
      ],
      desc: {
        uz: "Davolash xonasi bemorning psixologik xotirjamligi va jismoniy qulayligi uchun maxsus loyihalashtirilgan. Anatomik qulaylik uzoq davom etuvchi ortopedik va implantologik muolajalarda ham charchoqni his qilmaslikni ta'minlaydi.",
        ru: "Кабинет спроектирован с упором на психологический комфорт пациента и отсутствие чувства тревоги. Анатомическое кресло позволяет полностью расслабиться даже при длительных процедурах.",
        en: "The suite is acoustically and ergonomically designed to keep patients calm and at ease. Advanced cushioning ensures total comfort even during extended cosmetic or implant procedures.",
      },
    },
    {
      id: "sterilization-autoclave",
      category: "sterilization",
      image: assets.clinic_sterilization,
      tag: { uz: "B-KLASS VAKUUMLI AVTOKLAV", ru: "АВТОКЛАВ КЛАССА B", en: "B-CLASS VACUUM AUTOCLAVE" },
      title: {
        uz: "Anti-SPID va Anti-Gepatit Standartidagi Sterilizatsiya Zonasi",
        ru: "Стерилизационный Блок Анти-СПИД / Анти-Гепатит",
        en: "Hospital-Grade Sterilization Protocol",
      },
      subtitle: {
        uz: "134°C yuqori bosimli bug'li sterilizatsiya va individual muhrlangan kraft-paketlar",
        ru: "Паровая стерилизация при 134°C и герметичные крафт-пакеты",
        en: "134°C high-pressure steam cycle and vacuum-sealed sterile pouches",
      },
      specs: [
        { uz: "Standart: Yevropa EN 13060 B-Class", ru: "Стандарт: Европейский EN 13060 Класс B", en: "Standard: European EN 13060 Class B" },
        { uz: "Paketlar: Har bir bemor oldida ochiladi", ru: "Пакеты: Вскрываются при пациенте", en: "Pouches: Unsealed in front of each patient" },
        { uz: "Nazorat: 3 bosqichli kimyoviy va termik indikatorlar", ru: "Контроль: 3-уровневые индикаторы стерильности", en: "Verification: 3-level chemical & thermal indicators" },
      ],
      desc: {
        uz: "Barcha jarrohlik va terapevtik asboblar ultratovushli vannada mexanik tozalashdan o'tadi, so'ng B-klass avtoklavda to'liq mikroblardan tozalanib muhrlanadi. 100% mikrobiologik xavfsizlik kafolatlanadi.",
        ru: "Каждый наконечник и хирургический инструмент проходит многоступенчатую ультразвуковую очистку, дезинфекцию и вакуумное автоклавирование в индивидуальных крафт-пакетах.",
        en: "All dental handpieces and surgical tools undergo ultrasonic scrubbing, enzymatic disinfection, and vacuum autoclaving. We guarantee 100% cross-contamination protection.",
      },
    },
    {
      id: "diagnostics-3d-xray",
      category: "diagnostics",
      image: assets.service_xray,
      tag: { uz: "RAQAMLI VIZIOGRAFIYA", ru: "РАДИОВИЗИОГРАФИЯ", en: "DIGITAL X-RAY" },
      title: {
        uz: "Kam Nurlanishli Yuqori Aniqlikdagi 3D Rentgen Diagnostika",
        ru: "Цифровой Рентген-Датчик с Минимальной Лучевой Нагрузкой",
        en: "Low-Dose High-Definition Digital Radiography",
      },
      subtitle: {
        uz: "Tish ildiz kanallari, suyak zichligi va yashirin kariesni 1 soniyada aniqlash",
        ru: "Мгновенное обнаружение скрытого кариеса и детальная оценка костной ткани",
        en: "Instant visualization of root canals, bone density, and hidden decay",
      },
      specs: [
        { uz: "Datchik: Yuqori sezuvchan raqamli sensor", ru: "Датчик: Высокочувствительный цифровой сенсор", en: "Sensor: Ultra-high sensitivity digital detector" },
        { uz: "Nurlanish: Standart plyonkaga nisbatan 90% kamroq", ru: "Нагрузка: На 90% ниже стандартных плёнок", en: "Radiation: 90% lower than traditional film" },
        { uz: "Natija: Monitor ekranida katta o'lchamda", ru: "Снимок: Моментально на мониторе", en: "Output: Immediate real-time HD display" },
      ],
      desc: {
        uz: "Raqamli diagnostika davolash jarayonini xatosiz va tezkor olib borish imkonini beradi. Bemor o'z tishining holatini katta monitorda ko'rib, davolash bosqichlarini aniq tushunadi.",
        ru: "Цифровая радиовизиография даёт врачу чёткую картину анатомии корневых каналов без задержек. Пациент видит состояние зуба на мониторе и полностью информирован о плане лечения.",
        en: "Digital sensor technology enables millimeter-accurate diagnoses with near-zero radiation. Patients can see clear imaging on-screen as we discuss the treatment plan.",
      },
    },
    {
      id: "materials-zirconia-cadcam",
      category: "materials",
      image: assets.service_crowns,
      tag: { uz: "MONOLIT TSIRKONIY & E-MAX", ru: "ДИОКСИД ЦИРКОНИЯ", en: "ZIRCONIA & E-MAX" },
      title: {
        uz: "Biomoslashuvchan Tsirkoniy va Ivoclar E-max Keramikasi",
        ru: "Биосовместимый Цирконий и Пресс-Керамика E-max",
        en: "Biocompatible Zirconia & Ivoclar E-max Ceramics",
      },
      subtitle: {
        uz: "Germaniya, Shveysariya va Yaponiya litsenziyalangan xom-ashyosi",
        ru: "Оригинальное сырьё Германии, Швейцарии и Японии",
        en: "Certified German, Swiss, and Japanese dental blocks",
      },
      specs: [
        { uz: "Material: Katana Zirconia (Yaponiya) / IPS e.max (Lixtenshteyn)", ru: "Материал: Katana (Япония) / IPS e.max (Лихтенштейн)", en: "Material: Katana Zirconia / IPS e.max Press" },
        { uz: "Biologik moslik: 100% metall-siz, milkni bezovta qilmaydi", ru: "Биосовместимость: 100% без металла", en: "Biocompatibility: 100% metal-free, non-allergenic" },
        { uz: "Mustahkamlik: 1200+ MPa chaynash bosimiga bardoshli", ru: "Прочность: Более 1200 МПа на изгиб", en: "Strength: 1200+ MPa flexural resistance" },
      ],
      desc: {
        uz: "Biz faqatgina sertifikatlangan monolit tsirkoniy va E-max press-keramikasidan foydalanamiz. Bu materiallar tabiiy tishlar kabi yorug'likni sindiradi, yillar davomida rangini o'zgartirmaydi va milk bilan mukammal uyg'unlashadi.",
        ru: "Мы применяем исключительно сертифицированные блоки диоксида циркония и стеклокерамики E-max. Они неотличимы от природных зубов, не темнеют и берегут десну.",
        en: "We exclusively craft restorations from certified multilayer zirconia and IPS e.max glass-ceramics. They replicate natural incisal translucency and maintain biocompatibility for decades.",
      },
    },
    {
      id: "implantology-suite",
      category: "suites",
      image: assets.service_implant,
      tag: { uz: "ATRAVMATIK IMPLANTOLOGIYA", ru: "ИМПЛАНТОЛОГИЯ", en: "IMPLANTOLOGY SUITE" },
      title: {
        uz: "Biotitan Tish Implantatsiyasi va Mikro-Jarrohlik Xonasi",
        ru: "Стерильный Хирургический Блок для Имплантации",
        en: "Titanium Implantology & Micro-Surgery Suite",
      },
      subtitle: {
        uz: "Janubiy Koreya (Osstem) va Shveysariya (Straumann) litsenziyali tizimlari",
        ru: "Оригинальные протоколы Osstem (Корея) и Straumann (Швейцария)",
        en: "Certified protocols for Osstem (Korea) and Straumann (Switzerland)",
      },
      specs: [
        { uz: "Implantlar: 4-toifali toza biotitan", ru: "Имплантаты: Чистый биотитан Grade 4", en: "Fixtures: Grade 4 pure medical titanium" },
        { uz: "Operatsiya vaqti: 20 daqiqa (1 implant)", ru: "Длительность: 20 минут на установку", en: "Duration: 20 minutes per implant" },
        { uz: "Bitish ko'rsatkichi: 99.2% muvaffaqiyat", ru: "Приживаемость: 99.2% успешных исходов", en: "Integration: 99.2% osseointegration rate" },
      ],
      desc: {
        uz: "Implantatsiya atravmatik usulda, mikroskopik aniqlikda va to'liq og'riqsizlantirish ostida bajariladi. Qo'shni sog'lom tishlarga hech qanday ziyon yetkazilmaydi.",
        ru: "Установка дентальных имплантатов проводится по малотравматичному протоколу с минимальным временем вмешательства и без послеоперационных осложнений.",
        en: "Implant placement is performed using minimally invasive microsurgical protocols to preserve bone architecture and prevent swelling or downtime.",
      },
    },
    {
      id: "whitening-laser-unit",
      category: "materials",
      image: assets.service_whitening,
      tag: { uz: "PHILIPS ZOOM 4", ru: "PHILIPS ZOOM 4", en: "PHILIPS ZOOM 4" },
      title: {
        uz: "Sovuq LED Nuri Bilan Xavfsiz Tish Oqartirish Tizimi",
        ru: "Холодное LED-Отбеливание с Защитой Эмали",
        en: "Safe Cold-LED Whitening & Enamel Remineralization",
      },
      subtitle: {
        uz: "Emal qizishisiz va sezuvchanliksiz 6–8 tonga oqartirish texnologiyasi",
        ru: "Осветление на 6–8 оттенков без перегрева пульпы и чувствительности",
        en: "6–8 shade brightening without pulp heating or post-op sensitivity",
      },
      specs: [
        { uz: "Texnologiya: Philips WhiteSpeed LED (AQSH)", ru: "Аппарат: Philips WhiteSpeed LED (США)", en: "Unit: Philips WhiteSpeed LED (USA)" },
        { uz: "Himoya: Milk maxsus koffer-dam geli bilan himoyalanadi", ru: "Защита: Жидкий коффердам для десны", en: "Protection: Liquid dam isolation for gums" },
        { uz: "Davomiyligi: 45 daqiqalik qulay seans", ru: "Сеанс: 45 минут бережного воздействия", en: "Session: 45-minute comfortable visit" },
      ],
      desc: {
        uz: "Philips ZOOM 4 sovuq to'lqin uzunligiga ega bo'lib, tish nervi va to'qimalarini qizdirmaydi. Maxsus Relief ACP remineralizatsiya qiluvchi gel emalni mustahkamlaydi va yorqinligini uzoq muddat saqlaydi.",
        ru: "Лампа холодного света не нагревает ткани зуба. В сочетании с реминерализующим гелем Relief ACP процедура безопасна даже для чувствительной эмали.",
        en: "Cold-LED technology prevents thermal sensitivity, while ACP remineralizing formulas reinforce enamel crystals for brilliant, durable results.",
      },
    },
  ];

  const visibleItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((i) => i.category === activeFilter);

  return (
    <div className="py-6 sm:py-10 space-y-10">
      <Seo
        title={seo.title}
        description={seo.description}
        keywords={PAGE_KEYWORDS[lang]}
      />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#132e53]/5 text-[#132e53] border border-[#132e53]/15">
          <IconSparkleStar className="w-4 h-4 text-[#285983]" />
          <span>
            {lang === "uz"
              ? "Dr. Olimjon Murzajanov · Klinika & Jihozlar"
              : lang === "ru"
              ? "Д-р Олимжон Мурзажанов · Оснащение Клиники"
              : "Dr. Olimjon Murzajanov · Clinic & Facilities"}
          </span>
        </span>
        <h1 className="font-serif-classic text-3xl sm:text-5xl font-bold text-[#132e53] tracking-tight">
          {lang === "uz"
            ? "Klinika, Jihozlar va Xavfsizlik Standartlari"
            : lang === "ru"
            ? "Фотогалерея: Оснащение и Стерильность"
            : "Clinical Facility, Technology & Hygiene Showcase"}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          {lang === "uz"
            ? "Har bir davolash xonasi, avtoklav sterilizatsiyasi va zamonaviy tibbiy jihozlarimiz bilan yaqindan tanishing."
            : lang === "ru"
            ? "Ознакомьтесь с современным оснащением кабинетов, европейской стерилизацией и материалами мирового уровня."
            : "Explore our modern treatment suites, hospital-grade B-class autoclave sterilization, and certified dental materials."}
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2">
        {filters.map((f) => {
          const active = activeFilter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                active
                  ? "bg-[#132e53] text-white border-[#132e53] shadow-sm"
                  : "bg-white text-slate-700 border-slate-200 hover:border-[#285983] hover:text-[#132e53]"
              }`}
            >
              {f.label[lang]}
            </button>
          );
        })}
      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedFacility(item)}
            className="group rounded-3xl overflow-hidden bg-white border border-[#d5e0ec] shadow-sm hover:shadow-md hover:border-[#285983] transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title[lang]}
                  width={800}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1f38]/60 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 text-[#132e53]">
                  {item.tag[lang]}
                </span>
              </div>

              <div className="p-5 sm:p-6 space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-[#132e53] group-hover:text-[#285983] transition-colors leading-snug">
                  {item.title[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.subtitle[lang]}
                </p>
              </div>
            </div>

            <div className="px-5 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-500 flex items-center gap-1.5">
                <IconShieldCheck className="w-4 h-4 text-[#285983]" />
                <span>100% Xavfsiz</span>
              </span>
              <span className="font-semibold text-[#285983] group-hover:underline">
                {lang === "uz" ? "Tafsilotlar →" : lang === "ru" ? "Подробнее →" : "View Details →"}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Inspector for Facility & Equipment Details */}
      {selectedFacility && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs"
          onClick={closeFacility}
        >
          <div
            ref={facilityModalRef}
            role="dialog"
            aria-modal="true"
            aria-label={selectedFacility.title[lang]}
            tabIndex={-1}
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative space-y-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeFacility}
              aria-label={a11y.closeModal}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#f2f6fa] hover:bg-[#e4edf5] text-slate-700 flex items-center justify-center font-bold cursor-pointer transition-colors"
            >
              ✕
            </button>

            <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#132e53]/5 text-[#132e53] border border-[#132e53]/15">
              {selectedFacility.tag[lang]}
            </span>

            <h3 className="font-serif-classic text-2xl font-bold text-[#132e53] leading-snug">
              {selectedFacility.title[lang]}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {selectedFacility.desc[lang]}
            </p>

            <div className="p-4 rounded-2xl bg-[#f8fafc] border border-slate-200 space-y-2 text-xs">
              <p className="font-bold text-[#132e53] uppercase tracking-wider text-[11px] mb-1">
                {lang === "uz" ? "Texnik va Klinik Xarakteristikalar:" : lang === "ru" ? "Технические параметры:" : "Technical Specifications:"}
              </p>
              {selectedFacility.specs.map((s, idx) => (
                <div key={idx} className="flex items-start gap-2 text-slate-700 font-medium">
                  <IconCheckCircle className="w-3.5 h-3.5 text-[#285983] shrink-0 mt-0.5" />
                  <span>{s[lang] || s.uz}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  setSelectedFacility(null);
                  navigate(to("/booking"));
                  window.scrollTo(0, 0);
                }}
                className="w-full py-3.5 rounded-xl bg-[#132e53] hover:bg-[#285983] text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer text-center"
              >
                {lang === "uz"
                  ? "Shifokor Qabuliga Yozilish →"
                  : lang === "ru"
                  ? "Записаться на Приём →"
                  : "Book Appointment →"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA Card */}
      <div className="rounded-3xl bg-[#132e53] text-white p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h2 className="font-serif-classic text-2xl sm:text-3xl font-bold">
            {lang === "uz"
              ? "Sog'lom va Chiroyli Tabassum Uchun Konsultatsiyaga Yoziling"
              : lang === "ru"
              ? "Запишитесь на Консультацию для Здоровой Улыбки"
              : "Schedule Your Comprehensive Dental Consultation"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-200">
            {lang === "uz"
              ? "Dr. Olimjon Murzajanov qabulida 100% og'riqsiz ko'rik va individual davolash rejasi."
              : lang === "ru"
              ? "Безболезненный осмотр и персональный план лечения у Д-ра Олимжона Мурзажанова."
              : "Comfortable, painless examination and clear treatment planning with Dr. Olimjon Murzajanov."}
          </p>
        </div>

        <button
          onClick={() => {
            navigate(to("/booking"));
            window.scrollTo(0, 0);
          }}
          className="px-7 py-3.5 rounded-xl bg-white text-[#132e53] hover:bg-[#f2f6fa] font-bold text-xs sm:text-sm shadow-sm shrink-0 cursor-pointer transition-colors"
        >
          {lang === "uz"
            ? "Qabulga Yozilish →"
            : lang === "ru"
            ? "Записаться на Приём →"
            : "Book Appointment Now →"}
        </button>
      </div>
    </div>
  );
};

export default Gallery;
