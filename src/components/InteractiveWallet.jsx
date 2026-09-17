import React, { useState } from 'react';
import { 
  Shield, 
  Lock, 
  ArrowUpRight, 
  Zap, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles, 
  RotateCcw, 
  TrendingUp, 
  Coins, 
  QrCode, 
  IndianRupee,
  Coffee,
  BookOpen,
  Film
} from 'lucide-react';
import { UPI_EXPENSE_PRESETS } from '../data/content';

export default function InteractiveWallet() {
  const INITIAL_ALLOWANCE = 6000;
  const [spent, setSpent] = useState(2400); // 40% initial
  const [emergencySavings, setEmergencySavings] = useState(680);
  const [lastTxn, setLastTxn] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [notification, setNotification] = useState(null);

  const spentPercent = Math.min(100, Math.round((spent / INITIAL_ALLOWANCE) * 100));
  const remaining = Math.max(0, INITIAL_ALLOWANCE - spent);

  // Plant stage based on emergency savings
  const getPlantStage = (savings) => {
    if (savings < 500) {
      return { stage: "Sprouting Seed", icon: "🌱", color: "#62A842", desc: "Foundation Rooting" };
    } else if (savings < 1000) {
      return { stage: "Healthy Sapling", icon: "🌿", color: "#3D7838", desc: "Emerging Safety Net" };
    } else if (savings < 1800) {
      return { stage: "Potted Money Tree", icon: "🪴", color: "#2C5728", desc: "1.5 Month Buffer" };
    } else {
      return { stage: "Lush Harvest Tree", icon: "🌳", color: "#D89B2B", desc: "Financial Independence Seed" };
    }
  };

  const plant = getPlantStage(emergencySavings);

  const handleSimulatePayment = (preset) => {
    if (isProcessing) return;
    if (remaining < preset.amount) {
      showToast("Insufficient daily balance! Auto-guard stopped this payment.", "danger");
      return;
    }

    setIsProcessing(true);
    const roundUpSave = preset.roundUp || Math.ceil(preset.amount * 0.1);

    setTimeout(() => {
      const newSpent = spent + preset.amount;
      const newSavings = emergencySavings + roundUpSave;
      const newPercent = Math.min(100, Math.round((newSpent / INITIAL_ALLOWANCE) * 100));

      setSpent(newSpent);
      setEmergencySavings(newSavings);
      setLastTxn({
        name: preset.name,
        amount: preset.amount,
        saved: roundUpSave,
        time: "Just now"
      });
      setIsProcessing(false);

      // Psychological alerts
      if (newPercent >= 75 && spentPercent < 75) {
        showToast("⚠️ 75% Budget Exhausted! Non-essential UPI purchases locked to 2-sec cooldown.", "warning");
      } else if (newPercent >= 50 && spentPercent < 50) {
        showToast("🟡 50% Milestone Reached: You're at the halfway mark! Spend with awareness.", "info");
      } else {
        showToast(`Paid ₹${preset.amount} via UPI. Automatically locked ₹${roundUpSave} into your Emergency Plant! 🌱`, "success");
      }
    }, 600);
  };

  const showToast = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 4500);
  };

  const resetDemo = () => {
    setSpent(2400);
    setEmergencySavings(680);
    setLastTxn(null);
    setNotification(null);
  };

  // SVG Circular progress math
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (spentPercent / 100) * circumference;

  return (
    <div className="relative w-full max-w-[390px] mx-auto bg-white rounded-[2.5rem] p-5 shadow-2xl border-4 border-[#EBE5D3]/90 text-[#24331C] font-sans">
      
      {/* Top Phone Notch / Speaker */}
      <div className="flex items-center justify-between px-2 pt-1 pb-3 text-xs text-[#53634B]">
        <span className="font-semibold tracking-wider">9:41 AM</span>
        <div className="w-20 h-4 bg-[#EBE5D3]/60 rounded-full mx-auto" />
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-bold text-[#3D7838]">5G</span>
          <div className="w-5 h-2.5 border border-[#53634B] rounded-sm p-0.5 flex items-center">
            <div className="w-full h-full bg-[#3D7838] rounded-2xs" />
          </div>
        </div>
      </div>

      {/* Header bar in app */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#3D7838] flex items-center justify-center text-white text-xs font-black">
            P
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#24331C] leading-none">Aryan's Smart Wallet</h4>
            <span className="text-[10px] text-[#62A842] font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#62A842] animate-pulse" />
              UPI Auto-Shield Active
            </span>
          </div>
        </div>
        <button 
          onClick={resetDemo}
          title="Reset Demo Wallet"
          className="p-1.5 text-xs text-[#53634B] hover:text-[#3D7838] bg-[#FAF7EE] hover:bg-[#E8F5E4] rounded-lg transition-colors flex items-center gap-1 font-medium"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="text-[10px]">Reset</span>
        </button>
      </div>

      {/* Interactive Toast Notification */}
      {notification && (
        <div className={`mb-3 p-2.5 rounded-xl text-xs flex items-start gap-2 animate-in fade-in slide-in-from-top-2 duration-300 ${
          notification.type === 'warning' 
            ? 'bg-[#FDF6E2] text-[#D89B2B] border border-[#E9B838]' 
            : notification.type === 'danger'
            ? 'bg-red-50 text-red-700 border border-red-200'
            : 'bg-[#E8F5E4] text-[#2C5728] border border-[#62A842]/30'
        }`}>
          <Sparkles className="w-4 h-4 shrink-0 mt-0.5 text-current" />
          <p className="font-medium text-[11px] leading-tight">{notification.message}</p>
        </div>
      )}

      {/* Monthly Budget Ring with 50% & 75% markers */}
      <div className="bg-[#FAF7EE] rounded-2xl p-4 border border-[#EBE5D3] relative overflow-hidden mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-bold text-[#53634B] uppercase tracking-wider">
            Monthly Pocket Money
          </span>
          <span className="text-xs font-bold text-[#3D7838] bg-white px-2 py-0.5 rounded-md border border-[#EBE5D3]">
            ₹{INITIAL_ALLOWANCE.toLocaleString()} Cap
          </span>
        </div>

        <div className="flex items-center gap-4">
          {/* Progress Circular Gauge */}
          <div className="relative w-28 h-28 shrink-0 flex items-center justify-center">
            <svg className="w-28 h-28 transform -rotate-90">
              {/* Background circle */}
              <circle
                cx="56"
                cy="56"
                r={radius}
                stroke="#EBE5D3"
                strokeWidth="10"
                fill="transparent"
              />
              {/* Active spent stroke */}
              <circle
                cx="56"
                cy="56"
                r={radius}
                stroke={spentPercent >= 75 ? "#D89B2B" : spentPercent >= 50 ? "#E9B838" : "#3D7838"}
                strokeWidth="10"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
                className="transition-all duration-700 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-xl font-extrabold text-[#24331C] leading-none">
                {spentPercent}%
              </span>
              <span className="text-[9px] uppercase font-bold text-[#7E8D76]">Spent</span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="flex-1 space-y-2">
            <div>
              <div className="text-[10px] text-[#7E8D76]">Remaining Balance</div>
              <div className="text-lg font-black text-[#24331C] flex items-center">
                <IndianRupee className="w-4 h-4 text-[#3D7838]" />
                {remaining.toLocaleString()}
              </div>
            </div>

            {/* Psychological Alert Badges */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[10px]">
                <span className="flex items-center gap-1 font-semibold text-[#53634B]">
                  <span className={`w-2 h-2 rounded-full ${spentPercent >= 50 ? 'bg-[#E9B838]' : 'bg-[#EBE5D3]'}`} />
                  50% Alert
                </span>
                <span className="text-[9px] font-bold text-[#53634B]">
                  {spentPercent >= 50 ? 'Crossed' : 'Safe'}
                </span>
              </div>
              <div className="flex items-center justify-between text-[10px]">
                <span className="flex items-center gap-1 font-semibold text-[#53634B]">
                  <span className={`w-2 h-2 rounded-full ${spentPercent >= 75 ? 'bg-[#D89B2B]' : 'bg-[#EBE5D3]'}`} />
                  75% Nudge
                </span>
                <span className={`text-[9px] font-bold ${spentPercent >= 75 ? 'text-[#D89B2B]' : 'text-[#7E8D76]'}`}>
                  {spentPercent >= 75 ? 'Active Cooldown' : 'Safe'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Emergency Fund with Growing Plant Milestone */}
      <div className="bg-gradient-to-r from-[#E8F5E4] to-[#F2FAF0] rounded-2xl p-3.5 border border-[#62A842]/30 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-[#62A842]/20 flex items-center justify-center text-2xl animate-bounce-subtle">
            {plant.icon}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-[#2C5728]">Locked Emergency Fund</span>
              <Lock className="w-3 h-3 text-[#3D7838]" />
            </div>
            <div className="text-base font-extrabold text-[#24331C]">
              ₹{emergencySavings.toLocaleString()}
            </div>
            <span className="text-[10px] font-semibold text-[#62A842] block">
              Level: {plant.stage}
            </span>
          </div>
        </div>
        <div className="text-right">
          <span className="inline-block text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#3D7838] text-white">
            10% Micro-Lock
          </span>
          <p className="text-[9px] text-[#53634B] mt-1 font-medium">Safe in Liquid Vault</p>
        </div>
      </div>

      {/* Interactive UPI Quick Pay Simulator */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-[11px] font-bold text-[#24331C]">
            <QrCode className="w-3.5 h-3.5 text-[#3D7838]" />
            <span>Interactive UPI Scanner Demo</span>
          </div>
          <span className="text-[9px] font-semibold text-[#62A842] bg-[#E8F5E4] px-1.5 py-0.5 rounded">
            Tap to test Nudge
          </span>
        </div>

        <p className="text-[10px] text-[#53634B]">
          Simulate typical college QR payments to see how PLANEY sweeps auto-savings and alerts:
        </p>

        <div className="grid grid-cols-2 gap-2">
          {UPI_EXPENSE_PRESETS.map((preset) => (
            <button
              key={preset.name}
              disabled={isProcessing}
              onClick={() => handleSimulatePayment(preset)}
              className="p-2 text-left rounded-xl bg-[#FAF7EE] hover:bg-[#FDF6E2] border border-[#EBE5D3] hover:border-[#E9B838] transition-all hover:scale-[1.02] cursor-pointer group disabled:opacity-50"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#24331C] group-hover:text-[#3D7838] truncate">
                  {preset.name}
                </span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs font-black text-[#24331C]">
                  ₹{preset.amount}
                </span>
                <span className="text-[9px] font-bold text-[#62A842] bg-white px-1 rounded border border-[#62A842]/20">
                  +₹{preset.roundUp} lock
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Status bar */}
      <div className="mt-4 pt-3 border-t border-[#EBE5D3] flex items-center justify-between text-[10px] text-[#53634B]">
        <div className="flex items-center gap-1">
          <Shield className="w-3 h-3 text-[#3D7838]" />
          <span>NPCI Account Aggregator Encrypted</span>
        </div>
        <span className="font-bold text-[#3D7838]">Zero Ads</span>
      </div>

    </div>
  );
}
