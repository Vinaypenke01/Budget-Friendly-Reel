import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Ananya M.", text: "Budget Friendly Reels transformed our social media presence. Amazing quality at unbeatable prices!", rating: 5 },
  { name: "Karthik R.", text: "Fast delivery and super creative. Our restaurant reels went viral thanks to their team!", rating: 5 },
  { name: "Meera S.", text: "Professional, affordable, and easy to work with. Highly recommended for small businesses.", rating: 5 },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-card">
    <div className="max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">What Our Clients Say</h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl bg-background border border-border p-6"
          >
            <div className="flex gap-1 mb-3">
              {[...Array(t.rating)].map((_, j) => (
                <Star key={j} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm mb-4 italic">"{t.text}"</p>
            <p className="font-display font-semibold text-foreground text-sm">— {t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
