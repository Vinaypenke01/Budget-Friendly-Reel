import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useRef } from "react";

const testimonials = [
  { name: "Ananya M.", text: "Budget Friendly Reels transformed our social media presence. Amazing quality at unbeatable prices!", rating: 5 },
  { name: "Karthik R.", text: "Fast delivery and super creative. Our restaurant reels went viral thanks to their team!", rating: 5 },
  { name: "Meera S.", text: "Professional, affordable, and easy to work with. Highly recommended for small businesses.", rating: 5 },
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;

    const interval = setInterval(() => {
      scrollAmount += 1;
      container.scrollLeft = scrollAmount;

      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-hidden"
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="min-w-[320px] max-w-[320px] h-[260px] rounded-2xl bg-background border border-border p-6 flex-shrink-0 flex flex-col justify-center items-center text-center"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={18} className="fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground text-sm mb-4 italic leading-relaxed break-words">
                "{t.text}"
              </p>

              <p className="font-semibold text-sm">
                — {t.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;