import { motion } from "framer-motion";
import { Play, Volume2, VolumeX, X } from "lucide-react";
import { useRef, useState, useEffect } from "react";

// Import videos
import mov2 from "@/assets/videos/mov2.mp4";
import mov3 from "@/assets/videos/mov3.mp4";
import mov4 from "@/assets/videos/mov4.mp4";
import mov5 from "@/assets/videos/mov5.mp4";
import mov6 from "@/assets/videos/mov6.mp4";
import video1 from "@/assets/videos/video1mov.mp4";

const reels = [
  { title: "Brand Promo Reel", category: "Branding", video: video1 },
  { title: "Cinematic Reel", category: "Cinematic", video: mov2 },
  { title: "Wedding Reel", category: "Wedding", video: mov3 },
  { title: "Personal Reel", category: "Personal", video: mov4 },
  { title: "Special Occasion Reel", category: "Special Occasion", video: mov5 },
  { title: "Personal Reel", category: "Personal", video: mov6 },
];

const PortfolioSection = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [modalVideo, setModalVideo] = useState<string | null>(null);

  // 🚀 Optimize: Only play on Hover to save resources
  const handleMouseEnter = (index: number) => {
    videoRefs.current[index]?.play().catch(() => { });
  };

  const handleMouseLeave = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0; // reset to start
    }
  };

  // 🔊 Toggle Mute Logic
  const handleToggleMute = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.muted = !video.muted;
      setActiveIndex(video.muted ? null : index);
    }
  };

  // 🎬 Open Modal
  const openModal = (videoSource: string) => {
    videoRefs.current.forEach((v) => {
      if (v) {
        v.pause();
        v.muted = true;
      }
    });

    setActiveIndex(null);
    setModalVideo(videoSource);
  };

  // ❌ Close Modal
  const closeModal = () => {
    setModalVideo(null);
  };

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Work</h2>
          <p className="text-muted-foreground">
            A glimpse of the reels we've crafted for our clients. (Hover to preview)
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {reels.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(i)}
              className="group relative aspect-[9/16] rounded-3xl overflow-hidden shadow-lg bg-black will-change-transform"
            >

              {/* Video */}
              <video
                ref={(el) => (videoRefs.current[i] = el)}
                src={r.video}
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-80 group-hover:opacity-100"
              />

              {/* Dark Overlay (Replaces blur for performance) */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-300" />

              {/* 🔊 Mute/Unmute Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggleMute(i);
                }}
                className="absolute top-3 right-3 z-20 bg-black/60 p-2 rounded-full text-white hover:bg-black/80 transition shadow-lg"
              >
                {activeIndex === i ? (
                  <Volume2 size={18} />
                ) : (
                  <VolumeX size={18} />
                )}
              </button>

              {/* 🎬 Play Button Overlay */}
              <div
                onClick={() => openModal(r.video)}
                className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer z-10"
              >
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-xl border border-white/20">
                  <Play size={22} fill="white" className="text-white ml-0.5" />
                </div>

                <div className="mt-4 text-center text-white px-2">
                  <h3 className="font-bold text-lg drop-shadow-lg">{r.title}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider opacity-80">{r.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🎬 Modal */}
        {modalVideo && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">

            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 text-white"
            >
              <X size={30} />
            </button>

            {/* Video Player */}
            <video
              src={modalVideo}
              controls
              autoPlay
              className="max-w-full max-h-[80vh] rounded-xl"
            />
          </div>
        )}

      </div>
    </section>
  );
};

export default PortfolioSection;