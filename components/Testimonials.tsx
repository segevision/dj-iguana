"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play, Star } from "lucide-react";

const videos = [
  { id: 1, name: "שירה ויונתן", event: "חתונה · תל אביב 2024", youtubeId: null },
  { id: 2, name: "מיכאל ודנה", event: "בר מצווה · ירושלים 2024", youtubeId: null },
  { id: 3, name: "חברת TechVision", event: "ערב חברה 2023", youtubeId: null },
];

const reviews = [
  {
    name: "שירה לוי",
    event: "חתונה · מרץ 2024",
    rating: 5,
    text: "DJ Iguana הפך את החתונה שלנו לחלום. המוזיקה הייתה מושלמת מהרגע הראשון ועד הריקוד האחרון. כל האורחים המשיכו לדבר על זה שבועות אחרי!",
    avatar: "ש",
  },
  {
    name: "יונתן כהן",
    event: "בר מצווה · אפריל 2024",
    rating: 5,
    text: "מקצועיות ברמה הגבוהה ביותר. ניסים הבין בדיוק מה אנחנו רוצים ועל אחת כמה וכמה מה שהילד רצה. ממליץ בחום לכל אחד!",
    avatar: "י",
  },
  {
    name: "נועה ברק",
    event: "אירוע חברה · ינואר 2024",
    rating: 5,
    text: "ערב החברה שלנו היה מדהים בזכות DJ Iguana. הצוות לא הפסיק לרקוד כל הלילה. בהחלט נחזור לאירוע הבא!",
    avatar: "נ",
  },
  {
    name: "דוד וסוזי מזרחי",
    event: "חתונה · יוני 2023",
    rating: 5,
    text: "כבר 6 חודשים אנחנו מקבלים מחמאות על המוזיקה בחתונה. ניסים הוא אמן אמיתי שיודע לקרוא את האנרגיה של הקהל.",
    avatar: "ד",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none blur-[100px]" style={{ background: "rgba(57,255,20,0.04)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Video Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <div className="w-12 h-[2px] bg-gold" />
              <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">ביקורות וידאו</span>
              <div className="w-12 h-[2px] bg-gold" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-display text-5xl sm:text-6xl leading-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="text-white">הם</span>{" "}
              <span className="text-gradient-gold">מספרים</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15 }}
                className="group relative rounded-2xl glass-gold aspect-video flex items-center justify-center cursor-pointer overflow-hidden"
                whileHover={{ y: -4 }}
              >
                {/* BG pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-gold/5" />
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, rgba(212,175,55,0.2) 0px, rgba(212,175,55,0.2) 1px, transparent 1px, transparent 8px)`,
                  }}
                />

                {/* Play button */}
                <div className="relative z-10 text-center">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gold/20 border-2 border-gold/40 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play className="w-7 h-7 text-gold mr-[-3px]" fill="currentColor" />
                  </motion.div>
                  <div className="text-white font-semibold text-sm">{video.name}</div>
                  <div className="text-white/40 text-xs mt-1">{video.event}</div>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-3 right-3 text-xs text-gold/40 font-medium tracking-widest">VIDEO</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Written Reviews */}
        <div>
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="font-display text-5xl sm:text-6xl leading-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="text-white">מה</span>{" "}
              <span className="text-gradient-gold">אומרים עלינו</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="glass-gold rounded-2xl p-6 hover:border-gold/40 transition-all group"
                whileHover={{ y: -3 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>

                {/* Quote mark */}
                <div
                  className="text-6xl text-gold/20 leading-none font-display mb-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  &ldquo;
                </div>

                <p className="text-white/70 leading-relaxed text-sm mb-5">{review.text}</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center text-gold font-bold text-sm">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{review.name}</div>
                    <div className="text-white/40 text-xs">{review.event}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Overall rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2 }}
            className="mt-10 text-center"
          >
            <div className="inline-flex items-center gap-4 glass-gold rounded-full px-8 py-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>
              <div>
                <span className="text-2xl font-bold text-white">4.9</span>
                <span className="text-white/50 text-sm mr-2">/ 5</span>
              </div>
              <div className="w-[1px] h-6 bg-white/10" />
              <div className="text-white/60 text-sm">מבוסס על 200+ ביקורות</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
