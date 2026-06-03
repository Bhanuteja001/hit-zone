import Image from 'next/image';
import Link from 'next/link';

export default function ArenaSection() {
  return (
    <section id="choose-arena" className="bg-[#020B1A] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 uppercase">
              <span className="text-white">Choose your </span>
              <span className="text-[#AED500]">Arena</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Select a specialized facility based on your training discipline and location requirements.
            </p>
          </div>
          
          {/* Load More Button */}
          <div className="mt-6 md:mt-0">
            <Link href="/booking">
              <button className="px-6 py-2.5 bg-[#AED500] hover:bg-[#c2ed15] text-[#020B1A] font-bold text-sm tracking-wider uppercase rounded-sm shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer">
                Load More
              </button>
            </Link>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Card: Kukatpally */}
          <Link 
            href="/booking" 
            className="lg:col-span-2 relative h-[400px] md:h-[450px] rounded-xl overflow-hidden group cursor-pointer border border-white/5 block"
          >
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 bg-gray-800">
              <Image 
                src="/assets/Home/Kukatpally.png" 
                alt="Kukatpally Branch" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale "
              />
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            
            {/* Content */}
            <div className="absolute inset-0 p-6 md:p-8 flex items-end">
              <div className="flex justify-between items-end w-full">
                <div className="max-w-md">
                  <span className="inline-block bg-[#AED500] text-[#020B1A] text-[10px] font-bold px-2 py-1 uppercase tracking-widest mb-3 rounded-sm">
                    Primary Tech Hub
                  </span>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2 uppercase tracking-wide">
                    Kukatpally Branch
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The flagship arena featuring 12 data-integrated nets and multi-sport tracks.
                  </p>
                </div>
                
                {/* Arrow Button */}
                <div className="hidden sm:flex w-12 h-12 bg-[#AED500] rounded-md items-center justify-center text-[#020B1A] flex-shrink-0 group-hover:bg-[#c2ed15] transition-colors shadow-lg">
                  <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Secondary Card: Kondapur */}
          <Link 
            href="/booking" 
            className="lg:col-span-1 relative h-[400px] md:h-[450px] rounded-xl overflow-hidden group border border-white/5 flex flex-col justify-end block"
          >
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 bg-gray-900">
              <Image 
                src="/assets/Home/Kondapur.png" 
                alt="Kondapur Branch" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700 "
              />
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            
            {/* Content */}
            <div className="relative z-10 p-6 md:p-8 w-full flex flex-col justify-end h-full">
              <span className="self-start bg-[#3A6DFF] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest mb-3 rounded-sm">
                Racket Specialists
              </span>
              <h3 className="text-2xl font-extrabold text-white mb-2 uppercase tracking-wide">
                Kondapur Branch
              </h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Elite court tracking for tennis and badminton enthusiasts.
              </p>
              <span className="w-full bg-[#1f2937] hover:bg-gray-700 text-white text-sm font-semibold py-3.5 rounded-md transition-colors text-center uppercase tracking-wider border border-white/10 block">
                Select Location
              </span>
            </div>
          </Link>

          {/* Wide Card: Nagole */}
          <Link 
            href="/booking" 
            className="lg:col-span-3 relative h-[350px] md:h-[300px] rounded-xl overflow-hidden group cursor-pointer block"
          >
             {/* Background Image Placeholder */}
             <div className="absolute inset-0 bg-gray-800">
              <Image 
                src="/assets/Home/Nagole.png" 
                alt="Nagole Branch" 
                fill 
                className="object-center group-hover:scale-105 transition-transform duration-700 "
              />
            </div>
            {/* Gradient Overlay - Darker on the right side for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black/95 via-black/80 to-transparent"></div>
            
            {/* Content */}
            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end md:justify-center md:items-end">
              <div className="md:w-1/2 md:pl-8 text-left">
                <span className="inline-block border border-[#AED500]/50 text-[#AED500] text-[10px] font-bold px-2 py-1 uppercase tracking-widest mb-3 rounded-sm bg-black/30 backdrop-blur-sm">
                  High Intensity
                </span>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3 uppercase tracking-wide">
                  Nagole Branch
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
                  The Box Arena: Engineered for high-speed performance and box-cricket dynamics.
                </p>
                <span className="text-[#AED500] hover:text-[#c2ed15] text-sm font-bold uppercase flex items-center group/btn transition-colors tracking-widest">
                  Enter Nagole Arena 
                  <svg className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
