import { useState, useRef, useCallback } from "react";
import { useLanguage } from "../context/LanguageContext";
import { getA11yLabels } from "../constants/a11yLabels";

const clamp = (n) => Math.max(0, Math.min(100, n));

const BeforeAfterSlider = ({
  beforeImg,
  afterImg,
  beforeLabel,
  afterLabel,
  title,
  subtitle,
}) => {
  const { lang } = useLanguage();
  const a11y = getA11yLabels(lang);
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const defaultBefore =
    beforeLabel ||
    (lang === "uz" ? "Oldin" : lang === "ru" ? "До лечения" : "Before");
  const defaultAfter =
    afterLabel ||
    (lang === "uz" ? "Keyin" : lang === "ru" ? "После лечения" : "After");

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  }, []);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const handleKeyDown = (e) => {
    const step = e.shiftKey ? 10 : 5;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      setSliderPos((p) => clamp(p - step));
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      setSliderPos((p) => clamp(p + step));
    } else if (e.key === "Home") {
      e.preventDefault();
      setSliderPos(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setSliderPos(100);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-3 sm:p-4 border border-slate-200/80 shadow-luxury transition-all hover:shadow-luxury-lg">
      {/* Interactive Image Comparison Area */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden select-none cursor-ew-resize touch-pan-y bg-slate-900"
      >
        {/* AFTER Image (Full Background) */}
        <img
          src={afterImg}
          alt={title ? `${title} — ${defaultAfter}` : defaultAfter}
          width={900}
          height={600}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          draggable={false}
        />

        {/* BEFORE Image (Clipped by sliderPos) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img
            src={beforeImg}
            alt={title ? `${title} — ${defaultBefore}` : defaultBefore}
            width={900}
            height={600}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Labels */}
        <span className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-slate-950/75 backdrop-blur-xs text-white text-[11px] font-bold uppercase tracking-wider">
          {defaultBefore}
        </span>
        <span className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full bg-[#122d52]/90 backdrop-blur-xs text-white text-[11px] font-bold uppercase tracking-wider">
          {defaultAfter}
        </span>

        {/* Divider Line & Handle */}
        <div
          className="absolute top-0 bottom-0 z-20 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)]"
          style={{ left: `${sliderPos}%` }}
        >
          <div
            role="slider"
            tabIndex={0}
            aria-label={title ? `${a11y.beforeAfterSlider}: ${title}` : a11y.beforeAfterSlider}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(sliderPos)}
            onKeyDown={handleKeyDown}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-[#122d52] shadow-xl border-2 border-[#122d52] flex items-center justify-center font-extrabold text-xs focus:outline-none focus:ring-2 focus:ring-amber-300"
          >
            ↔
          </div>
        </div>
      </div>

      {/* Caption Footer */}
      {(title || subtitle) && (
        <div className="pt-3.5 px-2 flex items-center justify-between gap-2">
          <div>
            {title && (
              <h3 className="text-base font-extrabold text-slate-900">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>
            )}
          </div>
          <span className="text-[11px] font-bold text-[#122d52] bg-blue-50 px-3 py-1 rounded-full shrink-0">
            {lang === "uz"
              ? "Surib ko'ring"
              : lang === "ru"
              ? "Потяните"
              : "Drag slider"}
          </span>
        </div>
      )}
    </div>
  );
};

export default BeforeAfterSlider;
