'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 md:top-10 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 md:px-6 z-50 transition-all duration-300">
      {/* Main Navbar Bar */}
      <div className="flex items-center justify-between bg-[#000720]/10 backdrop-blur-md px-4 md:px-5 rounded-[24px] border-[5px] border-[#EBF0FF] shadow-sm" style={{ height: '75px' }}>

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 px-1 md:px-3">
          <img src="/logo.png" alt="KrediLoop Logo" className="h-7 md:h-8 w-auto object-contain" />
          <span className="text-lg md:text-xl font-bold text-[#2F5CF0] tracking-wide">KrediLoop</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <a href="#" className="hover:text-blue-600 transition-colors">Contact us</a>
          <a href="/#faqs" className="hover:text-blue-600 transition-colors">FAQs</a>
        </nav>

        {/* Desktop CTA */}
        <Link href="/waitlist" className="hidden md:flex bg-[#0B163A] !text-white text-[#FFFFFF] px-6 rounded-[8px] text-[15px] font-semibold tracking-wide items-center justify-center transition-all duration-300 hover:bg-blue-900 hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(47,92,240,0.4)]" style={{ height: '38px' }}>
          Join Waitlist
        </Link>

        {/* Mobile: Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl border border-[#EBF0FF] bg-white/20 backdrop-blur-sm gap-[5px] transition-all"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[2px] bg-[#0B163A] rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-[2px] bg-[#0B163A] rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[2px] bg-[#0B163A] rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-[280px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col bg-white/95 backdrop-blur-md rounded-[20px] border border-[#EBF0FF] shadow-xl px-6 py-5 gap-4">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-[16px] font-medium text-[#0B163A] hover:text-[#2F5CF0] transition-colors py-1 border-b border-gray-100">
            Home
          </Link>
          <a href="#" onClick={() => setMenuOpen(false)} className="text-[16px] font-medium text-[#0B163A] hover:text-[#2F5CF0] transition-colors py-1 border-b border-gray-100">
            Contact us
          </a>
          <a href="/#faqs" onClick={() => setMenuOpen(false)} className="text-[16px] font-medium text-[#0B163A] hover:text-[#2F5CF0] transition-colors py-1 border-b border-gray-100">
            FAQs
          </a>
          <Link
            href="/waitlist"
            onClick={() => setMenuOpen(false)}
            className="w-full block text-center bg-[#0B163A] !text-white text-[#FFFFFF] px-6 py-3 rounded-[10px] text-[15px] font-semibold tracking-wide hover:bg-blue-900 transition-colors mt-1"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </header>
  );
}
