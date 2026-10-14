/**
 * Single source of truth for the public route table.
 *
 * Consumed by:
 *   - scripts/generate-sitemap.mjs (writes dist/sitemap.xml after `vite build`)
 *   - scripts/prerender.mjs        (renders each route × language to static HTML)
 *
 * `image.src` is a project-relative path (`src/assets/...` or `public/...`)
 * that the sitemap generator resolves to its final `/assets/<name>-<hash>.ext`
 * URL via Vite's build manifest. That way a renamed or re-hashed image fails
 * the build loudly instead of silently rotting in sitemap.xml.
 */

export const SITE_ORIGIN = "https://dentist-olimjon.uz";

export const LANGS = ["uz", "ru", "en"];
export const DEFAULT_LANG = "uz";

/** Turn a canonical (Uzbek) path into its equivalent in `lang`. */
export const localizePath = (routePath = "/", lang = DEFAULT_LANG) => {
  const clean = routePath.startsWith("/") ? routePath : `/${routePath}`;
  if (lang === DEFAULT_LANG) return clean;
  return clean === "/" ? `/${lang}` : `/${lang}${clean}`;
};

export const ROUTES = [
  {
    path: "/",
    changefreq: "weekly",
    priority: "1.0",
    image: {
      src: "public/dr_olimjon_branded.webp",
      title: "Dr. Olimjon Murzajanov — Stomatolog va Ortoped Andijon (Sevdo Denta)",
      caption:
        "Andijon shahridagi Sevdo Denta klinikasi stomatolog-ortopedi va terapevti Dr. Olimjon Murzajanov",
    },
  },
  {
    path: "/services",
    changefreq: "weekly",
    priority: "0.9",
    image: {
      src: "src/assets/clinic_room.webp",
      title: "Stomatologik Xizmatlar — Sevdo Denta Andijon",
      caption:
        "Og'riqsiz tish davolash, tsirkoniy karonka, E-max vinirlar, tish implantatsiyasi va lazerli oqartirish",
    },
  },
  {
    path: "/about",
    changefreq: "monthly",
    priority: "0.9",
    image: {
      src: "public/dr_olimjon_portrait.webp",
      title: "Dr. Olimjon Murzajanov — 5+ Yillik Tajribaga Ega Stomatolog va Ortoped",
      caption: "5+ yillik klinik tajriba va 1,000+ dan ortiq muvaffaqiyatli davolangan mamnun bemorlar",
    },
  },
  {
    path: "/contact",
    changefreq: "monthly",
    priority: "0.85",
  },
  {
    path: "/booking",
    changefreq: "weekly",
    priority: "0.85",
  },
  {
    path: "/qabul",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/services/tish-davolash",
    changefreq: "monthly",
    priority: "0.8",
    image: {
      src: "src/assets/clinic_room.webp",
      title: "Og'riqsiz Tish Davolash va Endodontiya — Andijon",
      caption: "Karies, pulpit va tish kanallarini 100% og'riqsiz davolash",
    },
  },
  {
    path: "/services/estetik-stomatologiya",
    changefreq: "monthly",
    priority: "0.8",
    image: {
      src: "src/assets/hero_smile.webp",
      title: "Estetik Stomatologiya va E-max Keramik Vinirlar — Andijon",
      caption: "Gollivud tabassumi va badiiy restavratsiya",
    },
  },
  {
    path: "/services/ortopediya",
    changefreq: "monthly",
    priority: "0.8",
    image: {
      src: "src/assets/hero_3d_tooth.webp",
      title: "Ortopedik Stomatologiya va Tsirkoniy Koronkalar — Andijon",
      caption: "Tsirkoniy (Zirconia) va E-max keramik tish qoplamalari",
    },
  },
  {
    path: "/services/implantatsiya",
    changefreq: "monthly",
    priority: "0.8",
    image: {
      src: "src/assets/treatment_implant.webp",
      title: "Tish Implantatsiyasi (Osstem, Straumann) — Andijon",
      caption: "Yo'qotilgan tishlarni qo'shni tishlarni charxlamasdan qayta tiklash",
    },
  },
  {
    path: "/services/tish-oqartirish",
    changefreq: "monthly",
    priority: "0.8",
    image: {
      src: "src/assets/treatment_whitening.webp",
      title: "Philips ZOOM 4 Lazerli Tish Oqartirish va AirFlow — Andijon",
      caption: "Tish emaliga zarar yetkazmasdan 8-10 tongacha oqartirish",
    },
  },
  {
    path: "/services/xirurgiya",
    changefreq: "monthly",
    priority: "0.75",
    image: {
      src: "src/assets/treatment_surgery.webp",
      title: "Og'riqsiz Tish Olish va Jarrohlik Stomatologiyasi — Andijon",
      caption: "Aql tishlari va murakkab tishlarni atravmatik og'riqsiz olish",
    },
  },
  {
    path: "/services/rentgen-diagnostika",
    changefreq: "monthly",
    priority: "0.75",
    image: {
      src: "src/assets/hero_3d_tooth.webp",
      title: "Raqamli 3D Rentgen va Viziografiya Diagnostikasi — Andijon",
      caption: "90% kam nurlanishli zamonaviy raqamli tish rentgeni",
    },
  },
];
