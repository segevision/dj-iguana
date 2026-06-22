"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const genres = [
  { name: "EDM", nameHe: "אי.די.אם", level: 95, color: "#39FF14", desc: "אנרגיה מקסימלית לרצפת הריקוד" },
  { name: "House", nameHe: "האוס", level: 90, color: "#D4AF37", desc: "גרוב עמוק ומלודי" },
  { name: "Mainstream", nameHe: "מיינסטרים", level: 88, color: "#F0D060", desc: "הלהיטים הגדולים של העולם" },
  { name: "Wedding", nameHe: "חתונה", level: 98, color: "#D4AF37", desc: "מוזיקה מותאמת לכל רגע" },
  { name: "Israeli", nameHe: "ישראלי", level: 92, color: "#39FF14", desc: "מהמוזיקה הישראלית הטובה ביותר" },
  { name: "Custom", nameHe: "מותאם אישית", level: 100, color: "#ffffff", desc: "כל בקשה — כל סגנון" },
];

function EQBar({ active, color }: { active: boolean; color: string }) {
  const bars = 12;
  return (
    <div className="flex items-end gap-[2px] h-8">
      {[...Array(bars)].map((_, i) => {
        const heights = [40, 70, 55, 85, 65, 90, 75, 60, 80, 50, 70, 45];
        return (
          <motion.div
            key={i}
            className="w-[3px] rounded-full"
            style={{ background: active ? color : "rgba(255,255,255,0.15)" }}
            animate={active ? {
              scaleY: [1, heights[i] / 50, 1],
            } : { scaleY: 0.3 }}
            transition={{
              duration: 0.4 + (i % 3) * 0.2,
              repeat: active ? Infinity : 0,
              ease: "easeInOut",
              delay: i * 0.06,
            }}
            initial={false}
          />
        );
      })}
    </div>
  );
}

export default function MusicStyles() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveGenre((prev) => (prev + 1) % genres.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 scale-texture opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-12 h-[2px] bg-gold" />
            <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">סגנונות מוזיקה</span>
            <div className="w-12 h-[2px] bg-gold" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="text-white">הסאונד</span>{" "}
            <span className="text-gradient-gold">שלנו</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Genre List */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-3"
          >
            {genres.map((genre, i) => (
              <motion.div
                key={genre.name}
                className={`glass rounded-xl p-4 cursor-pointer transition-all duration-300 border ${
                  activeGenre === i ? "border-gold/40 bg-gold/5" : "border-white/5 hover:border-white/15"
                }`}
                onClick={() => setActiveGenre(i)}
                whileHover={{ x: -4 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className="font-bold text-base"
                        style={{ color: activeGenre === i ? genre.color : "rgba(255,255,255,0.8)" }}
                      >
                        {genre.nameHe}
                      </span>
                      <span className="text-xs text-white/30 uppercase tracking-widest">{genre.name}</span>
                    </div>
                    <p className="text-xs text-white/40 mt-0.5">{genre.desc}</p>
                  </div>
                  <EQBar active={activeGenre === i} color={genre.color} />
                </div>
                {/* Level bar */}
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: genre.color }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${genre.level}%` } : {}}
                    transition={{ delay: 0.5 + i * 0.1, duration: 1.2, ease: "easeOut" }}
                  />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-white/20">רמת מומחיות</span>
                  <span className="text-xs font-bold" style={{ color: genre.color }}>{genre.level}%</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Vinyl / Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px]">
              {/* Vinyl record */}
              <motion.div
                className="w-full h-full rounded-full border-4 border-gold/20 relative overflow-hidden"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  background: "radial-gradient(circle at center, #1a1a1a 0%, #050505 40%, #111 60%, #050505 100%)",
                }}
              >
                {/* Grooves */}
                {[80, 100, 120, 140, 160].map((r) => (
                  <div
                    key={r}
                    className="absolute rounded-full border border-white/5"
                    style={{
                      width: `${r}px`,
                      height: `${r}px`,
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                ))}
                {/* Gold ring */}
                <div
                  className="absolute rounded-full border-2 border-gold/30"
                  style={{ width: "60%", height: "60%", top: "20%", left: "20%" }}
                />
              </motion.div>

              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className="text-black text-xs font-display leading-tight"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      DJ<br />IGUANA
                    </div>
                  </div>
                </div>
              </div>

              {/* Active genre name overlay */}
              <motion.div
                key={activeGenre}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
              >
                <div
                  className="text-2xl font-display tracking-widest"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", color: genres[activeGenre].color }}
                >
                  {genres[activeGenre].nameHe}
                </div>
              </motion.div>

              {/* Glow */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none transition-all duration-1000"
                style={{ boxShadow: `0 0 60px ${genres[activeGenre].color}30` }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
