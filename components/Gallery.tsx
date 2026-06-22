"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

const galleryItems = [
  { id: 1, label: "חתונה · תל אביב", aspect: "aspect-square", colSpan: "col-span-1", gradient: "from-gold/30 to-gold/5" },
  { id: 2, label: "פסטיבל 2024", aspect: "aspect-[3/4]", colSpan: "col-span-1 row-span-2", gradient: "from-green-500/30 to-green-500/5" },
  { id: 3, label: "אירוע חברה", aspect: "aspect-[4/3]", colSpan: "col-span-1", gradient: "from-gold/20 to-gold/5" },
  { id: 4, label: "בר מצווה", aspect: "aspect-[4/3]", colSpan: "col-span-1", gradient: "from-green-500/20 to-green-500/5" },
  { id: 5, label: "חתונה · ירושלים", aspect: "aspect-square", colSpan: "col-span-1", gradient: "from-gold/25 to-gold/5" },
  { id: 6, label: "מסיבת סוף שנה", aspect: "aspect-[4/3]", colSpan: "col-span-1", gradient: "from-green-500/25 to-green-500/5" },
];

function GalleryPlaceholder({ item, onClick }: {
  item: typeof galleryItems[0];
  onClick: () => void;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`relative cursor-pointer overflow-hidden rounded-xl glass-gold group ${item.colSpan}`}
      onClick={onClick}
    >
      <div className={`w-full h-full min-h-[200px] bg-gradient-to-br ${item.gradient} flex items-center justify-center relative`}>
        {/* Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, rgba(212,175,55,0.1) 0px, rgba(212,175,55,0.1) 1px, transparent 1px, transparent 10px)`,
          }}
        />
        {/* Content */}
        <div className="relative text-center space-y-2">
          <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center mx-auto">
            <ZoomIn className="w-5 h-5 text-gold/60" />
          </div>
          <div className="text-xs text-white/40">{item.label}</div>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="glass rounded-full px-4 py-2 flex items-center gap-2 text-gold text-sm font-medium">
            <ZoomIn className="w-4 h-4" />
            הגדלה
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevItem = () => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : 0));
  const nextItem = () => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryItems.length : 0));

  return (
    <section id="gallery" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 scale-texture opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-12 h-[2px] bg-gold" />
            <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">גלריה</span>
            <div className="w-12 h-[2px] bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="text-white">הרגעים</span>{" "}
            <span className="text-gradient-gold">שלנו</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-white/50 mt-4 max-w-xl mx-auto"
          >
            כל תמונה מספרת סיפור. כל רגע — נשמר לנצח.
          </motion.p>
        </div>

        {/* Masonry Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]"
        >
          {galleryItems.map((item, i) => (
            <GalleryPlaceholder
              key={item.id}
              item={item}
              onClick={() => openLightbox(i)}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <p className="text-white/40 text-sm">רוצים לראות יותר? עקבו אחרינו באינסטגרם</p>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button className="absolute top-4 right-4 w-10 h-10 glass rounded-full flex items-center justify-center text-white/60 hover:text-white z-10">
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="w-full max-w-2xl aspect-video glass-gold rounded-2xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center space-y-3">
                <div
                  className="text-4xl font-display text-gradient-gold"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {galleryItems[lightboxIndex]?.label}
                </div>
                <div className="text-white/30 text-sm">תמונה {lightboxIndex + 1} מתוך {galleryItems.length}</div>
              </div>
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); prevItem(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center text-white/60 hover:text-gold transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextItem(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center text-white/60 hover:text-gold transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
