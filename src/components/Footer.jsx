"use client";

import Link from 'next/link';
import Image from 'next/image';
export default function Footer() {
  return (
    <footer className="bg-[#020B1A] border-t border-white/5 pt-16 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 max-w-2xl w-full lg:w-auto">
            <div className="flex items-center text-[#AED500] flex-shrink-0">
              <Image src="/Logo.png" alt="Logo" width={150} height={100} className="w-auto h-10 object-contain" />
            </div>

            <p className="text-gray-400 leading-relaxed max-w-md">
              Redefining athletic training through data, engineering, and passion.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 w-full lg:w-auto">
            <h3 className="text-white font-bold tracking-widest uppercase text-xs flex-shrink-0">Quick Links:</h3>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              <li><Link href="/home" className="text-gray-400 hover:text-[#AED500] transition-colors font-bold tracking-wider text-xs">HOME</Link></li>
              <li><Link href="/booking" className="text-gray-400 hover:text-[#AED500] transition-colors font-bold tracking-wider text-xs">BOOKING</Link></li>
              <li><Link href="/b2b" className="text-gray-400 hover:text-[#AED500] transition-colors font-bold tracking-wider text-xs">B2B</Link></li>
              <li><Link href="/b2b#contact" className="text-gray-400 hover:text-[#AED500] transition-colors font-bold tracking-wider text-xs">CONTACT US</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 text-center flex items-center justify-center">
          <p className="text-gray-500 text-[10px] tracking-[0.2em] font-mono uppercase">
            © 2024 HITZONE MULTI-SPORT FACILITIES. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
