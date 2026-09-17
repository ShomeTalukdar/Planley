import React, { useState } from 'react';
import { 
  Sparkles, 
  ShoppingBag, 
  Tag, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  ExternalLink, 
  Layers, 
  Heart 
} from 'lucide-react';
import { ChromeIcon } from './BrandIcons';

export default function ChromeExtensionDemo({ onOpenWaitlist }) {
  const [extensionState, setExtensionState] = useState('active'); // 'active', 'cooldown_triggered', 'coupon_applied'
  const [couponApplied, setCouponApplied] = useState(false);
  const [originalPrice] = useState(2499);
  const discount = 350;
  const finalPrice = couponApplied ? originalPrice - discount : originalPrice;

  return (
    <section className="py-20 bg-[#FFFDF7] border-b border-[#EBE5D3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E9B838] shadow-sm text-xs font-bold text-[#D89B2B] mb-4">
            <ChromeIcon className="w-4 h-4 text-[#D89B2B]" />
            <span>Smart Chrome Extension</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#24331C] tracking-tight">
            Stop Late-Night Multi-Tab <br />
            <span className="doodle-underline text-[#D89B2B]">Impulse Checkouts</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#53634B]">
            PLANEY quietly runs in your browser background. It detects frenzy multi-tab shopping, finds real verified student coupons, and activates a mindful 72-hour pause before you blow your stipend.
          </p>
        </div>

        {/* Browser Mockup Window */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border border-[#EBE5D3] overflow-hidden">
          
          {/* Chrome Browser Title Bar */}
          <div className="bg-[#FAF7EE] px-4 py-3 border-b border-[#EBE5D3] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>

            {/* URL Bar */}
            <div className="flex-1 max-w-lg mx-4 bg-white px-3 py-1.5 rounded-full border border-[#EBE5D3] text-xs text-[#53634B] flex items-center justify-between">
              <span className="truncate">https://store.campuskicks.in/checkout/sneakers-edition-x</span>
              <span className="text-[10px] text-[#62A842] font-bold bg-[#E8F5E4] px-2 py-0.5 rounded-full">
                🔒 Verified
              </span>
            </div>

            {/* Extension Icon in Browser Bar */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-7 h-7 rounded-lg bg-[#3D7838] flex items-center justify-center text-white text-xs font-bold shadow-sm animate-pulse">
                  🌱
                </div>
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#E9B838] text-[#24331C] text-[9px] font-black rounded-full flex items-center justify-center">
                  2
                </span>
              </div>
            </div>
          </div>

          {/* Browser Content Area */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative">
            
            {/* Left: Simulated Store Checkout Page */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-2xl bg-[#FAF7EE] border border-[#EBE5D3] flex items-center justify-center text-3xl">
                  👟
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#24331C]">Campus Edition Chunky Lows</h4>
                  <p className="text-xs text-[#7E8D76]">Color: Forest Moss | Size: UK 8</p>
                  <div className="text-sm font-extrabold text-[#24331C] mt-0.5">
                    {couponApplied ? (
                      <div className="flex items-center gap-2">
                        <span className="text-base text-[#3D7838]">₹{finalPrice}</span>
                        <span className="text-xs text-[#7E8D76] line-through">₹{originalPrice}</span>
                        <span className="text-[10px] font-bold text-[#3D7838] bg-[#E8F5E4] px-1.5 rounded">
                          Save ₹{discount}
                        </span>
                      </div>
                    ) : (
                      <span>₹{originalPrice}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Shopping Alerts Notice inside store */}
              <div className="bg-[#FAF7EE] p-3 rounded-xl border border-[#EBE5D3] text-xs text-[#53634B]">
                <div className="flex items-center justify-between text-[11px] font-semibold mb-1">
                  <span>Shipping: Free Campus Delivery</span>
                  <span className="text-[#3D7838] font-bold">In Stock</span>
                </div>
                <p className="text-[10px] text-[#7E8D76]">
                  Simulated checkout screen to demonstrate Planley's real-time browser overlay.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setExtensionState('cooldown_triggered')}
                  className="w-full py-3 rounded-xl bg-[#24331C] hover:bg-[#3D7838] text-white font-bold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Click to Simulate Checkout</span>
                </button>
              </div>
            </div>

            {/* Right: The PLANEY Chrome Extension Pop-up Modal */}
            <div className="md:col-span-5 bg-[#FAF7EE] rounded-2xl p-5 border-2 border-[#3D7838]/30 shadow-xl relative">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#EBE5D3] mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#3D7838] flex items-center justify-center text-xs">
                    🌱
                  </div>
                  <span className="text-xs font-black text-[#24331C]">PLANEY Chrome Guard</span>
                </div>
                <span className="text-[10px] font-bold bg-[#E8F5E4] text-[#3D7838] px-2 py-0.5 rounded-full">
                  Extension v1.4
                </span>
              </div>

              {/* Multi-Tab Alert */}
              <div className="bg-[#FDF6E2] p-2.5 rounded-xl border border-[#E9B838] mb-3 flex items-start gap-2">
                <Layers className="w-4 h-4 text-[#D89B2B] shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#24331C] font-semibold leading-snug">
                  <strong>3 shopping tabs detected!</strong> High probability of comparative impulse-buying fatigue.
                </p>
              </div>

              {/* Verified Coupon Finder */}
              <div className="bg-white p-3 rounded-xl border border-[#EBE5D3] mb-3">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold text-[#53634B] flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5 text-[#3D7838]" />
                    Verified Student Code
                  </span>
                  <span className="text-[10px] font-bold text-[#3D7838]">₹350 OFF</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <code className="text-xs font-black text-[#24331C] bg-[#FAF7EE] px-2 py-1 rounded border border-[#EBE5D3]">
                    CAMPUS20
                  </code>
                  <button
                    onClick={() => setCouponApplied(true)}
                    disabled={couponApplied}
                    className="text-xs font-bold px-3 py-1 bg-[#3D7838] hover:bg-[#2C5728] text-white rounded-lg transition-all cursor-pointer disabled:bg-[#62A842]"
                  >
                    {couponApplied ? "Applied ✓" : "Apply Code"}
                  </button>
                </div>
              </div>

              {/* 72-Hour Cooldown Action */}
              <div className="bg-white p-3 rounded-xl border border-[#EBE5D3] space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#2C5728]">
                  <Clock className="w-3.5 h-3.5 text-[#E9B838]" />
                  <span>72-Hour Impulse Cooldown</span>
                </div>
                <p className="text-[10px] text-[#53634B]">
                  Move this item to your Wishlist Sprout. If you still want it in 3 days, PLANEY unlocks it!
                </p>
                <button
                  onClick={onOpenWaitlist}
                  className="w-full py-2 bg-[#E8F5E4] hover:bg-[#3D7838] text-[#2C5728] hover:text-white rounded-lg text-xs font-bold transition-all cursor-pointer"
                >
                  🌱 Save to Wishlist Sprout
                </button>
              </div>

            </div>

          </div>

          {/* Bottom Extension Pitch Bar */}
          <div className="bg-[#FAF7EE] px-6 py-4 border-t border-[#EBE5D3] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-[#53634B]">
              <ShieldCheck className="w-4 h-4 text-[#3D7838]" />
              <span>Works silently on Amazon, Flipkart, Myntra, Nykaa & 120+ Indian stores.</span>
            </div>
            <button
              onClick={onOpenWaitlist}
              className="font-bold text-[#3D7838] hover:text-[#2C5728] flex items-center gap-1 cursor-pointer"
            >
              <span>Get Chrome Extension Beta</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
