"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Calendar, X } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  if (!visible || dismissed) {
    return (
      <AnimatePresence>
        {visible && !dismissed && null}
      </AnimatePresence>
    );
  }

  return (
    <div className="fixed bottom-6 left-4 sm:left-6 z-40 flex flex-col items-start gap-3">
      {/* Expanded options */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="flex flex-col gap-2"
          >
            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/972500000000?text=%D7%94%D7%99%D7%99%20%D7%A0%D7%99%D7%A1%D7%99%D7%9D!"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 4 }}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl text-white text-sm font-medium shadow-lg"
              style={{ background: "#25D366" }}
            >
              <MessageCircle className="w-5 h-5" />
              <span>שלח הודעה ב-WhatsApp</span>
            </motion.a>

            {/* Check availability */}
            <motion.button
              whileHover={{ scale: 1.05, x: 4 }}
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                setExpanded(false);
              }}
              className="flex items-center gap-3 px-4 py-3 bg-gold text-black rounded-2xl text-sm font-bold shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              <span>בדקו זמינות לאירוע</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <div className="flex items-center gap-2">
        {expanded && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => setDismissed(true)}
            className="w-8 h-8 rounded-full glass border border-white/20 flex items-center justify-center text-white/60 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </motion.button>
        )}
        <motion.button
          onClick={() => setExpanded(!expanded)}
          className="w-14 h-14 rounded-full bg-gold flex items-center justify-center shadow-lg hover:bg-gold-light transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={expanded ? {} : { scale: [1, 1.05, 1] }}
          transition={expanded ? {} : { duration: 2, repeat: Infinity }}
          style={{ boxShadow: "0 0 30px rgba(212,175,55,0.5)" }}
        >
          {expanded
            ? <X className="w-6 h-6 text-black" />
            : <MessageCircle className="w-6 h-6 text-black" />
          }
        </motion.button>
      </div>
    </div>
  );
}
