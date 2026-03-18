import { motion } from "framer-motion";
import { Instagram, Play } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground">
    {/* Decorative gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-foreground/90" />

    {/* Floating reel icons */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/20"
          style={{ left: `${15 + i * 15}%`, top: `${10 + (i % 3) * 30}%` }}
          animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
        >
          {i % 2 === 0 ? <Play size={40 + i * 8} /> : <Instagram size={40 + i * 8} />}
        </motion.div>
      ))}
    </div>

    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-foreground uppercase mb-6">
          🎬 Professional Reel Services
        </span>
        <h1 className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-4">
          Budget Friendly<br />
          <span className="text-primary">Reels</span>
        </h1>
        <p className="text-primary-foreground/70 text-lg md:text-xl max-w-xl mx-auto mb-8 font-body">
          Affordable & Creative Reel Solutions for Everyone. Grow your brand with scroll-stopping content.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#locations"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-8 py-3.5 font-semibold text-whatsapp-foreground hover:opacity-90 transition-opacity text-base"
          >
            💬 Contact Us on WhatsApp
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-8 py-3.5 font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors text-base"
          >
            <Play size={18} /> View Our Work
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
