import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  Target, 
  Calendar, 
  IndianRupee, 
  TrendingUp, 
  Trophy, 
  ArrowRight, 
  CheckCircle2,
  Plus
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function WishlistCalculator({ onOpenWaitlist }) {
  const [goalName, setGoalName] = useState('New Coding Laptop');
  const [targetPrice, setTargetPrice] = useState(18000);
  const [targetMonths, setTargetMonths] = useState(6);
  const [currentSaved, setCurrentSaved] = useState(4500);

  const goalPresets = [
    { name: 'Coding Laptop Fund', price: 24000, months: 6 },
    { name: 'Goa Trip with Friends', price: 6500, months: 3 },
    { name: 'Semester Placement Suit', price: 4200, months: 2 },
    { name: 'iPad for Lecture Notes', price: 29000, months: 8 },
  ];

  const totalDays = targetMonths * 30;
  const remainingToSave = Math.max(0, targetPrice - currentSaved);
  const monthlySavingsNeeded = Math.round(remainingToSave / (targetMonths || 1));
  const dailySavingsNeeded = Math.round(remainingToSave / (totalDays || 1));
  const progressPercent = Math.min(100, Math.round((currentSaved / targetPrice) * 100));

  // Determine Plant Growth Level
  const getGrowthVisual = (percent) => {
    if (percent < 25) {
      return {
        stage: 'Stage 1: Seed in Soil',
        emoji: '🌱',
        title: 'Sprouting Roots',
        desc: 'Every ₹20 round-up gives life to this goal.',
        bg: 'from-[#FAF7EE] to-[#E8F5E4]',
        border: 'border-[#62A842]/30'
      };
    } else if (percent < 50) {
      return {
        stage: 'Stage 2: Fresh Leaf Sapling',
        emoji: '🌿',
        title: 'Steady Momentum',
        desc: 'You have crossed the hardest initial threshold!',
        bg: 'from-[#E8F5E4] to-[#F2FAF0]',
        border: 'border-[#62A842]/50'
      };
    } else if (percent < 85) {
      return {
        stage: 'Stage 3: Potted Money Plant',
        emoji: '🪴',
        title: 'Within Grasp',
        desc: 'Over half way there. Discipline is becoming second nature.',
        bg: 'from-[#E8F5E4] to-[#FFFDF7]',
        border: 'border-[#3D7838]/60'
      };
    } else {
      return {
        stage: 'Stage 4: Blooming Money Tree',
        emoji: '🌳',
        title: 'Harvest Time!',
        desc: 'Goal unlocked! Zero debt, pure achievement.',
        bg: 'from-[#FDF6E2] to-[#E8F5E4]',
        border: 'border-[#E9B838]'
      };
    }
  };

  const plant = getGrowthVisual(progressPercent);

  const handleSimulateDeposit = (amount) => {
    const updated = Math.min(targetPrice, currentSaved + amount);
    setCurrentSaved(updated);

    if (updated >= targetPrice) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handlePresetSelect = (preset) => {
    setGoalName(preset.name);
    setTargetPrice(preset.price);
    setTargetMonths(preset.months);
    setCurrentSaved(Math.round(preset.price * 0.25));
  };

  return (
    <section id="wishlist" className="py-20 bg-[#FAF7EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F5E4] border border-[#62A842]/20 text-[#3D7838] text-xs font-bold uppercase tracking-wider mb-4">
            <Target className="w-3.5 h-3.5 text-[#3D7838]" />
            <span>Behavioral Goal System</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#24331C] tracking-tight">
            Interactive <span className="doodle-underline text-[#3D7838]">Wishlist Calculator</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#53634B]">
            Turn vague desires into micro-daily plants. Don't rely on willpower alone — let PLANEY calculate the exact painless daily drip needed to buy what you love guilt-free.
          </p>
        </div>

        {/* Quick Goal Presets */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <span className="text-xs font-bold text-[#53634B]">Campus Goal Templates:</span>
          {goalPresets.map((preset) => (
            <button
              key={preset.name}
              onClick={() => handlePresetSelect(preset)}
              className="px-3.5 py-1.5 rounded-full bg-white hover:bg-[#FDF6E2] border border-[#EBE5D3] hover:border-[#E9B838] text-xs font-medium text-[#24331C] transition-all hover:scale-105 cursor-pointer shadow-2xs"
            >
              {preset.name} (₹{preset.price.toLocaleString()})
            </button>
          ))}
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Sliders & Goal Parameters */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#EBE5D3] shadow-lg flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#EBE5D3]">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#FAF7EE] text-[#3D7838] flex items-center justify-center font-bold">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#24331C]">Customize Your Plant Goal</h3>
                    <p className="text-xs text-[#7E8D76]">Calculate daily drip feasibility</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#3D7838] bg-[#E8F5E4] px-2.5 py-1 rounded-full">
                  Zero Stress Drip
                </span>
              </div>

              {/* Goal Name Input */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#53634B] mb-1.5">
                  What are you saving for?
                </label>
                <input
                  type="text"
                  value={goalName}
                  onChange={(e) => setGoalName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#EBE5D3] bg-[#FFFDF7] text-[#24331C] font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-[#3D7838]"
                  placeholder="e.g. New Coding Laptop"
                />
              </div>

              {/* Target Price Slider */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-[#53634B] mb-2">
                  <span className="uppercase tracking-wider">Target Price</span>
                  <span className="text-base font-black text-[#24331C] bg-[#FAF7EE] px-3 py-1 rounded-xl border border-[#EBE5D3]">
                    ₹{targetPrice.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="60000"
                  step="500"
                  value={targetPrice}
                  onChange={(e) => setTargetPrice(Number(e.target.value))}
                  className="w-full accent-[#3D7838] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#7E8D76] mt-1 font-semibold">
                  <span>₹1,000</span>
                  <span>₹25,000</span>
                  <span>₹60,000</span>
                </div>
              </div>

              {/* Target Date Slider (Months) */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-[#53634B] mb-2">
                  <span className="uppercase tracking-wider">Target Timeline</span>
                  <span className="text-base font-black text-[#3D7838] bg-[#E8F5E4] px-3 py-1 rounded-xl border border-[#62A842]/20">
                    {targetMonths} Months ({totalDays} Days)
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="1"
                  value={targetMonths}
                  onChange={(e) => setTargetMonths(Number(e.target.value))}
                  className="w-full accent-[#3D7838] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#7E8D76] mt-1 font-semibold">
                  <span>1 Month (Blitz)</span>
                  <span>6 Months (Balanced)</span>
                  <span>12 Months (Gentle Drip)</span>
                </div>
              </div>

              {/* Current Progress Adjuster */}
              <div className="bg-[#FAF7EE] p-4 rounded-2xl border border-[#EBE5D3]">
                <div className="flex items-center justify-between text-xs font-bold text-[#53634B] mb-2">
                  <span className="uppercase tracking-wider">Already Saved (Simulate Micro-Deposit)</span>
                  <span className="text-sm font-bold text-[#24331C]">
                    ₹{currentSaved.toLocaleString()} ({progressPercent}%)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleSimulateDeposit(100)}
                    className="flex-1 py-2 rounded-xl bg-white hover:bg-[#E8F5E4] text-[#3D7838] border border-[#62A842]/30 text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1 shadow-2xs"
                  >
                    <Plus className="w-3 h-3" />
                    <span>₹100 Chai Skip</span>
                  </button>
                  <button
                    onClick={() => handleSimulateDeposit(500)}
                    className="flex-1 py-2 rounded-xl bg-white hover:bg-[#E8F5E4] text-[#3D7838] border border-[#62A842]/30 text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1 shadow-2xs"
                  >
                    <Plus className="w-3 h-3" />
                    <span>₹500 Stipend Save</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#EBE5D3] flex items-center justify-between text-xs text-[#53634B]">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-[#62A842]" />
                Auto-swept via UPI round-ups
              </span>
              <button
                onClick={() => setCurrentSaved(0)}
                className="text-[11px] text-[#7E8D76] hover:text-[#24331C] underline cursor-pointer"
              >
                Reset Progress
              </button>
            </div>
          </div>

          {/* Right Column: Plant Stage Visual & Output Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Animated Plant Stage Card */}
            <div className={`bg-gradient-to-b ${plant.bg} rounded-3xl p-6 sm:p-8 border-2 ${plant.border} shadow-xl relative overflow-hidden text-center`}>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#EBE5D3] text-xs font-bold text-[#2C5728] mb-3">
                <Sparkles className="w-3 h-3 text-[#E9B838]" />
                <span>{plant.stage}</span>
              </div>

              {/* Large Animated Plant Emoji */}
              <div className="my-4 text-7xl select-none animate-bounce-subtle transform hover:scale-110 transition-transform">
                {plant.emoji}
              </div>

              <h4 className="text-xl font-extrabold text-[#24331C]">{plant.title}</h4>
              <p className="text-xs text-[#53634B] mt-1 max-w-xs mx-auto">
                {plant.desc}
              </p>

              {/* Progress Bar */}
              <div className="mt-5 bg-white/80 rounded-full h-3.5 p-0.5 border border-[#EBE5D3] overflow-hidden">
                <div 
                  className="bg-[#3D7838] h-full rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] font-bold text-[#53634B] mt-1.5">
                <span>₹{currentSaved.toLocaleString()} Saved</span>
                <span>{progressPercent}% of ₹{targetPrice.toLocaleString()}</span>
              </div>
            </div>

            {/* Daily & Monthly Drip Metrics */}
            <div className="bg-white rounded-3xl p-6 border border-[#EBE5D3] shadow-md grid grid-cols-2 gap-4">
              <div className="p-3 bg-[#FAF7EE] rounded-2xl border border-[#EBE5D3] text-center">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7E8D76] block mb-1">
                  Daily Drip Needed
                </span>
                <span className="text-2xl font-black text-[#3D7838]">
                  ₹{dailySavingsNeeded}
                </span>
                <span className="text-[10px] text-[#53634B] block mt-1 font-medium">
                  {dailySavingsNeeded <= 50 ? '≈ 1 Canteen Chai' : dailySavingsNeeded <= 120 ? '≈ 1 Cold Coffee' : '≈ 1 Meal Delivery'}
                </span>
              </div>

              <div className="p-3 bg-[#FAF7EE] rounded-2xl border border-[#EBE5D3] text-center">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7E8D76] block mb-1">
                  Monthly Target
                </span>
                <span className="text-2xl font-black text-[#24331C]">
                  ₹{monthlySavingsNeeded.toLocaleString()}
                </span>
                <span className="text-[10px] text-[#53634B] block mt-1 font-medium">
                  Auto-locked on day 1
                </span>
              </div>
            </div>

            {/* Lock in Goal CTA */}
            <button
              onClick={onOpenWaitlist}
              className="w-full py-4 rounded-2xl bg-[#3D7838] hover:bg-[#2C5728] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#3D7838]/20 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Lock This Goal in PLANEY</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
