"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  {
    id: 1,
    src: "/assets/Home/Kukatpally.png",
    title: "Kukatpally Flagship Arena",
    category: "Primary Tech Hub",
    description: "Our flagship facility featuring 12 data-integrated nets, multi-sport tracks, and comprehensive performance analytics trackers.",
  },
  {
    id: 2,
    src: "/assets/Home/Kondapur.png",
    title: "Kondapur Multi-Court",
    category: "Racket Specialists",
    description: "State-of-the-art tennis and badminton courts equipped with elite automated video and speed tracking technologies.",
  },
  {
    id: 3,
    src: "/assets/Home/Nagole.png",
    title: "Nagole Box Arena",
    category: "High Intensity",
    description: "Specially engineered for high-velocity indoor training and intense box-cricket league matches.",
  },
  {
    id: 4,
    src: "/assets/B2B/arena.png",
    title: "Professional Indoor Stadium",
    category: "Infrastructure",
    description: "A turn-key professional multi-sport facility constructed with premium materials and optimized acoustic design.",
  },
  {
    id: 5,
    src: "/assets/Home/Hero0.png",
    title: "Kinetic Simulation Zone",
    category: "Tech Simulation",
    description: "High-precision active simulator bays offering instant biometric feedback and trajectory data for elite athletes.",
  },
];

export default function GalleryPage() {
  const [selectedIdx, setSelectedIdx] = useState(null);

  // Close lightbox on Escape key, navigate with Arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") setSelectedIdx(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx]);

  // Prevent background scroll when lightbox is open
  useEffect(() => {
    if (selectedIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIdx]);

  const handlePrev = () => {
    setSelectedIdx((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIdx((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#020B1A] min-h-screen text-white py-12 md:py-20">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#AED500]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-[#AED500] text-[10px] sm:text-[12px] font-bold tracking-[0.25em] uppercase mb-4 block animate-pulse">
            Visualizing Excellence
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 uppercase">
            OUR <span className="text-[#AED500]">ARENAS</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Take a visual tour through our world-class athletic facilities. Every corner is meticulously engineered for premium sports performance, high durability, and advanced data capture.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.map((image, idx) => (
            <div
              key={image.id}
              onClick={() => setSelectedIdx(idx)}
              className="group relative h-[300px] sm:h-[350px] rounded-xl overflow-hidden cursor-pointer border border-white/5 bg-[#0c1219] hover:border-[#AED500]/30 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#AED500]/5 flex flex-col justify-end"
            >
              {/* Image Container */}
              <div className="absolute inset-0 bg-gray-900 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-300"></div>

              {/* Content Overlay */}
              <div className="relative z-10 p-6 w-full flex flex-col">
                <span className="self-start bg-[#AED500] text-[#020B1A] text-[9px] font-bold px-2 py-1 uppercase tracking-widest mb-3 rounded-sm">
                  {image.category}
                </span>
                <h3 className="text-xl font-extrabold text-white mb-2 uppercase tracking-wide group-hover:text-[#AED500] transition-colors duration-200">
                  {image.title}
                </h3>
                <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 opacity-100 translate-y-0">
                  {image.description}
                </p>
              </div>

              {/* Hover Frame Effect */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-[#AED500]/20 rounded-xl pointer-events-none transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 md:mt-24 text-center">
          <p className="text-gray-400 text-sm mb-6">Want to experience these facilities in person?</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/booking">
              <button className="px-8 py-3.5 bg-[#AED500] hover:bg-[#c2ed15] text-[#020B1A] font-bold text-sm tracking-widest uppercase rounded-sm shadow-lg transition-all duration-200 cursor-pointer">
                Book a Slot
              </button>
            </Link>
            <Link href="/b2b#contact">
              <button className="px-8 py-3.5 bg-transparent hover:bg-white/5 border border-white/10 hover:border-white/20 text-white font-bold text-sm tracking-widest uppercase rounded-sm transition-all duration-200 cursor-pointer">
                Build an Arena
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm transition-opacity duration-300">
          
          {/* Close Area */}
          <div className="absolute inset-0" onClick={() => setSelectedIdx(null)}></div>

          {/* Lightbox Container */}
          <div className="relative max-w-5xl w-full h-[85vh] max-h-[750px] mx-2 sm:mx-4 z-10 flex flex-col justify-between">
            
            {/* Top Bar with Title and Close button */}
            <div className="w-full flex justify-between items-center mb-3 text-white shrink-0">
              <div className="max-w-[calc(100%-50px)]">
                <span className="text-[#AED500] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest block mb-0.5">
                  {galleryImages[selectedIdx].category}
                </span>
                <h2 className="text-sm sm:text-lg md:text-xl font-bold uppercase tracking-wide truncate">
                  {galleryImages[selectedIdx].title}
                </h2>
              </div>
              
              <button
                onClick={() => setSelectedIdx(null)}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 hover:scale-105 transition-all duration-200 focus:outline-none cursor-pointer shrink-0"
                aria-label="Close lightbox"
              >
                <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Media Display Area */}
            <div className="relative flex-1 w-full bg-black rounded-lg overflow-hidden border border-white/10 flex items-center justify-center min-h-0">
              <Image
                src={galleryImages[selectedIdx].src}
                alt={galleryImages[selectedIdx].title}
                fill
                priority
                className="object-contain"
              />

              {/* Navigation Left */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-black/60 border border-white/10 hover:bg-black/80 text-white flex items-center justify-center transition-all hover:scale-105 cursor-pointer focus:outline-none z-20"
                aria-label="Previous image"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Navigation Right */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-black/60 border border-white/10 hover:bg-black/80 text-white flex items-center justify-center transition-all hover:scale-105 cursor-pointer focus:outline-none z-20"
                aria-label="Next image"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Bottom Metadata Info */}
            <div className="w-full bg-[#0c1219]/90 border border-white/5 rounded-lg p-4 sm:p-5 mt-3 text-center sm:text-left shrink-0">
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                {galleryImages[selectedIdx].description}
              </p>
              <div className="mt-2.5 sm:mt-3 text-[9px] sm:text-[10px] text-gray-500 font-mono flex justify-center sm:justify-start space-x-4">
                <span>INDEX: {selectedIdx + 1} / {galleryImages.length}</span>
                <span>•</span>
                <span>RESOLUTION: HIGH DEFINITION</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
