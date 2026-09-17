import React from 'react';

// "The Money Gardener" — Main Mascot Pushing Wheelbarrow with Money Plants & Coins
export function MoneyGardenerWheelbarrow({ className = "w-48 h-48" }) {
  return (
    <svg className={className} viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FACC15" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.1" />
        </radialGradient>
        <linearGradient id="leafGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#86EFAC" />
          <stop offset="100%" stopColor="#22C55E" />
        </linearGradient>
        <linearGradient id="apronGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22C55E" />
          <stop offset="100%" stopColor="#15803D" />
        </linearGradient>
      </defs>

      {/* Ambient Floor Shadow */}
      <ellipse cx="120" cy="188" rx="90" ry="8" fill="#050705" opacity="0.6" />

      {/* --- WHEELBARROW --- */}
      {/* Wooden wheel */}
      <circle cx="50" cy="170" r="18" fill="#78350F" stroke="#451A03" strokeWidth="4" />
      <circle cx="50" cy="170" r="6" fill="#FACC15" />
      <line x1="50" y1="152" x2="50" y2="188" stroke="#F59E0B" strokeWidth="2" />
      <line x1="32" y1="170" x2="68" y2="170" stroke="#F59E0B" strokeWidth="2" />

      {/* Wheelbarrow frame */}
      <path d="M50 170 L95 155 L145 160" stroke="#92400E" strokeWidth="5" strokeLinecap="round" />
      {/* Front support leg */}
      <path d="M100 155 L108 185" stroke="#78350F" strokeWidth="4" strokeLinecap="round" />

      {/* Wheelbarrow tub */}
      <path d="M35 150 L95 155 L125 125 L45 120 Z" fill="#B45309" stroke="#78350F" strokeWidth="3" />
      <path d="M45 120 L125 125 L135 110 L50 108 Z" fill="#D97706" />

      {/* Wheelbarrow handles */}
      <path d="M90 148 L155 145" stroke="#92400E" strokeWidth="5" strokeLinecap="round" />

      {/* --- GOLD COIN STACK & SACKS IN WHEELBARROW --- */}
      {/* Glowing aura */}
      <circle cx="85" cy="115" r="38" fill="url(#goldGlow)" />

      {/* Money Sack with Rupee Symbol */}
      <path d="M60 115 C55 95 85 92 88 115 C90 128 58 128 60 115 Z" fill="#CA8A04" stroke="#854D0E" strokeWidth="2" />
      <circle cx="74" cy="100" r="3" fill="#854D0E" />
      <text x="74" y="118" fontSize="11" fontWeight="bold" fill="#FEF08A" textAnchor="middle">₹</text>

      {/* Sprouting Leaves from Money Sack */}
      <path d="M74 95 Q65 80 55 86 Q62 98 74 95 Z" fill="url(#leafGrad)" />
      <path d="M74 95 Q85 78 95 84 Q86 98 74 95 Z" fill="url(#leafGrad)" />
      <path d="M74 95 Q75 70 78 68 Q80 82 74 95 Z" fill="#4ADE80" />

      {/* Golden Coins Spilling */}
      <ellipse cx="98" cy="120" rx="9" ry="6" fill="#FACC15" stroke="#D97706" strokeWidth="1.5" />
      <ellipse cx="106" cy="118" rx="8" ry="5" fill="#FDE047" stroke="#D97706" strokeWidth="1.5" />
      <ellipse cx="90" cy="125" rx="9" ry="6" fill="#EAB308" stroke="#B45309" strokeWidth="1.5" />
      <ellipse cx="102" cy="126" rx="8" ry="5" fill="#FACC15" stroke="#B45309" strokeWidth="1.5" />
      <ellipse cx="50" cy="122" rx="7" ry="5" fill="#FACC15" stroke="#D97706" strokeWidth="1.5" />

      {/* Little Coin Plant in Pot inside barrow */}
      <path d="M106 122 L116 122 L114 135 L108 135 Z" fill="#EA580C" />
      <path d="M111 122 Q111 108 115 106 Q118 115 111 122 Z" fill="#4ADE80" />
      <circle cx="116" cy="105" r="4" fill="#FACC15" stroke="#CA8A04" strokeWidth="1" />

      {/* --- THE MONEY GARDENER (CHARACTER) --- */}
      {/* Boots */}
      <path d="M152 178 L168 178 L170 188 L148 188 Z" fill="#451A03" />
      <path d="M174 175 L190 175 L192 185 L170 185 Z" fill="#451A03" />

      {/* Legs */}
      <rect x="154" y="148" width="13" height="32" rx="4" fill="#1E293B" />
      <rect x="175" y="146" width="13" height="32" rx="4" fill="#1E293B" />

      {/* Body / Shirt */}
      <rect x="150" y="98" width="40" height="52" rx="8" fill="#F8FAFC" />
      
      {/* Green Apron */}
      <path d="M154 110 L186 110 L188 152 L152 152 Z" fill="url(#apronGrad)" stroke="#166534" strokeWidth="2" />
      {/* Apron Straps */}
      <line x1="160" y1="98" x2="162" y2="110" stroke="#166534" strokeWidth="3" />
      <line x1="180" y1="98" x2="178" y2="110" stroke="#166534" strokeWidth="3" />
      {/* Apron Pocket with Sprout */}
      <rect x="160" y="125" width="20" height="15" rx="3" fill="#15803D" />
      <path d="M170 125 Q166 115 162 118 Q166 125 170 125 Z" fill="#86EFAC" />
      <path d="M170 125 Q174 114 178 117 Q174 125 170 125 Z" fill="#4ADE80" />

      {/* Arms pushing the handles */}
      {/* Left arm */}
      <path d="M152 108 L138 135 L145 146" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Right arm */}
      <path d="M178 108 L168 130 L156 144" stroke="#FDBA74" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />

      {/* Neck & Head */}
      <rect x="164" y="88" width="12" height="12" fill="#FED7AA" />
      <circle cx="170" cy="80" r="18" fill="#FED7AA" />

      {/* Friendly Face */}
      {/* Cheerful Eyes */}
      <ellipse cx="164" cy="78" rx="2.5" ry="3" fill="#1E293B" />
      <ellipse cx="176" cy="78" rx="2.5" ry="3" fill="#1E293B" />
      <circle cx="165" cy="77" r="0.8" fill="#FFFFFF" />
      <circle cx="177" cy="77" r="0.8" fill="#FFFFFF" />
      {/* Rosy Cheeks */}
      <circle cx="160" cy="84" r="3" fill="#FB7185" opacity="0.6" />
      <circle cx="180" cy="84" r="3" fill="#FB7185" opacity="0.6" />
      {/* Wide Smile */}
      <path d="M165 84 Q170 91 175 84" stroke="#881337" strokeWidth="2.2" strokeLinecap="round" fill="#FFFFFF" />

      {/* Straw Hat */}
      {/* Brim */}
      <ellipse cx="170" cy="68" rx="28" ry="8" fill="#FACC15" stroke="#CA8A04" strokeWidth="2" />
      {/* Crown */}
      <path d="M154 67 C154 48 186 48 186 67 Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="2" />
      {/* Green Hat Ribbon */}
      <path d="M154 65 Q170 68 186 65 L186 62 Q170 65 154 62 Z" fill="#16A34A" />

      {/* Sprout sticking out of Hat */}
      <path d="M178 52 Q186 40 192 44 Q186 52 178 52 Z" fill="#4ADE80" />
      <circle cx="192" cy="43" r="3" fill="#FACC15" />
    </svg>
  );
}

// Thumbs-Up Gardener (for 50% Milestone & Celebrations)
export function MoneyGardenerThumbsUp({ className = "w-20 h-20" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="94" rx="35" ry="4" fill="#000000" opacity="0.4" />
      {/* Body */}
      <circle cx="50" cy="52" r="22" fill="#FED7AA" />
      <path d="M34 68 L66 68 L64 92 L36 92 Z" fill="#22C55E" stroke="#166534" strokeWidth="2" />
      {/* Face */}
      <ellipse cx="44" cy="50" rx="2" ry="2.5" fill="#1E293B" />
      <ellipse cx="56" cy="50" rx="2" ry="2.5" fill="#1E293B" />
      <path d="M45 56 Q50 62 55 56" stroke="#881337" strokeWidth="2" strokeLinecap="round" fill="#FFFFFF" />
      <circle cx="40" cy="54" r="2.5" fill="#FB7185" opacity="0.6" />
      <circle cx="60" cy="54" r="2.5" fill="#FB7185" opacity="0.6" />
      {/* Hat */}
      <ellipse cx="50" cy="38" rx="26" ry="7" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5" />
      <path d="M37 37 C37 20 63 20 63 37 Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="1.5" />
      <path d="M37 35 Q50 38 63 35 L63 33 Q50 36 37 33 Z" fill="#16A34A" />
      {/* Hand Thumbs-Up */}
      <path d="M70 65 L76 65 L78 52 C78 48 74 48 74 52 L74 65" stroke="#FED7AA" strokeWidth="5" strokeLinecap="round" fill="#FED7AA" />
      <circle cx="76" cy="48" r="4" fill="#FACC15" stroke="#CA8A04" strokeWidth="1" />
    </svg>
  );
}

// Watch Tapping / Caution Gardener (for 75% Alert)
export function MoneyGardenerWatch({ className = "w-20 h-20" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="94" rx="35" ry="4" fill="#000000" opacity="0.4" />
      {/* Head */}
      <circle cx="50" cy="50" r="22" fill="#FED7AA" />
      {/* Concerned Eyebrows & Eyes */}
      <path d="M42 45 L47 47" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />
      <path d="M58 45 L53 47" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />
      <circle cx="45" cy="51" r="2.5" fill="#1E293B" />
      <circle cx="55" cy="51" r="2.5" fill="#1E293B" />
      {/* O-mouth / Puzzled */}
      <ellipse cx="50" cy="60" rx="3" ry="4" fill="#881337" />
      {/* Hat */}
      <ellipse cx="50" cy="36" rx="26" ry="7" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5" />
      <path d="M37 35 C37 18 63 18 63 35 Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="1.5" />
      {/* Arm holding wrist / watch */}
      <path d="M32 74 L48 70" stroke="#FED7AA" strokeWidth="6" strokeLinecap="round" />
      <circle cx="48" cy="70" r="6" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
      <path d="M48 68 L48 70 L50 71" stroke="#FFFFFF" strokeWidth="1" />
      <path d="M68 76 L52 72" stroke="#FED7AA" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

// Glowing Glass Mason Jar for Emergency Fund
export function GlassMasonJar({ balance = 850, isLocked = true, className = "w-36 h-48" }) {
  const fillPercent = Math.min(100, Math.max(15, Math.round((balance / 3000) * 100)));
  const fillHeight = (fillPercent / 100) * 80;

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 120 160" fill="none" className="w-full h-full filter drop-shadow-[0_0_15px_rgba(74,222,128,0.25)]">
        <defs>
          <linearGradient id="jarGlass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#86EFAC" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#4ADE80" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#15803D" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="liquidGold" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#D97706" />
            <stop offset="50%" stopColor="#FACC15" />
            <stop offset="100%" stopColor="#FEF08A" />
          </linearGradient>
        </defs>

        {/* Jar Metal Lid / Clamp */}
        <rect x="35" y="10" width="50" height="10" rx="3" fill="#D97706" stroke="#92400E" strokeWidth="1.5" />
        <rect x="40" y="6" width="40" height="5" rx="2" fill="#F59E0B" />
        <rect x="30" y="20" width="60" height="6" rx="2" fill="#CA8A04" stroke="#78350F" strokeWidth="1" />

        {/* Glass Jar Body */}
        <rect x="20" y="25" width="80" height="125" rx="24" fill="url(#jarGlass)" stroke="rgba(134,239,172,0.4)" strokeWidth="2.5" />
        
        {/* Glass Reflection Highlight */}
        <path d="M28 35 C28 35 34 85 34 135" stroke="rgba(255,255,255,0.4)" strokeWidth="3" strokeLinecap="round" />

        {/* Liquid / Coins Fill */}
        <rect 
          x="25" 
          y={145 - fillHeight} 
          width="70" 
          height={fillHeight} 
          rx="14" 
          fill="url(#liquidGold)" 
          opacity="0.85" 
        />

        {/* Floating Gold Coins */}
        <circle cx="45" cy={135 - fillHeight * 0.4} r="8" fill="#FDE047" stroke="#CA8A04" strokeWidth="1.5" />
        <text x="45" y={138 - fillHeight * 0.4} fontSize="8" fontWeight="bold" fill="#78350F" textAnchor="middle">₹</text>

        <circle cx="70" cy={130 - fillHeight * 0.6} r="9" fill="#FACC15" stroke="#B45309" strokeWidth="1.5" />
        <text x="70" y={133 - fillHeight * 0.6} fontSize="9" fontWeight="bold" fill="#78350F" textAnchor="middle">₹</text>

        <circle cx="55" cy={125 - fillHeight * 0.8} r="7" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1.5" />

        {/* Emerging Sprout Plant on Top of Coins */}
        <path d="M60 70 Q52 52 40 56 Q50 68 60 70 Z" fill="#4ADE80" stroke="#166534" strokeWidth="1" />
        <path d="M60 70 Q68 50 80 54 Q70 68 60 70 Z" fill="#86EFAC" stroke="#166534" strokeWidth="1" />
        <line x1="60" y1="70" x2="60" y2="85" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" />

        {/* Lock Overlay Badge if locked */}
        {isLocked && (
          <g transform="translate(48, 85)">
            <circle cx="12" cy="12" r="14" fill="#0A0D0A" stroke="#FACC15" strokeWidth="2" />
            <path d="M9 10 V7 A3 3 0 0 1 15 7 V10" stroke="#FACC15" strokeWidth="2" fill="none" />
            <rect x="7" y="10" width="10" height="8" rx="2" fill="#FACC15" />
            <circle cx="12" cy="14" r="1" fill="#78350F" />
          </g>
        )}
      </svg>
    </div>
  );
}

// Digital Terrarium Greenhouse Plant for Wishlist
export function TerrariumPlant({ progress = 45, isWatering = false, className = "w-44 h-48" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Animated Water Droplets during watering */}
      {isWatering && (
        <div className="absolute top-2 inset-x-0 flex justify-center gap-2 z-20 pointer-events-none animate-bounce">
          <span className="w-2 h-3 bg-cyan-400 rounded-full opacity-80" />
          <span className="w-2 h-3 bg-cyan-300 rounded-full opacity-90 delay-100" />
          <span className="w-1.5 h-2.5 bg-cyan-400 rounded-full opacity-70 delay-200" />
        </div>
      )}

      <svg viewBox="0 0 140 160" fill="none" className="w-full h-full filter drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">
        {/* Geometric Glass Terrarium Frame */}
        <polygon 
          points="70,12 120,45 120,135 70,155 20,135 20,45" 
          fill="rgba(22, 29, 22, 0.7)" 
          stroke="rgba(74, 222, 128, 0.4)" 
          strokeWidth="2.5" 
        />
        {/* Facet Lines */}
        <line x1="70" y1="12" x2="70" y2="155" stroke="rgba(74, 222, 128, 0.25)" strokeWidth="1.5" />
        <line x1="20" y1="45" x2="70" y2="65" stroke="rgba(74, 222, 128, 0.2)" strokeWidth="1.5" />
        <line x1="120" y1="45" x2="70" y2="65" stroke="rgba(74, 222, 128, 0.2)" strokeWidth="1.5" />

        {/* Soil Base with Pebble Layer */}
        <path d="M22 133 L70 152 L118 133 L118 120 L70 135 L22 120 Z" fill="#78350F" />
        <path d="M22 120 L70 135 L118 120 L118 108 L70 120 L22 108 Z" fill="#451A03" />

        {/* Plant Growth based on progress */}
        {progress < 25 ? (
          /* Stage 1: Sprouting Seed */
          <g transform="translate(0, 15)">
            <ellipse cx="70" cy="100" rx="8" ry="5" fill="#854D0E" />
            <path d="M70 98 Q72 82 76 78 Q78 86 70 98 Z" fill="#4ADE80" />
            <circle cx="76" cy="78" r="3" fill="#FACC15" />
          </g>
        ) : progress < 60 ? (
          /* Stage 2: Flourishing Coin Sapling */
          <g transform="translate(0, 5)">
            <path d="M70 115 Q68 85 70 65" stroke="#22C55E" strokeWidth="4" strokeLinecap="round" />
            <path d="M70 90 Q55 78 48 85 Q58 96 70 90 Z" fill="#4ADE80" />
            <path d="M70 80 Q85 68 92 75 Q82 86 70 80 Z" fill="#86EFAC" />
            <path d="M70 65 Q62 50 70 45 Q78 50 70 65 Z" fill="#22C55E" />
            {/* Coins on Leaves */}
            <circle cx="48" cy="85" r="5" fill="#FACC15" stroke="#CA8A04" strokeWidth="1" />
            <circle cx="92" cy="75" r="6" fill="#FDE047" stroke="#CA8A04" strokeWidth="1" />
          </g>
        ) : (
          /* Stage 3: Lush Blooming Money Tree */
          <g>
            <path d="M70 115 Q66 80 70 55" stroke="#92400E" strokeWidth="6" strokeLinecap="round" />
            {/* Green Canopy Blobs */}
            <circle cx="54" cy="55" r="18" fill="#15803D" opacity="0.9" />
            <circle cx="86" cy="55" r="18" fill="#16A34A" opacity="0.9" />
            <circle cx="70" cy="42" r="22" fill="#22C55E" />
            <circle cx="70" cy="32" r="14" fill="#4ADE80" />
            {/* Golden Coins Blooming */}
            <circle cx="54" cy="48" r="6" fill="#FACC15" stroke="#CA8A04" strokeWidth="1" />
            <circle cx="86" cy="50" r="7" fill="#FDE047" stroke="#CA8A04" strokeWidth="1.2" />
            <circle cx="70" cy="30" r="8" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5" />
            <circle cx="68" cy="62" r="6" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1" />
          </g>
        )}
      </svg>
    </div>
  );
}
