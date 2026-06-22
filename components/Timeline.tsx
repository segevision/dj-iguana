"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    year: "2012",
    title: "ההתחלה",
    desc: "התחיל את הדרך המוזיקלית. אהבה ממבט ראשון לטכנולוגיה ומוזיקה.",
    color: "#D4AF37",
  },
  {
    year: "2015",
    title: "האירוע הגדול הראשון",
    desc: "חתונה של 500 איש בתל אביב. הצלחה מסחררת שהביאה לגל הפניות.",
    color: "#39FF14",
  },
  {
    year: "2017",
    title: "100 חתונות",
    desc: "הגיע לאבן דרך של 100 חתונות. שם עבורו כ-DJ מוביל לחתונות.",
    color: "#D4AF37",
  },
  {
    year: "2019",
    title: "פסטיבלים",
    desc: "עלה לבמות הפסטיבלים הגדולים בישראל. אנרגיה חדשה, קהל חדש.",
    color: "#39FF14",
  },
  {
    year: "2021",
    title: "DJ Iguana Brand",
    desc: "השקת המותג הרשמי. לוגו, זהות ויזואלית, ונוכחות דיגיטלית מלאה.",
    color: "#D4AF37",
  },
  {
    year: "2024",
    title: "300+ חתונות",
    desc: "מעל 300 חתונות ו-500 אירועים. המקום הבלתי מעורער בתודעה הישראלית.",
    color: "#39FF14",
  },
];

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-12 h-[2px] bg-gold" />
            <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">הדרך שלנו</span>
            <div className="w-12 h-[2px] bg-gold" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="text-white">ציר</span>{" "}
            <span className="text-gradient-gold">הזמן</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute right-1/2 translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-gold via-green-400 to-gold"
            initial={{ scaleY: 0, transformOrigin: "top" }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            style={{ height: "100%", background: "linear-gradient(to bottom, #D4AF37, #39FF14, #D4AF37)" }}
          />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.15 }}
                className={`relative flex items-center ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                {/* Card */}
                <div
                  className={`w-[45%] glass-gold rounded-xl p-5 ${i % 2 === 0 ? "ml-0" : "mr-0"} hover:border-gold/40 transition-all group`}
                >
                  <div
                    className="text-3xl font-display mb-1"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", color: m.color }}
                  >
                    {m.year}
                  </div>
                  <div className="text-white font-bold mb-2">{m.title}</div>
                  <div className="text-white/55 text-sm leading-relaxed">{m.desc}</div>
                </div>

                {/* Center dot */}
                <motion.div
                  className="absolute right-1/2 translate-x-1/2 w-4 h-4 rounded-full border-2 z-10"
                  style={{ borderColor: m.color, background: "#050505" }}
                  animate={{ scale: [1, 1.3, 1], boxShadow: [`0 0 0px ${m.color}00`, `0 0 15px ${m.color}80`, `0 0 0px ${m.color}00`] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
