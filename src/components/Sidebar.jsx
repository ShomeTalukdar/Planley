import { 
  LayoutDashboard, 
  Bot, 
  Target, 
  GraduationCap, 
  HeartHandshake, 
  Settings, 
  Sprout, 
  Sparkles, 
  Flame, 
  ShieldCheck, 
  ChevronRight 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ChromeIcon } from './BrandIcons';

export default function Sidebar() {
  const { activeTab, setActiveTab, streakDays, gardenerXp } = useApp();

  const navItems = [
    { id: 'dashboard', label: 'Smart E-Wallet', icon: LayoutDashboard, badge: 'Live' },
    { id: 'ai-bot', label: 'AI Impulse Shield', icon: Bot, badge: '2s AI' },
    { id: 'greenhouse', label: 'Savings Greenhouse', icon: Target, badge: 'Terrarium' },
    { id: 'academy', label: 'Learn Finances', icon: GraduationCap, badge: 'XP Game' },
    { id: 'trust-lending', label: 'Trust Lending', icon: HeartHandshake, badge: 'Phase 3' },
    { id: 'chrome-ext', label: 'Deal Radar (Ext)', icon: ChromeIcon, badge: 'Coupons' },
    { id: 'settings', label: 'Psych Settings', icon: Settings, badge: null },
  ];

  return (
    <>
      {/* Desktop Sidebar (hidden on mobile) */}
      <aside className="hidden lg:flex w-72 flex-col justify-between h-screen sticky top-0 left-0 glass-sidebar z-40 p-5 overflow-y-auto">
        <div className="space-y-6">
          
          {/* Brand Header */}
          <div className="flex items-center gap-3 px-2 pt-2">
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#4ADE80] to-[#166534] flex items-center justify-center text-white shadow-lg shadow-[#4ADE80]/20">
                <Sprout className="w-6 h-6 text-[#FACC15]" />
              </div>
              <span className="radar-wave" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-2xl tracking-tight text-white">
                  PLANEY
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-[#4ADE80]/20 text-[#4ADE80] border border-[#4ADE80]/30">
                  v3.0
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-wider font-bold text-[#FACC15]">
                by INNOVE-X
              </p>
            </div>
          </div>

          {/* Gardener Level Card */}
          <div className="bg-[#161D16] rounded-2xl p-3.5 border border-[#4ADE80]/20 shadow-inner">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-bold text-[#86EFAC] flex items-center gap-1">
                🌱 The Money Gardener
              </span>
              <span className="text-[#FACC15] font-black text-[11px]">Lvl 4</span>
            </div>
            {/* XP progress bar */}
            <div className="w-full bg-[#0A0D0A] h-2 rounded-full overflow-hidden border border-[#4ADE80]/15">
              <div 
                className="bg-gradient-to-r from-[#22C55E] to-[#FACC15] h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, (gardenerXp % 200) / 2)}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[10px] text-[#94A3B8] mt-1.5">
              <span className="flex items-center gap-1">
                <Flame className="w-3 h-3 text-[#F59E0B]" />
                <strong className="text-white">{streakDays} Day</strong> Streak
              </span>
              <span>{gardenerXp} XP</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer group ${
                    isActive
                      ? 'bg-gradient-to-r from-[#22C55E]/20 to-[#4ADE80]/10 text-[#4ADE80] border border-[#4ADE80]/35 shadow-md shadow-[#4ADE80]/5'
                      : 'text-[#94A3B8] hover:text-white hover:bg-[#161D16] border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                      isActive 
                        ? 'bg-[#4ADE80] text-[#0A0D0A] shadow-sm' 
                        : 'bg-[#161D16] text-[#94A3B8] group-hover:text-white group-hover:bg-[#1E2B1E]'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold">{item.label}</span>
                  </div>

                  {item.badge && (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      isActive 
                        ? 'bg-[#4ADE80] text-[#0A0D0A]' 
                        : 'bg-[#1E2B1E] text-[#86EFAC] border border-[#4ADE80]/15'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Trust Badge */}
        <div className="pt-4 border-t border-[#4ADE80]/15">
          <div className="bg-[#161D16]/90 p-3 rounded-2xl border border-[#4ADE80]/10 flex items-center gap-2.5 text-xs text-[#94A3B8]">
            <ShieldCheck className="w-5 h-5 text-[#4ADE80] shrink-0" />
            <div className="text-[11px] leading-tight">
              <span className="text-white font-bold block">NPCI & RBI Compliant</span>
              <span>Account Aggregator Live</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Dock (visible on mobile/tablet) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 glass-bottom-bar px-2 py-2 flex items-center justify-around">
        {navItems.slice(0, 5).map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all cursor-pointer ${
                isActive ? 'text-[#4ADE80]' : 'text-[#94A3B8]'
              }`}
            >
              <div className={`p-1.5 rounded-lg ${isActive ? 'bg-[#4ADE80]/20' : ''}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[9px] font-bold truncate max-w-[55px]">
                {item.label.split(' ')[0]}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
