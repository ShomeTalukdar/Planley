import React, { useState, useEffect } from 'react';
import { Sprout, Sparkles, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { ChromeIcon } from './BrandIcons';

export default function Navbar({ onOpenWaitlist, onOpenChromeDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Smart Wallet', href: '#wallet' },
    { label: 'AI Decision Bot', href: '#ai-bot' },
    { label: 'Wishlist Calc', href: '#wishlist' },
    { label: 'Learning Hub', href: '#learning' },
    { label: 'Trust Lending', href: '#trust-lending' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#FAF7EE]/90 backdrop-blur-md shadow-sm border-b border-[#EBE5D3]' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-[#3D7838] flex items-center justify-center text-white shadow-md shadow-[#3D7838]/20 group-hover:scale-105 transition-transform">
            <Sprout className="w-6 h-6 text-[#E9B838]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-extrabold text-2xl tracking-tight text-[#24331C]">
                PLANEY
              </span>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#E8F5E4] text-[#3D7838] border border-[#62A842]/20">
                v2.5
              </span>
            </div>
            <p className="text-[10px] uppercase tracking-wider font-semibold text-[#62A842] -mt-1">
              by INNOVE-X
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-2 text-sm font-medium text-[#24331C]/80 hover:text-[#3D7838] hover:bg-[#E8F5E4]/60 rounded-full transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenChromeDemo}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full text-[#24331C] bg-white border border-[#E9B838] hover:bg-[#FDF6E2] shadow-sm transition-all hover:scale-102 cursor-pointer"
          >
            <ChromeIcon className="w-4 h-4 text-[#D89B2B]" />
            <span>Add to Chrome</span>
            <span className="px-1.5 py-0.2 bg-[#E9B838]/20 text-[#D89B2B] text-[10px] rounded font-bold">Free</span>
          </button>

          <button
            onClick={onOpenWaitlist}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full text-white bg-[#3D7838] hover:bg-[#2C5728] shadow-md shadow-[#3D7838]/25 hover:shadow-lg hover:shadow-[#3D7838]/30 transition-all hover:scale-102 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E9B838]" />
            <span>Get Early Access</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-[#24331C] hover:bg-[#E8F5E4] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFDF7] border-b border-[#EBE5D3] px-6 py-5 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-base font-medium text-[#24331C] border-b border-[#FAF7EE] hover:text-[#3D7838]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenChromeDemo();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-xl text-[#24331C] bg-white border border-[#E9B838]"
              >
                <ChromeIcon className="w-4 h-4 text-[#D89B2B]" />
                Add to Chrome Extension
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWaitlist();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-white bg-[#3D7838] rounded-xl shadow-md"
              >
                <Sparkles className="w-4 h-4 text-[#E9B838]" />
                Get Early Access Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
