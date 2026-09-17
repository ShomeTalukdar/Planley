import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Ban, 
  IndianRupee, 
  Zap, 
  Lightbulb, 
  ArrowRight,
  TrendingDown,
  ShoppingBag,
  ExternalLink,
  ShieldAlert,
  Flame,
  RotateCcw
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function AiBotView() {
  const { 
    walletBalance, 
    daysRemaining, 
    botScans, 
    recordBotScan, 
    avoidedImpulseTotal,
    safeDailyAllowance 
  } = useApp();

  const [itemName, setItemName] = useState('Trending Retro Sneakers');
  const [price, setPrice] = useState(2499);
  const [store, setStore] = useState('Myntra / Campus Store');
  const [category, setCategory] = useState('Fashion');
  const [urgency, setUrgency] = useState(2); // 1 = Pure want, 5 = Vital need
  const [scanning, setScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [activeVerdict, setActiveVerdict] = useState(null);

  const scanStepsText = [
    "Step 1: Checking current wallet balance vs. monthly burn...",
    "Step 2: Projecting upcoming mess fees, recharges & bills...",
    "Step 3: Calculating student labor hours & cognitive regret probability..."
  ];

  const handleRunScan = (e) => {
    e.preventDefault();
    if (scanning) return;

    setScanning(true);
    setActiveVerdict(null);
    setScanStep(0);

    // Step 1
    setTimeout(() => {
      setScanStep(1);
    }, 600);

    // Step 2
    setTimeout(() => {
      setScanStep(2);
    }, 1200);

    // Final Verdict
    setTimeout(() => {
      setScanning(false);

      const balanceAfter = walletBalance - price;
      const dailyAfter = Math.max(0, Math.round(balanceAfter / (daysRemaining || 1)));
      const priceRatio = (price / walletBalance) * 100;

      let verdictType = 'BUY NOW';
      let badgeStyle = 'bg-[#4ADE80] text-[#0A0D0A]';
      let icon = '🟢';
      let reasoning = '';
      let alternativeAction = '';

      if (balanceAfter < 500 || priceRatio > 55) {
        verdictType = 'TRAP ALERT / SKIP';
        badgeStyle = 'bg-red-500 text-white';
        icon = '🔴';
        reasoning = `Over budget! Spending ₹${price} drops your daily allowance from ₹${safeDailyAllowance}/day to an unlivable ₹${dailyAfter}/day. This is a classic end-of-month trap!`;
        alternativeAction = `Divert ₹250 to your Wishlist Greenhouse instead. You will save ₹${price} without financial guilt.`;
      } else if (urgency <= 2 || priceRatio > 35) {
        verdictType = 'WAIT 48 HOURS';
        badgeStyle = 'bg-[#FACC15] text-[#0A0D0A]';
        icon = '🟡';
        reasoning = `High impulse probability detected! This discretionary purchase consumes ${Math.round(priceRatio)}% of your available funds. 84% of students forget impulsive desires after 48 hours.`;
        alternativeAction = `We have activated a 48-hour Cool-off timer. If you still want it on Friday and your safe balance holds, PLANEY will auto-budget it.`;
      } else {
        verdictType = 'BUY NOW';
        badgeStyle = 'bg-[#4ADE80] text-[#0A0D0A]';
        icon = '🟢';
        reasoning = `Safe purchase! The necessity rating is high and your daily allowance stays comfortably at ₹${dailyAfter}/day.`;
        alternativeAction = `Proceed with purchase. Use code STUDENT20 on our Chrome companion to save up to 10% extra!`;
      }

      const result = {
        id: `scan-${Date.now()}`,
        name: itemName,
        price,
        verdict: verdictType,
        badgeStyle,
        icon,
        reasoning,
        alternativeAction,
        balanceAfter,
        dailyAfter,
        timestamp: 'Just now'
      };

      setActiveVerdict(result);
      recordBotScan(result);
    }, 2000);
  };

  const presetScans = [
    { name: 'Semester Core Reference Book', price: 540, store: 'College Bookstore', cat: 'Academic', urg: 5 },
    { name: 'Late-Night Swiggy Craving', price: 380, store: 'Swiggy', cat: 'Food', urg: 2 },
    { name: 'Smartwatch on 50% Flash Sale', price: 1999, store: 'Amazon', cat: 'Tech', urg: 2 },
    { name: 'Weekend Trip Fuel Share', price: 1200, store: 'Batchmate Split', cat: 'Transit', urg: 4 }
  ];

  return (
    <div className="space-y-6 pb-12">
      
      {/* Top Banner: Money Saved Counter */}
      <div className="bg-gradient-to-r from-[#161D16] via-[#1A231A] to-[#161D16] rounded-3xl p-6 border border-[#4ADE80]/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#4ADE80]/20 text-[#4ADE80] border border-[#4ADE80]/40 flex items-center justify-center text-3xl shrink-0">
            🛡️
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FACC15] bg-[#FACC15]/10 px-2.5 py-0.5 rounded border border-[#FACC15]/20">
              Behavioral Shield Engine
            </span>
            <h2 className="font-extrabold text-xl sm:text-2xl text-white mt-1">
              AI Impulse Buster Scan
            </h2>
            <p className="text-xs text-[#94A3B8]">
              Stops regrettable late-night checkout purchases before you blow your stipend.
            </p>
          </div>
        </div>

        {/* Counter Pill */}
        <div className="bg-[#0A0D0A] px-5 py-3 rounded-2xl border border-[#4ADE80]/30 text-right shrink-0">
          <span className="text-[11px] font-bold text-[#94A3B8] block">
            Total Regret-Free Savings
          </span>
          <div className="text-2xl font-black text-[#4ADE80] flex items-center justify-end">
            <IndianRupee className="w-5 h-5" />
            {avoidedImpulseTotal.toLocaleString()}
          </div>
          <span className="text-[10px] text-[#86EFAC] font-semibold">
            Saved by following AI verdicts
          </span>
        </div>
      </div>

      {/* Preset Quick Shortcuts */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-[#94A3B8] flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-[#FACC15]" />
          Quick Test Dilemmas:
        </span>
        {presetScans.map((p) => (
          <button
            key={p.name}
            onClick={() => {
              setItemName(p.name);
              setPrice(p.price);
              setStore(p.store);
              setCategory(p.cat);
              setUrgency(p.urg);
            }}
            className="px-3 py-1.5 rounded-full bg-[#161D16] hover:bg-[#1E2B1E] border border-[#4ADE80]/20 text-xs font-semibold text-[#86EFAC] hover:text-white transition-all cursor-pointer"
          >
            {p.name} (₹{p.price})
          </button>
        ))}
      </div>

      {/* Main Grid: Form & Output */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Purchase Diagnostics Input */}
        <div className="lg:col-span-6 botanical-card p-6 sm:p-8">
          <div className="flex items-center justify-between pb-4 border-b border-[#4ADE80]/15 mb-6">
            <h3 className="font-extrabold text-base text-white flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#4ADE80]" />
              Purchase Parameters
            </h3>
            <span className="text-xs font-bold text-[#FACC15]">2-Second Diagnostic</span>
          </div>

          <form onSubmit={handleRunScan} className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] mb-1">
                Item Name
              </label>
              <input
                type="text"
                required
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0D0A] border border-[#4ADE80]/20 text-sm font-semibold text-white focus:outline-none focus:border-[#4ADE80]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] mb-1">
                  Price (₹)
                </label>
                <div className="relative">
                  <IndianRupee className="w-4 h-4 text-[#94A3B8] absolute left-3 top-3" />
                  <input
                    type="number"
                    min="1"
                    required
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#0A0D0A] border border-[#4ADE80]/20 text-base font-black text-[#4ADE80] focus:outline-none focus:border-[#4ADE80]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] mb-1">
                  Store / App
                </label>
                <input
                  type="text"
                  value={store}
                  onChange={(e) => setStore(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0D0A] border border-[#4ADE80]/20 text-sm font-semibold text-white focus:outline-none focus:border-[#4ADE80]"
                />
              </div>
            </div>

            {/* Urgency Want vs Need Slider */}
            <div>
              <div className="flex items-center justify-between text-[11px] font-bold text-[#94A3B8] mb-1.5">
                <span className="uppercase tracking-wider">Urgency: Want vs. Vital Need</span>
                <span className="text-xs font-black text-[#FACC15]">
                  {urgency === 1 && "1/5 - Boredom Impulse"}
                  {urgency === 2 && "2/5 - Want, but can wait"}
                  {urgency === 3 && "3/5 - Social or semi-useful"}
                  {urgency === 4 && "4/5 - Academic Priority"}
                  {urgency === 5 && "5/5 - Absolute Vital"}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={urgency}
                onChange={(e) => setUrgency(Number(e.target.value))}
                className="w-full accent-[#4ADE80] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#64748B] mt-1 font-semibold">
                <span>Pure Want 🛍️</span>
                <span>Balanced ⚖️</span>
                <span>Critical Need 📚</span>
              </div>
            </div>

            {/* Scanning Button */}
            <button
              type="submit"
              disabled={scanning}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#22C55E] to-[#4ADE80] text-[#0A0D0A] font-black text-xs uppercase tracking-wider shadow-lg shadow-[#4ADE80]/20 hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-2 mt-4 disabled:opacity-60"
            >
              {scanning ? (
                <>
                  <Sparkles className="w-4 h-4 animate-spin text-[#0A0D0A]" />
                  <span>Scanning Student Wallet Diagnostic...</span>
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 fill-current text-[#0A0D0A]" />
                  <span>Run 2-Second AI Impulse Scan</span>
                </>
              )}
            </button>
          </form>

          {/* Diagnostic Steps live feed */}
          {scanning && (
            <div className="mt-4 p-4 rounded-2xl bg-[#0A0D0A] border border-[#4ADE80]/30 space-y-2 text-xs animate-in fade-in">
              <span className="font-bold text-[#4ADE80] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-ping" />
                Diagnostic Scanning Active...
              </span>
              <p className="text-white font-mono text-[11px]">
                {scanStepsText[scanStep]}
              </p>
            </div>
          )}
        </div>

        {/* Right Column: AI Output Recommendation Card */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          {activeVerdict ? (
            <div className="botanical-card p-6 sm:p-8 border-2 border-[#4ADE80]/40 shadow-2xl relative overflow-hidden animate-in fade-in duration-300">
              <div className="flex items-center justify-between pb-4 border-b border-[#4ADE80]/15 mb-4">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-[#4ADE80]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
                    AI Recommendation Result
                  </span>
                </div>
                <span className={`px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider ${activeVerdict.badgeStyle}`}>
                  {activeVerdict.verdict}
                </span>
              </div>

              <div className="mb-4">
                <span className="text-xs text-[#94A3B8]">Decision on:</span>
                <h4 className="text-xl font-black text-white">{activeVerdict.name} — ₹{activeVerdict.price.toLocaleString()}</h4>
              </div>

              {/* Impact Breakdown */}
              <div className="bg-[#111611] p-4 rounded-2xl border border-[#4ADE80]/20 mb-4 grid grid-cols-2 gap-3 text-center">
                <div className="bg-[#161D16] p-2.5 rounded-xl border border-[#4ADE80]/10">
                  <span className="text-[10px] uppercase font-bold text-[#94A3B8] block">Daily Budget Now</span>
                  <span className="text-base font-black text-[#4ADE80]">₹{safeDailyAllowance}/day</span>
                </div>
                <div className="bg-[#161D16] p-2.5 rounded-xl border border-[#4ADE80]/10">
                  <span className="text-[10px] uppercase font-bold text-[#94A3B8] block">If You Buy</span>
                  <span className={`text-base font-black ${activeVerdict.dailyAfter < 150 ? 'text-red-400' : 'text-[#FACC15]'}`}>
                    ₹{activeVerdict.dailyAfter}/day
                  </span>
                </div>
              </div>

              {/* Rationale & Alternative */}
              <div className="space-y-3 mb-6">
                <div className="bg-[#1A231A] p-3.5 rounded-xl border border-[#4ADE80]/30 text-xs">
                  <span className="font-bold text-[#86EFAC] flex items-center gap-1.5 mb-1">
                    <Lightbulb className="w-3.5 h-3.5 text-[#FACC15]" />
                    Behavioral Coach Verdict:
                  </span>
                  <p className="text-white leading-relaxed font-medium">
                    {activeVerdict.reasoning}
                  </p>
                </div>

                <div className="bg-[#161D16] p-3.5 rounded-xl border border-[#FACC15]/30 text-xs">
                  <span className="font-bold text-[#FACC15] flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Recommended Alternative Move:
                  </span>
                  <p className="text-[#94A3B8] leading-relaxed">
                    {activeVerdict.alternativeAction}
                  </p>
                </div>
              </div>

              {activeVerdict.verdict === 'WAIT 48 HOURS' && (
                <div className="p-3 rounded-xl bg-[#FACC15]/15 border border-[#FACC15]/30 text-xs text-[#FEF08A] flex items-center justify-between">
                  <span className="flex items-center gap-2 font-bold">
                    <Clock className="w-4 h-4 text-[#FACC15]" />
                    48-Hour Cool-off Timer Active
                  </span>
                  <span className="font-mono text-xs">47:59:45</span>
                </div>
              )}
            </div>
          ) : (
            <div className="botanical-card p-8 text-center flex flex-col items-center justify-center min-h-[380px]">
              <div className="w-16 h-16 rounded-3xl bg-[#161D16] text-[#4ADE80] border border-[#4ADE80]/30 flex items-center justify-center text-3xl mb-4 shadow-lg shadow-[#4ADE80]/10">
                🤖
              </div>
              <h4 className="font-extrabold text-lg text-white">
                Ready for Behavioral Evaluation
              </h4>
              <p className="text-xs text-[#94A3B8] max-w-sm mt-2 leading-relaxed">
                Enter your prospective purchase parameters on the left or select a sample dilemma to run the instant 2-second diagnostic.
              </p>
            </div>
          )}

          {/* Past Scans History */}
          <div className="mt-6 botanical-card p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-3 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#4ADE80]" />
              Recent AI Shield Logs
            </h4>
            <div className="space-y-2">
              {botScans.slice(0, 3).map((s) => (
                <div key={s.id} className="bg-[#111611] p-2.5 rounded-xl border border-[#4ADE80]/15 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white block">{s.name} (₹{s.price})</span>
                    <span className="text-[10px] text-[#94A3B8]">{s.reasoning}</span>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                    s.verdict === 'BUY NOW' ? 'bg-[#4ADE80]/20 text-[#4ADE80]' :
                    s.verdict === 'WAIT 48 HOURS' ? 'bg-[#FACC15]/20 text-[#FACC15]' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {s.verdict.split(' ')[0]}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
