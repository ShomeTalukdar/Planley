import React from 'react';
import { 
  Sprout, 
  Sparkles, 
  ArrowRight, 
  Trophy, 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  HeartHandshake, 
  CheckCircle2,
  Users
} from 'lucide-react';
import InteractiveWallet from './InteractiveWallet';

export default function Hero({ onOpenWaitlist }) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Organic Background Blobs & Decorative Patterns */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#E8F5E4] blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-[#FDF6E2] blur-3xl opacity-70 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Ideathon & Trust Credibility Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EBE5D3] shadow-sm text-xs font-semibold text-[#24331C] mx-auto lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-[#62A842] animate-ping" />
              <Trophy className="w-3.5 h-3.5 text-[#E9B838]" />
              <span className="font-bold text-[#3D7838]">CubeX | Ideathon 2K25 Finalist</span>
              <span className="text-[#EBE5D3]">|</span>
              <span className="text-[#53634B] hidden sm:inline">Built for India's 120M+ UPI Students</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#24331C] tracking-tight leading-[1.12]">
              Plant Your Money, <br className="hidden sm:block" />
              <span className="doodle-underline text-[#3D7838]">
                Grow Your Future.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-[#53634B] font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              The all-in-one smart wallet designed for college students. Curb impulsive spending, automate savings, and master money through behavioral psychology and AI.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenWaitlist}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#3D7838] hover:bg-[#2C5728] text-white text-base font-bold tracking-wide shadow-xl shadow-[#3D7838]/25 hover:shadow-2xl hover:shadow-[#3D7838]/35 transition-all hover:scale-102 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <Sparkles className="w-5 h-5 text-[#E9B838] group-hover:rotate-12 transition-transform" />
                <span>Join Campus Early Access</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#wallet"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-[#FAF7EE] text-[#24331C] border border-[#EBE5D3] hover:border-[#3D7838]/40 text-base font-semibold shadow-sm transition-all hover:scale-102 flex items-center justify-center gap-2"
              >
                <span>Explore Live Demo</span>
                <span className="w-2 h-2 rounded-full bg-[#62A842]" />
              </a>
            </div>

            {/* Micro Trust Proof Points */}
            <div className="pt-4 border-t border-[#EBE5D3]/70 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#62A842] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#24331C]">100% Free</div>
                  <div className="text-[11px] text-[#7E8D76]">With active college ID</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#62A842] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#24331C]">Zero Debt Traps</div>
                  <div className="text-[11px] text-[#7E8D76]">No predatory BNPL</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#62A842] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#24331C]">Behavioral Nudges</div>
                  <div className="text-[11px] text-[#7E8D76]">Rewires impulse spend</div>
                </div>
              </div>
            </div>

            {/* Campus Social Proof Banner */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#3D7838] text-white flex items-center justify-center text-xs font-bold border-2 border-white">
                  R
                </div>
                <div className="w-8 h-8 rounded-full bg-[#E9B838] text-[#24331C] flex items-center justify-center text-xs font-bold border-2 border-white">
                  A
                </div>
                <div className="w-8 h-8 rounded-full bg-[#62A842] text-white flex items-center justify-center text-xs font-bold border-2 border-white">
                  P
                </div>
                <div className="w-8 h-8 rounded-full bg-[#24331C] text-white flex items-center justify-center text-[10px] font-bold border-2 border-white">
                  +1.2k
                </div>
              </div>
              <span className="text-xs font-semibold text-[#53634B]">
                <strong className="text-[#24331C]">1,280+ students</strong> from IIT, BITS & DU on waitlist
              </span>
            </div>

          </div>

          {/* Right Hero: Floating Interactive Wallet Screen */}
          <div className="lg:col-span-5 relative" id="wallet">
            {/* Decorative Floating Badges */}
            <div className="hidden sm:flex items-center gap-2.5 absolute -top-4 -left-8 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg border border-[#EBE5D3] z-20 animate-float">
              <div className="w-8 h-8 rounded-xl bg-[#E8F5E4] flex items-center justify-center text-lg">
                🌱
              </div>
              <div>
                <div className="text-xs font-bold text-[#2C5728]">Emergency Seed Locked</div>
                <div className="text-[10px] text-[#7E8D76]">₹680 compounding safely</div>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2 absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-2xl shadow-lg border border-[#EBE5D3] z-20 animate-float-delayed">
              <div className="w-2.5 h-2.5 rounded-full bg-[#E9B838] animate-ping" />
              <div>
                <div className="text-xs font-bold text-[#24331C]">75% Budget Guard</div>
                <div className="text-[10px] text-[#53634B]">Cooldown on impulse scans</div>
              </div>
            </div>

            {/* The Live Interactive Wallet Mockup */}
            <InteractiveWallet />
          </div>

        </div>
      </div>
    </section>
  );
}
