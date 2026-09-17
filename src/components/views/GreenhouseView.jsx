import React, { useState } from 'react';
import { 
  Target, 
  Sparkles, 
  Plus, 
  Calendar, 
  IndianRupee, 
  TrendingUp, 
  Droplets, 
  ArrowRight, 
  CheckCircle2, 
  Radio, 
  ShoppingBag,
  Clock
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { TerrariumPlant } from '../Mascot';

export default function GreenhouseView() {
  const { wishlistGoals, waterWishlistPlant, addWishlistGoal, walletBalance } = useApp();

  const [selectedGoalId, setSelectedGoalId] = useState(wishlistGoals[0]?.id || 'w-1');
  const [wateringAnim, setWateringAnim] = useState(false);
  
  // New Goal Modal state
  const [showAddModal, setShowAddModal] = useState(false);
  const [newName, setNewName] = useState('');
  const [newPrice, setNewPrice] = useState(5000);
  const [newMonths, setNewMonths] = useState(3);
  const [newCat, setNewCat] = useState('Tech');

  const selectedGoal = wishlistGoals.find(g => g.id === selectedGoalId) || wishlistGoals[0];

  const percent = selectedGoal ? Math.min(100, Math.round((selectedGoal.savedAmount / selectedGoal.targetPrice) * 100)) : 0;
  const remaining = selectedGoal ? Math.max(0, selectedGoal.targetPrice - selectedGoal.savedAmount) : 0;
  const totalDays = (selectedGoal?.targetMonths || 3) * 30;
  const dailyNeeded = Math.round(remaining / (totalDays || 1));
  const weeklyNeeded = dailyNeeded * 7;
  const monthlyNeeded = Math.round(remaining / (selectedGoal?.targetMonths || 1));

  const handleWaterClick = (amount) => {
    if (wateringAnim) return;
    if (walletBalance < amount) {
      alert("Insufficient safe balance in wallet to water plant!");
      return;
    }

    setWateringAnim(true);
    waterWishlistPlant(selectedGoal.id, amount);

    setTimeout(() => {
      setWateringAnim(false);
    }, 1200);
  };

  const handleCreateGoal = (e) => {
    e.preventDefault();
    if (!newName || newPrice <= 0) return;

    addWishlistGoal({
      name: newName,
      targetPrice: Number(newPrice),
      targetMonths: Number(newMonths),
      category: newCat,
      radarAlert: 'Tracking upcoming student discounts'
    });

    setShowAddModal(false);
    setNewName('');
    setNewPrice(5000);
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#4ADE80] bg-[#4ADE80]/15 px-2.5 py-0.5 rounded-full border border-[#4ADE80]/30">
            Savings Terrarium
          </span>
          <h2 className="font-extrabold text-2xl text-white mt-1">
            The Wishlist Greenhouse
          </h2>
          <p className="text-xs text-[#94A3B8]">
            Turn high-ticket desires into blooming digital plants with painless daily micro-drips.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#22C55E] to-[#4ADE80] text-[#0A0D0A] font-extrabold text-xs shadow-lg shadow-[#4ADE80]/20 hover:brightness-110 transition-all cursor-pointer whitespace-nowrap"
        >
          <Plus className="w-4 h-4" />
          <span>Plant New Wishlist Goal</span>
        </button>
      </div>

      {/* Goal Selector Tabs */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2">
        {wishlistGoals.map((goal) => {
          const isSel = goal.id === selectedGoal.id;
          const p = Math.min(100, Math.round((goal.savedAmount / goal.targetPrice) * 100));
          return (
            <button
              key={goal.id}
              onClick={() => setSelectedGoalId(goal.id)}
              className={`px-4 py-2.5 rounded-2xl border text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2.5 ${
                isSel
                  ? 'bg-[#1A231A] text-[#4ADE80] border-[#4ADE80]/40 shadow-lg shadow-[#4ADE80]/10'
                  : 'bg-[#161D16] text-[#94A3B8] border-[#4ADE80]/15 hover:text-white'
              }`}
            >
              <span>{goal.name}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                isSel ? 'bg-[#4ADE80] text-[#0A0D0A]' : 'bg-[#0A0D0A] text-[#86EFAC]'
              }`}>
                {p}%
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Greenhouse Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Column: The Interactive Digital Terrarium */}
        <div className="lg:col-span-5 botanical-card p-6 sm:p-8 flex flex-col justify-between text-center relative overflow-hidden">
          
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#4ADE80]/15 mb-2">
              <span className="text-xs font-bold text-[#86EFAC] flex items-center gap-1.5">
                🌱 Active Terrarium Pod
              </span>
              <span className="text-xs font-black text-[#FACC15] bg-[#FACC15]/15 px-2.5 py-0.5 rounded-full">
                {percent >= 100 ? "Harvest Ready! 🌳" : percent >= 60 ? "Blooming Sapling 🌿" : "Germinating Seed 🌱"}
              </span>
            </div>

            {/* Interactive Terrarium SVG Component */}
            <div className="py-4">
              <TerrariumPlant progress={percent} isWatering={wateringAnim} />
            </div>

            <h3 className="font-extrabold text-xl text-white mt-1">
              {selectedGoal.name}
            </h3>
            <p className="text-xs text-[#94A3B8] mt-0.5">
              Target: ₹{selectedGoal.targetPrice.toLocaleString()} • Saved: ₹{selectedGoal.savedAmount.toLocaleString()}
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-[#0A0D0A] h-3 rounded-full overflow-hidden border border-[#4ADE80]/20 mt-4">
              <div 
                className="bg-gradient-to-r from-[#22C55E] to-[#FACC15] h-full rounded-full transition-all duration-700"
                style={{ width: `${percent}%` }}
              />
            </div>
            <div className="flex justify-between text-[11px] font-bold text-[#94A3B8] mt-1.5">
              <span>{percent}% Funded</span>
              <span>₹{remaining.toLocaleString()} remaining</span>
            </div>
          </div>

          {/* Interactive Watering Can Action */}
          <div className="mt-6 pt-4 border-t border-[#4ADE80]/15 space-y-2">
            <span className="text-[11px] font-bold text-[#94A3B8] block">
              Water Plant (Add Micro-Deposit):
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                disabled={wateringAnim}
                onClick={() => handleWaterClick(100)}
                className="py-2.5 px-3 rounded-xl bg-[#111611] hover:bg-[#1E2B1E] border border-[#4ADE80]/30 text-xs font-bold text-[#4ADE80] transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                <span>Water +₹100</span>
              </button>
              <button
                disabled={wateringAnim}
                onClick={() => handleWaterClick(500)}
                className="py-2.5 px-3 rounded-xl bg-[#111611] hover:bg-[#1E2B1E] border border-[#FACC15]/30 text-xs font-bold text-[#FACC15] transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                <span>Water +₹500</span>
              </button>
            </div>
          </div>

        </div>

        {/* Right Column: Savings Rate Breakdown & Best Time to Buy Radar */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-6">
          
          {/* Automated Breakdown Cards */}
          <div className="botanical-card p-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-4 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#4ADE80]" />
              Automated Micro-Drip Feasibility Schedule
            </h4>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-[#111611] p-4 rounded-2xl border border-[#4ADE80]/15">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] block">
                  Daily Drip
                </span>
                <span className="text-xl font-black text-[#4ADE80] mt-1 block">
                  ₹{dailyNeeded}
                </span>
                <span className="text-[10px] text-[#86EFAC] block mt-1">
                  ≈ 1 Campus Chai
                </span>
              </div>

              <div className="bg-[#111611] p-4 rounded-2xl border border-[#4ADE80]/15">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] block">
                  Weekly Drip
                </span>
                <span className="text-xl font-black text-[#FACC15] mt-1 block">
                  ₹{weeklyNeeded}
                </span>
                <span className="text-[10px] text-[#FEF08A] block mt-1">
                  ≈ 1 Weekend Dine
                </span>
              </div>

              <div className="bg-[#111611] p-4 rounded-2xl border border-[#4ADE80]/15">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] block">
                  Monthly Target
                </span>
                <span className="text-xl font-black text-white mt-1 block">
                  ₹{monthlyNeeded}
                </span>
                <span className="text-[10px] text-[#94A3B8] block mt-1">
                  Over {selectedGoal.targetMonths} months
                </span>
              </div>
            </div>
          </div>

          {/* Best Time to Buy Radar Card */}
          <div className="gold-card p-6 relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-[#FACC15]/20 mb-4">
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-[#FACC15] animate-pulse" />
                <h4 className="text-sm font-extrabold text-white">
                  Best Time to Buy Radar
                </h4>
              </div>
              <span className="text-[10px] font-black uppercase text-[#FACC15] bg-[#FACC15]/10 px-2 py-0.5 rounded border border-[#FACC15]/30">
                Live Price Intelligence
              </span>
            </div>

            <div className="space-y-3">
              <div className="bg-[#0A0D0A]/70 p-3 rounded-xl border border-[#FACC15]/20 flex items-start gap-3">
                <span className="text-xl">🏷️</span>
                <div>
                  <h5 className="text-xs font-bold text-white">
                    {selectedGoal.radarAlert}
                  </h5>
                  <p className="text-[11px] text-[#94A3B8] mt-0.5">
                    Planley Deal Radar predicts an average 18% price drop for this category during festival campus sales. Keep watering!
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-[#FEF08A] bg-[#161D16] p-2.5 rounded-xl border border-[#FACC15]/15">
                <span>Predicted Optimal Purchase Date:</span>
                <strong className="text-white">Oct 24, 2026</strong>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Add New Goal Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="bg-[#161D16] border border-[#4ADE80]/30 rounded-3xl max-w-md w-full p-6 shadow-2xl relative text-white">
            <h3 className="text-lg font-black text-white mb-4 flex items-center gap-2">
              <span>🌱</span> Plant New Goal
            </h3>

            <form onSubmit={handleCreateGoal} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] mb-1">
                  Item Description
                </label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Placement Interview Suit"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0D0A] border border-[#4ADE80]/20 text-sm font-semibold text-white focus:outline-none focus:border-[#4ADE80]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] mb-1">
                    Target Price (₹)
                  </label>
                  <input
                    type="number"
                    min="500"
                    required
                    value={newPrice}
                    onChange={(e) => setNewPrice(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0D0A] border border-[#4ADE80]/20 text-sm font-bold text-[#4ADE80] focus:outline-none focus:border-[#4ADE80]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] mb-1">
                    Timeline (Months)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="12"
                    required
                    value={newMonths}
                    onChange={(e) => setNewMonths(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0D0A] border border-[#4ADE80]/20 text-sm font-bold text-white focus:outline-none focus:border-[#4ADE80]"
                  />
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-2.5 rounded-xl bg-[#111611] text-xs font-bold text-[#94A3B8] hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-[#4ADE80] hover:bg-[#22C55E] text-[#0A0D0A] text-xs font-black uppercase tracking-wider cursor-pointer"
                >
                  Plant in Greenhouse
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
