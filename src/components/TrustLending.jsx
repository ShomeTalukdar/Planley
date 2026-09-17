import React, { useState } from 'react';
import { 
  HeartHandshake, 
  ShieldCheck, 
  Sparkles, 
  IndianRupee, 
  Calendar, 
  Users, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle,
  Scale
} from 'lucide-react';

export default function TrustLending({ onOpenWaitlist }) {
  const [loanAmount, setLoanAmount] = useState(2500);
  const interestRate = 0.02; // 2% flat transparent student fee
  const interestAmount = Math.round(loanAmount * interestRate);
  const totalRepayment = loanAmount + interestAmount;

  return (
    <section id="trust-lending" className="py-20 bg-[#FAF7EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill & Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDF6E2] border border-[#E9B838] text-[#D89B2B] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D89B2B]" />
            <span>Phase 3 Innovation Spotlight</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#24331C] tracking-tight">
            Community-Based <br />
            <span className="doodle-underline text-[#3D7838]">Trust Lending</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#53634B]">
            Say goodbye to predatory 36% APR "Pay Later" apps. PLANEY connects verified batchmates for emergency micro-liquidity, held in app-mediated smart escrow.
          </p>
        </div>

        {/* The Showcase Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#EBE5D3] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Interactive Calculator */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#EBE5D3]">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#E8F5E4] text-[#3D7838] flex items-center justify-center font-bold">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#24331C]">Micro-Emergency Simulator</h3>
                    <p className="text-xs text-[#7E8D76]">Strict ₹5,000 cap • 14-day student cycles</p>
                  </div>
                </div>
                <span className="text-xs font-black text-[#3D7838] bg-[#E8F5E4] px-2.5 py-1 rounded-full">
                  Fair 2% Rate
                </span>
              </div>

              {/* Slider for Loan Amount */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-[#53634B] mb-2">
                  <span className="uppercase tracking-wider">Required Micro-Loan</span>
                  <span className="text-xl font-black text-[#24331C] bg-[#FAF7EE] px-3.5 py-1 rounded-xl border border-[#EBE5D3]">
                    ₹{loanAmount.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="250"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-[#3D7838] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#7E8D76] font-semibold mt-1">
                  <span>₹500 (Minor Glitch)</span>
                  <span>₹2,500 (Project / Travel)</span>
                  <span>₹5,000 (Maximum Cap)</span>
                </div>
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-3 gap-3 bg-[#FAF7EE] p-4 rounded-2xl border border-[#EBE5D3] text-center">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#7E8D76] block">Tenure</span>
                  <span className="text-sm font-extrabold text-[#24331C] flex items-center justify-center gap-1 mt-0.5">
                    <Calendar className="w-3.5 h-3.5 text-[#3D7838]" />
                    14 Days
                  </span>
                </div>
                <div className="border-x border-[#EBE5D3]">
                  <span className="text-[10px] uppercase font-bold text-[#7E8D76] block">Fair 2% Fee</span>
                  <span className="text-sm font-extrabold text-[#62A842] mt-0.5 block">
                    +₹{interestAmount}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#7E8D76] block">Total Repayment</span>
                  <span className="text-sm font-black text-[#24331C] mt-0.5 block">
                    ₹{totalRepayment.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Trust Safeguards */}
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2 text-[#53634B]">
                  <CheckCircle2 className="w-4 h-4 text-[#62A842] shrink-0 mt-0.5" />
                  <span><strong>App-Mediated Smart Escrow:</strong> Money is held securely; lenders are protected by verified campus endorsements.</span>
                </div>
                <div className="flex items-start gap-2 text-[#53634B]">
                  <CheckCircle2 className="w-4 h-4 text-[#62A842] shrink-0 mt-0.5" />
                  <span><strong>No Credit Bureau Blacklisting:</strong> Built for collegiate support, not punitive predatory cycles.</span>
                </div>
              </div>
            </div>

            {/* Right Column: Comparison Card */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#FFFDF7] to-[#FAF7EE] rounded-3xl p-6 border-2 border-[#EBE5D3] shadow-md flex flex-col justify-between">
              
              {/* Trust Score Visual */}
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#EBE5D3] mb-4">
                  <span className="text-xs font-bold text-[#24331C] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#3D7838]" />
                    Campus Trust Score
                  </span>
                  <span className="text-xs font-black text-[#3D7838] bg-[#E8F5E4] px-2 py-0.5 rounded">
                    890 / 1000
                  </span>
                </div>

                {/* Score meter */}
                <div className="space-y-3 mb-5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#53634B]">University ID Verification</span>
                    <span className="font-bold text-[#3D7838]">Verified ✓</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#53634B]">Peer Vouching Circle</span>
                    <span className="font-bold text-[#3D7838]">4 Batchmates ✓</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#53634B]">Past Micro-Cycles Paid</span>
                    <span className="font-bold text-[#3D7838]">100% On-Time ✓</span>
                  </div>
                </div>

                {/* Contrast with Predatory BNPL */}
                <div className="bg-white p-3.5 rounded-2xl border border-red-200/80 mb-4 text-xs">
                  <div className="flex items-center gap-1.5 text-red-600 font-bold mb-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Compare with Campus BNPL Apps</span>
                  </div>
                  <p className="text-[11px] text-[#53634B]">
                    Commercial payday apps charge up to ₹500 in processing fees + 36% penalty compounding for just a ₹2,000 advance.
                  </p>
                </div>
              </div>

              {/* Join Waitlist for Lending */}
              <button
                onClick={onOpenWaitlist}
                className="w-full py-3.5 rounded-2xl bg-[#3D7838] hover:bg-[#2C5728] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all hover:scale-102 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Apply for Phase 3 Campus Pilot</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
