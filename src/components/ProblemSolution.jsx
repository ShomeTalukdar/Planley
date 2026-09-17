import React, { useState } from 'react';
import { 
  XCircle, 
  CheckCircle2, 
  AlertOctagon, 
  Sparkles, 
  TrendingDown, 
  TrendingUp, 
  Lock, 
  Zap, 
  ShieldAlert, 
  HeartHandshake,
  ArrowRight
} from 'lucide-react';

export default function ProblemSolution({ onOpenWaitlist }) {
  const [activeTab, setActiveTab] = useState('both'); // 'both', 'stress', 'growth'

  const painPoints = [
    {
      title: "Frictionless UPI Amnesia",
      desc: "Instant QR scans trick the brain into feeling zero spending pain. By day 20, 84% of students wonder where ₹5,000 went.",
      icon: TrendingDown,
      badge: "The Day-20 Crisis"
    },
    {
      title: "Zero Emergency Safety Net",
      desc: "A broken laptop charger or sudden lab fee forces awkward, anxiety-ridden phone calls home or desperate borrowing.",
      icon: AlertOctagon,
      badge: "Financial Vulnerability"
    },
    {
      title: "Predatory Campus BNPL Traps",
      desc: "App stores push 'Pay Later' schemes with hidden late charges that quietly damage students' CIBIL credit profiles before graduation.",
      icon: ShieldAlert,
      badge: "Silent Debt Traps"
    },
    {
      title: "Dry, Ineffective Spreadsheets",
      desc: "Excel sheets and manual accounting apps require tedious typing. Over 90% of students abandon them within 5 days.",
      icon: XCircle,
      badge: "High Friction"
    },
  ];

  const planeySolutions = [
    {
      title: "Psychological Budget Rings",
      desc: "Real-time 50% & 75% threshold alerts trigger a 2-second behavioral pause before impulse QR purchases, keeping you safe all 30 days.",
      icon: Zap,
      badge: "Behavioral AI"
    },
    {
      title: "Automated Micro-Savings Lock",
      desc: "Every coffee or meal sweeps a painless 10% round-up into your locked Emergency Pot, growing a digital plant you can rely on.",
      icon: Lock,
      badge: "Liquid Safe Vault"
    },
    {
      title: "Community-Based Trust Lending",
      desc: "Transparent student peer-to-peer micro-loans (max ₹5,000, 2-week cycle at 2% capped rate) mediated safely with campus trust scores.",
      icon: HeartHandshake,
      badge: "Phase 3 Innovation"
    },
    {
      title: "Adaptive Byte-Sized Learning",
      desc: "No boring lectures. Learn finance through 3-minute story cards, gamified campus quizzes, and Spotify-style audio pods.",
      icon: Sparkles,
      badge: "Gamified & Audio"
    },
  ];

  return (
    <section className="py-20 bg-[#FFFDF7] relative border-y border-[#EBE5D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F5E4] border border-[#62A842]/20 text-[#3D7838] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#E9B838]" />
            <span>The Reality Check</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#24331C] tracking-tight">
            Stop Surviving Month-to-Month. <br />
            Start <span className="doodle-underline text-[#3D7838]">Growing With Structure.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#53634B]">
            Traditional banking was built for salaried corporate workers. PLANEY is built specifically around the irregular allowances, impulse triggers, and social pressures of student life.
          </p>
        </div>

        {/* Dual Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column: The Stress (Old Way) */}
          <div className="bg-[#FAF7EE]/70 rounded-3xl p-6 sm:p-8 border border-red-200/70 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-red-100/50 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#EBE5D3]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600">The Problem</span>
                  <h3 className="text-2xl font-black text-[#24331C] mt-0.5">The Student Money Stress</h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-red-600 shadow-inner">
                  <XCircle className="w-6 h-6" />
                </div>
              </div>

              <p className="text-sm text-[#53634B] my-5 italic">
                "Students spend without structure, save without strategy, and learn finance only after costly mistakes."
              </p>

              <div className="space-y-4">
                {painPoints.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-white/80 rounded-2xl p-4 border border-[#EBE5D3] hover:border-red-300 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-bold text-[#24331C]">{item.title}</h4>
                            <span className="text-[10px] font-semibold px-2 py-0.2 bg-red-50 text-red-600 rounded-full border border-red-100">
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-xs text-[#53634B] mt-1 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EBE5D3] flex items-center justify-between text-xs text-[#7E8D76]">
              <span>Result: Constant anxiety & zero savings</span>
              <span className="font-bold text-red-600">Stress Cycle</span>
            </div>
          </div>

          {/* Right Column: The Growth (The PLANEY Solution) */}
          <div className="bg-gradient-to-b from-[#E8F5E4]/50 to-[#FFFFFF] rounded-3xl p-6 sm:p-8 border-2 border-[#62A842]/40 shadow-xl shadow-[#3D7838]/5 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-36 h-36 bg-[#E9B838]/20 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#62A842]/20">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#3D7838]">The PLANEY System</span>
                  <h3 className="text-2xl font-black text-[#24331C] mt-0.5">The Organic Growth Engine</h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#3D7838] flex items-center justify-center text-[#E9B838] shadow-md shadow-[#3D7838]/20">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
              </div>

              <p className="text-sm text-[#2C5728] my-5 font-medium">
                "Auto-generated daily spending limits, real-time behavioral nudges, and locked savings that build lifelong discipline without the stress."
              </p>

              <div className="space-y-4">
                {planeySolutions.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-white rounded-2xl p-4 border border-[#62A842]/30 hover:border-[#3D7838] transition-all hover:shadow-md hover:shadow-[#3D7838]/5">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-xl bg-[#E8F5E4] text-[#3D7838] flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-bold text-[#24331C]">{item.title}</h4>
                            <span className="text-[10px] font-semibold px-2 py-0.2 bg-[#E8F5E4] text-[#3D7838] rounded-full border border-[#62A842]/20">
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-xs text-[#53634B] mt-1 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#62A842]/20 flex items-center justify-between">
              <span className="text-xs font-bold text-[#3D7838]">Outcome: Peace of mind + ₹15K+ saved/yr</span>
              <button
                onClick={onOpenWaitlist}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3D7838] hover:text-[#2C5728] group"
              >
                <span>Experience Growth</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
