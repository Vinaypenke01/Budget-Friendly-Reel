import { Instagram, Phone, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/70 py-12 px-4">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-center md:text-left">
        <p className="font-display font-bold text-lg text-primary-foreground">Budget Friendly Reels</p>
        <p className="text-sm mt-1">Affordable & Creative Reel Solutions</p>
      </div>
      <div className="flex items-center gap-4">
        <a href="https://instagram.com/budget_friendly_reels" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/30 transition-colors">
          <Instagram size={18} />
        </a>
        <a href="https://wa.me/919642228897" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-whatsapp/30 transition-colors">
          <MessageCircle size={18} />
        </a>
        <a href="tel:+919642228897" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/30 transition-colors">
          <Phone size={18} />
        </a>
      </div>
      <p className="text-xs text-primary-foreground/50">© {new Date().getFullYear()} Budget Friendly Reels. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
