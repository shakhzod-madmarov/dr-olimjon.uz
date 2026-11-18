/**
 * Analytics & Conversion Goals tracking
 * Primary provider: Yandex.Metrika (Counter ID: 114330504)
 */

export const YM_COUNTER_ID = 114330504;

/**
 * Trigger a Yandex.Metrika conversion goal (reachGoal)
 * @param {string} target - Goal target name (e.g. 'booking_submit', 'phone_click', 'telegram_click')
 * @param {object} [params] - Optional extra parameters
 */
export const reachYmGoal = (target, params = {}) => {
  if (typeof window !== "undefined" && typeof window.ym === "function") {
    try {
      window.ym(YM_COUNTER_ID, "reachGoal", target, params);
    } catch {
      // fail-safe
    }
  }
};
