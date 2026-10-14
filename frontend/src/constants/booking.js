/**
 * MedInson Stomatolog Relay Server configuration for Dr. Olimjon Murzajanov (Sevdo Denta).
 *
 *   GET  `${API_URL}/api/public/booking/availability?site=ejqm8bufs5`
 *   POST `${API_URL}/api/public/booking/request?site=ejqm8bufs5`
 */

export const MEDINSON_API_URL = (
  import.meta.env.VITE_MEDINSON_API_URL || "https://dentist-medinson-license.uz"
).replace(/\/+$/, "");

export const MEDINSON_SITE_ID =
  import.meta.env.VITE_MEDINSON_SITE_ID || "ejqm8bufs5";

export const MEDINSON_DOMAIN =
  import.meta.env.VITE_MEDINSON_DOMAIN || "dentist-olimjon.uz";
