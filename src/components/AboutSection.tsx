import { motion } from "framer-motion";
import { Target, Zap, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const highlights = [
  { icon: Target, title: "Affordable", desc: "Premium quality content at prices that fit every budget." },
  { icon: Zap, title: "Creative", desc: "Eye-catching reels designed to stop the scroll." },
  { icon: TrendingUp, title: "Growth-Focused", desc: "Content strategies that drive real engagement." },
];

const AboutSection = () => {
  const [index, setIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 🔄 Auto-slide Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % highlights.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  // 🎯 Smooth Scroll Behavior
  useEffect(() => {
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [index]);

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">Who We Are</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-16 text-lg">
            We're a passionate team of content creators spread across India, helping businesses and individuals create
            stunning Instagram Reels without breaking the bank. Creativity shouldn't cost a fortune.
          </p>
        </motion.div>

        {/* 🎠 Carousel Wrapper */}
        <div className="relative group">
          <div className="flex overflow-x-auto gap-4 md:gap-8 pb-12 snap-x snap-mandatory no-scrollbar">
            {highlights.map((h, i) => (
              <div 
                key={h.title}
                ref={(el) => (cardRefs.current[i] = el)}
                className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[400px] snap-center"
              >
                <div 
                  className={`h-full rounded-2xl bg-card border p-10 text-center transition-all duration-500 ${
                    index === i 
                      ? "border-primary/50 shadow-2xl shadow-primary/10 scale-100 opacity-100" 
                      : "border-border opacity-40 scale-90 blur-[1px]"
                  }`}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-colors duration-500 ${
                    index === i ? "bg-primary text-white" : "bg-primary/10 text-primary"
                  }`}>
                    <h.icon size={32} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-4">{h.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🔘 Indicators */}
        <div className="flex justify-center gap-3 mt-4">
          {highlights.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === i ? "bg-primary w-10" : "bg-primary/20 w-3 hover:bg-primary/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
