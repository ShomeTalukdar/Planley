import React, { useState } from 'react';
import { 
  Sprout, 
  Sparkles, 
  ArrowRight, 
  Heart, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Award, 
  GraduationCap 
} from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from './BrandIcons';
import { FAQ_DATA } from '../data/content';
import confetti from 'canvas-confetti';

export default function Footer({ onOpenWaitlist }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [footerEmail, setFooterEmail] = useState('');
  const [footerCollege, setFooterCollege] = useState('');
  const [toastMessage, setToastMessage] = useState(null);

  const handleInlineSubmit = (e) => {
    e.preventDefault();
    if (!footerEmail) return;

    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.85 }
    });

    setToastMessage(`Welcome aboard! Reserved VIP spot for ${footerCollege || 'your campus'}.`);
    setFooterEmail('');
    setFooterCollege('');

    setTimeout(() => {
      setToastMessage(null);
    }, 5000);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <footer className="bg-[#24331C] text-[#FAF7EE] relative pt-20 pb-12 overflow-hidden">
      
      {/* Decorative Green Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#3D7838]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Pre-Footer FAQ Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E9B838] bg-[#FAF7EE]/10 px-3 py-1 rounded-full border border-[#E9B838]/20">
              Clear & Transparent
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl mt-3 text-white">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {FAQ_DATA.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-[#2C3E23]/70 rounded-2xl border border-[#3D5232] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-[#E9B838] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#E9B838] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#7E8D76] shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#D1DACB] leading-relaxed border-t border-[#3D5232]/60 pt-3 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* High-Converting Pre-Footer Banner */}
        <div className="bg-gradient-to-r from-[#2C5728] via-[#3D7838] to-[#2C5728] rounded-3xl p-8 sm:p-12 border border-[#62A842]/30 shadow-2xl text-center max-w-4xl mx-auto mb-20 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#3D7838] flex items-center justify-center mx-auto shadow-md">
              <Sprout className="w-6 h-6 text-[#E9B838]" />
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Ready to take control of your financial freedom?
            </h2>

            <p className="text-sm text-[#E8F5E4] leading-relaxed">
              Join 1,280+ university students planting disciplined habits today. No spreadsheets, no anxiety, 100% free for students.
            </p>

            {/* Inline Quick Signup */}
            <form onSubmit={handleInlineSubmit} className="pt-2 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                required
                value={footerEmail}
                onChange={(e) => setFooterEmail(e.target.value)}
                placeholder="Enter college or personal email"
                className="flex-1 px-4 py-3 rounded-xl bg-white text-[#24331C] text-xs font-semibold placeholder:text-[#7E8D76] focus:outline-none focus:ring-2 focus:ring-[#E9B838]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#E9B838] hover:bg-[#D89B2B] text-[#24331C] text-xs font-extrabold uppercase tracking-wider transition-all hover:scale-102 flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
              >
                <span>Get Early Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {toastMessage && (
              <div className="p-2.5 rounded-xl bg-white text-[#2C5728] text-xs font-bold animate-in fade-in">
                {toastMessage}
              </div>
            )}
          </div>
        </div>

        {/* Campus Ambassador Callout Banner */}
        <div className="bg-[#1C2716] rounded-2xl p-4 sm:p-6 border border-[#3D5232] flex flex-col sm:flex-row items-center justify-between gap-4 mb-14">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E9B838] text-[#24331C] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Become an INNOVE-X Campus Lead</h4>
              <p className="text-xs text-[#A8B7A0]">
                Lead PLANEY on your campus. Earn stipend rewards, official letters of recommendation, and exclusive swag.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenWaitlist}
            className="px-4 py-2 rounded-xl bg-[#FAF7EE]/10 hover:bg-[#FAF7EE]/20 text-xs font-bold text-white border border-[#EBE5D3]/30 whitespace-nowrap cursor-pointer"
          >
            Apply as Campus Lead
          </button>
        </div>

        {/* Footer Navigation & Brand Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#3D5232]/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#3D7838] flex items-center justify-center text-white">
                <Sprout className="w-5 h-5 text-[#E9B838]" />
              </div>
              <span className="font-display font-black text-2xl text-white tracking-tight">
                PLANEY
              </span>
              <span className="text-[11px] font-semibold text-[#62A842] uppercase tracking-wider ml-1">
                by INNOVE-X
              </span>
            </div>
            <p className="text-xs text-[#A8B7A0] leading-relaxed max-w-sm">
              Plant your money, grow your future. An AI-powered behavioral wallet designed to curb impulsive spending and build lifelong wealth for Gen-Z.
            </p>
            <div className="text-[11px] text-[#7E8D76]">
              Finalist at CubeX Ideathon 2K25 • Incubated by INNOVE-X Labs
            </div>
          </div>

          {/* Links 1 */}
          <div className="md:col-span-2 space-y-2.5">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#E9B838]">
              Product
            </h5>
            <ul className="space-y-1.5 text-xs text-[#A8B7A0]">
              <li><a href="#wallet" className="hover:text-white transition-colors">Smart E-Wallet</a></li>
              <li><a href="#ai-bot" className="hover:text-white transition-colors">AI Decision Bot</a></li>
              <li><a href="#wishlist" className="hover:text-white transition-colors">Wishlist Sprout</a></li>
              <li><a href="#learning" className="hover:text-white transition-colors">Adaptive Hub</a></li>
              <li><a href="#trust-lending" className="hover:text-white transition-colors">Trust Lending</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="md:col-span-2 space-y-2.5">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#E9B838]">
              Ecosystem
            </h5>
            <ul className="space-y-1.5 text-xs text-[#A8B7A0]">
              <li><button onClick={onOpenWaitlist} className="hover:text-white text-left cursor-pointer">Chrome Extension</button></li>
              <li><button onClick={onOpenWaitlist} className="hover:text-white text-left cursor-pointer">Campus Ambassadors</button></li>
              <li><a href="#trust-lending" className="hover:text-white transition-colors">Peer Escrow Protocol</a></li>
              <li><a href="#learning" className="hover:text-white transition-colors">FinTech Audio Pods</a></li>
            </ul>
          </div>

          {/* Trust & Compliance */}
          <div className="md:col-span-3 space-y-2.5">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#E9B838]">
              Safety & Security
            </h5>
            <p className="text-xs text-[#A8B7A0] leading-relaxed">
              PLANEY uses RBI-regulated Account Aggregator protocols with end-to-end 256-bit encryption. Zero data selling.
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs text-[#62A842]">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Encrypted & Non-Custodial</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7E8D76]">
          <div>
            © {new Date().getFullYear()} PLANEY by INNOVE-X. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[#A8B7A0]">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#E9B838] transition-colors" aria-label="Twitter">
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#E9B838] transition-colors" aria-label="LinkedIn">
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#E9B838] transition-colors" aria-label="Instagram">
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#E9B838] transition-colors" aria-label="GitHub">
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Responsible AI</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
