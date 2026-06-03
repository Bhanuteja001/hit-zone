"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/home' },
    { name: 'Booking', path: '/booking' },
    { name: 'B2B', path: '/b2b' },
    { name: 'Gallery', path: '/gallery' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#020B1A] border-b border-white/10 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 w-full">
          {/* Left Section: Logo */}
          <div className="flex-1 flex items-center justify-start">
            <Link href="/" className=''>
              <Image src="/Logo.png" alt="Logo" width={150} height={100} className="w-auto h-10 object-contain" />
            </Link>
          </div>

          {/* Center Section: Navigation Links */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-2">
            {navLinks.map((item) => {
              const isActive = pathname === item.path || (item.path === '/home' && pathname === '/');
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`relative px-4 py-2 text-sm font-bold tracking-wider rounded-full transition-all duration-200 ${
                    isActive 
                      ? 'text-[#AED500] bg-black' 
                      : 'text-gray-300 hover:text-[#AED500] hover:bg-black'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Right Section: Location Icon, Button, and Mobile Menu */}
          <div className="flex-1 flex items-center justify-end space-x-3 sm:space-x-4">
            {/* Location Icon */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=HitZone+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Location"
              className="text-gray-300 hover:text-white transition-colors p-1 cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </a>

            {/* Custom Background Button */}
            <Link href="/b2b#contact" className="hidden sm:inline-flex">
              <button className="w-full inline-flex cursor-pointer items-center justify-center font-bold bg-[#AED500] text-[#020B1A] px-5 py-1 text-[20px] rounded-sm shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0">
                GET A QUOTE
              </button>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none p-1"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#020B1A] border-t border-white/10 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navLinks.map((item) => {
            const isActive = pathname === item.path || (item.path === '/home' && pathname === '/');
            return (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-3 text-base font-bold transition-all duration-200 rounded-md ${
                  isActive
                    ? 'text-[#AED500] bg-black/50'
                    : 'text-gray-300 hover:text-[#AED500] hover:bg-black/50'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          {/* Show GET A QUOTE button on mobile sizes where the main one is hidden (smaller than sm) */}
          <div className="pt-4 pb-2 border-t border-white/10 sm:hidden">
            <Link href="/b2b#contact" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="w-full flex items-center justify-center font-bold bg-[#AED500] text-[#020B1A] px-5 py-3 text-[18px] rounded-sm shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer">
                GET A QUOTE
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
