import React, { useState } from 'react';
import { 
  Sparkles, 
  ShoppingBag, 
  Tag, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink, 
  Layers, 
  ShieldCheck,
  Search,
  Copy
} from 'lucide-react';
import { ChromeIcon } from '../BrandIcons';

export default function ChromeExtensionView() {
  const [selectedProduct, setSelectedProduct] = useState('headphones');
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [copiedCode, setCopiedCode] = useState(null);

  const productData = {
    headphones: {
      name: "Wireless ANC Over-Ear Headphones",
      basePrice: 4200,
      image: "🎧",
      url: "https://www.amazon.in/dp/B08N5N6RSS",
      retailers: [
        { store: "Amazon.in", price: 4200, shipping: "Free Prime", delivery: "Tomorrow" },
        { store: "Flipkart", price: 4450, shipping: "₹40", delivery: "In 2 days" },
        { store: "Campus Electronics Lab", price: 3890, shipping: "Pickup", delivery: "Instant" }
      ],
      coupons: [
        { code: "CAMPUS20", discount: 500, label: "Verified Student 12% Off" },
        { code: "PRIMECHAI", discount: 200, label: "UPI Instant Cashback" }
      ],
      impulseWarning: "⚠️ Hold on, buddy! Your emergency pot says wait 3 days for the Friday Campus Sale."
    },
    sneakers: {
      name: "Chunky Canvas College Sneakers",
      basePrice: 2299,
      image: "👟",
      url: "https://www.myntra.com/casual-shoes/urban-edge",
      retailers: [
        { store: "Myntra", price: 2299, shipping: "Free", delivery: "In 3 days" },
        { store: "Ajio", price: 2499, shipping: "Free", delivery: "In 4 days" },
        { store: "SneakerLocal Hub", price: 2150, shipping: "₹80", delivery: "In 2 days" }
      ],
      coupons: [
        { code: "FASHION15", discount: 345, label: "15% Student Discount" },
        { code: "FIRSTORDER", discount: 200, label: "Welcome Promo" }
      ],
      impulseWarning: "⚠️ 3 browser tabs open! High impulse fatigue detected. Move to Wishlist Sprout?"
    }
  };

  const current = productData[selectedProduct];
  const discountedTotal = Math.max(0, current.basePrice - appliedDiscount);

  const handleApplyCoupon = (c) => {
    setAppliedDiscount(c.discount);
    setCouponCode(c.code);
  };

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#4ADE80] bg-[#4ADE80]/15 px-2.5 py-0.5 rounded-full border border-[#4ADE80]/30">
            Browser Companion Simulator
          </span>
          <h2 className="font-extrabold text-2xl text-white mt-1">
            PLANEY Chrome Deal & Impulse Radar
          </h2>
          <p className="text-xs text-[#94A3B8]">
            Simulate how the Chrome extension detects deals, finds coupons, and injects 48-hour cool-offs.
          </p>
        </div>

        {/* Product Switcher */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => { setSelectedProduct('headphones'); setAppliedDiscount(0); }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedProduct === 'headphones' 
                ? 'bg-[#4ADE80] text-[#0A0D0A]' 
                : 'bg-[#161D16] text-[#94A3B8] border border-[#4ADE80]/20'
            }`}
          >
            🎧 Headphones
          </button>
          <button
            onClick={() => { setSelectedProduct('sneakers'); setAppliedDiscount(0); }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedProduct === 'sneakers' 
                ? 'bg-[#4ADE80] text-[#0A0D0A]' 
                : 'bg-[#161D16] text-[#94A3B8] border border-[#4ADE80]/20'
            }`}
          >
            👟 Sneakers
          </button>
        </div>
      </div>

      {/* Browser Mockup Window */}
      <div className="botanical-card overflow-hidden border border-[#4ADE80]/30 shadow-2xl">
        
        {/* Browser Top Bar */}
        <div className="bg-[#111611] px-4 py-3 border-b border-[#4ADE80]/20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>

          <div className="flex-1 max-w-xl mx-auto bg-[#0A0D0A] px-3.5 py-1.5 rounded-full border border-[#4ADE80]/20 text-xs text-[#94A3B8] flex items-center justify-between">
            <span className="truncate">{current.url}</span>
            <span className="text-[10px] font-bold text-[#4ADE80] bg-[#4ADE80]/15 px-2 py-0.2 rounded-full">
              🔒 SSL Secured
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-[#4ADE80] text-[#0A0D0A] flex items-center justify-center font-bold text-xs shadow-md">
                🌱
              </div>
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#FACC15] text-[#0A0D0A] text-[9px] font-black rounded-full flex items-center justify-center">
                2
              </span>
            </div>
          </div>
        </div>

        {/* Browser Page Body */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
          
          {/* Left: Product Store View */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-start gap-4">
              <div className="w-24 h-24 rounded-2xl bg-[#111611] border border-[#4ADE80]/20 flex items-center justify-center text-5xl shrink-0">
                {current.image}
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white leading-tight">
                  {current.name}
                </h3>
                <p className="text-xs text-[#94A3B8] mt-1">
                  Sold by Verified Authorized Student Partner
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <span className="text-2xl font-black text-[#4ADE80]">
                    ₹{discountedTotal.toLocaleString()}
                  </span>
                  {appliedDiscount > 0 && (
                    <span className="text-xs text-[#94A3B8] line-through">
                      ₹{current.basePrice.toLocaleString()}
                    </span>
                  )}
                  {appliedDiscount > 0 && (
                    <span className="text-xs font-black text-[#FACC15] bg-[#FACC15]/15 px-2 py-0.5 rounded border border-[#FACC15]/30">
                      Saved ₹{appliedDiscount}!
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Price Comparison Matrix Across Retailers */}
            <div className="bg-[#111611] rounded-2xl p-4 border border-[#4ADE80]/20">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-3 flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5 text-[#4ADE80]" />
                Live Competitor Price Radar
              </h4>

              <div className="space-y-2 text-xs">
                {current.retailers.map((r, i) => (
                  <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-[#161D16] border border-[#4ADE80]/10">
                    <span className="font-bold text-white">{r.store}</span>
                    <span className="text-[#94A3B8]">{r.shipping}</span>
                    <span className="text-[#86EFAC]">{r.delivery}</span>
                    <span className="font-black text-white">₹{r.price}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: The Floating PLANEY Extension Overlay */}
          <div className="lg:col-span-5 bg-[#161D16] rounded-2xl p-5 border-2 border-[#4ADE80]/40 shadow-2xl relative space-y-4">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#4ADE80]/20">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-[#4ADE80] text-[#0A0D0A] flex items-center justify-center text-xs font-black">
                  P
                </div>
                <h4 className="text-xs font-black text-white">
                  PLANEY Extension Overlay
                </h4>
              </div>
              <span className="text-[10px] font-bold text-[#4ADE80] bg-[#4ADE80]/15 px-2 py-0.5 rounded">
                Active Scanner
              </span>
            </div>

            {/* Floating Impulse Warning Banner */}
            <div className="bg-[#FACC15]/10 p-3 rounded-xl border border-[#FACC15]/30 text-xs text-[#FEF08A] flex items-start gap-2">
              <Clock className="w-4 h-4 text-[#FACC15] shrink-0 mt-0.5" />
              <p className="text-[11px] leading-snug font-semibold">
                {current.impulseWarning}
              </p>
            </div>

            {/* Verified Working Coupon Finder */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] block">
                Found Tested Student Coupons:
              </span>

              {current.coupons.map((c) => (
                <div key={c.code} className="bg-[#111611] p-3 rounded-xl border border-[#4ADE80]/20 flex items-center justify-between">
                  <div>
                    <span className="font-mono font-black text-xs text-[#4ADE80]">{c.code}</span>
                    <span className="text-[10px] text-[#94A3B8] block">{c.label} (-₹{c.discount})</span>
                  </div>
                  <button
                    onClick={() => handleApplyCoupon(c)}
                    className="px-3 py-1 rounded-lg bg-[#4ADE80] text-[#0A0D0A] font-extrabold text-xs hover:brightness-110 transition-all cursor-pointer"
                  >
                    {couponCode === c.code ? "Applied ✓" : "Apply Code"}
                  </button>
                </div>
              ))}
            </div>

            {/* 48-Hour Wishlist Action */}
            <div className="p-3 bg-[#111611] rounded-xl border border-[#4ADE80]/20 text-center">
              <p className="text-[11px] text-[#94A3B8] mb-2">
                Not urgent? Save this into your Wishlist Terrarium with a single tap.
              </p>
              <button
                onClick={() => alert("Added item to Wishlist Terrarium! 48-hour cool-off started.")}
                className="w-full py-2 rounded-xl bg-[#1E2B1E] hover:bg-[#22C55E] text-[#86EFAC] hover:text-[#0A0D0A] text-xs font-bold transition-all cursor-pointer"
              >
                🌱 Save to Terrarium Instead
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
