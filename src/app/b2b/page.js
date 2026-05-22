import Image from "next/image";
import B2BForm from "./B2BForm";

export const metadata = {
  title: "B2B | Hit-Zone",
  description: "Turn-key solutions for professional sports infrastructure.",
};

export default function B2BPage() {
  return (
    <div className="bg-[#0b0f15] min-h-screen text-white">
      {/* Hero Section */}
      <section className="flex items-center pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="w-full lg:w-[45%]">
              <h1 className="text-2xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8">
                <span className="text-white">Engineered for </span>
                <span className="text-[#AED500]">Peak</span>
                <br />
                <span className="text-[#AED500]">Performance.</span>
              </h1>

              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-12 max-w-lg">
                Transforming spaces into world-class athletic arenas. HitZone
                Construction provides turn-key solutions for professional sports
                infrastructure.
              </p>

              {/* Features list */}
              <div className="flex flex-wrap gap-6 sm:gap-10">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 text-[#AED500]">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L21 7V17L12 22L3 17V7L12 2Z"
                        fill="currentColor"
                      />
                      <path
                        d="M16 9.5L10.5 15L7.5 12"
                        stroke="#0b0f15"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-200 font-bold tracking-[0.15em] text-[13px] uppercase">
                    ISO Certified
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 text-[#AED500]">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L21 7V17L12 22L3 17V7L12 2Z"
                        fill="currentColor"
                      />
                      <path
                        d="M16 9.5L10.5 15L7.5 12"
                        stroke="#0b0f15"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-200 font-bold tracking-[0.15em] text-[13px] uppercase">
                    Fast Deployment
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="w-full lg:w-[55%]">
              <div className="relative w-full aspect-[16/10] md:aspect-[16/9] lg:aspect-[4/3] rounded-sm overflow-hidden shadow-2xl bg-gray-900 border border-white/5">
                <Image
                  src="/assets/B2B/arena.png"
                  alt="Professional Sports Arena"
                  fill
                  className="object-cover"
                />

                <div className="absolute top-4 left-6">
                  <span className="text-white text-sm font-semibold tracking-wider">
                    Foxconn
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-black/60 backdrop-blur-md rounded-lg px-4 py-3">
                  <button
                    aria-label="Previous"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <div className="flex items-center space-x-6">
                    <div className="text-[#d87b32] hover:text-[#f48a37] transition-colors cursor-pointer">
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M12 21L3 15V9L12 3L21 9V15L12 21Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>

                    <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>

                    <div className="text-[#d87b32] hover:text-[#f48a37] transition-colors cursor-pointer">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>
                  </div>

                  <button
                    aria-label="Next"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            
            {/* Card 1: Box Cricket Construction (col-span-2) */}
            <div className="lg:col-span-2 bg-[#0c1219] rounded-xl border border-white/5 overflow-hidden flex flex-col md:flex-row">
              <div className="p-6 md:p-8 lg:p-10 flex-1 flex flex-col justify-between z-10 relative">
                <div>
                  <span className="text-[#AED500] text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">01 / CORE SERVICE</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Box Cricket Construction</h3>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#AED500] mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-300 text-sm leading-relaxed">Professional 50mm monofilament turf with high-density cushioning.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#AED500] mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-300 text-sm leading-relaxed">Industrial-grade HDPE UV-stabilized netting for maximum longevity.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <button className="px-6 py-2.5 border border-[#1a4a8c] bg-[#020B1A]/50 text-white text-xs font-bold tracking-widest uppercase hover:bg-[#1a4a8c] transition-colors rounded-sm">
                    VIEW SPECS
                  </button>
                </div>
              </div>
              {/* Image container for Card 1 */}
              <div className="w-full md:w-5/12 h-64 md:h-auto relative bg-gray-900 overflow-hidden">
                <Image src="/assets/Home/Kukatpally.png" alt="Turf" fill className="object-cover mix-blend-overlay opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0c1219] via-[#0c1219]/80 to-transparent hidden md:block"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1219] via-[#0c1219]/80 to-transparent md:hidden"></div>
                {/* Artificial turf pattern overlay to make it look like grass */}
                <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#AED500 1px, transparent 1px)', backgroundSize: '4px 4px'}}></div>
              </div>
            </div>

            {/* Card 2: Gym Tile Flooring (col-span-1) */}
            <div className="bg-[#1c2128] rounded-xl border border-white/5 p-6 md:p-8 flex flex-col relative overflow-hidden">
              <span className="text-[#AED500] text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">05 / INTERIORS</span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Gym Tile Flooring</h3>
              <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed">
                High-impact 20mm rubberized interlocking tiles designed for heavy weights and high-intensity zones.
              </p>
              <div className="relative h-32 w-full mb-5 bg-[#0b0f15] rounded-sm overflow-hidden border border-black/50 shadow-inner">
                <Image src="/assets/Home/Kondapur.png" alt="Gym Floor" fill className="object-cover grayscale opacity-70" />
                {/* floor grid pattern */}
                <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3}}></div>
              </div>
              <span className="text-gray-300 text-[10px] font-bold tracking-[0.15em] uppercase">SHOCK ABSORPTION: 90%</span>
            </div>

            {/* Card 3: Pickleball & Basketball Courts (col-span-1) */}
            <div className="bg-[#0f141c] rounded-xl border border-white/5 relative overflow-hidden flex flex-col">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#AED500]"></div>
              <div className="p-6 md:p-8 pl-8 md:pl-10 flex-1 flex flex-col justify-center">
                <span className="text-[#AED500] text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">02 / COURTS</span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Pickleball & Basketball Courts</h3>
                
                <div className="bg-[#1c2128] rounded-md p-5 mb-4 border border-white/5 shadow-sm">
                  <h4 className="text-[#7d8590] text-[10px] font-bold tracking-[0.15em] uppercase mb-2">ACRYLIC SURFACING</h4>
                  <p className="text-gray-300 text-xs leading-relaxed">8-layer cushioned acrylic system for joint protection and consistent bounce.</p>
                </div>
                
                <div className="bg-[#1c2128] rounded-md p-5 border border-white/5 shadow-sm">
                  <h4 className="text-[#7d8590] text-[10px] font-bold tracking-[0.15em] uppercase mb-2">EQUIPMENT</h4>
                  <p className="text-gray-300 text-xs leading-relaxed">Pro-standard break-away rims and heavy-duty adjustable posts.</p>
                </div>
              </div>
            </div>

            {/* Card 4: Safety Nets & Badminton Sheds (col-span-2) */}
            <div className="lg:col-span-2 bg-[#1f242b] rounded-xl border border-white/5 overflow-hidden flex flex-col md:flex-row">
              <div className="p-6 md:p-8 lg:p-10 flex-1 flex flex-col justify-center">
                <span className="text-[#AED500] text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">03 / STRUCTURES</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Safety Nets & Badminton Sheds</h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-md">
                  Custom structural sheds with 100% weatherproofing and integrated stadium lighting solutions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300 text-[11px] font-bold tracking-widest uppercase">
                    <span className="w-1.5 h-1.5 bg-[#AED500] rounded-full mr-4 shadow-[0_0_5px_#AED500]"></span> TRUSS DESIGN OPTIMIZATION
                  </li>
                  <li className="flex items-center text-gray-300 text-[11px] font-bold tracking-widest uppercase">
                    <span className="w-1.5 h-1.5 bg-[#AED500] rounded-full mr-4 shadow-[0_0_5px_#AED500]"></span> ANTI-CORROSION COATING
                  </li>
                  <li className="flex items-center text-gray-300 text-[11px] font-bold tracking-widest uppercase">
                    <span className="w-1.5 h-1.5 bg-[#AED500] rounded-full mr-4 shadow-[0_0_5px_#AED500]"></span> WIND-RESISTANT NETTING
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-[45%] p-6 md:p-8 flex items-center justify-center bg-[#181c22]">
                <div className="relative w-full max-w-xs aspect-[4/3] bg-[#0c1015] rounded-sm border border-white/5 flex items-center justify-center shadow-inner">
                  <svg className="w-16 h-16 text-[#AED500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v4m0 0l-5 12m5-12l5 12" />
                      <circle cx="12" cy="4" r="2" strokeWidth="1.5" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 14h6" />
                  </svg>
                  <div className="absolute -bottom-2 -right-2 bg-[#AED500] text-black text-[9px] font-bold tracking-widest px-2.5 py-1.5 uppercase shadow-lg">
                    CAD READY
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5: Custom Iron Works (col-span-3) */}
            <div className="lg:col-span-3 bg-[#0c1219] rounded-xl border border-white/5 overflow-hidden flex flex-col md:flex-row">
              <div className="p-6 md:p-10 lg:p-12 md:w-[40%] flex flex-col justify-center">
                <span className="text-[#AED500] text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">04 / FABRICATION</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Custom Iron Works</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Bespoke metal fabrication for spectator galleries, player dugouts, and equipment storage facilities. Heavy-duty MS piping with powder-coated finish.
                </p>
              </div>
              <div className="md:w-[60%] flex h-64 md:h-auto">
                <div className="w-1/3 relative border-r border-[#000]">
                    <Image src="/assets/Home/Nagole.png" alt="Welding" fill className="object-cover filter contrast-125 brightness-75" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1219] via-transparent to-transparent"></div>
                </div>
                <div className="w-1/3 relative border-r border-[#000]">
                    <Image src="/assets/Home/Kondapur.png" alt="Metal Pipe" fill className="object-cover grayscale brightness-50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1219] via-transparent to-transparent"></div>
                </div>
                <div className="w-1/3 relative">
                    <Image src="/assets/Home/Kukatpally.png" alt="Stacked Pipes" fill className="object-cover hue-rotate-[180deg] brightness-50 contrast-125" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1219] via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 border-t border-white/5 bg-[#0b0f15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left side: Text & Info */}
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Build Your <span className="text-[#AED500]">Arena.</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-12 max-w-md">
                Ready to elevate your facility? Fill out the form and our technical engineers will contact you within 24 hours with a preliminary site assessment and quote.
              </p>
              
              <div className="space-y-6">
                {/* Email Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#1c2433] rounded-md flex items-center justify-center flex-shrink-0 shadow-inner">
                    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-[11px] font-bold tracking-widest uppercase mb-1">Email Us</p>
                    <p className="text-white text-sm font-medium">b2b@hitzone.sports</p>
                  </div>
                </div>
                
                {/* Phone Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#1c2433] rounded-md flex items-center justify-center flex-shrink-0 shadow-inner">
                    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-[11px] font-bold tracking-widest uppercase mb-1">Direct Line</p>
                    <p className="text-white text-sm font-medium">+91 9000 123 456</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side: Form Panel */}
            <div className="w-full lg:w-7/12">
              <B2BForm />
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}
