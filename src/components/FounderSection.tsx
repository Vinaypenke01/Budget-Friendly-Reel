import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import saiImg from "@/assets/team/sai.jpeg";
import { Badge } from "@/components/ui/badge";

const FounderSection = () => {
  return (
    <section id="founder" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Image with Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl transform -rotate-6 scale-95 pointer-events-none text-primary" />
            <div className="relative z-10 rounded-3xl overflow-hidden border-4 border-background shadow-2xl aspect-[4/5] bg-muted">
              <img
                src={saiImg}
                alt="Hemanth Sai - Founder"
                loading="lazy"
                className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border/50 p-6 rounded-2xl shadow-xl z-20 backdrop-blur-md">
              <p className="text-primary font-display font-bold text-4xl leading-none">100+</p>
              <p className="text-muted-foreground text-xs uppercase tracking-widest mt-1 font-semibold">Clients Served</p>
            </div>
          </motion.div>

          {/* Right: Vision & Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 mb-6 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider">
              The Visionary
            </Badge>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Hemanth Sai
              <span className="block text-primary text-2xl md:text-3xl font-medium mt-2">Founder & Creative Director</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              "At Reel Reach, our mission is to democratize high-quality visual storytelling.
              We believe that every brand, regardless of its size, deserves scroll-stopping
              creative content that resonates with their audience and drives real growth."
            </p>

            <div className="flex items-center gap-2 text-muted-foreground mb-10">
              <MapPin className="text-primary" size={20} />
              <span className="font-medium text-lg">Based in Vizag, Serving across India</span>
            </div>

            {/* Quick Contact Row */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://wa.me/919642228897"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-whatsapp text-whatsapp-foreground px-8 py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-whatsapp/20 hover:-translate-y-1 transition-all duration-300"
              >
                <MessageCircle size={20} />
                WhatsApp Me
              </a>
              <a
                href="tel:+919642228897"
                className="inline-flex items-center gap-3 bg-muted hover:bg-muted/80 text-foreground px-8 py-4 rounded-2xl font-bold transition-all duration-300"
              >
                <Phone size={20} className="text-primary" />
                Call Directly
              </a>
            </div>

            {/* <div className="flex items-center gap-3 text-muted-foreground group cursor-pointer w-fit overflow-hidden">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Mail size={18} />
              </div>
              <a href="mailto:sai@gmail.com" className="font-medium hover:text-primary transition-colors">
                sai@gmail.com
              </a>
            </div> */}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FounderSection;
