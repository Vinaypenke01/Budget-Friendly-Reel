import { motion } from "framer-motion";
import { Film, Scissors, Lightbulb, BarChart3 } from "lucide-react";

const services = [
  { icon: Film, title: "Instagram Reels Creation", desc: "Scroll-stopping reels tailored for your brand, shot and edited to perfection." },
  { icon: Scissors, title: "Video Editing", desc: "Professional editing with transitions, effects, music sync, and color grading." },
  { icon: Lightbulb, title: "Content Strategy", desc: "Data-driven content planning that aligns with trends and your audience." },
  { icon: BarChart3, title: "Social Media Growth", desc: "End-to-end support to grow your followers, reach, and engagement." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-card">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">Our Services</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">Everything you need to dominate social media, all in one place.</p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group rounded-2xl bg-background border border-border p-6 hover:border-primary/50 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <s.icon size={24} />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
