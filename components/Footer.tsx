"use client";

import { motion } from "framer-motion";
import { Music, Instagram, Phone, Mail, MessageCircle, Heart } from "lucide-react";

const footerLinks = [
  { label: "בית", href: "#hero" },
  { label: "אודות", href: "#about" },
  { label: "אירועים", href: "#events" },
  { label: "גלריה", href: "#gallery" },
  { label: "ביקורות", href: "#reviews" },
  { label: "מחירים", href: "#pricing" },
  { label: "צור קשר", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center bg-gold/10">
                <Music className="w-5 h-5 text-gold" />
              </div>
              <div>
                <div
                  className="font-display text-xl tracking-widest text-gradient-gold"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  DJ IGUANA
                </div>
                <div className="text-[9px] text-white/30 tracking-[0.3em] uppercase">ניסים שגב</div>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              מוזיקה שיוצרת רגעים בלתי נשכחים. DJ מקצועי לחתונות ואירועים יוקרתיים ברחבי ישראל.
            </p>
            <div className="flex items-center gap-3">
              <motion.a
                href="https://instagram.com/djiguana"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#D4AF37" }}
                className="w-9 h-9 rounded-full glass border border-white/10 flex items-center justify-center text-white/50 hover:border-gold/30 hover:text-gold transition-all"
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://wa.me/972500000000"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-9 h-9 rounded-full glass border border-white/10 flex items-center justify-center text-white/50 hover:border-green-500/30 hover:text-green-400 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="tel:+972500000000"
                whileHover={{ scale: 1.1 }}
                className="w-9 h-9 rounded-full glass border border-white/10 flex items-center justify-center text-white/50 hover:border-gold/30 hover:text-gold transition-all"
              >
                <Phone className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">ניווט מהיר</h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-right text-sm text-white/40 hover:text-gold transition-colors py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">צור קשר</h4>
            <div className="space-y-3">
              <a href="tel:+972500000000" className="flex items-center gap-3 text-sm text-white/40 hover:text-gold transition-colors group">
                <Phone className="w-4 h-4 text-gold/50 group-hover:text-gold transition-colors" />
                050-000-0000
              </a>
              <a href="mailto:info@djiguana.co.il" className="flex items-center gap-3 text-sm text-white/40 hover:text-gold transition-colors group">
                <Mail className="w-4 h-4 text-gold/50 group-hover:text-gold transition-colors" />
                info@djiguana.co.il
              </a>
              <a
                href="https://wa.me/972500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/40 hover:text-green-400 transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-green-500/50 group-hover:text-green-400 transition-colors" />
                WhatsApp
              </a>
            </div>
            <div className="mt-5 glass-gold rounded-xl p-4">
              <div className="text-xs text-white/50 mb-1">זמינות</div>
              <div className="text-sm text-white font-medium">ראשון–שישי, 9:00–22:00</div>
              <div className="mt-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" style={{ backgroundColor: "#39FF14" }} />
                <span className="text-xs text-white/40">זמין לפניות</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-white/25">
            © {new Date().getFullYear()} DJ Iguana · ניסים שגב · כל הזכויות שמורות
          </div>
          <div className="flex items-center gap-1 text-xs text-white/25">
            <span>עוצב ופותח ב</span>
            <Heart className="w-3 h-3 text-gold/40" />
            <span>עבור DJ Iguana</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
