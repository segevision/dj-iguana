"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Calendar, Users, Zap } from "lucide-react";

// Particle system
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; alpha: number; color: string; life: number; maxLife: number;
    }> = [];

    const colors = ["#D4AF37", "#39FF14", "#F0D060", "#ffffff"];

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: canvas.height + 10,
      vx: (Math.random() - 0.5) * 0.8,
      vy: -(Math.random() * 1.5 + 0.5),
      size: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.6 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 0,
      maxLife: Math.random() * 200 + 100,
    });

    for (let i = 0; i < 80; i++) {
      const p = createParticle();
      p.y = Math.random() * canvas.height;
      p.life = Math.random() * p.maxLife;
      particles.push(p);
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Sound wave lines at bottom
      const time = Date.now() * 0.001;
      for (let w = 0; w < 3; w++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(212,175,55,${0.06 - w * 0.02})`;
        ctx.lineWidth = 1;
        for (let x = 0; x <= canvas.width; x += 3) {
          const y = canvas.height * 0.85 +
            Math.sin((x / canvas.width) * Math.PI * 6 + time + w) * (20 + w * 15) +
            Math.sin((x / canvas.width) * Math.PI * 3 + time * 1.5) * 10;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        const lifeRatio = p.life / p.maxLife;
        const alpha = p.alpha * (1 - lifeRatio);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(alpha * 255).toString(16).padStart(2, "0");
        ctx.fill();

        if (p.life >= p.maxLife || p.y < -10) {
          particles[i] = createParticle();
        }
      });

      // Radial glow
      const grad = ctx.createRadialGradient(
        canvas.width / 2, canvas.height * 0.4, 0,
        canvas.width / 2, canvas.height * 0.4, canvas.width * 0.4
      );
      grad.addColorStop(0, "rgba(212,175,55,0.04)");
      grad.addColorStop(0.5, "rgba(57,255,20,0.02)");
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

// Animated Iguana SVG
function IguanaSVG() {
  return (
    <motion.svg
      viewBox="0 0 300 300"
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <defs>
        <linearGradient id="iguanaGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#F0D060" />
          <stop offset="100%" stopColor="#B8960A" />
        </linearGradient>
        <linearGradient id="iguanaGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#39FF14" />
          <stop offset="100%" stopColor="#1aad08" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="strongGlow">
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Body */}
      <motion.path
        d="M150 240 C120 240 100 220 90 200 C75 175 70 150 75 120 C80 90 95 70 120 60 C135 54 150 52 165 55 C185 60 200 75 210 95 C225 120 225 150 215 175 C205 200 185 220 165 235 Z"
        fill="url(#iguanaGold)"
        stroke="rgba(212,175,55,0.3)"
        strokeWidth="1"
        filter="url(#glow)"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Scale texture */}
      {[...Array(5)].map((_, row) =>
        [...Array(4)].map((_, col) => (
          <ellipse
            key={`${row}-${col}`}
            cx={105 + col * 22 + (row % 2) * 11}
            cy={100 + row * 22}
            rx="8"
            ry="6"
            fill="none"
            stroke="rgba(0,0,0,0.3)"
            strokeWidth="0.5"
          />
        ))
      )}

      {/* Head */}
      <motion.ellipse
        cx="152"
        cy="60"
        rx="28"
        ry="22"
        fill="url(#iguanaGold)"
        filter="url(#glow)"
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "152px 60px" }}
      />

      {/* Eye - glowing */}
      <motion.circle
        cx="162"
        cy="54"
        r="8"
        fill="#050505"
        filter="url(#strongGlow)"
      />
      <motion.circle
        cx="162"
        cy="54"
        r="5"
        fill="url(#iguanaGreen)"
        filter="url(#strongGlow)"
        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="163"
        cy="53"
        r="2"
        fill="white"
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      {/* Dorsal spines */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.path
          key={i}
          d={`M${148 - i * 8} ${85 + i * 12} L${152 - i * 8} ${65 + i * 8} L${156 - i * 8} ${85 + i * 12}`}
          fill="url(#iguanaGreen)"
          filter="url(#glow)"
          animate={{ scaleY: [1, 1.2, 1] }}
          transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
          style={{ transformOrigin: `${152 - i * 8}px ${75 + i * 10}px` }}
        />
      ))}

      {/* Tail */}
      <motion.path
        d="M150 235 C140 255 125 270 110 280 C100 286 90 285 85 275 C95 270 105 260 115 250 C125 240 138 230 150 235 Z"
        fill="url(#iguanaGold)"
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "150px 235px" }}
      />

      {/* Front leg */}
      <motion.path
        d="M100 150 C85 155 75 165 68 175 C62 183 60 190 62 195"
        stroke="url(#iguanaGold)"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "100px 150px" }}
      />

      {/* Back leg */}
      <motion.path
        d="M110 200 C95 210 85 220 78 232 C72 242 70 250 72 256"
        stroke="url(#iguanaGold)"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
        animate={{ rotate: [3, -3, 3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        style={{ transformOrigin: "110px 200px" }}
      />

      {/* Dewlap */}
      <motion.ellipse
        cx="130"
        cy="80"
        rx="15"
        ry="20"
        fill="rgba(57,255,20,0.6)"
        filter="url(#strongGlow)"
        animate={{ scaleY: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* EQ bars emanating from body */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i / 5) * Math.PI - Math.PI / 2;
        const r1 = 95;
        const heights = [30, 50, 40, 60, 35, 45];
        return (
          <motion.line
            key={i}
            x1={150 + Math.cos(angle) * r1}
            y1={145 + Math.sin(angle) * r1}
            x2={150 + Math.cos(angle) * (r1 + heights[i])}
            y2={145 + Math.sin(angle) * (r1 + heights[i])}
            stroke={i % 2 === 0 ? "#D4AF37" : "#39FF14"}
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.5"
            filter="url(#glow)"
            animate={{ opacity: [0.5, 1, 0.5], strokeWidth: [3, 5, 3] }}
            transition={{ duration: 1 + i * 0.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
          />
        );
      })}
    </motion.svg>
  );
}

// Availability Form
function AvailabilityForm() {
  const [date, setDate] = useState("");
  const [eventType, setEventType] = useState("");
  const [guests, setGuests] = useState("");
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) return;
    setChecking(true);
    setTimeout(() => {
      setChecking(false);
      setResult("available");
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="glass-gold rounded-2xl p-6 max-w-lg mx-auto"
    >
      <h3 className="text-white/90 font-semibold mb-4 text-center flex items-center justify-center gap-2">
        <Calendar className="w-5 h-5 text-gold" />
        בדקו אם התאריך פנוי
      </h3>
      {result === "available" ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center py-4"
        >
          <div className="w-16 h-16 rounded-full bg-green/20 border border-green/40 flex items-center justify-center mx-auto mb-3">
            <Zap className="w-8 h-8 text-green-500" style={{ color: "#39FF14" }} />
          </div>
          <p className="text-white font-bold text-lg">התאריך פנוי!</p>
          <p className="text-white/60 text-sm mt-1">השאירו פרטים ונחזור אליכם בהקדם</p>
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-3 px-6 py-2.5 bg-gold text-black font-bold rounded-full text-sm hover:bg-gold-light transition-all"
          >
            השאירו פרטים
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleCheck} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-white/50 mb-1 block">תאריך האירוע</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-gold/40 transition-colors"
                style={{ colorScheme: "dark" }}
              />
            </div>
            <div>
              <label className="text-xs text-white/50 mb-1 block">סוג האירוע</label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-gold/40 transition-colors"
              >
                <option value="" className="bg-black">בחרו סוג</option>
                <option value="wedding" className="bg-black">חתונה</option>
                <option value="bar-mitzvah" className="bg-black">בר/בת מצווה</option>
                <option value="corporate" className="bg-black">אירוע חברה</option>
                <option value="private" className="bg-black">אירוע פרטי</option>
                <option value="festival" className="bg-black">פסטיבל</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-xs text-white/50 mb-1 block">מספר אורחים משוער</label>
            <div className="relative">
              <Users className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input
                type="number"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                placeholder="150"
                min="10"
                className="w-full bg-white/5 border border-white/10 rounded-lg pr-9 pl-3 py-2.5 text-white text-sm focus:outline-none focus:border-gold/40 transition-colors placeholder-white/20"
              />
            </div>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={checking}
            className="w-full py-3 bg-gold text-black font-bold rounded-xl text-sm hover:bg-gold-light transition-all disabled:opacity-70 flex items-center justify-center gap-2"
          >
            {checking ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                />
                בודק זמינות...
              </>
            ) : (
              <>
                <Calendar className="w-4 h-4" />
                בדקו אם התאריך פנוי
              </>
            )}
          </motion.button>
        </form>
      )}
    </motion.div>
  );
}

export default function Hero() {
  const scrollToNext = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Iguana silhouette - large background */}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] opacity-20 pointer-events-none hidden sm:block">
        <IguanaSVG />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold text-xs font-medium text-gold mb-6 border border-gold/20"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" style={{ backgroundColor: "#39FF14" }} />
          DJ מוביל בישראל · 200+ אירועים
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h1
            className="font-display text-[70px] sm:text-[100px] md:text-[140px] lg:text-[160px] leading-none tracking-widest mb-0"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="text-gradient-gold">DJ</span>
            <br />
            <span className="text-white">IGUANA</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-xl sm:text-2xl md:text-3xl text-white/70 mt-4 mb-2 font-light tracking-wide"
        >
          מוזיקה שיוצרת רגעים בלתי נשכחים
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-sm text-white/40 tracking-[0.2em] mb-10 uppercase"
        >
          ניסים שגב · חתונות · אירועים · פסטיבלים
        </motion.p>

        {/* EQ Bars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-end justify-center gap-1.5 mb-10 h-12"
        >
          {[40, 65, 85, 55, 90, 70, 45, 80, 60, 75, 50, 88, 62, 78, 42].map((h, i) => (
            <motion.div
              key={i}
              className="w-1.5 rounded-full"
              style={{
                height: `${h}%`,
                background: i % 3 === 0 ? "#39FF14" : i % 3 === 1 ? "#D4AF37" : "#F0D060",
                opacity: 0.7,
              }}
              animate={{ scaleY: [1, Math.random() * 0.5 + 0.5, 1] }}
              transition={{
                duration: 0.6 + Math.random() * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.08,
              }}
            />
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212,175,55,0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-gold text-black font-bold rounded-full text-base hover:bg-gold-light transition-all"
          >
            בדיקת זמינות
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 glass border border-gold/30 text-gold font-bold rounded-full text-base hover:bg-gold/10 transition-all"
          >
            קבלת הצעת מחיר
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 glass border border-white/10 text-white/70 font-semibold rounded-full text-base hover:border-white/30 transition-all"
          >
            צפייה בגלריה
          </motion.button>
        </motion.div>

        {/* Availability Form */}
        <AvailabilityForm />
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-gold transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">גלול למטה</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
