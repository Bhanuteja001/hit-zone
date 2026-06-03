export default function EcosystemSection() {
  const sports = [
    {
      title: "Indoor Cricket",
      subtitle: "Smart Analytics Nets",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 4.5l5 5-9.5 9.5-5-5 9.5-9.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 14l-2 2" />
          <circle cx="18" cy="6" r="1.5" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "Box Cricket",
      subtitle: "Pro Intensity Arena",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <rect x="4" y="4" width="6" height="6" rx="1" />
          <rect x="14" y="4" width="6" height="6" rx="1" />
          <rect x="4" y="14" width="6" height="6" rx="1" />
          <rect x="14" y="14" width="6" height="6" rx="1" />
        </svg>
      )
    },
    {
      title: "Tennis",
      subtitle: "Synthetic Pro Surfaces",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <circle cx="10" cy="10" r="6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 14l5 5" />
          <circle cx="19" cy="5" r="1.5" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "Badminton",
      subtitle: "Precision Lighting",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a2 2 0 100 4 2 2 0 000-4z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 18L5 5l7 3 7-3-4.5 13" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-[#020B1A] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column: Text and Stats */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 uppercase flex flex-col">
                <span className="text-white mb-1">The</span>
                <span className="text-[#AED500]">Ecosystem</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8 lg:mb-0">
                A fully integrated training environment spanning across disciplines.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="flex flex-col space-y-3 mt-8 lg:mt-0">
              <div className="flex items-center p-4 bg-[#111827] rounded-xl border border-white/5 w-full sm:w-80">
                <span className="text-4xl font-extrabold text-[#AED500] w-24">1.2K+</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight ml-2">
                  Athletes<br/>Trained
                </span>
              </div>
              <div className="flex items-center p-4 bg-[#111827] rounded-xl border border-white/5 w-full sm:w-80">
                <span className="text-4xl font-extrabold text-[#C7D2FE] w-24">350+</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight ml-2">
                  Daily<br/>Sessions
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Sport Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {sports.map((sport, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center p-6 bg-[#141b26] rounded-2xl border border-white/5 h-full min-h-[350px] hover:bg-[#1a2332] hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-lg"
              >
                {/* Icon Container */}
                <div className="w-[72px] h-[72px] bg-[#2a3441] rounded-[24px] flex items-center justify-center mb-8 shadow-inner">
                  {sport.icon}
                </div>
                
                {/* Text Content */}
                <h3 className="text-[13px] font-extrabold text-white uppercase tracking-widest text-center mb-2">
                  {sport.title}
                </h3>
                <p className="text-[11px] text-gray-500 text-center px-2">
                  {sport.subtitle}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
