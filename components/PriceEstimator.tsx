"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Calculator, MapPin, Users, Music, Info } from "lucide-react";

const eventTypes = [
  { id: "wedding", label: "חתונה", base: 3500, icon: "💍" },
  { id: "bar-mitzvah", label: "בר/בת מצווה", base: 2800, icon: "✡️" },
  { id: "corporate", label: "אירוע חברה", base: 3000, icon: "🏢" },
  { id: "private", label: "אירוע פרטי", base: 2200, icon: "🎉" },
  { id: "festival", label: "פסטיבל", base: 5000, icon: "🎵" },
];

const locations = [
  { id: "center", label: "מרכז", multiplier: 1.0 },
  { id: "north", label: "צפון", multiplier: 1.1 },
  { id: "south", label: "דרום", multiplier: 1.1 },
  { id: "jerusalem", label: "ירושלים", multiplier: 1.05 },
];

const guestRanges = [
  { id: "small", label: "עד 100", multiplier: 0.9 },
  { id: "medium", label: "100–200", multiplier: 1.0 },
  { id: "large", label: "200–400", multiplier: 1.15 },
  { id: "xlarge", label: "400+", multiplier: 1.3 },
];

export default function PriceEstimator() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [eventType, setEventType] = useState("wedding");
  const [location, setLocation] = useState("center");
  const [guests, setGuests] = useState("medium");
  const [showResult, setShowResult] = useState(false);

  const calculate = () => {
    const base = eventTypes.find((e) => e.id === eventType)?.base ?? 3000;
    const locMult = locations.find((l) => l.id === location)?.multiplier ?? 1;
    const guestMult = guestRanges.find((g) => g.id === guests)?.multiplier ?? 1;
    const min = Math.round((base * locMult * guestMult * 0.9) / 100) * 100;
    const max = Math.round((base * locMult * guestMult * 1.2) / 100) * 100;
    return { min, max };
  };

  const { min, max } = calculate();

  return (
    <section id="pricing" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-12 h-[2px] bg-gold" />
            <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">מחשבון מחיר</span>
            <div className="w-12 h-[2px] bg-gold" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="text-white">כמה</span>{" "}
            <span className="text-gradient-gold">עולה?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-white/50 mt-4"
          >
            קבלו הערכת מחיר ראשונית עם המחשבון שלנו
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="glass-gold rounded-3xl p-6 sm:p-8"
        >
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Event Type */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-white/70 mb-3">
                <Music className="w-4 h-4 text-gold" />
                סוג האירוע
              </label>
              <div className="space-y-2">
                {eventTypes.map((e) => (
                  <button
                    key={e.id}
                    onClick={() => { setEventType(e.id); setShowResult(false); }}
                    className={`w-full text-right px-4 py-2.5 rounded-xl text-sm transition-all border flex items-center gap-2 ${
                      eventType === e.id
                        ? "bg-gold/15 border-gold/40 text-gold font-semibold"
                        : "bg-white/5 border-white/5 text-white/60 hover:border-white/20"
                    }`}
                  >
                    <span>{e.icon}</span>
                    {e.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-white/70 mb-3">
                <MapPin className="w-4 h-4 text-gold" />
                אזור
              </label>
              <div className="space-y-2">
                {locations.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => { setLocation(l.id); setShowResult(false); }}
                    className={`w-full text-right px-4 py-2.5 rounded-xl text-sm transition-all border ${
                      location === l.id
                        ? "bg-gold/15 border-gold/40 text-gold font-semibold"
                        : "bg-white/5 border-white/5 text-white/60 hover:border-white/20"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Guests */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-white/70 mb-3">
                <Users className="w-4 h-4 text-gold" />
                מספר אורחים
              </label>
              <div className="space-y-2">
                {guestRanges.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => { setGuests(g.id); setShowResult(false); }}
                    className={`w-full text-right px-4 py-2.5 rounded-xl text-sm transition-all border ${
                      guests === g.id
                        ? "bg-gold/15 border-gold/40 text-gold font-semibold"
                        : "bg-white/5 border-white/5 text-white/60 hover:border-white/20"
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Calculate Button */}
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(212,175,55,0.5)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowResult(true)}
            className="w-full py-4 bg-gold text-black font-bold rounded-2xl text-lg hover:bg-gold-light transition-all flex items-center justify-center gap-3"
          >
            <Calculator className="w-5 h-5" />
            חשבו הערכת מחיר
          </motion.button>

          {/* Result */}
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="mt-6 text-center"
            >
              <div className="glass rounded-2xl p-6 border border-gold/20">
                <div className="text-white/60 text-sm mb-2">הערכת מחיר לאירוע שלכם</div>
                <div
                  className="font-display text-5xl sm:text-6xl text-gradient-gold mb-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  ₪{min.toLocaleString()} – ₪{max.toLocaleString()}
                </div>
                <div className="flex items-start gap-2 text-white/40 text-xs mt-4 bg-white/5 rounded-xl p-3 text-right">
                  <Info className="w-4 h-4 text-gold/50 shrink-0 mt-0.5" />
                  <span>
                    מחיר סופי יינתן לאחר שיחה אישית. המחיר תלוי במספר גורמים כולל שעות האירוע,
                    ציוד נדרש, ומיקום מדויק.
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="mt-5 px-8 py-3 bg-gold text-black font-bold rounded-full hover:bg-gold-light transition-all"
                >
                  קבלו הצעת מחיר מפורטת
                </motion.button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
