import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Ban, 
  HelpCircle, 
  IndianRupee, 
  Zap, 
  Lightbulb, 
  ArrowRight,
  TrendingDown,
  ShoppingBag
} from 'lucide-react';
import { BOT_PRESETS } from '../data/content';

export default function AiDecisionBot({ onOpenWaitlist }) {
  const [itemName, setItemName] = useState('Trending White Sneakers');
  const [price, setPrice] = useState(1899);
  const [balance, setBalance] = useState(3800);
  const [daysLeft, setDaysLeft] = useState(14);
  const [necessity, setNecessity] = useState(2); // 1 to 5
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [verdict, setVerdict] = useState(null);

  const calculateVerdict = (itemP, bal, days, nec) => {
    setIsAnalyzing(true);
    setVerdict(null);

    setTimeout(() => {
      const dailyBudgetNow = Math.round(bal / (days || 1));
      const balanceAfter = bal - itemP;
      const dailyBudgetAfter = Math.round(balanceAfter / (days || 1));
      const priceToBalanceRatio = (itemP / bal) * 100;

      let decision = '';
      let status = '';
      let reasoning = '';
      let recommendation = '';
      let badgeColor = '';

      if (balanceAfter < 500) {
        decision = 'SKIP & SAVE';
        status = 'critical';
        badgeColor = 'bg-red-500 text-white';
        reasoning = `Emergency alert! Buying this leaves you with only ₹${balanceAfter} for ${days} days (₹${dailyBudgetAfter}/day). This is below college survival threshold!`;
        recommendation = `Lock ₹200 today into your Sprout Jar instead. If you still want it next month, PLANEY will auto-budget it.`;
      } else if (nec >= 4 && priceToBalanceRatio < 35) {
        decision = 'BUY NOW';
        status = 'safe';
        badgeColor = 'bg-[#3D7838] text-white';
        reasoning = `High necessity item! Even after spending ₹${itemP}, you maintain ₹${dailyBudgetAfter}/day, which stays well inside your safe comfort zone.`;
        recommendation = `Go ahead! Use an authorized student discount coupon via the PLANEY Chrome extension to save an extra 10%.`;
      } else if (priceToBalanceRatio > 40 || nec <= 2) {
        decision = 'WAIT 7 DAYS';
        status = 'caution';
        badgeColor = 'bg-[#E9B838] text-[#24331C]';
        reasoning = `Classic impulse danger! This item eats ${Math.round(priceToBalanceRatio)}% of your remaining money. Delaying gratification by 7 days reduces regret by 83%.`;
        recommendation = `Put this item in your PLANEY '7-Day Impulse Vault'. If the desire remains after 7 days, PLANEY will approve a micro-installment plan.`;
      } else {
        decision = 'WAIT 3 DAYS';
        status = 'caution';
        badgeColor = 'bg-[#E9B838] text-[#24331C]';
        reasoning = `Moderate impact. It reduces your daily budget from ₹${dailyBudgetNow} to ₹${dailyBudgetAfter}. A 72-hour cooldown is strongly recommended.`;
        recommendation = `Sleep on it tonight. If it's a true necessity, split the payment with a student friend or find a pre-owned peer listing.`;
      }

      setVerdict({
        decision,
        status,
        badgeColor,
        reasoning,
        recommendation,
        dailyBudgetNow,
        dailyBudgetAfter,
        itemPrice: itemP,
        savingsPot: Math.min(itemP, 500)
      });
      setIsAnalyzing(false);
    }, 800);
  };

  const handleSelectPreset = (preset) => {
    setItemName(preset.name);
    setPrice(preset.price);
    setBalance(preset.balance);
    setDaysLeft(preset.daysLeft);
    setNecessity(preset.necessity);
    calculateVerdict(preset.price, preset.balance, preset.daysLeft, preset.necessity);
  };

  return (
    <section id="ai-bot" className="py-20 bg-[#FAF7EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F5E4] border border-[#62A842]/20 text-[#3D7838] text-xs font-bold uppercase tracking-wider mb-4">
            <Bot className="w-4 h-4 text-[#3D7838]" />
            <span>Interactive Simulator</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#24331C] tracking-tight">
            The 2-Second <span className="doodle-underline text-[#3D7838]">AI Decision Bot</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#53634B]">
            Before scanning that UPI QR code or hitting "Buy Now", let PLANEY's behavioral AI calculate whether your wallet can truly afford it without regret.
          </p>
        </div>

        {/* Quick Presets Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <span className="text-xs font-bold text-[#53634B] flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#E9B838]" />
            Try Common Student Scenarios:
          </span>
          {BOT_PRESETS.map((preset) => (
            <button
              key={preset.name}
              onClick={() => handleSelectPreset(preset)}
              className="px-3 py-1.5 rounded-full bg-white hover:bg-[#FDF6E2] border border-[#EBE5D3] hover:border-[#E9B838] text-xs font-medium text-[#24331C] transition-all hover:scale-105 shadow-2xs cursor-pointer"
            >
              {preset.name} (₹{preset.price})
            </button>
          ))}
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Input Controls Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#EBE5D3] shadow-lg">
            <div className="flex items-center justify-between pb-4 border-b border-[#EBE5D3] mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-[#E8F5E4] text-[#3D7838] flex items-center justify-center font-bold">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#24331C]">Item & Budget Parameters</h3>
                  <p className="text-xs text-[#7E8D76]">Real-time student context calculator</p>
                </div>
              </div>
              <span className="text-xs font-bold text-[#62A842] bg-[#E8F5E4] px-2.5 py-1 rounded-full">
                AI Engine Active
              </span>
            </div>

            <div className="space-y-5">
              {/* Item Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#53634B] mb-1.5">
                  Item Description
                </label>
                <input
                  type="text"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#EBE5D3] bg-[#FFFDF7] text-[#24331C] font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-[#3D7838]"
                  placeholder="e.g. Wireless noise cancelling earbuds"
                />
              </div>

              {/* Price & Current Balance */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#53634B] mb-1.5">
                    Item Price (₹)
                  </label>
                  <div className="relative">
                    <IndianRupee className="w-4 h-4 text-[#7E8D76] absolute left-3 top-3" />
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(Number(e.target.value))}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#EBE5D3] bg-[#FFFDF7] text-[#24331C] font-bold text-sm focus:outline-none focus:ring-2 focus:ring-[#3D7838]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#53634B] mb-1.5">
                    Current Wallet Balance (₹)
                  </label>
                  <div className="relative">
                    <IndianRupee className="w-4 h-4 text-[#7E8D76] absolute left-3 top-3" />
                    <input
                      type="number"
                      value={balance}
                      onChange={(e) => setBalance(Number(e.target.value))}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#EBE5D3] bg-[#FFFDF7] text-[#24331C] font-bold text-sm focus:outline-none focus:ring-2 focus:ring-[#3D7838]"
                    />
                  </div>
                </div>
              </div>

              {/* Days left in Month Slider */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-[#53634B] mb-1.5">
                  <span className="uppercase tracking-wider">Days Until Next Allowance</span>
                  <span className="text-sm font-black text-[#3D7838] bg-[#E8F5E4] px-2 py-0.5 rounded">
                    {daysLeft} Days
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={daysLeft}
                  onChange={(e) => setDaysLeft(Number(e.target.value))}
                  className="w-full accent-[#3D7838] cursor-pointer"
                />
              </div>

              {/* Necessity Rating Stars */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-[#53634B] mb-2">
                  <span className="uppercase tracking-wider">Necessity / Urgency Rating</span>
                  <span className="text-xs font-bold text-[#D89B2B]">
                    {necessity === 1 && "1/5 - Pure Impulse / Boredom"}
                    {necessity === 2 && "2/5 - Nice to have, not urgent"}
                    {necessity === 3 && "3/5 - Social or semi-useful"}
                    {necessity === 4 && "4/5 - Academic / High priority"}
                    {necessity === 5 && "5/5 - Absolute Medical / Vital"}
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setNecessity(lvl)}
                      className={`py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                        necessity === lvl
                          ? 'bg-[#3D7838] text-white border-[#3D7838] shadow-sm'
                          : 'bg-[#FAF7EE] text-[#53634B] border-[#EBE5D3] hover:border-[#62A842]'
                      }`}
                    >
                      {lvl}★
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Trigger */}
              <button
                onClick={() => calculateVerdict(price, balance, daysLeft, necessity)}
                disabled={isAnalyzing}
                className="w-full py-3.5 rounded-2xl bg-[#3D7838] hover:bg-[#2C5728] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#3D7838]/20 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isAnalyzing ? (
                  <>
                    <Sparkles className="w-4 h-4 animate-spin text-[#E9B838]" />
                    <span>Analyzing Behavioral Impact...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 text-[#E9B838]" />
                    <span>Run 2-Second AI Verdict</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right: AI Output Verdict Card */}
          <div className="lg:col-span-6">
            {verdict ? (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#62A842]/40 shadow-xl relative overflow-hidden animate-in fade-in duration-300">
                <div className="flex items-center justify-between pb-4 border-b border-[#EBE5D3]">
                  <div className="flex items-center gap-2">
                    <Bot className="w-5 h-5 text-[#3D7838]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#53634B]">
                      PLANEY Behavioral Decision
                    </span>
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-sm ${verdict.badgeColor}`}>
                    {verdict.decision}
                  </span>
                </div>

                {/* Verdict Headline & Item */}
                <div className="my-5">
                  <div className="text-xs text-[#7E8D76]">Decision for:</div>
                  <div className="text-xl font-black text-[#24331C]">{itemName} — ₹{price.toLocaleString()}</div>
                </div>

                {/* Daily Spending Impact Pill */}
                <div className="bg-[#FAF7EE] rounded-2xl p-4 border border-[#EBE5D3] mb-5">
                  <div className="text-xs font-bold text-[#53634B] uppercase tracking-wider mb-2">
                    Daily Pocket Money Impact
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white p-2.5 rounded-xl border border-[#EBE5D3]">
                      <span className="text-[11px] text-[#7E8D76] block">Daily Budget Now</span>
                      <span className="text-base font-extrabold text-[#3D7838]">
                        ₹{verdict.dailyBudgetNow}/day
                      </span>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-[#EBE5D3]">
                      <span className="text-[11px] text-[#7E8D76] block">If You Buy</span>
                      <span className={`text-base font-extrabold ${verdict.dailyBudgetAfter < 150 ? 'text-red-600' : 'text-[#D89B2B]'}`}>
                        ₹{verdict.dailyBudgetAfter}/day
                      </span>
                    </div>
                  </div>
                </div>

                {/* AI Rationale & Advice */}
                <div className="space-y-4">
                  <div className="bg-[#E8F5E4]/60 rounded-2xl p-4 border border-[#62A842]/20">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#2C5728] mb-1">
                      <Lightbulb className="w-4 h-4 text-[#E9B838]" />
                      Behavioral Insight
                    </div>
                    <p className="text-xs text-[#24331C] leading-relaxed font-medium">
                      {verdict.reasoning}
                    </p>
                  </div>

                  <div className="bg-[#FFFDF7] rounded-2xl p-4 border border-[#EBE5D3]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#3D7838] mb-1">
                      <Sparkles className="w-4 h-4 text-[#E9B838]" />
                      Smart Student Alternative
                    </div>
                    <p className="text-xs text-[#53634B] leading-relaxed">
                      {verdict.recommendation}
                    </p>
                  </div>
                </div>

                {/* CTA inside output */}
                <div className="mt-6 pt-4 border-t border-[#EBE5D3] flex items-center justify-between">
                  <span className="text-xs text-[#7E8D76]">Available in Chrome & Mobile App</span>
                  <button
                    onClick={onOpenWaitlist}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3D7838] hover:text-[#2C5728]"
                  >
                    <span>Enable on your UPI apps</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              /* Default Welcome State */
              <div className="bg-white rounded-3xl p-8 border border-[#EBE5D3] shadow-md text-center flex flex-col items-center justify-center min-h-[420px]">
                <div className="w-16 h-16 rounded-3xl bg-[#E8F5E4] text-[#3D7838] flex items-center justify-center mb-4 text-3xl">
                  🤖
                </div>
                <h3 className="text-xl font-bold text-[#24331C]">Ready to Test Your Purchase?</h3>
                <p className="text-xs text-[#53634B] max-w-sm mt-2 leading-relaxed">
                  Choose a preset scenario above or customize your own parameters on the left, then click <strong>"Run 2-Second AI Verdict"</strong>.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-[#FAF7EE] rounded-full text-xs font-semibold text-[#62A842] border border-[#EBE5D3]">
                  <Sparkles className="w-4 h-4 text-[#E9B838]" />
                  Simulates student daily burn rate & regret probability
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
