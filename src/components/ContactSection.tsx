import { motion } from "framer-motion";
import { MessageCircle, Phone, Instagram, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi! I'm ${form.name} (${form.email}). ${form.message}`;
    window.open(`https://wa.me/919642228897?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">Get In Touch</h2>
          <p className="text-muted-foreground">Ready to create amazing content? Reach out now!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <a href="https://wa.me/919642228897" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl bg-card border border-border p-5 hover:border-whatsapp/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-whatsapp/10 text-whatsapp flex items-center justify-center"><MessageCircle size={24} /></div>
              <div>
                <p className="font-display font-semibold text-foreground">WhatsApp</p>
                <p className="text-muted-foreground text-sm">+91 96422 28897</p>
              </div>
            </a>
            <a href="tel:+919642228897" className="flex items-center gap-4 rounded-2xl bg-card border border-border p-5 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center"><Phone size={24} /></div>
              <div>
                <p className="font-display font-semibold text-foreground">Phone</p>
                <p className="text-muted-foreground text-sm">+91 96422 28897</p>
              </div>
            </a>
            <a href="https://instagram.com/budget_friendly_reels" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl bg-card border border-border p-5 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center"><Instagram size={24} /></div>
              <div>
                <p className="font-display font-semibold text-foreground">Instagram</p>
                <p className="text-muted-foreground text-sm">@budget_friendly_reels</p>
              </div>
            </a>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-card border border-border p-6 space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <textarea
              placeholder="Tell us about your project..."
              required
              maxLength={1000}
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <Send size={18} /> Send via WhatsApp
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
