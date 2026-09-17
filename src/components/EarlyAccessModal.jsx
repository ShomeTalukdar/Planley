import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Sprout, 
  CheckCircle2, 
  Copy, 
  Share2, 
  GraduationCap, 
  Mail, 
  User, 
  IndianRupee, 
  ArrowRight,
  Trophy
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EarlyAccessModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [college, setCollege] = useState('');
  const [allowance, setAllowance] = useState('₹4,000 - ₹8,000');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [waitlistNumber, setWaitlistNumber] = useState(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !college) return;

    // Generate random waitlist rank between 320 and 580
    const rank = Math.floor(Math.random() * 260) + 320;
    setWaitlistNumber(rank);
    setIsSubmitted(true);

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 }
    });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://planey.innove-x.com/join?ref=${college.replace(/\s+/g, '-').toLowerCase()}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#EBE5D3] shadow-2xl relative animate-in zoom-in-95 duration-200">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#7E8D76] hover:text-[#24331C] hover:bg-[#FAF7EE] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#3D7838] text-white flex items-center justify-center shadow-md shadow-[#3D7838]/20">
                <Sprout className="w-6 h-6 text-[#E9B838]" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#62A842]">
                  INNOVE-X Beta Program
                </span>
                <h3 className="text-xl font-black text-[#24331C]">
                  Join PLANEY Early Access
                </h3>
              </div>
            </div>

            <p className="text-xs text-[#53634B] leading-relaxed mb-6">
              Be among the first 2,000 university students across India to get early beta access, lifetime free UPI smart locks, and the Seed Pioneer badge.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#53634B] mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#7E8D76] absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ananya Sharma"
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#EBE5D3] bg-[#FFFDF7] text-xs font-semibold text-[#24331C] focus:outline-none focus:ring-2 focus:ring-[#3D7838]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#53634B] mb-1">
                  Student / Personal Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#7E8D76] absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ananya@campus.edu or gmail.com"
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#EBE5D3] bg-[#FFFDF7] text-xs font-semibold text-[#24331C] focus:outline-none focus:ring-2 focus:ring-[#3D7838]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#53634B] mb-1">
                  College / University Name
                </label>
                <div className="relative">
                  <GraduationCap className="w-4 h-4 text-[#7E8D76] absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    placeholder="e.g. BITS Pilani, IIT Delhi, DU, VIT"
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#EBE5D3] bg-[#FFFDF7] text-xs font-semibold text-[#24331C] focus:outline-none focus:ring-2 focus:ring-[#3D7838]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#53634B] mb-1">
                  Typical Monthly Allowance
                </label>
                <select
                  value={allowance}
                  onChange={(e) => setAllowance(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-[#EBE5D3] bg-[#FFFDF7] text-xs font-semibold text-[#24331C] focus:outline-none focus:ring-2 focus:ring-[#3D7838]"
                >
                  <option value="Under ₹3,000">Under ₹3,000 / month</option>
                  <option value="₹3,000 - ₹6,000">₹3,000 - ₹6,000 / month</option>
                  <option value="₹6,000 - ₹12,000">₹6,000 - ₹12,000 / month</option>
                  <option value="₹12,000+">₹12,000+ / month (Stipend / Earner)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#3D7838] hover:bg-[#2C5728] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#3D7838]/25 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <Sparkles className="w-4 h-4 text-[#E9B838]" />
                <span>Reserve My Free Student Spot</span>
              </button>
            </form>

            <div className="mt-4 text-center">
              <span className="text-[10px] text-[#7E8D76]">
                🔒 Zero spam. We never sell student financial data. RBI & NPCI compliant.
              </span>
            </div>
          </div>
        ) : (
          /* Confirmation Success Screen */
          <div className="text-center py-4 space-y-4">
            <div className="w-16 h-16 rounded-3xl bg-[#E8F5E4] text-[#3D7838] flex items-center justify-center mx-auto text-3xl shadow-sm border border-[#62A842]/20">
              🌱
            </div>

            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#3D7838] bg-[#E8F5E4] px-3 py-1 rounded-full">
                Early Access Confirmed!
              </span>
              <h3 className="text-2xl font-black text-[#24331C] mt-2">
                Welcome to PLANEY, {name || 'Fellow Builder'}!
              </h3>
              <p className="text-xs text-[#53634B] mt-1">
                A confirmation email is flying to <strong>{email}</strong>.
              </p>
            </div>

            {/* Waitlist Position Badge */}
            <div className="bg-[#FAF7EE] p-5 rounded-2xl border border-[#EBE5D3]">
              <div className="flex items-center justify-center gap-1.5 text-xs text-[#7E8D76] font-bold uppercase mb-1">
                <Trophy className="w-4 h-4 text-[#E9B838]" />
                <span>Campus Leaderboard Priority</span>
              </div>
              <div className="text-3xl font-black text-[#3D7838]">
                #{waitlistNumber}
              </div>
              <p className="text-xs text-[#53634B] font-semibold mt-1">
                Top 5% queue for {college || 'your university'}
              </p>
            </div>

            {/* Referral Sharing */}
            <div className="bg-[#FFFDF7] p-4 rounded-2xl border border-[#EBE5D3] text-left">
              <span className="text-xs font-bold text-[#24331C] block mb-1">
                Jump 50 spots higher:
              </span>
              <p className="text-[11px] text-[#53634B] mb-3">
                Invite 2 batchmates to join with your campus link to unlock the Chrome Extension instant beta.
              </p>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyLink}
                  className="flex-1 py-2 px-3 rounded-xl bg-[#FAF7EE] hover:bg-[#E8F5E4] text-xs font-bold text-[#24331C] border border-[#EBE5D3] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? "Copied Link!" : "Copy Campus Link"}</span>
                </button>
                <a
                  href={`https://api.whatsapp.com/send?text=Hey!%20Check%20out%20PLANEY%20by%20INNOVE-X%20%E2%80%94%20the%20smart%20wallet%20designed%20for%20college%20students.%20Join%20my%20campus%20waitlist%20here:%20https://planey.innove-x.com`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2 px-4 rounded-xl bg-[#25D366] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm hover:opacity-90"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-[#24331C] hover:bg-[#3D7838] text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Explore PLANEY Interactive Features
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
