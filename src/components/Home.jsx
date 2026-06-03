import Image from 'next/image';
import Link from 'next/link';


export default function HomeSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020B1A] text-white">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#AED500]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start space-y-6 lg:space-y-8 w-full">
            {/* Live Status Badge */}
            <div className="hidden lg:flex items-center space-x-3 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#AED500] animate-pulse"></div>
              <span className="text-[#AED500] text-xs font-bold tracking-[0.15em] uppercase">
                Live Status: 85% Occupancy
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-extrabold tracking-tight leading-[1.1] lg:leading-[1.05] text-center lg:text-left w-full">
              <div className="text-white">KINETIC</div>
              <div className="text-[#AED500]">PRECISION</div>
              <div className="text-white text-opacity-90">FOR ELITE</div>
              <div className="text-white text-opacity-80">PERFORMANCE</div>
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed font-sans text-center lg:text-left">
              Elite multi-sport facility engineered for performance data tracking and high-velocity training. Choose your arena and dominate the game.
            </p>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 w-full sm:w-80 lg:w-auto pt-2 lg:pt-0">
              <Link href="/b2b" className="w-full lg:w-auto">
                <button className="w-full lg:w-auto px-8 py-3.5 bg-[#AED500] hover:bg-[#c2ed15] text-[#020B1A] font-bold text-sm rounded-sm transition-all duration-300 uppercase tracking-wide hover:-translate-y-1 hover:shadow-lg hover:shadow-[#AED500]/20 cursor-pointer">
                  Explore Facilities
                </button>
              </Link>
              {/* <button className="w-full lg:w-auto px-8 py-3.5 bg-transparent border border-[#1E50FF] hover:border-[#3A6DFF] text-[#1E50FF] hover:text-[#3A6DFF] font-bold text-sm rounded-sm transition-all duration-300 uppercase tracking-wide hover:-translate-y-1">
                Live Status
              </button> */}
            </div>
          </div>

          {/* Right Content / Graphic */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end mb-8 lg:mb-0 lg:mt-0 relative w-full">
            {/* Glossy Card */}
            <div className="relative  sm:w-64 sm:h-64 lg:w-full lg:h-auto rounded-xl flex items-center justify-center  lg:bg-transparent p-6 lg:p-0">

              {/* Logo */}
              <div className="relative z-10 ">
                <Image
                  src="/assets/Home/Hero0.png"
                  alt="HitZone Logo"
                  width={500}
                  height={400}
                  className="w-full h-auto drop-shadow-2xl object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
