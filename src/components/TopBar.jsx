import React from 'react';
import { 
  Zap, 
  Volume2, 
  VolumeX, 
  IndianRupee, 
  Bell, 
  Sparkles, 
  Flame,
  Plus
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function TopBar() {
  const { 
    activeTab, 
    safeDailyAllowance, 
    setQuickPayOpen, 
    settings, 
    updateSettings,
    streakDays 
  } = useApp();

  const getTitle = () => {
    switch (activeTab) {
      case 'dashboard': return { title: 'Smart E-Wallet & Live Budget', sub: 'Psychological spending control & auto-roundups' };
      case 'ai-bot': return { title: 'AI Impulse Shield', sub: '2-second behavioral diagnostic before purchases' };
      case 'greenhouse': return { title: 'Wishlist & Savings Greenhouse', sub: 'Watch your terrarium plants bloom with daily micro-drips' };
      case 'academy': return { title: 'Financial Academy Hub', sub: 'Bite-sized cards, Weekend Survival game, & podcasts' };
      case 'trust-lending': return { title: 'Community Trust Lending', sub: 'Peer-to-peer student micro-liquidity (Phase 3)' };
      case 'chrome-ext': return { title: 'Chrome Companion Deal Radar', sub: 'Browser coupon finder & multi-tab impulse blocker' };
      case 'settings': return { title: 'Psychological Behavior Settings', sub: 'Discipline cooldowns & AI coach personality' };
      default: return { title: 'PLANEY Dashboard', sub: 'Plant your money, grow your future.' };
    }
  };

  const { title, sub } = getTitle();

  return (
    <header className="sticky top-0 z-30 bg-[#0A0D0A]/85 backdrop-blur-md border-b border-[#4ADE80]/15 px-4 sm:px-8 py-3.5 flex items-center justify-between">
      {/* View Title */}
      <div>
        <h1 className="font-display font-extrabold text-lg sm:text-xl text-white tracking-tight leading-none">
          {title}
        </h1>
        <p className="text-xs text-[#94A3B8] mt-1 hidden sm:block">
          {sub}
        </p>
      </div>

      {/* Quick Action Controls */}
      <div className="flex items-center gap-3">
        {/* Safe-to-Spend Daily Allowance Metric */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-[#161D16] border border-[#4ADE80]/20 text-xs">
          <span className="text-[#94A3B8] font-medium">Safe Daily:</span>
          <span className="text-sm font-black text-[#4ADE80] flex items-center">
            <IndianRupee className="w-3.5 h-3.5" />
            {safeDailyAllowance}
          </span>
        </div>

        {/* Sound FX Toggle */}
        <button
          onClick={() => updateSettings({ soundEnabled: !settings.soundEnabled })}
          title={settings.soundEnabled ? "Mute Sound Effects" : "Enable Sound Effects"}
          className="p-2 rounded-xl bg-[#161D16] hover:bg-[#1E2B1E] text-[#94A3B8] hover:text-[#4ADE80] border border-[#4ADE80]/15 transition-colors cursor-pointer"
        >
          {settings.soundEnabled ? <Volume2 className="w-4 h-4 text-[#4ADE80]" /> : <VolumeX className="w-4 h-4 text-[#64748B]" />}
        </button>

        {/* Quick UPI Pay Button */}
        <button
          onClick={() => setQuickPayOpen(true)}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#22C55E] to-[#4ADE80] text-[#0A0D0A] font-extrabold text-xs shadow-lg shadow-[#4ADE80]/20 hover:brightness-110 transition-all hover:scale-102 cursor-pointer"
        >
          <Zap className="w-4 h-4 fill-current text-[#0A0D0A]" />
          <span>Quick UPI Pay</span>
        </button>
      </div>
    </header>
  );
}
