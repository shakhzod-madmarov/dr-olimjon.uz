import { Link } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import {
  IconCheckCircle,
  IconClock,
  IconShieldCheck,
  IconSparkleStar,
  DentalToothMolar,
  DentalSurgeryExtraction,
  DentalImplantFixture,
  DentalWhiteningZoom,
  DentalVeneerCrown,
} from "./MedicalIcons";

const SYMPTOMS_DATA = [
  {
    id: "acute-pain",
    serviceSlug: "tish-davolash",
    icon: DentalToothMolar,
    badge: {
      uz: "O'tkir og'riq",
      ru: "Острая боль",
      en: "Acute Pain",
    },
    symptom: {
      uz: "Tishim lo'qillab og'riyapti, kechasi uxlolmayapman",
      ru: "Зуб пульсирует, ноет ночью, обезболивающие не помогают",
      en: "Throbbing nocturnal toothache, painkillers don't relieve",
    },
    cause: {
      uz: "Karies tish nerviga (pulpaga) yetib borgan yoki ildiz yallig'langan.",
      ru: "Кариес дошел до нерва зуба (пульпит) или воспалился корень.",
      en: "Deep cavity reached the tooth nerve (pulpitis) or root infection.",
    },
    solution: {
      uz: "2 bosqichli og'riqsiz anesteziya + kanalni apeks-lokator nazoratida tozalash + 3M Filtek plomba.",
      ru: "Двухэтапная анестезия без боли + лечение каналов под апекслокатором + световая нано-пломба.",
      en: "100% painless two-stage numbing + apex-guided root canal cleanup + 3M Filtek filling.",
    },
  },
  {
    id: "sensitivity",
    serviceSlug: "tish-davolash",
    icon: IconSparkleStar,
    badge: {
      uz: "Sezuvchanlik",
      ru: "Чувствительность",
      en: "Sensitivity",
    },
    symptom: {
      uz: "Muzdek suv yoki issiq choy ichganda tish simillab qamashadi",
      ru: "Зубы сильно реагируют на холодное, горячее и сладкое",
      en: "Sharp sensitivity and aching when drinking cold water or hot tea",
    },
    cause: {
      uz: "Emal qatlamining yemirilishi, mikroyoriqlar yoki yashirin tish bo'yni kariesi.",
      ru: "Истончение эмали, микротрещины или скрытый пришеечный кариес.",
      en: "Enamel thinning, micro-cracks, or hidden cervical decay.",
    },
    solution: {
      uz: "Emalni chuqur remineralizatsiyalash va zararlangan joyni estetik plombalash.",
      ru: "Глубокое фторирование эмали и микро-пломбирование нанокомпозитом.",
      en: "Deep fluoride remineralization and precision micro-composite restoration.",
    },
  },
  {
    id: "broken-tooth",
    serviceSlug: "ortopediya",
    icon: DentalVeneerCrown,
    badge: {
      uz: "Tish sinishi",
      ru: "Скол или поломка",
      en: "Broken Tooth",
    },
    symptom: {
      uz: "Tishim sinib ketdi yoki eski plomba tushib qoldi",
      ru: "Откололся зуб, сломалась стенка или выпала старая пломба",
      en: "A tooth chipped, wall broke off, or an old filling fell out",
    },
    cause: {
      uz: "Qattiq ovqat chaynash, eskirgan plomba ostida ikkilamchi karies paydo bo'lishi.",
      ru: "Механическая нагрузка, вторичный кариес под старой пломбой.",
      en: "Chewing trauma or recurrent decay undermining legacy restorations.",
    },
    solution: {
      uz: "Ildizni saqlab qolgan holda kultavaya vkladka va monolit tsirkoniy karonka / E-max vinir.",
      ru: "Сохранение корня зуба, культевая вкладка и циркониевая коронка или винир E-max.",
      en: "Root preservation with custom core buildup and monolithic zirconia crown / veneer.",
    },
  },
  {
    id: "bleeding-gums",
    serviceSlug: "tish-oqartirish",
    icon: IconShieldCheck,
    badge: {
      uz: "Milk muammosi",
      ru: "Проблемы десен",
      en: "Gum Issues",
    },
    symptom: {
      uz: "Tish yuvganda milkdan qon keladi va og'izdan noxush hid bor",
      ru: "Кровоточат десны при чистке, неприятный запах изо рта",
      en: "Gums bleed during brushing and persistent breath odor occurs",
    },
    cause: {
      uz: "Tishlar orasida to'plangan qattiq tish toshlari (kamen) va bakterial karash.",
      ru: "Поддесневой зубной камень и бактериальный налет (гингивит).",
      en: "Subgingival tartar deposits and bacterial biofilm driving gingivitis.",
    },
    solution: {
      uz: "Ultratovushli tish toshlarini tozalash + AirFlow abraziv tozalash + milkni tiklash.",
      ru: "Ультразвуковое снятие зубного камня + чистка AirFlow + противовоспалительная терапия.",
      en: "Gentle ultrasonic scaling + AirFlow polishing to halt bleeding and refresh breath.",
    },
  },
  {
    id: "missing-tooth",
    serviceSlug: "implantatsiya",
    icon: DentalImplantFixture,
    badge: {
      uz: "Tish yo'qligi",
      ru: "Отсутствие зуба",
      en: "Missing Tooth",
    },
    symptom: {
      uz: "Tishim olingan, chaynash noqulay va jilmayishdan uyalaman",
      ru: "Нет одного или нескольких зубов, трудно жевать пищу",
      en: "One or more teeth are missing, chewing is difficult and uneasy",
    },
    cause: {
      uz: "Vaqt o'tishi bilan qo'shni tishlar surilib, jag' suyagi hajmi kamayib boradi.",
      ru: "Атрофия кости челюсти и смещение соседних зубов в сторону дефекта.",
      en: "Progressive jawbone resorption and neighboring teeth shifting out of place.",
    },
    solution: {
      uz: "Qo'shni tishlarni charxlamasdan Osstem (Koreya) yoki Straumann biotitan implant o'rnatish.",
      ru: "Установка титанового имплантата Osstem или Straumann без обточки соседних зубов.",
      en: "Osstem or Straumann biocompatible implant without trimming adjacent healthy teeth.",
    },
  },
  {
    id: "wisdom-tooth",
    serviceSlug: "xirurgiya",
    icon: DentalSurgeryExtraction,
    badge: {
      uz: "Aql tishi",
      ru: "Зуб мудрости",
      en: "Wisdom Tooth",
    },
    symptom: {
      uz: "Aql tishim (8-tish) chiqib milkim shishdi, og'iz ochilmayapti",
      ru: "Режется зуб мудрости, опухла щека, больно открывать рот",
      en: "Impacted wisdom tooth causing swollen gums, jaw ache, and restricted opening",
    },
    cause: {
      uz: "Aql tishining jag'da joy yetishmasligi sababli qiyshiq o'sishi (perikoronit).",
      ru: "Неправильное прорезывание восьмерки и воспаление десневого капюшона.",
      en: "Impactions, crowding, and acute inflammation of the overlying gum hood.",
    },
    solution: {
      uz: "15 daqiqada atravmatik, 0% og'riqsiz mikro-jarrohlik yo'li bilan xavfsiz olish.",
      ru: "Атравматичное удаление без боли за 15–20 минут без повреждения кости и отёков.",
      en: "Atraumatic bone-preserving removal in 15–20 mins under gentle local anesthesia.",
    },
  },
];

export default function DentalSymptomGuide({ onOpenBooking }) {
  const { lang } = useLanguage();
  const to = useLocalizedPath();

  const labels = {
    uz: {
      eyebrow: "Alomatlar va Shoshilinch Yechimlar",
      title: "Sizni Qanday Tish Og'rig'i yoki Muammo Bezovta Qilyapti?",
      subtitle:
        "O'zbekiston, Andijon shahrida og'riqsiz yechim: Dr. Olimjon Murzajanov qabuliga yoziling va tishingizni asrab qoling.",
      causeLabel: "Ehtimoliy sabab:",
      solutionLabel: "Klinik yechimimiz:",
      learnMore: "Batafsil xizmat sahifasi →",
      bookConsultation: "Shifokor ko'rigiga yozilish",
    },
    ru: {
      eyebrow: "Симптомы и Срочная Помощь",
      title: "Какая Зубная Боль или Проблема Вас Беспокоит?",
      subtitle:
        "Безболезненное лечение в Андижане: запишитесь к Д-ру Олимжону Мурзажанову и сохраните здоровье зубов.",
      causeLabel: "Вероятная причина:",
      solutionLabel: "Наше клиническое решение:",
      learnMore: "Подробнее об услуге →",
      bookConsultation: "Записаться на осмотр",
    },
    en: {
      eyebrow: "Symptoms & Emergency Guidance",
      title: "What Dental Pain or Concern Are You Experiencing?",
      subtitle:
        "Gentle, painless solutions in Andijan: schedule your visit with Dr. Olimjon Murzajanov to preserve your natural smile.",
      causeLabel: "Probable cause:",
      solutionLabel: "Clinical solution:",
      learnMore: "Explore service details →",
      bookConsultation: "Schedule Consultation",
    },
  }[lang] || {
    eyebrow: "Alomatlar va Shoshilinch Yechimlar",
    title: "Sizni Qanday Tish Og'rig'i yoki Muammo Bezovta Qilyapti?",
    subtitle:
      "O'zbekiston, Andijon shahrida og'riqsiz yechim: Dr. Olimjon Murzajanov qabuliga yoziling va tishingizni asrab qoling.",
    causeLabel: "Ehtimoliy sabab:",
    solutionLabel: "Klinik yechimimiz:",
    learnMore: "Batafsil xizmat sahifasi →",
    bookConsultation: "Shifokor ko'rigiga yozilish",
  };

  return (
    <section className="py-8 sm:py-12 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border border-[#d5e0ec] shadow-sm">
      <div className="max-w-4xl mx-auto text-center space-y-3 mb-8 sm:mb-12">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#132e53]/5 border border-[#132e53]/15 text-xs font-bold uppercase tracking-wider text-[#132e53]">
          <IconSparkleStar className="w-3.5 h-3.5 text-[#285983]" />
          {labels.eyebrow}
        </span>
        <h2 className="font-serif-classic text-2xl sm:text-3xl lg:text-4xl font-bold text-[#132e53] leading-tight">
          {labels.title}
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {labels.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {SYMPTOMS_DATA.map((item) => {
          const IconComp = item.icon;
          return (
            <div
              key={item.id}
              className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-[#d5e0ec] bg-[#f8fafc] hover:bg-white hover:border-[#285983]/40 hover:shadow-md transition-all duration-200 text-left"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="p-2.5 rounded-xl bg-[#132e53] text-white shadow-xs">
                    <IconComp className="w-5 h-5 text-white" />
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#132e53]/5 border border-[#132e53]/15 text-[11px] font-bold text-[#132e53]">
                    {item.badge[lang] || item.badge.uz}
                  </span>
                </div>

                <h3 className="font-serif-classic text-base sm:text-lg font-bold text-[#132e53] leading-snug">
                  {item.symptom[lang] || item.symptom.uz}
                </h3>

                <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed pt-1 border-t border-[#e2eaf2]">
                  <p>
                    <strong className="text-slate-900 font-semibold">{labels.causeLabel}</strong>{" "}
                    <span className="text-slate-600">{item.cause[lang] || item.cause.uz}</span>
                  </p>
                  <p className="flex items-start gap-1.5 text-slate-800">
                    <IconCheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#132e53] font-semibold">{labels.solutionLabel}</strong>{" "}
                      {item.solution[lang] || item.solution.uz}
                    </span>
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#e2eaf2] flex items-center justify-between gap-2">
                <Link
                  to={to(`/services/${item.serviceSlug}`)}
                  className="text-xs font-bold text-[#285983] hover:text-[#132e53] transition-colors"
                >
                  {labels.learnMore}
                </Link>
                {onOpenBooking && (
                  <button
                    type="button"
                    onClick={() => onOpenBooking(item.serviceSlug)}
                    className="px-3 py-1.5 rounded-lg bg-[#132e53] hover:bg-[#285983] text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {labels.bookConsultation}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
