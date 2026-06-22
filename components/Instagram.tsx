"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram as InstagramIcon, Play, Heart, MessageCircle } from "lucide-react";

const posts = [
  { id: 1, type: "reel", label: "חתונה מטורפת בגליל", likes: "2.4K", comments: "89", gradient: "from-gold/30 to-gold/5" },
  { id: 2, type: "post", label: "סט לייב | חתונה 2024", likes: "1.8K", comments: "64", gradient: "from-green-500/30 to-green-500/5" },
  { id: 3, type: "reel", label: "Behind the scenes", likes: "3.1K", comments: "127", gradient: "from-gold/25 to-gold/5" },
  { id: 4, type: "post", label: "Setup Day | Tel Aviv", likes: "956", comments: "42", gradient: "from-green-500/20 to-green-500/5" },
  { id: 5, type: "reel", label: "חתונה | חיפה 2024", likes: "2.7K", comments: "103", gradient: "from-gold/20 to-gold/5" },
  { id: 6, type: "post", label: "Festival Vibes 🔥", likes: "4.2K", comments: "218", gradient: "from-green-500/25 to-green-500/5" },
];

export default function Instagram() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 scale-texture opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-12 h-[2px] bg-gold" />
            <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">אינסטגרם</span>
            <div className="w-12 h-[2px] bg-gold" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="text-white">עקבו</span>{" "}
            <span className="text-gradient-gold">אחרינו</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-2 mt-4"
          >
            <InstagramIcon className="w-5 h-5 text-gold" />
            <a
              href="https://instagram.com/djiguana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors font-medium"
            >
              @djiguana
            </a>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className={`group relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-gradient-to-br ${post.gradient} glass-gold`}
              whileHover={{ scale: 1.02 }}
            >
              {/* Pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `repeating-linear-gradient(45deg, rgba(212,175,55,0.2) 0px, rgba(212,175,55,0.2) 1px, transparent 1px, transparent 6px)`,
                }}
              />

              {/* Reel indicator */}
              {post.type === "reel" && (
                <div className="absolute top-2 left-2 bg-black/60 rounded-lg px-2 py-1 flex items-center gap-1 z-10">
                  <Play className="w-3 h-3 text-white fill-white" />
                  <span className="text-[10px] text-white font-medium">REEL</span>
                </div>
              )}

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-10 h-10 rounded-full bg-black/30 border border-white/20 flex items-center justify-center"
                  whileHover={{ scale: 1.2 }}
                >
                  {post.type === "reel"
                    ? <Play className="w-5 h-5 text-white fill-white" />
                    : <InstagramIcon className="w-5 h-5 text-white" />
                  }
                </motion.div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                <div className="flex items-center gap-4 text-white text-sm font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Heart className="w-4 h-4 fill-current" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4" />
                    {post.comments}
                  </span>
                </div>
                <div className="text-xs text-white/70 text-center px-4">{post.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center mt-10"
        >
          <motion.a
            href="https://instagram.com/djiguana"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212,175,55,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-gold/40 text-gold font-bold rounded-full hover:bg-gold/10 transition-all"
          >
            <InstagramIcon className="w-5 h-5" />
            עקבו אחרי DJ Iguana
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
