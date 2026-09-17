import React, { useState } from 'react';
import { 
  HeartHandshake, 
  ShieldCheck, 
  Sparkles, 
  IndianRupee, 
  Calendar, 
  Users, 
  Lock, 
  CheckCircle2, 
  AlertTriangle, 
  Plus, 
  ArrowRight,
  GraduationCap
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function TrustLendingView() {
  const [loanAmount, setLoanAmount] = useState(2500);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [requestPurpose, setRequestPurpose] = useState('Semester Examination Fee');
  const [requestAmount, setRequestAmount] = useState(1800);
  const [toastMsg, setToastMsg] = useState(null);

  const interestRate = 0.02; // 2% flat transparent fee
  const interestAmount = Math.round(loanAmount * interestRate);
  const totalRepayment = loanAmount + interestAmount;

  const borrowers = [
    {
      id: 'b-1',
      name: 'Rohan Deshmukh',
      college: 'IIT Delhi, 3rd Year',
      trustScore: 98,
      amount: 2200,
      tenure: '14 days',
      purpose: 'Semester Engineering Lab Manuals',
      repaidCycles: 4,
      verifiedEmail: 'rohan.d@iitd.ac.in'
    },
    {
      id: 'b-2',
      name: 'Ananya Sen',
      college: 'BITS Pilani, 2nd Year',
      trustScore: 96,
      amount: 1500,
      tenure: '14 days',
      purpose: 'Hostel WiFi & Cloud Server Host Fee',
      repaidCycles: 3,
      verifiedEmail: 'ananya@pilani.bits-pilani.ac.in'
    },
    {
      id: 'b-3',
      name: 'Varun Iyer',
      college: 'Delhi University (SRCC)',
      trustScore: 94,
      amount: 3000,
      tenure: '14 days',
      purpose: 'Placement Suit Dry Clean & Portfolio Print',
      repaidCycles: 2,
      verifiedEmail: 'varun.i@srcc.du.ac.in'
    }
  ];

  const handleLend = (borrower) => {
    setToastMsg(`Escrow Locked: ₹${borrower.amount} deployed to ${borrower.name}. Repayment of ₹${Math.round(borrower.amount * 1.02)} scheduled in 14 days!`);
    setTimeout(() => setToastMsg(null), 5000);
  };

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    setShowRequestModal(false);
    setToastMsg(`Request for ₹${requestAmount} posted to verified campus escrow network! 2 peers need to vouch.`);
    setTimeout(() => setToastMsg(null), 5000);
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FACC15] bg-[#FACC15]/10 px-2.5 py-0.5 rounded-full border border-[#FACC15]/20">
            Phase 3 Innovation
          </span>
          <h2 className="font-extrabold text-2xl text-white mt-1">
            Community-Based Trust Lending
          </h2>
          <p className="text-xs text-[#94A3B8]">
            Peer-to-peer micro-liquidity capped at ₹5,000 for 14 days. Zero 36% APR debt traps.
          </p>
        </div>

        <button
          onClick={() => setShowRequestModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#161D16] hover:bg-[#1E2B1E] text-white border border-[#4ADE80]/30 font-bold text-xs transition-all cursor-pointer whitespace-nowrap"
        >
          <Plus className="w-4 h-4 text-[#4ADE80]" />
          <span>Request Micro-Loan</span>
        </button>
      </div>

      {toastMsg && (
        <div className="p-4 rounded-2xl bg-[#1A231A] border border-[#4ADE80] text-xs font-bold text-[#86EFAC] flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Micro-Loan Calculator Card */}
      <div className="botanical-card p-6 sm:p-8">
        <div className="flex items-center justify-between pb-4 border-b border-[#4ADE80]/15 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-[#4ADE80]/20 text-[#4ADE80] flex items-center justify-center font-bold">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white">Micro-Emergency Simulator</h3>
              <p className="text-xs text-[#94A3B8]">Strict ₹5,000 cap • 14-day student cycles • 2% flat rate</p>
            </div>
          </div>
          <span className="text-xs font-black text-[#4ADE80] bg-[#1E2B1E] px-3 py-1 rounded-full border border-[#4ADE80]/30">
            2% Flat Community Fee
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-[#94A3B8] mb-2">
                <span className="uppercase tracking-wider">Simulated Amount</span>
                <span className="text-2xl font-black text-white bg-[#0A0D0A] px-3.5 py-1 rounded-xl border border-[#4ADE80]/20">
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
                className="w-full accent-[#4ADE80] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#64748B] font-semibold mt-1">
                <span>₹500 (Minor Glitch)</span>
                <span>₹2,500 (Project / Books)</span>
                <span>₹5,000 (Maximum Cap)</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 bg-[#111611] p-3.5 rounded-2xl border border-[#4ADE80]/15 text-center text-xs">
              <div>
                <span className="text-[10px] text-[#94A3B8] block">Cycle</span>
                <span className="font-extrabold text-white block mt-0.5">14 Days</span>
              </div>
              <div className="border-x border-[#4ADE80]/15">
                <span className="text-[10px] text-[#94A3B8] block">2% Fee</span>
                <span className="font-extrabold text-[#4ADE80] block mt-0.5">+₹{interestAmount}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#94A3B8] block">Repayment</span>
                <span className="font-black text-white block mt-0.5">₹{totalRepayment}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#111611] p-5 rounded-2xl border border-[#4ADE80]/20 space-y-3 text-xs">
            <div className="flex items-center gap-2 text-[#4ADE80] font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Smart Escrow Protection Guarantee</span>
            </div>
            <p className="text-[11px] text-[#94A3B8] leading-relaxed">
              Funds are held in an automated UPI escrow until borrower student ID and 2 campus peer endorsements are verified. Zero predatory collection agents.
            </p>
            <div className="text-[11px] text-[#FACC15] bg-[#161D16] p-2.5 rounded-xl border border-[#FACC15]/20">
              Campus Trust Score builds automatically upon timely 14-day completion!
            </div>
          </div>

        </div>
      </div>

      {/* Verified Campus Borrowers List */}
      <div>
        <h3 className="font-extrabold text-lg text-white mb-3 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-[#4ADE80]" />
          Verified Campus Micro-Loan Requests
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {borrowers.map((b) => (
            <div key={b.id} className="botanical-card p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs pb-2 border-b border-[#4ADE80]/15 mb-3">
                  <div>
                    <h4 className="font-extrabold text-sm text-white">{b.name}</h4>
                    <span className="text-[10px] text-[#94A3B8]">{b.college}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#4ADE80]/20 text-[#4ADE80]">
                      Trust {b.trustScore}/100
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs mb-4">
                  <div className="flex justify-between">
                    <span className="text-[#94A3B8]">Purpose:</span>
                    <span className="font-bold text-white text-right max-w-[170px] truncate">{b.purpose}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#94A3B8]">Amount Needed:</span>
                    <span className="font-black text-[#4ADE80]">₹{b.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#94A3B8]">Verified Student ID:</span>
                    <span className="text-[10px] font-mono text-[#86EFAC]">{b.verifiedEmail}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleLend(b)}
                className="w-full py-2.5 rounded-xl bg-[#4ADE80] hover:bg-[#22C55E] text-[#0A0D0A] font-black text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-md"
              >
                <span>Fund via Escrow (₹{b.amount})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Request Modal */}
      {showRequestModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="bg-[#161D16] border border-[#4ADE80]/30 rounded-3xl max-w-md w-full p-6 shadow-2xl relative text-white">
            <h3 className="text-lg font-black text-white mb-4 flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-[#4ADE80]" />
              Request Student Micro-Loan
            </h3>

            <form onSubmit={handleRequestSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] mb-1">
                  Purpose / Need
                </label>
                <input
                  type="text"
                  required
                  value={requestPurpose}
                  onChange={(e) => setRequestPurpose(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0D0A] border border-[#4ADE80]/20 text-sm font-semibold text-white focus:outline-none focus:border-[#4ADE80]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] mb-1">
                  Loan Amount (Max ₹5,000)
                </label>
                <input
                  type="number"
                  min="500"
                  max="5000"
                  required
                  value={requestAmount}
                  onChange={(e) => setRequestAmount(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0D0A] border border-[#4ADE80]/20 text-sm font-bold text-[#4ADE80] focus:outline-none focus:border-[#4ADE80]"
                />
              </div>

              <div className="p-3 bg-[#111611] rounded-xl border border-[#4ADE80]/15 text-xs text-[#94A3B8] space-y-1">
                <div className="flex justify-between">
                  <span>Repayment Tenure:</span>
                  <strong className="text-white">14 Days</strong>
                </div>
                <div className="flex justify-between">
                  <span>Flat 2% Service Fee:</span>
                  <strong className="text-[#4ADE80]">+₹{Math.round(requestAmount * 0.02)}</strong>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowRequestModal(false)}
                  className="flex-1 py-2.5 rounded-xl bg-[#111611] text-xs font-bold text-[#94A3B8] hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-[#4ADE80] text-[#0A0D0A] text-xs font-black uppercase tracking-wider cursor-pointer"
                >
                  Post to Campus Escrow
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
