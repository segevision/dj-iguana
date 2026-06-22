"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Phone, Mail, MessageCircle, Send, CheckCircle, User, Calendar, Users, FileText } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    eventType: "",
    guests: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const phoneNumber = "972500000000";
  const whatsappMsg = encodeURIComponent("היי ניסים! ראיתי את האתר שלך ואני מעוניין/ת לשמוע על האירוע שלי 😊");

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-12 h-[2px] bg-gold" />
            <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">צרו קשר</span>
            <div className="w-12 h-[2px] bg-gold" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="text-white">בואו</span>{" "}
            <span className="text-gradient-gold">נדבר</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-white/50 mt-4 max-w-xl mx-auto"
          >
            מלאו את הטופס ונחזור אליכם תוך 24 שעות
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3
                className="font-display text-4xl text-white mb-6"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                יצירת קשר מהירה
              </h3>

              <div className="space-y-4">
                <motion.a
                  href={`https://wa.me/${phoneNumber}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: -4 }}
                  className="flex items-center gap-4 glass rounded-xl p-4 border border-white/5 hover:border-green-500/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "rgba(37,211,102,0.15)", border: "1px solid rgba(37,211,102,0.3)" }}>
                    <MessageCircle className="w-6 h-6" style={{ color: "#25D366" }} />
                  </div>
                  <div>
                    <div className="text-white font-semibold group-hover:text-green-400 transition-colors">WhatsApp</div>
                    <div className="text-white/50 text-sm">הדרך המהירה ביותר</div>
                  </div>
                  <div className="mr-auto text-white/30 text-xs px-3 py-1 rounded-full border border-white/10 group-hover:border-green-500/30 group-hover:text-green-400 transition-all">
                    פתח
                  </div>
                </motion.a>

                <motion.a
                  href={`tel:+${phoneNumber}`}
                  whileHover={{ scale: 1.02, x: -4 }}
                  className="flex items-center gap-4 glass rounded-xl p-4 border border-white/5 hover:border-gold/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="text-white font-semibold group-hover:text-gold transition-colors">שיחת טלפון</div>
                    <div className="text-white/50 text-sm">זמין א׳–ה׳ · 9:00–22:00</div>
                  </div>
                  <div className="mr-auto text-white/30 text-xs px-3 py-1 rounded-full border border-white/10 group-hover:border-gold/30 group-hover:text-gold transition-all">
                    התקשר
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:info@djiguana.co.il"
                  whileHover={{ scale: 1.02, x: -4 }}
                  className="flex items-center gap-4 glass rounded-xl p-4 border border-white/5 hover:border-gold/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="text-white font-semibold group-hover:text-gold transition-colors">אימייל</div>
                    <div className="text-white/50 text-sm">info@djiguana.co.il</div>
                  </div>
                  <div className="mr-auto text-white/30 text-xs px-3 py-1 rounded-full border border-white/10 group-hover:border-gold/30 group-hover:text-gold transition-all">
                    שלח
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Promise box */}
            <div className="glass-gold rounded-2xl p-6 border border-gold/15">
              <h4 className="text-gold font-semibold mb-4 text-lg">ההבטחה שלנו</h4>
              <div className="space-y-3 text-white/60 text-sm">
                {[
                  "תגובה תוך 24 שעות",
                  "הצעת מחיר שקופה ומפורטת",
                  "התאמה אישית מלאה לאירוע",
                  "ניסיון של 12+ שנים",
                  "מוזיקה שתישמר בזיכרון",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="glass-gold rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-20 h-20 rounded-full bg-gold/20 border-2 border-gold/40 flex items-center justify-center mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-gold" />
                </motion.div>
                <h3
                  className="font-display text-4xl text-gradient-gold mb-3"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  תודה רבה!
                </h3>
                <p className="text-white/60 text-center leading-relaxed">
                  קיבלנו את הפניה שלכם. ניסים יחזור אליכם תוך 24 שעות לתיאום שיחה.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-gold rounded-2xl p-6 sm:p-8 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-white/50 mb-1.5 block flex items-center gap-1">
                      <User className="w-3 h-3" /> שם מלא *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="ניסים שגב"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/40 transition-colors placeholder-white/20"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/50 mb-1.5 block flex items-center gap-1">
                      <Phone className="w-3 h-3" /> טלפון *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="050-000-0000"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/40 transition-colors placeholder-white/20"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-white/50 mb-1.5 block flex items-center gap-1">
                    <Mail className="w-3 h-3" /> אימייל
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="example@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/40 transition-colors placeholder-white/20"
                    dir="ltr"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-white/50 mb-1.5 block flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> תאריך האירוע *
                    </label>
                    <input
                      type="date"
                      required
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/40 transition-colors"
                      style={{ colorScheme: "dark" }}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/50 mb-1.5 block flex items-center gap-1">
                      <Users className="w-3 h-3" /> מספר אורחים
                    </label>
                    <input
                      type="number"
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      placeholder="150"
                      min="1"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/40 transition-colors placeholder-white/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-white/50 mb-1.5 block">סוג האירוע *</label>
                  <select
                    required
                    value={form.eventType}
                    onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/40 transition-colors"
                  >
                    <option value="" className="bg-black">בחרו סוג אירוע</option>
                    <option value="wedding" className="bg-black">חתונה</option>
                    <option value="bar-mitzvah" className="bg-black">בר/בת מצווה</option>
                    <option value="corporate" className="bg-black">אירוע חברה</option>
                    <option value="private" className="bg-black">אירוע פרטי</option>
                    <option value="festival" className="bg-black">פסטיבל</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-white/50 mb-1.5 block flex items-center gap-1">
                    <FileText className="w-3 h-3" /> הודעה
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={3}
                    placeholder="ספרו לנו על האירוע שלכם..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/40 transition-colors placeholder-white/20 resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <motion.a
                    href={`https://wa.me/${phoneNumber}?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="py-3.5 rounded-xl border text-sm font-bold flex items-center justify-center gap-2 transition-all"
                    style={{ borderColor: "rgba(37,211,102,0.4)", color: "#25D366", background: "rgba(37,211,102,0.08)" }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </motion.a>
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(212,175,55,0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="py-3.5 bg-gold text-black rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-gold-light transition-all disabled:opacity-70"
                  >
                    {loading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        שלחו פניה
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
