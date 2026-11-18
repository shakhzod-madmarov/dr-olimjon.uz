/**
 * Dedicated FAQs for each of the 7 dental services.
 * Used for rich FAQ accordions on ServiceDetail pages and Schema.org FAQPage structured data
 * to secure Google & Yandex Rich Snippets and direct citations in AI search engines (Perplexity, SearchGPT, Gemini, Yandex Neuro).
 */
export const SERVICE_FAQS = {
  "tish-davolash": [
    {
      q: {
        uz: "Andijonda tish davolash va plomba narxlari qanday belgilanadi?",
        ru: "Как формируются цены на лечение зубов и пломбирование в Андижане?",
        en: "How are tooth filling and cavity treatment prices determined in Andijan?",
      },
      a: {
        uz: "Narx tish shikastlanish darajasiga (oddiy karies, chuqur karies yoki nerv shamollashi — pulpit) va ishlatiladigan materialga bog'liq. Dr. Olimjon Murzajanov qabulida Germaniyaning original 3M Filtek va Yaponiyaning Estelite fotopolimerlaridan foydalaniladi. Bepul konsultatsiya va raqamli rentgen ko'rigidan so'ng aniq narx hech qanday yashirin to'lovlarsiz aytiladi.",
        ru: "Стоимость зависит от глубины поражения зуба (поверхностный кариес, глубокий кариес или пульпит с лечением каналов) и выбранного нанокомпозита. Д-р Олимжон Мурзажанов использует оригинальные фотополимеры 3M Filtek (Германия) и Estelite (Япония). Точная стоимость оглашается после осмотра и прицельного снимка без скрытых платежей.",
        en: "Pricing depends on the depth of decay (simple cavity, deep decay, or pulpitis requiring root canal therapy) and the chosen nano-composite material. Dr. Olimjon Murzajanov works exclusively with authentic 3M Filtek (Germany) and Estelite (Japan). Exact pricing is quoted after a consultation and digital X-ray with zero hidden fees.",
      },
    },
    {
      q: {
        uz: "Karies va pulpit davolashda og'riq seziladimi?",
        ru: "Чувствуется ли боль при лечении кариеса и пульпита?",
        en: "Is cavity or root canal treatment painful?",
      },
      a: {
        uz: "Mutlaqo og'riq sezilmaydi! 2 bosqichli anesteziya qo'llaniladi: avval milk muzlatuvchi mevali gel bilan og'riqsizlantiriladi, so'ngra zamonaviy mikro-anestetik yuboriladi. Bemor hatto ukol ignasini ham sezmaydi va muolaja davomida to'liq xotirjam o'tiradi.",
        ru: "Абсолютно без боли! Мы применяем двухэтапную анестезию: сначала десна обрабатывается охлаждающим аппликационным гелем, и только затем плавно вводится сертифицированный анестетик. Пациент не чувствует даже укола и ощущает полный комфорт.",
        en: "Completely painless! We apply a two-step anesthesia protocol: first a pleasant numbing gel is applied to the gum, followed by a gentle micro-anesthetic. You won't feel the needle prick and can relax throughout the entire procedure.",
      },
    },
    {
      q: {
        uz: "3M Filtek va Estelite fotopolimer plombalari necha yil xizmat qiladi?",
        ru: "Сколько лет служат световые фотополимерные пломбы 3M Filtek и Estelite?",
        en: "How long do 3M Filtek and Estelite composite fillings last?",
      },
      a: {
        uz: "Ushbu nanogibrid materiallar o'zining chidamliligi, tish emaliga mahkam yopishishi va rangini o'zgartirmasligi bilan dunyoda yetakchi hisoblanadi. To'g'ri gigiyenaga rioya qilinganda ular 5–10 yil va undan ko'proq benuqson xizmat qiladi. Dr. Olimjon har bir davolangan tishga rasmiy kafolat beradi.",
        ru: "Эти наногибридные композиты признаны золотым стандартом в мировой стоматологии: они не дают усадки, не меняют цвет и обладают прочностью натуральной эмали. При правильном уходе пломбы служат от 5 до 10 лет и дольше. Доктор Олимжон предоставляет официальную гарантию.",
        en: "These nano-hybrid composites are globally recognized as gold standards: they resist shrinkage, do not discolor, and match the abrasion resistance of natural enamel. With regular oral hygiene, they last 5 to 10+ years with full clinical warranty.",
      },
    },
    {
      q: {
        uz: "Tishimda qora dog' yoki teshik paydo bo'ldi, lekin og'rimayapti — uni davolatish shartmi?",
        ru: "Появилась черная точка или дырка в зубе, но он не болит — нужно ли лечить?",
        en: "A dark spot or small cavity appeared, but it doesn't hurt yet — do I still need to treat it?",
      },
      a: {
        uz: "Ha, albatta! Karies dastlabki bosqichida tish emalida bo'ladi va hech qanday og'riq bermaydi. Agar og'riq boshlansa, bu infeksiya allaqachon tish nerviga (pulpaga) yetib borganini bildiradi. Og'riq boshlanmasidan oldin davolash — tish nervini tirik saqlab qolish va muolajani ancha tez hamda arzon yakunlash imkonini beradi.",
        ru: "Да, обязательно! На ранних стадиях кариес поражает только эмаль и дентин, не затрагивая нерв, поэтому зуб не болит. Когда появляется острая боль — это значит, что инфекция дошла до пульпы (нерва). Лечение на ранней стадии позволяет сохранить зуб живым, избежать удаления нерва и сэкономить деньги.",
        en: "Yes, absolutely! In early stages, decay only affects enamel and dentin without reaching the nerve, causing zero pain. When acute pain starts, infection has already invaded the dental pulp. Treating it early keeps the nerve alive, prevents root canal therapy, and is far quicker and more cost-effective.",
      },
    },
    {
      q: {
        uz: "Tish nervi olinsa (depultatsiya), tish tezda sinib ketmaydimi yoki qoraymaydimi?",
        ru: "Если удалить нерв из зуба, потемнеет ли он и не сломается ли со временем?",
        en: "If a tooth nerve is removed (root canal), will the tooth discolor or become brittle?",
      },
      a: {
        uz: "Zamonaviy stomatologiyada Dr. Olimjon kanalni mikron aniqlikdagi apeks-lokator nazoratida tozalab, 3D gipogidridli bio-obturatsiya qiladi. Tish devorlari mustahkam kompozit restavratsiya yoki tsirkoniy karonka bilan himoyalanganda, bunday tish o'zining tabiiy rangini saqlab qoladi va 10–15 yil bemalol xizmat qiladi.",
        ru: "В нашей клинике каналы пломбируются под контролем апекслокатора современными биосовместимыми силлерами без токсичных паст старого поколения (резорцин-формалина), поэтому зуб не темнеет и не становится розовым. При необходимости зуб укрепляется штифтом или циркониевой коронкой, предотвращающей сколы.",
        en: "At our clinic, root canals are sanitized under electronic apex-locator guidance and sealed with biocompatible resin sealers rather than staining legacy pastes. The tooth retains natural aesthetics and, when reinforced with a composite core or zirconia crown, functions securely for decades.",
      },
    },
  ],
  ortopediya: [
    {
      q: {
        uz: "Tsirkoniy karonka bilan oddiy metallokeramika o'rtasidagi asosiy farq nima?",
        ru: "В чём ключевое отличие циркониевых коронок от металлокерамики?",
        en: "What is the key difference between zirconia crowns and porcelain-fused-to-metal (PFM)?",
      },
      a: {
        uz: "Tsirkoniy (Zirconia) — 100% metall-siz, biomoslashuvchan materialdir. Metallokeramikada bo'ladigan milk ko'karishi, og'izdagi temir ta'mi yoki allergik reaksiyalar tsirkoniyda mutlaqo kuzatilmaydi. U tabiiy tishdek shaffof, yorug'lik o'tkazuvchan va juda mustahkam bo'lib, 10–15 yil xizmat qiladi.",
        ru: "Диоксид циркония — 100% безметалловый и гипоаллергенный биоматериал. В отличие от металлокерамики, цирконий никогда не окисляется, не вызывает синюшности десны и металлического привкуса во рту. Он обладает идеальной светопроницаемостью живого зуба и служит 10–15 лет.",
        en: "Zirconia is a 100% metal-free, hypoallergenic biomaterial. Unlike metal-ceramic crowns, zirconia never oxidizes, prevents unsightly grey gum lines, and eliminates metallic taste. It mirrors natural tooth translucency and lasts 10 to 15+ years.",
      },
    },
    {
      q: {
        uz: "Andijonda tsirkoniy karonka qo'ydirish necha kun vaqt oladi?",
        ru: "Сколько дней занимает установка циркониевой коронки в Андижане?",
        en: "How many days does it take to fit zirconia crowns in Andijan?",
      },
      a: {
        uz: "Odatda bor-yo'g'i 2–3 kun va 2 marta tashrif yetarli. 1-tashrifda tish ehtiyotkorlik bilan tayyorlanadi, raqamli o'lchov olinadi va vaqtinchalik estetik karonka qo'yiladi (siz tishsiz yurmaysiz). 2-tashrifda esa tayyor tsirkoniy karonka mahkamlab beriladi.",
        ru: "Обычно требуется всего 2–3 дня и 2 комфортных визита. На 1-м приёме зуб бережно подготавливается, снимается высокоточный слепок и устанавливается временная коронка (вы не ходите без зуба). На 2-м приёме готовая циркониевая коронка фиксируется на зуб.",
        en: "Typically just 2 to 3 days and 2 comfortable appointments. During visit 1, the tooth is prepared, precise impressions are taken, and a temporary crown is placed so you never leave without a tooth. On visit 2, the custom milled zirconia crown is bonded permanently.",
      },
    },
    {
      q: {
        uz: "Tsirkoniy karonkalar milkni qoraytiradimi yoki og'izdan noxush hid keltirib chiqaradimi?",
        ru: "Темнеет ли десна под циркониевой коронкой и появляется ли неприятный запах?",
        en: "Does zirconia darken the gumline or cause bad breath?",
      },
      a: {
        uz: "Yo'q, mutlaqo! CAD/CAM 3D kompyuter modellashtirish orqali karonka tishga mikron aniqlikda yopishadi. Oziq-ovqat qoldiqlari yoki bakteriyalar karonka ostiga kirmaydi, milk bilan mukammal tutashadi va milk doimo tabiiy pushti rangda saqlanadi.",
        ru: "Нет, абсолютно исключено! Благодаря цифровой CAD/CAM фрезеровке коронка прилегает к культе зуба с микронной точностью. Под неё не попадают бактерии и пища, десна остаётся здоровой, розовой, без малейшего неприятного запаха.",
        en: "No, never! Thanks to precision CAD/CAM digital milling, the crown fits with microscopic margin accuracy. Bacteria and food debris cannot enter underneath, preserving healthy pink gums with zero odor.",
      },
    },
    {
      q: {
        uz: "Tishim butunlay sinib, faqat ildizi qolgan bo'lsa, uni sug'urtirmasdan karonka bilan qutqarib qolsa bo'ladimi?",
        ru: "Если зуб полностью сломался под корень, можно ли спасти его коронкой без удаления?",
        en: "If a tooth broke down to the gumline and only the root remains, can it be saved with a crown?",
      },
      a: {
        uz: "Ha, ko'p hollarda ildiz sog'lom bo'lsa, uni sug'urishga aslo shoshilmang! Dr. Olimjon ildiz ichiga individual kultavaya vkladka (tish asosi) o'rnatib, ustiga monolit tsirkoniy karonka kiydiradi. Bu sizning o'z tabiiy tishingiz ildizini saqlab qolish va tish qatorini bus-butun tiklashning eng yaxshi usulidir.",
        ru: "Да, если корень устойчив и не воспален, удалять его не нужно! Д-р Олимжон укрепляет корень индивидуальной культевой вкладкой и фиксирует циркониевую коронку. Это позволяет спасти собственный корень зуба и избежать хирургического удаления.",
        en: "Yes, if the root structure is intact and non-infected, extraction can be avoided! Dr. Olimjon places a custom post-and-core buildup inside the root and seals it with a monolithic zirconia crown. Preserving your natural root is always the preferred clinical choice.",
      },
    },
  ],
  "estetik-stomatologiya": [
    {
      q: {
        uz: "E-max vinirlar o'rnatish uchun tishni ko'p charxlash kerakmi?",
        ru: "Нужно ли сильно обтачивать зубы под керамические виниры E-max?",
        en: "Do teeth need to be heavily trimmed for E-max porcelain veneers?",
      },
      a: {
        uz: "Yo'q, tish minimal darajada asrab qolinadi! E-max vinirlari ultra-yupqa (atigi 0.3–0.5 mm) bo'lgani sababli, emalning faqat old yuzasi juda nozik silliqlanadi. Tish nerviga va tirikligiga mutlaqo tegilmaydi.",
        ru: "Нет, зубы максимально сохраняются живыми! Виниры E-max являются ультратонкими (всего 0.3–0.5 мм), поэтому обрабатывается лишь микронный слой передней эмали. Зубной нерв не удаляется, зуб остаётся полностью живым.",
        en: "No, the tooth is preserved conservatively! Because E-max press-ceramics are ultra-thin (only 0.3–0.5 mm), only a microscopic layer of facial enamel is conditioned. The dental pulp/nerve is never touched.",
      },
    },
    {
      q: {
        uz: "Vinirlar vaqt o'tishi bilan choy, kofe yoki tamakidan sarg'ayadimi?",
        ru: "Желтеют ли керамические виниры со временем от кофе, чая или сигарет?",
        en: "Do porcelain veneers stain over time from coffee, tea, or smoking?",
      },
      a: {
        uz: "E-max press-keramikasi g'ovaksiz monolit shisha-keramika bo'lib, oziq-ovqat bo'yoqlarini mutlaqo o'ziga tortmaydi. 10–15 yil o'tgandan keyin ham vinirlar ilk qo'yilgan kundagidek yorqin va oppoq saqlanadi.",
        ru: "Пресс-керамика E-max имеет беспористую стекловидную структуру, поэтому пищевые красители, кофе и табак не могут проникнуть в материал. Даже через 10–15 лет виниры сохраняют свой первозданный сияющий белый цвет.",
        en: "E-max press-ceramic has a completely non-porous glass structure that impervious to pigments. Coffee, tea, and tobacco cannot stain it; your smile retains its radiant white luster even after 10–15+ years.",
      },
    },
    {
      q: {
        uz: "Vinirlar yordamida tishlar orasidagi tirqish (diastema)ni yopish mumkinmi?",
        ru: "Можно ли закрыть диастему (щель между зубами) с помощью виниров?",
        en: "Can diastemas (gaps between teeth) be closed with veneers?",
      },
      a: {
        uz: "Ha, bu vinirlarning eng asosiy afzalliklaridan biridir. Old tishlar orasidagi tirqishlar, egriliklar va emal nuqsonlari breketsiz, 1–2 tashrifdayoq ideal estetik shaklga keltiriladi.",
        ru: "Да, это одно из главных показаний к винирам! Щель между передними зубами (диастема), сколы и неровности формы устраняются за 1–2 визита без длительного ношения брекетов.",
        en: "Yes, this is one of the primary indications for veneers! Gaps between teeth, minor misalignments, and chipped edges are flawlessly corrected in just 1–2 visits without braces.",
      },
    },
  ],
  implantatsiya: [
    {
      q: {
        uz: "Tish implantatsiyasi qancha vaqt davom etadi va muolaja og'riqlimi?",
        ru: "Сколько длится установка имплантата и больно ли это?",
        en: "How long does dental implant surgery take and is it painful?",
      },
      a: {
        uz: "Bitta biotitan implant o'rnatish atigi 15–20 daqiqa vaqt oladi. Zamonaviy anesteziya sababli muolaja paytida bemor hech qanday og'riq sezmaydi. Ko'plab bemorlar implant qo'yish oddiy tish sug'urishdan ham osonroq o'tganini ta'kidlashadi.",
        ru: "Установка одного титанового имплантата занимает всего 15–20 минут. Благодаря эффективной анестезии процедура проходит абсолютно безболезненно. По ощущениям пациентов, установка импланта легче, чем простое удаление зуба.",
        en: "Placing a single titanium implant takes only 15 to 20 minutes. Thanks to localized anesthesia, the procedure is completely painless. Most patients report it feels easier and gentler than a routine tooth extraction.",
      },
    },
    {
      q: {
        uz: "Osstem (Janubiy Koreya) va Straumann (Shveysariya) implantlari o'rtasida qanday farq bor?",
        ru: "В чём разница между имплантами Osstem (Корея) и Straumann (Швейцария)?",
        en: "What is the difference between Osstem (Korea) and Straumann (Switzerland) dental implants?",
      },
      a: {
        uz: "Osstem — dunyodagi eng ommabop, yuqori sifatli va narx jihatidan qulay Janubiy Koreya brendidir (99.2% ildiz otish ko'rsatkichi). Straumann esa — jahon implantologiyasining premiumi bo'lib, SLActive innovatsion yuzasi tufayli suyakka 3–4 haftada tez birikadi. Dr. Olimjon har ikkala tizim bo'yicha rasmiy sertifikatlangan.",
        ru: "Osstem — один из самых популярных и надёжных брендов в мире из Южной Кореи с отличным соотношением цены и качества (приживаемость 99.2%). Straumann — премиальный швейцарский бренд с запатентованной поверхностью SLActive, ускоряющей приживление до 3–4 недель. Доктор Олимжон сертифицирован по обеим системам.",
        en: "Osstem is a world-leading South Korean implant system offering proven reliability, 99.2% success rates, and outstanding affordability. Straumann is Switzerland's top-tier premium system with hydrophilic SLActive surfaces that fuse with bone in as little as 3–4 weeks. Dr. Olimjon is officially certified for both.",
      },
    },
    {
      q: {
        uz: "Implant suyakka birikmasdan tushib qolishi mumkinmi?",
        ru: "Может ли имплантат не прижиться и выпасть?",
        en: "Can a dental implant fail to integrate with the jawbone?",
      },
      a: {
        uz: "Zamonaviy biotitan implantlarning suyakka birikish ko'rsatkichi 99% dan yuqori. Klinikamizda oldindan raqamli rentgen diagnostikasi o'tkazilib, suyak zichligi aniq hisoblangani sababli xavf deyarli nolga teng. Dr. Olimjon implantga rasmiy pasport va uzoq muddatli kafolat taqdim etadi.",
        ru: "Приживаемость современных титановых имплантатов превышает 99%. Благодаря детальной цифровой диагностике костной ткани перед операцией риск отторжения сведён к минимуму. Пациент получает паспорт имплантата с официальной гарантией производителя.",
        en: "Clinical success for modern biocompatible titanium implants exceeds 99%. Because we assess bone volume and density using digital imaging before placement, risks are negligible. Each patient receives an official implant serial passport and warranty.",
      },
    },
    {
      q: {
        uz: "Tish olingan kuni o'sha zahotiyoq o'rniga yangi implant qo'ysa bo'ladimi (bir bosqichli implantatsiya)?",
        ru: "Можно ли поставить имплант сразу в день удаления разрушенного зуба (одномоментная имплантация)?",
        en: "Can an implant be placed immediately on the day of tooth extraction (immediate implant placement)?",
      },
      a: {
        uz: "Ha, agar ildiz atrofida o'tkir yiringli yallig'lanish bo'lmasa, bir bosqichli (odnomomentnaya) implantatsiya eng mukammal yechimdir! Kasal tish ehtiyotkorlik bilan olinadi va o'sha teshikning o'ziga darhol Osstem yoki Straumann biotitan vinti o'rnatiladi. Natijada siz ikki marta jarrohlikka kirmaysiz, vaqtingiz va jag' suyagi hajmi tejaladi.",
        ru: "Да, при отсутствии острого гнойного воспаления одномоментная имплантация является золотым стандартом! Не подлежащий восстановлению зуб атравматично удаляется, и в ту же лунку сразу устанавливается биосовместимый имплантат. Вы экономите время и сохраняете естественный объём кости.",
        en: "Yes, provided there is no acute infection, immediate implant placement is the gold standard! The non-restorable tooth is atraumatically removed, and a titanium implant (Osstem or Straumann) is placed into the extraction socket immediately. This eliminates a second surgery and preserves vital bone volume.",
      },
    },
  ],
  "tish-oqartirish": [
    {
      q: {
        uz: "Philips ZOOM 4 lazerli oqartirish tish emaliga zarar yetkazmaydimi?",
        ru: "Вредит ли эмали лазерное отбеливание Philips ZOOM 4?",
        en: "Does Philips ZOOM 4 laser whitening damage tooth enamel?",
      },
      a: {
        uz: "Yo'q, emalga zarar yetkazmaydi! Philips ZOOM 4 tizimi sovuq LED nuri bilan ishlaydi, shuning uchun tish to'qimasini qizdirmaydi. Gel tarkibidagi amorf kalsiy fosfat (ACP) esa aksincha tish emalini mustahkamlaydi va mikroyoriqlarni to'ldiradi.",
        ru: "Нет, процедура полностью безопасна для эмали! Аппарат Philips ZOOM 4 оснащён холодным LED-светом, который исключает перегрев пульпы. А специальный защитный гель с аморфным фосфатом кальция (ACP) укрепляет эмаль и заполняет микротрещины.",
        en: "No, it does not damage enamel! The Philips ZOOM 4 system uses cold LED light that prevents tooth nerve overheating. The proprietary gel with amorphous calcium phosphate (ACP) actively strengthens enamel and micro-fills enamel prisms.",
      },
    },
    {
      q: {
        uz: "Tish oqartirish effekti necha yil saqlanib turadi?",
        ru: "Сколько времени сохраняется эффект отбеливания зубов?",
        en: "How long does professional teeth whitening last?",
      },
      a: {
        uz: "Natija 1 yildan 3 yilgacha saqlanadi. Muolajadan keyingi dastlabki 7 kunda «oq parhez»ga (rang beruvchi choy, qahva, shokoladdan tiyilish) rioya qilish va muntazam gigiyena oqlik muddatini maksimal uzaytiradi.",
        ru: "Эффект белоснежной улыбки сохраняется от 1 до 3 лет. Соблюдение «белой диеты» в первые 7 дней после процедуры (исключение красящих напитков, ягод и табака) гарантирует долгий стойкий результат.",
        en: "Results typically last between 1 to 3 years. Observing a 'white diet' (avoiding heavily pigmented foods, coffee, berries, and tobacco) for the first 7 days ensures maximum longevity of the radiant shade.",
      },
    },
    {
      q: {
        uz: "Oqartirish muolajasidan so'ng tishlarda sezuvchanlik yoki og'riq bo'ladimi?",
        ru: "Будет ли чувствительность или боль после процедуры отбеливания?",
        en: "Will there be tooth sensitivity or pain after whitening?",
      },
      a: {
        uz: "Muolajadan so'ng tishlarga maxsus remineralizatsiyalovchi krem surtiladi. Ba'zi bemorlarda birinchi 12–24 soatda yengil sezuvchanlik kuzatilishi mumkin, ammo u tezda o'tib ketadi va hech qanday noqulaylik qoldirmaydi.",
        ru: "Сразу после процедуры мы наносим глубокий реминерализующий препарат. В редких случаях в первые 12–24 часа может наблюдаться легкая чувствительность к холодному, которая быстро и бесследно проходит.",
        en: "A deep remineralizing treatment is applied immediately following the session. Mild sensitivity to cold may occasionally occur within the first 12–24 hours, but resolves quickly and completely.",
      },
    },
  ],
  xirurgiya: [
    {
      q: {
        uz: "Aql tishini (8-tish) oldirish necha daqiqa davom etadi va og'riq seziladimi?",
        ru: "Сколько длится удаление зуба мудрости и почувствую ли я боль?",
        en: "How long does wisdom tooth extraction take and will I feel pain?",
      },
      a: {
        uz: "Oddiy aql tishi 5–10 daqiqada, suyak ichida qolib ketgan (retinatsiyalangan) murakkab tishlar esa 20–30 daqiqada olinadi. Ikki bosqichli kuchli anesteziya sababli jarayon davomida 0% og'riq bo'ladi — bemor faqat yengil bosimni his qiladi.",
        ru: "Простое удаление зуба мудрости занимает 5–10 минут, сложное ретинированное — 20–30 минут. Благодаря усиленной анестезии боли нет вообще (0% боли), пациент ощущает лишь легкие прикосновения врача.",
        en: "A standard wisdom tooth extraction takes 5 to 10 minutes, while complex impacted molars take 20 to 30 minutes. Under our reinforced local anesthesia protocol, you feel zero pain (0% pain)—only slight physical pressure.",
      },
    },
    {
      q: {
        uz: "Tish olingandan so'ng yuzda shish va ko'karish bo'lmasligi uchun nima qilinadi?",
        ru: "Что делается для того, чтобы после удаления не было отёка и синяков?",
        en: "How do you prevent post-extraction facial swelling and bruising?",
      },
      a: {
        uz: "Dr. Olimjon atravmatik jarrohlik usulini qo'llaydi — tish atrofidagi suyak bolg'a yoki og'ir asboblar bilan sindirilmaydi, balki mikron aniqlikda bo'laklarga ajratib olinadi. Jarrohlikdan so'ng tish o'rniga maxsus shishga qarshi dori va kollagen gubka qo'yiladi.",
        ru: "Д-р Олимжон применяет атравматичный микрохирургический протокол: окружающая кость челюсти не травмируется. В лунку закладывается гемостатическая коллагеновая губка, способствующая быстрому заживлению без отёков.",
        en: "Dr. Olimjon practices atraumatic micro-surgery: surrounding jawbone is never damaged with heavy force. The socket is treated with a sterile collagen healing sponge and medication to promote rapid, swelling-free healing.",
      },
    },
    {
      q: {
        uz: "Tish ildizi milk ichida sinib qolganda uni qanday chiqarib olinadi?",
        ru: "Как удаляется корень, если зуб сломался глубоко под десной?",
        en: "How is a broken root removed if it snapped beneath the gumline?",
      },
      a: {
        uz: "Avval raqamli viziograf rentgen orqali ildizning egri-bugriligi va chuqurligi aniqlanadi. So'ngra nozik mikro-jarrohlik asboblari yordamida suyak devorlariga tegmasdan ildiz ehtiyotkorlik bilan chiqariladi.",
        ru: "Сначала делается прицельный цифровой снимок для оценки анатомии корня. Затем с помощью микрохирургических инструментов корень бережно извлекается без повреждения костной ткани.",
        en: "First, a high-resolution digital X-ray is captured to assess root curvature and depth. Micro-surgical elevators then gently mobilize the root fragment without sacrificing surrounding bone.",
      },
    },
    {
      q: {
        uz: "Tish oldirgandan so'ng og'izni chayqash mumkinmi va birinchi sutkada nimalar qilish taqiqlanadi?",
        ru: "Можно ли полоскать рот после удаления зуба и что категорически нельзя делать в первые сутки?",
        en: "Can I rinse my mouth after tooth extraction and what is strictly prohibited on day one?",
      },
      a: {
        uz: "Birinchi 24 soatda og'izni kuchli chayqash QAT'IYAN TAQIQLANADI! Tish o'rnida hosil bo'lgan qon laxtasi (tromb) suyakni infeksiyadan himoya qiladi. Agar u chayqab tashlansa, og'riqli «quruq teshik» (alveolit) yuzaga keladi. Shuningdek, issiq hammom, issiq ovqat va ichimliklar, spirt hamda tamakidan 2–3 kun saqlanish zarur.",
        ru: "В первые 24 часа полоскать рот КАТЕГОРИЧЕСКИ НЕЛЬЗЯ! В лунке должен сформироваться кровяной сгусток, защищающий кость от бактерий. При вымывании сгустка развивается болезненный альвеолит. Также в первые дни исключите горячую пищу, баню, физические нагрузки и курение.",
        en: "Vigorous rinsing is STRICTLY PROHIBITED in the first 24 hours! The protective blood clot in the socket shields underlying bone from bacteria. Rinsing it away leads to a painful dry socket (alveolitis). Also avoid hot foods/baths, heavy workouts, alcohol, and smoking for 48 hours.",
      },
    },
  ],
  "rentgen-diagnostika": [
    {
      q: {
        uz: "Raqamli viziograf (rentgen) nurlanishi inson organizmiga xavfli emasmi?",
        ru: "Опасно ли облучение при цифровом рентгене (визиографе)?",
        en: "Is radiation from digital dental radiography (radiovisiography) dangerous?",
      },
      a: {
        uz: "Mutlaqo xavfsiz! Zamonaviy raqamli viziograf eski plyonkali rentgenlarga qaraganda 90% kam nurlanish beradi. 1 ta raqamli tish surati 1–2 soat quyosh ostida yurish yoki samolyotda 10 daqiqa uchish bilan barobar mikro-dozadir.",
        ru: "Абсолютно безопасно! Цифровой радиовизиограф снижает лучевую нагрузку на 90% по сравнению с пленочным рентгеном. Доза одного прицельного снимка сравнима с 1 часом прогулки на свежем воздухе под солнцем.",
        en: "Completely safe! Modern digital radiovisiographs produce up to 90% less radiation than legacy dental film. The exposure of a single digital snapshot is equivalent to just 1–2 hours of everyday natural sunlight.",
      },
    },
    {
      q: {
        uz: "Tish rentgen tasviri qancha vaqtda tayyor bo'ladi?",
        ru: "За какое время готовится цифровой снимок зуба?",
        en: "How quickly is a digital dental X-ray ready?",
      },
      a: {
        uz: "Tasvir bor-yo'g'i 2 soniya ichida kompyuter monitorida yuqori aniqlikda paydo bo'ladi. Hech qanday plyonka quritish yoki kutish talab etilmaydi, bemor darhol o'z tishining ichki holatini ekranda ko'ra oladi.",
        ru: "Снимок высокой четкости появляется на экране монитора всего за 2 секунды. Не нужно ждать проявки пленки — врач и пациент сразу видят состояние корней и каналов на большом дисплее.",
        en: "The crystal-clear diagnostic image appears on the screen in just 2 seconds. No chemical film development or waiting required; both doctor and patient examine root canals and bone structure immediately.",
      },
    },
    {
      q: {
        uz: "Tish davolashda rentgen surati nima uchun shart?",
        ru: "Почему рентгеновский снимок обязателен при лечении зубов?",
        en: "Why is an X-ray essential during dental treatments?",
      },
      a: {
        uz: "Tishning 60% qismi (ildizlari, nerv kanallari va suyak) milk ostida yashiringan bo'ladi. Rentgensiz davolash qorong'uda harakatlanishdek gap. Raqamli viziograf yashirin karies, kanal uzunligi va plomba sifatini 100% nazorat qilish imkonini beradi.",
        ru: "Более 60% анатомии зуба (корни, каналы, связки и окружающая кость) скрыты под десной. Без снимка качественное эндодонтическое лечение невозможно. Визиограф гарантирует 100% контроль качества пломбировки каналов.",
        en: "Over 60% of tooth anatomy (roots, nerve canals, and bone support) is hidden beneath the gumline. Treating root canals without imaging is guesswork. Digital X-rays ensure 100% precision and verification.",
      },
    },
  ],
};
