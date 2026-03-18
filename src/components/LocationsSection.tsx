import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// 🔹 Import team images
import nareshImg from "@/assets/team/naresh.jpeg";
import saiImg from "@/assets/team/sai.jpeg";
import shyamImg from "@/assets/team/shyam.jpeg";

// 🔹 Import location images (add these in your assets)
import vizagImg from "@/assets/locations/vizag.jpg";
import vijayawadaImg from "@/assets/locations/vijayawada.jpg";
import hyderabadImg from "@/assets/locations/Hyderabad.jpeg";

interface TeamMember {
  name: string;
  role: string;
  phone: string;
  image: string;
}

interface Location {
  city: string;
  image: string;
  team: TeamMember[];
}

// 🔥 Location-based structure (MAIN CHANGE)
const locations: Location[] = [
  {
    city: "Vizag",
    image: vizagImg,
    team: [
      {
        name: "Hemanth Sai",
        role: "Founder & Creative Director",
        phone: "919642228897",
        image: saiImg,
      },
    ],
  },
  {
    city: "Vijayawada",
    image: vijayawadaImg,
    team: [
      {
        name: "Naresh Madharam",
        role: "Lead Creator",
        phone: "916301287159",
        image: nareshImg,
      },
    ],
  },
  {
    city: "Hyderabad",
    image: hyderabadImg,
    team: [
      {
        name: "Shyam",
        role: "Content Strategist",
        phone: "91939296312",
        image: shyamImg,
      },
    ],
  },
];

const LocationsSection = () => {
  return (
    <section id="locations" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-3">Our Locations</h2>
          <p className="text-muted-foreground">
            We are available across multiple cities with dedicated local teams.
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="overflow-hidden rounded-2xl group hover:shadow-xl transition">

                {/* 🔥 Location Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={loc.image}
                    alt={loc.city}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40" />

                  {/* Floating WhatsApp Icon */}
                  <a
                    href={`https://wa.me/${loc.team[0].phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-whatsapp text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group/wa"
                    title={`Chat with ${loc.team[0].name}`}
                  >
                    <MessageCircle size={20} className="group-hover/wa:rotate-12 transition-transform" />
                  </a>

                  {/* City Name */}
                  <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                    {loc.city}
                  </h3>
                </div>

                {/* 🔹 Team Section */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary/70">
                      Local Team
                    </span>
                    <Badge variant="secondary" className="text-[10px] py-0 px-2 h-5">
                      {loc.team.length} {loc.team.length === 1 ? "Expert" : "Experts"} Online
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    {loc.team.map((m) => (
                      <div
                        key={m.name}
                        className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border/50 group/item hover:bg-muted/50 transition-colors"
                      >
                        <div className="relative">
                          <img
                            src={m.image}
                            alt={m.name}
                            loading="lazy"
                            className="w-12 h-12 rounded-full object-cover border-2 border-background shadow-sm"
                          />
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background rounded-full" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-foreground truncate">
                            {m.name}
                          </h4>
                          <p className="text-[10px] text-primary font-semibold uppercase truncate">
                            {m.role}
                          </p>
                        </div>

                        <a
                          href={`https://wa.me/${m.phone}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full bg-whatsapp/10 text-whatsapp flex items-center justify-center hover:bg-whatsapp hover:text-white transition-all duration-300"
                          title={`Chat with ${m.name}`}
                        >
                          <MessageCircle size={16} />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LocationsSection;