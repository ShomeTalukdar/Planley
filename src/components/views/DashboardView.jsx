import React from 'react';
import { 
  Wallet, 
  TrendingUp, 
  TrendingDown, 
  Shield, 
  Lock, 
  Zap, 
  IndianRupee, 
  Sparkles, 
  QrCode, 
  CheckCircle2, 
  AlertTriangle,
  Flame,
  PieChart as PieIcon,
  Clock
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { 
  MoneyGardenerWheelbarrow, 
  MoneyGardenerThumbsUp, 
  MoneyGardenerWatch, 
  GlassMasonJar 
} from '../Mascot';

export default function DashboardView() {
  const {
    monthlyAllowance,
    walletBalance,
    emergencyBalance,
    daysRemaining,
    safeDailyAllowance,
    totalSpent,
    spentPercent,
    isJarLocked,
    transactions,
    setQuickPayOpen,
    autoRoundup,
    setAutoRoundup
  } = useApp();

  // Categories spending sum
  const categoryTotals = transactions.reduce((acc, tx) => {
    acc[tx.category] = (acc[tx.category] || 0) + tx.amount;
    return acc;
  }, {});

  const categories = [
    { name: 'Food', color: '#4ADE80', bg: 'bg-[#4ADE80]' },
    { name: 'Mess/Canteen', color: '#22C55E', bg: 'bg-[#22C55E]' },
    { name: 'Books', color: '#FACC15', bg: 'bg-[#FACC15]' },
    { name: 'Subscriptions', color: '#86EFAC', bg: 'bg-[#86EFAC]' },
    { name: 'Transit', color: '#38BDF8', bg: 'bg-[#38BDF8]' },
    { name: 'Shopping', color: '#F472B6', bg: 'bg-[#F472B6]' },
  ];

  return (
    <div className="space-y-6 pb-12">
      
      {/* 1. Top Metrics Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Total Balance */}
        <div className="botanical-card p-5 relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
              Wallet Balance
            </span>
            <div className="w-8 h-8 rounded-xl bg-[#4ADE80]/15 text-[#4ADE80] flex items-center justify-center">
              <Wallet className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white flex items-center">
            <IndianRupee className="w-5 h-5 text-[#4ADE80]" />
            {walletBalance.toLocaleString()}
          </div>
          <span className="text-[11px] font-semibold text-[#86EFAC] mt-1 block">
            Safe to spend for {daysRemaining} days
          </span>
        </div>

        {/* Safe-to-Spend Daily Allowance */}
        <div className="botanical-card p-5 relative overflow-hidden border-[#4ADE80]/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
              Safe Daily Cap
            </span>
            <div className="w-8 h-8 rounded-xl bg-[#FACC15]/15 text-[#FACC15] flex items-center justify-center">
              <Zap className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-[#FACC15] flex items-center">
            <IndianRupee className="w-5 h-5" />
            {safeDailyAllowance}
            <span className="text-xs font-bold text-[#94A3B8] ml-1">/day</span>
          </div>
          <span className="text-[11px] text-[#94A3B8] mt-1 block">
            Dynamic algorithm pacing
          </span>
        </div>

        {/* Monthly Pocket Money / Allowance */}
        <div className="botanical-card p-5 relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
              Monthly Allowance
            </span>
            <div className="w-8 h-8 rounded-xl bg-[#1E293B] text-white flex items-center justify-center">
              <IndianRupee className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white flex items-center">
            <IndianRupee className="w-5 h-5 text-[#94A3B8]" />
            {monthlyAllowance.toLocaleString()}
          </div>
          <span className="text-[11px] text-[#94A3B8] mt-1 block">
            Reset in {daysRemaining} days
          </span>
        </div>

        {/* Total Spent */}
        <div className="botanical-card p-5 relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
              Total Spent
            </span>
            <div className="w-8 h-8 rounded-xl bg-red-500/15 text-red-400 flex items-center justify-center">
              <TrendingDown className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white flex items-center">
            <IndianRupee className="w-5 h-5 text-red-400" />
            {totalSpent.toLocaleString()}
          </div>
          <span className="text-[11px] font-bold text-red-400 mt-1 block">
            {spentPercent}% of monthly allowance
          </span>
        </div>

      </div>

      {/* 2. Psychological Spending Control Bar with Dynamic Nudge Triggers */}
      <div className="botanical-card p-6 border border-[#4ADE80]/25 relative overflow-hidden">
        
        {/* Nudge Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#4ADE80] bg-[#4ADE80]/15 px-2.5 py-0.5 rounded-full border border-[#4ADE80]/30">
              Psychological Budget Guard
            </span>
            <h3 className="font-extrabold text-lg text-white mt-1">
              Allowance Burn Rate Tracker
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#94A3B8]">
              Consumed: <strong className="text-white">{spentPercent}%</strong>
            </span>
            <span className="text-xs font-bold text-[#4ADE80] bg-[#1E2B1E] px-2.5 py-1 rounded-lg border border-[#4ADE80]/20">
              Safe Zone
            </span>
          </div>
        </div>

        {/* The Progress Bar with Markers */}
        <div className="relative w-full bg-[#0A0D0A] h-5 rounded-full border border-[#4ADE80]/20 p-1 mb-6">
          {/* Active fill */}
          <div 
            className={`h-full rounded-full transition-all duration-700 ${
              spentPercent >= 90 
                ? 'bg-gradient-to-r from-amber-500 to-red-500' 
                : spentPercent >= 75 
                ? 'bg-gradient-to-r from-[#22C55E] via-[#FACC15] to-[#F59E0B]' 
                : 'bg-gradient-to-r from-[#22C55E] to-[#4ADE80]'
            }`}
            style={{ width: `${spentPercent}%` }}
          />

          {/* 50% Marker */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-[#FACC15] opacity-80" />
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-bold text-[#FACC15]">
            50% Alert
          </span>

          {/* 75% Marker */}
          <div className="absolute top-0 bottom-0 left-3/4 w-0.5 bg-[#F59E0B] opacity-90" />
          <span className="absolute -top-5 left-3/4 -translate-x-1/2 text-[10px] font-bold text-[#F59E0B]">
            75% Lock
          </span>
        </div>

        {/* Dynamic Mascot Nudge Feedback based on spent percentage */}
        <div className="bg-[#111611] rounded-2xl p-4 border border-[#4ADE80]/20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {spentPercent >= 75 ? (
              <MoneyGardenerWatch className="w-14 h-14 shrink-0" />
            ) : (
              <MoneyGardenerThumbsUp className="w-14 h-14 shrink-0" />
            )}
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                <span>The Money Gardener Coach</span>
                <span className="text-[10px] font-bold px-2 py-0.2 bg-[#4ADE80]/20 text-[#4ADE80] rounded">
                  Behavioral Nudge
                </span>
              </h4>
              <p className="text-xs text-[#86EFAC] mt-1 font-medium">
                {spentPercent >= 90
                  ? "🚨 Critical Threshold: 90%+ budget exhausted! Discretionary QR payments locked to 48-hr cool-off."
                  : spentPercent >= 75 
                  ? "⚠️ Caution: 75% budget consumed! Tapping non-essential categories triggers a 2-second mindfulness pause."
                  : spentPercent >= 50 
                  ? "👍 Halfway there! You are pacing your spending smoothly. Stick to the ₹" + safeDailyAllowance + "/day guideline."
                  : "🌱 Beautiful discipline! Your wallet is healthy and your emergency plant jar is thriving."
                }
              </p>
            </div>
          </div>

          <button
            onClick={() => setQuickPayOpen(true)}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#161D16] hover:bg-[#1E2B1E] text-xs font-bold text-[#4ADE80] border border-[#4ADE80]/30 transition-colors whitespace-nowrap cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Test UPI Nudge</span>
          </button>
        </div>

      </div>

      {/* 3. Emergency Mason Jar & Expense Breakdown Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Live Emergency Fund Mason Jar */}
        <div className="lg:col-span-5 botanical-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#4ADE80]/15 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">🪴</span>
                <div>
                  <h3 className="font-extrabold text-base text-white">
                    Emergency Fund Sprout Jar
                  </h3>
                  <p className="text-[11px] text-[#94A3B8]">Automated 10% round-up liquid vault</p>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#FACC15]/20 text-[#FACC15] border border-[#FACC15]/30 flex items-center gap-1">
                <Lock className="w-3 h-3" />
                Locked
              </span>
            </div>

            {/* Glowing Mason Jar Component */}
            <div className="py-2 flex items-center justify-center">
              <GlassMasonJar balance={emergencyBalance} isLocked={isJarLocked} />
            </div>

            <div className="text-center mt-2">
              <div className="text-2xl font-black text-white flex items-center justify-center">
                <IndianRupee className="w-5 h-5 text-[#FACC15]" />
                {emergencyBalance.toLocaleString()}
              </div>
              <span className="text-xs text-[#86EFAC] font-semibold">
                ≈ 1.5 Months Safety Buffer Accumulated
              </span>
            </div>
          </div>

          {/* Auto-Roundup Toggle */}
          <div className="mt-4 pt-3 border-t border-[#4ADE80]/15 flex items-center justify-between text-xs">
            <span className="text-[#94A3B8]">UPI Auto-Roundup</span>
            <button
              onClick={() => setAutoRoundup(!autoRoundup)}
              className={`px-3 py-1 rounded-full text-[11px] font-bold transition-colors cursor-pointer ${
                autoRoundup 
                  ? 'bg-[#4ADE80] text-[#0A0D0A]' 
                  : 'bg-[#1E2B1E] text-[#94A3B8]'
              }`}
            >
              {autoRoundup ? "Active (10%)" : "Paused"}
            </button>
          </div>
        </div>

        {/* Right Column: Categorized Expense Breakdown & Recent Transactions */}
        <div className="lg:col-span-7 botanical-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#4ADE80]/15 mb-4">
              <div className="flex items-center gap-2">
                <PieIcon className="w-5 h-5 text-[#4ADE80]" />
                <h3 className="font-extrabold text-base text-white">
                  Categorized Expense Breakdown
                </h3>
              </div>
              <span className="text-xs font-bold text-[#86EFAC]">
                {transactions.length} Transactions
              </span>
            </div>

            {/* Category Bars */}
            <div className="space-y-3 mb-6">
              {categories.map((cat) => {
                const amount = categoryTotals[cat.name] || 0;
                const percent = totalSpent > 0 ? Math.round((amount / totalSpent) * 100) : 0;
                return (
                  <div key={cat.name} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#94A3B8] font-medium flex items-center gap-2">
                        <span className={`w-2.5 h-2.5 rounded-full ${cat.bg}`} />
                        {cat.name}
                      </span>
                      <span className="text-white font-bold">
                        ₹{amount.toLocaleString()} ({percent}%)
                      </span>
                    </div>
                    <div className="w-full bg-[#0A0D0A] h-2 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${cat.bg}`}
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Recent Transactions List */}
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#4ADE80]" />
              Recent UPI Activity
            </h4>

            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
              {transactions.slice(0, 4).map((tx) => (
                <div 
                  key={tx.id}
                  className="bg-[#111611] p-2.5 rounded-xl border border-[#4ADE80]/15 flex items-center justify-between text-xs"
                >
                  <div>
                    <span className="font-bold text-white block">{tx.name}</span>
                    <span className="text-[10px] text-[#94A3B8]">{tx.category} • {tx.time}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-black text-white block">₹{tx.amount}</span>
                    {tx.roundUp > 0 && (
                      <span className="text-[10px] font-bold text-[#FACC15]">
                        +₹{tx.roundUp} locked 🌱
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>

          <div className="mt-4 pt-3 border-t border-[#4ADE80]/15 flex items-center justify-between">
            <span className="text-[11px] text-[#94A3B8]">
              Automated sync via Account Aggregator
            </span>
            <button
              onClick={() => setQuickPayOpen(true)}
              className="text-xs font-bold text-[#4ADE80] hover:text-white cursor-pointer"
            >
              + Log New Transaction
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
