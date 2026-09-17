import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Gamepad2, 
  Headphones, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Play, 
  Pause, 
  Flame, 
  Trophy, 
  Heart, 
  Users, 
  Wallet, 
  RotateCcw,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ARTICLES_DATA, AUDIO_PODS } from '../../data/content';

export default function AcademyView() {
  const { gardenerXp } = useApp();
  const [activeMode, setActiveMode] = useState('game'); // 'articles', 'game', 'podcast'

  // Weekend Survival Game State
  const [gameStep, setGameStep] = useState(0);
  const [walletHp, setWalletHp] = useState(100);
  const [socialHp, setSocialHp] = useState(80);
  const [hungerHp, setHungerHp] = useState(70);
  const [gameFinished, setGameFinished] = useState(false);
  const [gameLog, setGameLog] = useState([]);

  // Podcast State
  const [playingPodId, setPlayingPodId] = useState(null);
  const [playbackSpeed, setPlaybackSpeed] = useState('1x');

  const gameScenarios = [
    {
      id: 1,
      title: "Friday Night Dinner Invitation",
      situation: "Your hostel wingmates are heading to a trendy rooftop cafe for burgers and mocktails. Expected bill: ₹550.",
      choices: [
        {
          label: "Go with them and order full meal (₹550)",
          effects: { wallet: -35, social: +25, hunger: +30 },
          feedback: "Great bonding, but a hefty dent in your remaining monthly pocket money!"
        },
        {
          label: "Eat mess dinner first, join them only for a ₹60 iced tea",
          effects: { wallet: -5, social: +20, hunger: +25 },
          feedback: "Masterclass! You maintained social connection without blowing the budget."
        },
        {
          label: "Stay back in room and study alone",
          effects: { wallet: 0, social: -20, hunger: +10 },
          feedback: "Saved ₹550, but missed key semester memories with friends."
        }
      ]
    },
    {
      id: 2,
      title: "Flash Sale Impulse Notification",
      situation: "Your phone buzzes at 11:30 PM: '50% FLASH SALE on Limited Edition Anime Hoodies! Only 4 left in stock!'",
      choices: [
        {
          label: "Tap Buy Now instantly with UPI (₹1,800)",
          effects: { wallet: -50, social: +5, hunger: 0 },
          feedback: "Classic midnight FOMO trap! Your allowance is severely depleted."
        },
        {
          label: "Activate Planley's 48-Hour Wishlist Lock",
          effects: { wallet: 0, social: 0, hunger: 0 },
          feedback: "Brilliant behavioral impulse pause! You will likely forget it by morning."
        },
        {
          label: "Borrow from a BNPL app to keep wallet safe",
          effects: { wallet: -20, social: 0, hunger: 0 },
          feedback: "Dangerous trap! BNPL late fees will haunt your exam week."
        }
      ]
    },
    {
      id: 3,
      title: "Commute to Saturday Hackathon",
      situation: "You are running 15 minutes late for a weekend campus hackathon 6km away.",
      choices: [
        {
          label: "Book a solo private cab (₹220)",
          effects: { wallet: -15, social: 0, hunger: 0 },
          feedback: "Fast arrival, but cab fares pile up quickly."
        },
        {
          label: "Pool an auto with two other participants (₹50)",
          effects: { wallet: -5, social: +15, hunger: 0 },
          feedback: "Smart move! Shared commute saves cash and makes new teammates."
        },
        {
          label: "Wait for campus shuttle and arrive 10 min late",
          effects: { wallet: 0, social: -5, hunger: 0 },
          feedback: "Completely free, but lost opening problem statement briefing."
        }
      ]
    },
    {
      id: 4,
      title: "Project Stationery & Color Printouts",
      situation: "Final submission on Monday requires 40 pages of colored reports and hard binding.",
      choices: [
        {
          label: "Print at the high-end mall shop (₹280)",
          effects: { wallet: -20, social: 0, hunger: 0 },
          feedback: "Convenient but overcharged for basic laser print."
        },
        {
          label: "Use university library student printing quota (₹60)",
          effects: { wallet: -5, social: +5, hunger: 0 },
          feedback: "Resourceful! Utilizing campus privileges saved you ₹220."
        }
      ]
    },
    {
      id: 5,
      title: "Sunday Evening Stress Snack",
      situation: "Exams start in 3 days. Stress levels are high; stomach is rumbling at midnight.",
      choices: [
        {
          label: "Order large gourmet pizza combo (₹450)",
          effects: { wallet: -30, social: +10, hunger: +40 },
          feedback: "Comfort food bliss, but heavy financial remorse on Monday."
        },
        {
          label: "Cook 2 packets of Maggi with hostel kettle (₹30)",
          effects: { wallet: -2, social: +5, hunger: +25 },
          feedback: "Legendary student survival hack! Safe, warm, and wallet-friendly."
        }
      ]
    }
  ];

  const handleGameChoice = (choice) => {
    const newWallet = Math.max(0, Math.min(100, walletHp + choice.effects.wallet));
    const newSocial = Math.max(0, Math.min(100, socialHp + choice.effects.social));
    const newHunger = Math.max(0, Math.min(100, hungerHp + choice.effects.hunger));

    setWalletHp(newWallet);
    setSocialHp(newSocial);
    setHungerHp(newHunger);
    setGameLog(prev => [...prev, choice.feedback]);

    if (gameStep < gameScenarios.length - 1) {
      setGameStep(prev => prev + 1);
    } else {
      setGameFinished(true);
    }
  };

  const resetGame = () => {
    setGameStep(0);
    setWalletHp(100);
    setSocialHp(80);
    setHungerHp(70);
    setGameFinished(false);
    setGameLog([]);
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FACC15] bg-[#FACC15]/10 px-2.5 py-0.5 rounded-full border border-[#FACC15]/20">
            Financial Literacy Hub
          </span>
          <h2 className="font-extrabold text-2xl text-white mt-1">
            Financial Academy
          </h2>
          <p className="text-xs text-[#94A3B8]">
            Master student money psychology through interactive dilemmas, audio pods, and cheat sheets.
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div className="inline-flex p-1.5 bg-[#161D16] rounded-2xl border border-[#4ADE80]/20">
          <button
            onClick={() => setActiveMode('game')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeMode === 'game' 
                ? 'bg-[#4ADE80] text-[#0A0D0A] shadow-md' 
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            <Gamepad2 className="w-4 h-4" />
            <span>Weekend Sim</span>
          </button>

          <button
            onClick={() => setActiveMode('articles')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeMode === 'articles' 
                ? 'bg-[#4ADE80] text-[#0A0D0A] shadow-md' 
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>2-Min Reads</span>
          </button>

          <button
            onClick={() => setActiveMode('podcast')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeMode === 'podcast' 
                ? 'bg-[#4ADE80] text-[#0A0D0A] shadow-md' 
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            <Headphones className="w-4 h-4" />
            <span>Audio Pods</span>
          </button>
        </div>
      </div>

      {/* MODE B: Weekend Budget Survival Mini-Game */}
      {activeMode === 'game' && (
        <div className="botanical-card p-6 sm:p-8 max-w-3xl mx-auto">
          
          {/* Game Stats Bar */}
          <div className="grid grid-cols-3 gap-3 bg-[#111611] p-4 rounded-2xl border border-[#4ADE80]/20 mb-6">
            <div>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-bold text-[#86EFAC] flex items-center gap-1">
                  <Wallet className="w-3.5 h-3.5 text-[#4ADE80]" />
                  Wallet
                </span>
                <span className="font-black text-white">{walletHp}%</span>
              </div>
              <div className="w-full bg-[#0A0D0A] h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-[#4ADE80] h-full transition-all duration-300"
                  style={{ width: `${walletHp}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-bold text-[#FACC15] flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-[#FACC15]" />
                  Social
                </span>
                <span className="font-black text-white">{socialHp}%</span>
              </div>
              <div className="w-full bg-[#0A0D0A] h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-[#FACC15] h-full transition-all duration-300"
                  style={{ width: `${socialHp}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-bold text-rose-400 flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-rose-400" />
                  Stamina
                </span>
                <span className="font-black text-white">{hungerHp}%</span>
              </div>
              <div className="w-full bg-[#0A0D0A] h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-rose-400 h-full transition-all duration-300"
                  style={{ width: `${hungerHp}%` }}
                />
              </div>
            </div>
          </div>

          {!gameFinished ? (
            <div>
              <div className="flex items-center justify-between text-xs text-[#94A3B8] pb-3 border-b border-[#4ADE80]/15 mb-4">
                <span>Dilemma {gameStep + 1} of {gameScenarios.length}</span>
                <span className="text-[#4ADE80] font-bold">Scenario Challenge</span>
              </div>

              <h3 className="text-lg font-black text-white mb-2">
                {gameScenarios[gameStep].title}
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
                {gameScenarios[gameStep].situation}
              </p>

              <div className="space-y-3">
                {gameScenarios[gameStep].choices.map((choice, i) => (
                  <button
                    key={i}
                    onClick={() => handleGameChoice(choice)}
                    className="w-full p-4 rounded-2xl bg-[#111611] hover:bg-[#1E2B1E] border border-[#4ADE80]/20 hover:border-[#4ADE80]/50 text-left text-xs font-semibold text-white transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <span>{choice.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#4ADE80] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-[#4ADE80]/20 text-[#4ADE80] flex items-center justify-center mx-auto text-3xl">
                🏆
              </div>
              <h3 className="text-2xl font-black text-white">
                Weekend Survival Complete!
              </h3>
              <p className="text-xs text-[#94A3B8] max-w-sm mx-auto">
                {walletHp > 40 && socialHp > 40 
                  ? "Flawless balance! You protected your stipend while keeping your college friendships healthy."
                  : "Good effort! Remember that small social compromises save ₹1,000s every weekend."}
              </p>

              <div className="p-4 bg-[#111611] rounded-2xl border border-[#4ADE80]/20 text-left space-y-1.5 text-xs text-[#86EFAC] max-w-md mx-auto">
                <span className="font-bold text-white block mb-1">Your Key Decisions:</span>
                {gameLog.map((log, idx) => (
                  <div key={idx} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4ADE80] shrink-0 mt-0.5" />
                    <span>{log}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={resetGame}
                className="px-6 py-2.5 rounded-xl bg-[#4ADE80] text-[#0A0D0A] font-extrabold text-xs uppercase tracking-wider cursor-pointer"
              >
                Play Again
              </button>
            </div>
          )}

        </div>
      )}

      {/* MODE A: Byte-Sized Reading Cards */}
      {activeMode === 'articles' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES_DATA.map((art) => (
            <div key={art.id} className="botanical-card p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#4ADE80]/15 text-[#4ADE80] text-[10px] font-extrabold border border-[#4ADE80]/20">
                    {art.tag}
                  </span>
                  <span className="text-[10px] text-[#94A3B8] flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {art.readTime}
                  </span>
                </div>

                <h4 className="font-black text-base text-white mb-2 leading-snug">
                  {art.title}
                </h4>

                <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                  {art.excerpt}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-[#4ADE80]/15">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#86EFAC]">
                    Tactical Takeaway:
                  </span>
                  {art.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-white">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4ADE80] shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-snug">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#4ADE80]/15 flex items-center justify-between text-xs text-[#94A3B8]">
                <span>{art.author}</span>
                <span className="text-[#4ADE80] font-bold">+50 XP Completed</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* MODE C: 3-Minute Podcasts / Audio Pods */}
      {activeMode === 'podcast' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AUDIO_PODS.map((pod) => {
            const isPlaying = playingPodId === pod.id;
            return (
              <div key={pod.id} className="botanical-card p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="text-[10px] font-black uppercase text-[#FACC15] bg-[#FACC15]/15 px-2 py-0.5 rounded border border-[#FACC15]/30">
                      {pod.duration}
                    </span>
                    <span className="text-[10px] text-[#94A3B8]">{pod.listeners}</span>
                  </div>

                  <h4 className="font-black text-base text-white mb-1">
                    {pod.title}
                  </h4>
                  <p className="text-xs text-[#86EFAC] font-medium mb-3">
                    Speaker: {pod.speaker}
                  </p>
                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                    {pod.topic}
                  </p>

                  {/* Waveform Visualizer */}
                  <div className="h-10 bg-[#111611] rounded-xl p-2 flex items-center justify-center gap-1 mb-4 border border-[#4ADE80]/15">
                    {[40, 70, 30, 90, 60, 80, 50, 95, 45, 65, 35, 75, 85, 40].map((h, idx) => (
                      <div
                        key={idx}
                        className={`w-1 rounded-full transition-all duration-300 ${
                          isPlaying ? 'bg-[#4ADE80]' : 'bg-[#1E2B1E]'
                        }`}
                        style={{ height: isPlaying ? `${Math.max(20, (h * Math.random()).toFixed(0))}%` : `${h * 0.4}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#4ADE80]/15">
                  <button
                    onClick={() => setPlayingPodId(isPlaying ? null : pod.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                      isPlaying 
                        ? 'bg-[#4ADE80] text-[#0A0D0A]' 
                        : 'bg-[#161D16] hover:bg-[#1E2B1E] text-white border border-[#4ADE80]/20'
                    }`}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                    <span>{isPlaying ? "Pause" : "Play 3-Min"}</span>
                  </button>

                  <button
                    onClick={() => setPlaybackSpeed(s => s === '1x' ? '1.25x' : s === '1.25x' ? '1.5x' : '1x')}
                    className="text-[11px] font-bold text-[#86EFAC] bg-[#111611] px-2 py-1 rounded border border-[#4ADE80]/15 cursor-pointer"
                  >
                    {playbackSpeed} Speed
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}
