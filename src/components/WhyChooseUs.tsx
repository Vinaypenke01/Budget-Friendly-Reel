import { motion } from "framer-motion";
import { DollarSign, Clock, Users, Sparkles } from "lucide-react";

const reasons = [
  { icon: DollarSign, title: "Affordable Pricing", desc: "Get professional reels without the premium price tag." },
  { icon: Clock, title: "Fast Delivery", desc: "Quick turnaround so your content stays relevant." },
  { icon: Users, title: "Local Team Support", desc: "Work with creators who understand your market." },
  { icon: Sparkles, title: "Creative Content", desc: "Unique, trend-aware content that stands out." },
];

const WhyChooseUs = () => (
  <section className="section-padding bg-background">
    <div className="max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">Why Choose Us</h2>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-4 rounded-2xl bg-card border border-border p-6"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <r.icon size={24} />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-1">{r.title}</h3>
              <p className="text-muted-foreground text-sm">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
