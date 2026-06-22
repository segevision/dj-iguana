"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Music, Users, Star } from "lucide-react";

const stats = [
  { value: "12+", label: "שנות ניסיון", icon: Award },
  { value: "500+", label: "אירועים", icon: Music },
  { value: "300+", label: "חתונות", icon: Users },
  { value: "4.9★", label: "דירוג ממוצע", icon: Star },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 scale-texture opacity-40" />
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-green-400/5 blur-3xl pointer-events-none" style={{ backgroundColor: "rgba(57,255,20,0.05)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-12 h-[2px] bg-gold" />
          <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">הסיפור שלי</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2
              className="font-display text-5xl sm:text-6xl md:text-7xl leading-none mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="text-white">מי זה</span>{" "}
              <span className="text-gradient-gold">DJ Iguana</span>
            </h2>

            <div className="space-y-5 text-white/70 leading-relaxed">
              <p className="text-lg">
                ניסים שגב, הידוע בשם <strong className="text-gold font-semibold">DJ Iguana</strong>, הוא אחד
                הדיג&apos;יים המבוקשים בישראל. עם למעלה מ-12 שנות ניסיון בתחום המוזיקה החיה, ניסים מביא
                אנרגיה ייחודית לכל אירוע.
              </p>
              <p>
                הדרך שלו למוזיקה התחילה בגיל 16, כשגילה שמוזיקה יכולה לחבר אנשים בצורה שמילים לא יכולות.
                היום, לאחר מאות אירועים ברחבי הארץ, ניסים ממשיך לחדש ולהפתיע עם כל סט.
              </p>
              <p>
                מחתונות אינטימיות ועד פסטיבלים של אלפי איש, מאירועי חברות יוקרתיים ועד מסיבות פרטיות
                — DJ Iguana מספק חוויה מוזיקלית שלא תישכח.
              </p>
              <p>
                הסגנון המוזיקלי שלו נע בין{" "}
                <strong className="text-white">EDM, House, Mainstream</strong> ומוזיקה ישראלית עכשווית,
                תמיד מותאם לקהל ולאווירה הייחודית של כל אירוע.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212,175,55,0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-8 px-8 py-4 bg-gold text-black font-bold rounded-full hover:bg-gold-light transition-all"
            >
              בואו נדבר
            </motion.button>
          </motion.div>

          {/* Image + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Photo Placeholder */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] glass-gold">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-3">
                  {/* Animated EQ visualization */}
                  <div className="flex items-end justify-center gap-1.5 h-20 mb-4">
                    {[60, 80, 95, 70, 85, 55, 90, 65, 75, 88].map((h, i) => (
                      <motion.div
                        key={i}
                        className="w-2 rounded-full"
                        style={{
                          height: `${h}%`,
                          background: i % 2 === 0
                            ? "linear-gradient(to top, #D4AF37, #F0D060)"
                            : "linear-gradient(to top, #39FF14, #1aad08)",
                        }}
                        animate={{ scaleY: [1, Math.random() * 0.4 + 0.6, 1] }}
                        transition={{
                          duration: 0.5 + Math.random() * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                  <div
                    className="text-5xl font-display text-gradient-gold"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    DJ IGUANA
                  </div>
                  <div className="text-white/40 text-sm tracking-widest">ניסים שגב</div>
                </div>
              </div>
              {/* Corner accents */}
              <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-gold/40 rounded-tr-lg" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-gold/40 rounded-bl-lg" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="glass-gold rounded-xl p-4 text-center group hover:border-gold/40 transition-all"
                  >
                    <Icon className="w-5 h-5 text-gold mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl font-bold text-gradient-gold">{stat.value}</div>
                    <div className="text-xs text-white/50 mt-1">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
