import { motion } from "framer-motion";
import { Target, Zap, TrendingUp } from "lucide-react";

const highlights = [
  { icon: Target, title: "Affordable", desc: "Premium quality content at prices that fit every budget." },
  { icon: Zap, title: "Creative", desc: "Eye-catching reels designed to stop the scroll." },
  { icon: TrendingUp, title: "Growth-Focused", desc: "Content strategies that drive real engagement." },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="max-w-5xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">Who We Are</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-lg">
          We're a passionate team of content creators spread across India, helping businesses and individuals create
          stunning Instagram Reels without breaking the bank. Creativity shouldn't cost a fortune.
        </p>
      </motion.div>
      <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory no-scrollbar scroll-smooth">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex-shrink-0 w-[280px] md:w-[320px] snap-center rounded-2xl bg-card border border-border p-8 text-center hover:shadow-lg transition-all duration-300"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4">
              <h.icon size={28} />
            </div>
            <h3 className="font-display font-semibold text-lg text-foreground mb-2">{h.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
