import React from 'react';
import { 
  Settings, 
  ShieldCheck, 
  Lock, 
  Sliders, 
  Volume2, 
  RotateCcw, 
  UserCheck, 
  CheckCircle2, 
  Bell,
  Sparkles
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function SettingsView() {
  const { 
    settings, 
    updateSettings, 
    resetAllData, 
    monthlyAllowance, 
    setMonthlyAllowance,
    daysRemaining,
    setDaysRemaining 
  } = useApp();

  return (
    <div className="space-y-6 pb-12 max-w-4xl">
      
      {/* Header */}
      <div>
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#4ADE80] bg-[#4ADE80]/15 px-2.5 py-0.5 rounded-full border border-[#4ADE80]/30">
          Discipline Configurations
        </span>
        <h2 className="font-extrabold text-2xl text-white mt-1">
          Psychological Settings & Behavioral Controls
        </h2>
        <p className="text-xs text-[#94A3B8]">
          Tune the strictness of behavioral nudges, AI coaching tone, and emergency vault locks.
        </p>
      </div>

      {/* Settings Grid */}
      <div className="space-y-4">
        
        {/* 1. Emergency Fund 24-Hour Cooldown Lock */}
        <div className="botanical-card p-6 flex items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#FACC15]" />
              <h3 className="font-bold text-sm text-white">
                Emergency Vault 24-Hour Cooldown
              </h3>
            </div>
            <p className="text-xs text-[#94A3B8] max-w-xl">
              Prevents impulsive withdrawals. When requested, money unlocks only after 24 hours unless an emergency college fee proof is provided.
            </p>
          </div>

          <button
            onClick={() => updateSettings({ emergencyCooldown: !settings.emergencyCooldown })}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase transition-colors cursor-pointer shrink-0 ${
              settings.emergencyCooldown
                ? 'bg-[#4ADE80] text-[#0A0D0A]'
                : 'bg-[#1E2B1E] text-[#94A3B8]'
            }`}
          >
            {settings.emergencyCooldown ? "Enabled (24h)" : "Disabled"}
          </button>
        </div>

        {/* 2. AI Coach Personality Selector */}
        <div className="botanical-card p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#4ADE80]" />
                <h3 className="font-bold text-sm text-white">
                  The Money Gardener AI Personality Tone
                </h3>
              </div>
              <p className="text-xs text-[#94A3B8]">
                Select how PLANEY's behavioral coach communicates during impulse purchase scans.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                id: 'gentle',
                title: 'Gentle Gardener 🌱',
                desc: 'Supportive, encouraging praise, soft behavioral reminders.'
              },
              {
                id: 'pragmatic',
                title: 'Pragmatic Mentor ⚖️',
                desc: 'Balanced math, opportunity cost comparisons, realistic compromises.'
              },
              {
                id: 'drillmaster',
                title: 'Strict Drillmaster 🛡️',
                desc: 'Direct, zero-fluff, hard impulse locks, blunt student reality checks.'
              }
            ].map((p) => {
              const isSel = settings.aiPersonality === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => updateSettings({ aiPersonality: p.id })}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    isSel 
                      ? 'bg-[#1A231A] text-white border-[#4ADE80] shadow-lg shadow-[#4ADE80]/10' 
                      : 'bg-[#111611] text-[#94A3B8] border-[#4ADE80]/15 hover:border-[#4ADE80]/40'
                  }`}
                >
                  <h4 className={`text-xs font-black mb-1 ${isSel ? 'text-[#4ADE80]' : 'text-white'}`}>
                    {p.title}
                  </h4>
                  <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                    {p.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Allowance & Cycle Configuration */}
        <div className="botanical-card p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-[#4ADE80]" />
            <h3 className="font-bold text-sm text-white">
              Allowance & Semester Cycle Adjuster
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] mb-1">
                Monthly Pocket Money / Allowance (₹)
              </label>
              <input
                type="number"
                min="1000"
                step="500"
                value={monthlyAllowance}
                onChange={(e) => setMonthlyAllowance(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0D0A] border border-[#4ADE80]/20 text-sm font-bold text-[#4ADE80] focus:outline-none focus:border-[#4ADE80]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] mb-1">
                Days Remaining Until Next Allowance
              </label>
              <input
                type="number"
                min="1"
                max="31"
                value={daysRemaining}
                onChange={(e) => setDaysRemaining(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0D0A] border border-[#4ADE80]/20 text-sm font-bold text-[#4ADE80] focus:outline-none focus:border-[#4ADE80]"
              />
            </div>
          </div>
        </div>

        {/* 4. Audio Sound Effects & Reset Data */}
        <div className="botanical-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#111611] border border-[#4ADE80]/20 flex items-center justify-center text-[#4ADE80]">
              <Volume2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Interactive Sound FX</h4>
              <p className="text-[11px] text-[#94A3B8]">Watering can trickles, coin drops, and alert chimes</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => updateSettings({ soundEnabled: !settings.soundEnabled })}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                settings.soundEnabled 
                  ? 'bg-[#4ADE80] text-[#0A0D0A]' 
                  : 'bg-[#111611] text-[#94A3B8] border border-[#4ADE80]/20'
              }`}
            >
              {settings.soundEnabled ? "Audio On" : "Muted"}
            </button>

            <button
              onClick={() => {
                if (confirm("Reset wallet to default demo parameters?")) {
                  resetAllData();
                }
              }}
              className="px-4 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset State</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
