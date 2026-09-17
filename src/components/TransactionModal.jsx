import React, { useState } from 'react';
import { 
  X, 
  Zap, 
  IndianRupee, 
  QrCode, 
  Sparkles, 
  CheckCircle2,
  Lock
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function TransactionModal() {
  const { quickPayOpen, setQuickPayOpen, logTransaction, autoRoundup, walletBalance } = useApp();
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(120);
  const [category, setCategory] = useState('Food');
  const [successToast, setSuccessToast] = useState(false);

  if (!quickPayOpen) return null;

  const categories = ['Food', 'Mess/Canteen', 'Books', 'Subscriptions', 'Transit', 'Shopping'];
  const roundUp = autoRoundup ? Math.ceil(amount * 0.1) : 0;
  const totalDeduction = Number(amount) + roundUp;

  const handlePay = (e) => {
    e.preventDefault();
    if (!name || amount <= 0) return;
    if (walletBalance < totalDeduction) {
      alert("Insufficient safe balance in wallet!");
      return;
    }

    const success = logTransaction(name, amount, category, roundUp);
    if (success) {
      setSuccessToast(true);
      setTimeout(() => {
        setSuccessToast(false);
        setQuickPayOpen(false);
        setName('');
        setAmount(120);
      }, 900);
    }
  };

  const setPreset = (presetName, presetAmt, presetCat) => {
    setName(presetName);
    setAmount(presetAmt);
    setCategory(presetCat);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-150">
      <div className="bg-[#161D16] border border-[#4ADE80]/30 rounded-3xl max-w-md w-full p-6 shadow-2xl relative text-white">
        
        {/* Close Button */}
        <button
          onClick={() => setQuickPayOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-xl text-[#94A3B8] hover:text-white hover:bg-[#1E2B1E] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-[#4ADE80] text-[#0A0D0A] flex items-center justify-center font-black">
            <QrCode className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#4ADE80]">
              UPI Instant Expense Logger
            </span>
            <h3 className="text-lg font-black text-white">
              Log Campus Expense
            </h3>
          </div>
        </div>

        {/* Quick Presets */}
        <div className="mb-4">
          <span className="text-[11px] font-bold text-[#94A3B8] block mb-1.5">
            Quick Campus Shortcuts:
          </span>
          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => setPreset('Canteen Cold Coffee', 120, 'Food')}
              className="px-2.5 py-1 rounded-lg bg-[#111611] hover:bg-[#1E2B1E] border border-[#4ADE80]/20 text-[11px] font-semibold text-[#86EFAC] cursor-pointer"
            >
              Cold Coffee (₹120)
            </button>
            <button
              type="button"
              onClick={() => setPreset('Hostel Mess Guest Meal', 180, 'Mess/Canteen')}
              className="px-2.5 py-1 rounded-lg bg-[#111611] hover:bg-[#1E2B1E] border border-[#4ADE80]/20 text-[11px] font-semibold text-[#86EFAC] cursor-pointer"
            >
              Mess Meal (₹180)
            </button>
            <button
              type="button"
              onClick={() => setPreset('Project Printout & Binding', 85, 'Books')}
              className="px-2.5 py-1 rounded-lg bg-[#111611] hover:bg-[#1E2B1E] border border-[#4ADE80]/20 text-[11px] font-semibold text-[#86EFAC] cursor-pointer"
            >
              Printouts (₹85)
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handlePay} className="space-y-4">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] mb-1">
              Expense Name / Merchant
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Chai & Samosa"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0D0A] border border-[#4ADE80]/20 text-sm font-semibold text-white focus:outline-none focus:border-[#4ADE80]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] mb-1">
              Amount (₹)
            </label>
            <div className="relative">
              <IndianRupee className="w-4 h-4 text-[#94A3B8] absolute left-3 top-3" />
              <input
                type="number"
                min="1"
                required
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#0A0D0A] border border-[#4ADE80]/20 text-base font-black text-[#4ADE80] focus:outline-none focus:border-[#4ADE80]"
              />
            </div>
          </div>

          {/* Category Chips */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] mb-1.5">
              Category
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer truncate ${
                    category === cat
                      ? 'bg-[#4ADE80] text-[#0A0D0A] shadow-sm'
                      : 'bg-[#0A0D0A] text-[#94A3B8] border border-[#4ADE80]/15 hover:border-[#4ADE80]/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Auto-Roundup Preview Banner */}
          {autoRoundup && (
            <div className="bg-[#1A231A] p-3 rounded-xl border border-[#FACC15]/30 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="text-base">🪙</span>
                <div>
                  <span className="font-bold text-[#FACC15] block">Auto-Roundup Active</span>
                  <span className="text-[10px] text-[#94A3B8]">Locks into Emergency Jar</span>
                </div>
              </div>
              <span className="text-xs font-black text-[#FEF08A] bg-[#0A0D0A] px-2 py-0.5 rounded border border-[#FACC15]/20">
                +₹{roundUp}
              </span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#22C55E] to-[#4ADE80] text-[#0A0D0A] font-black text-xs uppercase tracking-wider shadow-lg shadow-[#4ADE80]/20 hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            {successToast ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-[#0A0D0A]" />
                <span>Payment Logged & Swept!</span>
              </>
            ) : (
              <>
                <Zap className="w-4 h-4 fill-current text-[#0A0D0A]" />
                <span>Simulate UPI Scan & Pay ₹{totalDeduction}</span>
              </>
            )}
          </button>
        </form>

      </div>
    </div>
  );
}
