import { Link } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { DOCTOR_INFO } from "../constants/doctor";
import {
  IconCheckCircle,
  IconShieldCheck,
  IconSparkleStar,
  IconPhone,
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
      uz: "Tishim kechki payt lo'qillab og'riyapti, uxlolmayapman",
      ru: "Зуб пульсирует и болит ночью, обезболивающие не помогают",
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
      uz: "Tish sinishi / Karonka",
      ru: "Скол / Коронка",
      en: "Broken Tooth",
    },
    symptom: {
      uz: "Tishim sinib ketdi, eski plomba tushdi yoki tish qo'ydirish kerak",
      ru: "Откололся зуб, выпала пломба или нужно поставить коронку",
      en: "A tooth chipped, old filling fell out, or crown replacement is needed",
    },
    cause: {
      uz: "Qattiq ovqat chaynash, eskirgan plomba ostida ikkilamchi karies paydo bo'lishi.",
      ru: "Механическая нагрузка, вторичный кариес под старой пломбой.",
      en: "Chewing trauma or recurrent decay undermining legacy restorations.",
    },
    solution: {
      uz: "Ildizni saqlab qolgan holda kultavaya vkladka va 2–3 kunda monolit tsirkoniy karonka.",
      ru: "Сохранение корня зуба, культевая вкладка и циркониевая коронка за 2–3 дня.",
      en: "Root preservation with core buildup and monolithic zirconia crown in 2–3 days.",
    },
  },
  {
    id: "missing-tooth",
    serviceSlug: "implantatsiya",
    icon: DentalImplantFixture,
    badge: {
      uz: "Tish implanti",
      ru: "Имплант зуба",
      en: "Missing Tooth",
    },
    symptom: {
      uz: "Tishim olingan (yo'q), qo'shni tishni charxlamasdan tiklamoqchiman",
      ru: "Нет зуба, нужно восстановить без обточки соседних здоровых зубов",
      en: "One or more missing teeth — want restoration without grinding neighbors",
    },
    cause: {
      uz: "Vaqt o'tishi bilan qo'shni tishlar surilib, jag' suyagi hajmi kamayib boradi.",
      ru: "Атрофия кости челюсти и смещение соседних зубов в сторону дефекта.",
      en: "Progressive jawbone resorption and neighboring teeth shifting out of place.",
    },
    solution: {
      uz: "20 daqiqada og'riqsiz Osstem (Koreya) yoki Straumann biotitan implant o'rnatish.",
      ru: "Установка титанового имплантата Osstem или Straumann за 20 минут без боли.",
      en: "Osstem or Straumann biocompatible implant placed painlessly in 20 minutes.",
    },
  },
  {
    id: "wisdom-tooth",
    serviceSlug: "xirurgiya",
    icon: DentalSurgeryExtraction,
    badge: {
      uz: "Aql tishi / Sug'urish",
      ru: "Зуб мудрости",
      en: "Wisdom Tooth",
    },
    symptom: {
      uz: "Aql tishim (8-tish) chiqib milkim shishdi, og'iz ochilmayapti",
      ru: "Режется зуб мудрости, опухла щека, больно открывать рот",
      en: "Impacted wisdom tooth causing swollen gums and restricted opening",
    },
    cause: {
      uz: "Aql tishining jag'da joy yetishmasligi sababli qiyshiq o'sishi (perikoronit).",
      ru: "Неправильное прорезывание восьмерки и воспаление десневого капюшона.",
      en: "Impactions, crowding, and acute inflammation of the overlying gum hood.",
    },
    solution: {
      uz: "15 daqiqada atravmatik, 0% og'riqsiz olish va kollagen gubka bilan shishsiz bitish.",
      ru: "Атравматичное удаление без боли за 15–20 минут с коллагеновой губкой.",
      en: "Atraumatic bone-preserving removal in 15–20 mins with rapid healing.",
    },
  },
  {
    id: "bleeding-gums",
    serviceSlug: "tish-oqartirish",
    icon: IconShieldCheck,
    badge: {
      uz: "Milk va Sarg'ayish",
      ru: "Дёсны и Налёт",
      en: "Gums & Stains",
    },
    symptom: {
      uz: "Milkdan qon keladi, og'izdan hid bor yoki tishlar choydan sarg'aygan",
      ru: "Кровоточат десны, запах изо рта или потемнела эмаль от кофе/чая",
      en: "Gums bleed during brushing, breath odor, or tea/coffee tooth stains",
    },
    cause: {
      uz: "Tishlar orasida to'plangan qattiq tish toshlari (kamen) va bakterial karash.",
      ru: "Поддесневой зубной камень и пигментированный налет (гингивит).",
      en: "Subgingival tartar deposits and pigment biofilm driving gingivitis.",
    },
    solution: {
      uz: "Ultratovush + AirFlow tozalash va Philips ZOOM 4 sovuq LED oqartirish.",
      ru: "Ультразвуковая чистка AirFlow и безопасное отбеливание Philips ZOOM 4.",
      en: "Ultrasonic scaling + AirFlow polish and Philips ZOOM 4 cold-LED whitening.",
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
        "Andijon shahrida og'riqsiz yechim: muammongizni tanlang va Dr. Olimjon Murzajanov qabuliga navbatsiz yoziling.",
      causeLabel: "Ehtimoliy sabab:",
      solutionLabel: "Klinik yechimimiz:",
      learnMore: "Batafsil xizmat sahifasi →",
      bookConsultation: "Shifokor ko'rigiga yozilish",
      nightTitle: "Kechasi tish og'riyaptimi? Tonggacha shoshilinch eslatma:",
      nightDo: "Nima qilish mumkin: iliq (issiq emas) tuzli suv bilan ohista chayish, tashqi yonoqqa sochiqda sovuq kompress qo'yish va boshni balandroq tutib yotish.",
      nightDont: "NIMA MUMKIN EMAS: Yonoqqa ASLO issiq grelka/kompress qo'ymang (yiringni ko'paytiradi) va og'riq qoldiruvchi tabletkani tish/milk ustiga bosmang (milkni kuydiradi).",
      nightCta: "Tongda birinchi qabulga yozilish:",
    },
    ru: {
      eyebrow: "Симптомы и Срочная Помощь",
      title: "Какая Зубная Боль или Проблема Вас Беспокоит?",
      subtitle:
        "Безболезненное лечение в Андижане: выберите вашу ситуацию и запишитесь к Д-ру Олимжону Мурзажанову.",
      causeLabel: "Вероятная причина:",
      solutionLabel: "Наше клиническое решение:",
      learnMore: "Подробнее об услуге →",
      bookConsultation: "Записаться на осмотр",
      nightTitle: "Зуб разболелся ночью? Важная памятка до визита к врачу:",
      nightDo: "Что можно сделать: осторожно прополоскать тёплым (не горячим) солевым раствором, приложить снаружи прохладный компресс на 15 мин, спать на высокой подушке.",
      nightDont: "ЧТО КАТЕГОРИЧЕСКИ НЕЛЬЗЯ: Не грейте щёку (ускоряет нагноение и отёк) и не кладите таблетки прямо на десну или зуб (вызывает химический ожог).",
      nightCta: "Срочная запись на утро:",
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
      nightTitle: "Severe toothache at night? Quick guidance until morning:",
      nightDo: "Safe relief steps: gently rinse with lukewarm (never hot) saltwater, apply a wrapped cold pack externally for 15 mins, and sleep with your head elevated.",
      nightDont: "NEVER DO THIS: Do NOT apply heat to your cheek (it accelerates abscess swelling) and never crush painkillers directly onto the gum (causes chemical burns).",
      nightCta: "Priority morning slot:",
    },
  }[lang] || {
    eyebrow: "Alomatlar va Shoshilinch Yechimlar",
    title: "Sizni Qanday Tish Og'rig'i yoki Muammo Bezovta Qilyapti?",
    subtitle:
      "Andijon shahrida og'riqsiz yechim: muammongizni tanlang va Dr. Olimjon Murzajanov qabuliga navbatsiz yoziling.",
    causeLabel: "Ehtimoliy sabab:",
    solutionLabel: "Klinik yechimimiz:",
    learnMore: "Batafsil xizmat sahifasi →",
    bookConsultation: "Shifokor ko'rigiga yozilish",
    nightTitle: "Kechasi tish og'riyaptimi? Tonggacha shoshilinch eslatma:",
    nightDo: "Nima qilish mumkin: iliq (issiq emas) tuzli suv bilan ohista chayish, tashqi yonoqqa sovuq kompress qo'yish va boshni balandroq tutib yotish.",
    nightDont: "NIMA MUMKIN EMAS: Yonoqqa ASLO issiq kompress qo'ymang (yiringni ko'paytiradi) va tabletkani milk ustiga bosmang (milkni kuydiradi).",
    nightCta: "Tongda birinchi qabulga yozilish:",
  };

  return (
    <section className="py-8 sm:py-12 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border border-[#d5e0ec] shadow-sm space-y-8">
      <div className="max-w-4xl mx-auto text-center space-y-3">
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

      {/* Nighttime Toothache Safety Box (Matches High-Intent Uzbek & Russian Queries) */}
      <div className="rounded-2xl bg-[#132e53] text-white p-4 sm:p-6 border border-[#285983] flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
        <div className="space-y-2 text-left max-w-3xl">
          <h3 className="font-serif-classic text-lg sm:text-xl font-bold text-amber-300">
            {labels.nightTitle}
          </h3>
          <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
            {labels.nightDo}
          </p>
          <p className="text-xs sm:text-sm text-rose-200 font-semibold leading-relaxed">
            {labels.nightDont}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0">
          <span className="text-[11px] font-bold uppercase tracking-wider text-sky-200">
            {labels.nightCta}
          </span>
          <a
            href={DOCTOR_INFO.phoneHref}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-[#132e53] hover:bg-sky-50 font-bold text-xs sm:text-sm shadow-sm transition-colors"
          >
            <IconPhone className="w-4 h-4 text-[#132e53]" />
            <span>{DOCTOR_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
