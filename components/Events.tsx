"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, Briefcase, Music2, ArrowLeft } from "lucide-react";

const events = [
  {
    id: 1,
    title: "חתונות",
    titleEn: "Weddings",
    description: "הרגע המיוחד ביותר בחייכם מגיע עם הפסקול המושלם. DJ Iguana יוצר אווירה קסומה שתישמר בזיכרון לנצח.",
    icon: Heart,
    color: "#D4AF37",
    features: ["מוזיקה מותאמת אישית", "שיר הכניסה לחופה", "ריקודים", "שיר ריקוד ראשון"],
    gradient: "from-gold/20 to-gold/5",
    borderColor: "border-gold/20",
    hoverBorder: "hover:border-gold/50",
  },
  {
    id: 2,
    title: "אירועים פרטיים",
    titleEn: "Private Events",
    description: "בר/בת מצווה, יום הולדת, מסיבות ועוד. כל אירוע פרטי מקבל את הסאונד המושלם לקהל הספציפי שלו.",
    icon: Users,
    color: "#39FF14",
    features: ["בר/בת מצווה", "ימי הולדת", "מסיבות", "אירועים משפחתיים"],
    gradient: "from-green-500/20 to-green-500/5",
    borderColor: "border-green-500/20",
    hoverBorder: "hover:border-green-500/50",
  },
  {
    id: 3,
    title: "אירועי חברות",
    titleEn: "Corporate Events",
    description: "אירועי חברה, כנסים, השקות מוצרים ומסיבות סוף שנה. מוזיקה מקצועית שמחברת צוותים.",
    icon: Briefcase,
    color: "#D4AF37",
    features: ["ערבי חברה", "השקות מוצר", "כנסים", "מסיבות סוף שנה"],
    gradient: "from-gold/20 to-gold/5",
    borderColor: "border-gold/20",
    hoverBorder: "hover:border-gold/50",
  },
  {
    id: 4,
    title: "פסטיבלים",
    titleEn: "Festivals",
    description: "מבמות גדולות ועד פסטיבלים אינטימיים. DJ Iguana יודע להרים קהל ולייצר אנרגיה בלתי נשכחת.",
    icon: Music2,
    color: "#39FF14",
    features: ["פסטיבלי מוזיקה", "מסיבות פתוח", "קלאבינג", "סטים מיוחדים"],
    gradient: "from-green-500/20 to-green-500/5",
    borderColor: "border-green-500/20",
    hoverBorder: "hover:border-green-500/50",
  },
];

export default function Events() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-12 h-[2px] bg-gold" />
            <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">אירועים</span>
            <div className="w-12 h-[2px] bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl leading-none text-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            לכל רגע{" "}
            <span className="text-gradient-gold">הסאונד</span>
            <br />
            <span className="text-gradient-gold">המושלם</span>
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, i) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.15 }}
                className={`group relative rounded-2xl border ${event.borderColor} ${event.hoverBorder} bg-gradient-to-br ${event.gradient} p-6 lg:p-8 cursor-pointer transition-all duration-500 overflow-hidden`}
                whileHover={{ y: -4 }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                  style={{ background: `radial-gradient(circle at 50% 50%, ${event.color}15, transparent 70%)` }}
                />

                <div className="relative z-10">
                  {/* Icon + Title */}
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border"
                        style={{ borderColor: `${event.color}30`, background: `${event.color}15` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: event.color }} />
                      </div>
                      <h3
                        className="font-display text-4xl leading-none mb-1"
                        style={{ fontFamily: "'Bebas Neue', sans-serif", color: event.color }}
                      >
                        {event.title}
                      </h3>
                      <span className="text-xs tracking-widest text-white/30 uppercase">{event.titleEn}</span>
                    </div>
                    <motion.div
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold/40 group-hover:bg-gold/10 transition-all"
                      whileHover={{ rotate: 45 }}
                    >
                      <ArrowLeft className="w-4 h-4 text-white/30 group-hover:text-gold transition-colors rtl-flip" />
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed mb-5">{event.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {event.features.map((f) => (
                      <span
                        key={f}
                        className="px-3 py-1 rounded-full text-xs border"
                        style={{
                          borderColor: `${event.color}25`,
                          background: `${event.color}10`,
                          color: event.color,
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Large background number */}
                <div
                  className="absolute bottom-4 left-4 font-display text-[100px] leading-none opacity-[0.04] pointer-events-none select-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {String(event.id).padStart(2, "0")}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-white/50 mb-4">לא רואים את האירוע שלכם? אנחנו מתאימים לכל סוג אירוע</p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212,175,55,0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-gold text-black font-bold rounded-full hover:bg-gold-light transition-all"
          >
            צרו קשר עכשיו
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
