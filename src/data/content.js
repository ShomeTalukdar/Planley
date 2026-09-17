export const BOT_PRESETS = [
  {
    name: "Sneakers on 40% Sale",
    price: 1899,
    category: "Fashion",
    necessity: 2,
    balance: 3400,
    daysLeft: 12,
  },
  {
    name: "Semester Exam Reference Book",
    price: 480,
    category: "Education",
    necessity: 5,
    balance: 2200,
    daysLeft: 8,
  },
  {
    name: "Late-Night Swiggy Order",
    price: 360,
    category: "Food",
    necessity: 2,
    balance: 1250,
    daysLeft: 15,
  },
  {
    name: "Weekend Road Trip Share",
    price: 2500,
    category: "Social",
    necessity: 3,
    balance: 4100,
    daysLeft: 20,
  },
  {
    name: "Noise-Cancelling Earbuds",
    price: 1999,
    category: "Tech",
    necessity: 3,
    balance: 5500,
    daysLeft: 18,
  },
];

export const UPI_EXPENSE_PRESETS = [
  { name: "Canteen Cold Coffee", amount: 120, category: "Food & Drinks", roundUp: 10 },
  { name: "Printout & Spiral Binding", amount: 65, category: "Academic", roundUp: 5 },
  { name: "Metro Smart Card Recharge", amount: 200, category: "Commute", roundUp: 20 },
  { name: "Hostel Late Night Snack", amount: 85, category: "Food & Drinks", roundUp: 15 },
];

export const ARTICLES_DATA = [
  {
    id: 1,
    title: "The 50/30/20 Rule Reimagined for Indian College Pocket Money",
    tag: "Budgeting 101",
    readTime: "3 min read",
    author: "Rhea S., IIT Delhi Alum",
    excerpt: "Hostel mess fees, Chai tapri breaks, and project prints: here is how to divide ₹6,000 monthly allowance without feeling broke by day 20.",
    highlights: ["Split needs vs wants realistically", "Ring-fence ₹500 before spending a single rupee", "Use psychological 75% exhaustion alerts"],
  },
  {
    id: 2,
    title: "UPI Micro-Leaks: How ₹40 QR Scans Drain ₹2,400 Every Month",
    tag: "Behavioral Finance",
    readTime: "4 min read",
    author: "Aditya V., Behavioral Economist",
    excerpt: "Frictionless QR payments trick the dopamine circuit in our brain into feeling zero spending pain. Here is how Planley's 2-second cooldown rewires this habit.",
    highlights: ["The illusion of free digital transactions", "Why round-up auto-locks rebuild tangible value", "Setting daily micro-caps that preserve freedom"],
  },
  {
    id: 3,
    title: "Understanding Credit & CIBIL Before Your First Job Offer",
    tag: "Future Proofing",
    readTime: "3 min read",
    author: "Tanvi K., FinTech Mentor",
    excerpt: "Why Buy-Now-Pay-Later apps on campuses are silently destroying future home & auto loan eligibility, and how community trust scores offer a clean alternative.",
    highlights: ["How BNPL defaults report to credit bureaus", "Building a positive score with zero debt traps", "Community escrow vs predatory lending"],
  },
];

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "You have ₹1,200 left in your wallet with 9 days until next month's allowance. Your friends invite you to a ₹450 cafe meetup. What does PLANEY's behavioral bot advise?",
    options: [
      { text: "Go and spend ₹450, you will figure out the last 5 days somehow.", correct: false, feedback: "Classic 'present bias' trap! You would blow 37.5% of your remaining survival budget in 2 hours." },
      { text: "Suggest grabbing ₹30 campus chai instead, or go along and order just a ₹60 iced drink.", correct: true, feedback: "Spot on! Socializing doesn't mean eating into your emergency safety net. You save ₹390!" },
      { text: "Borrow ₹500 on a high-interest BNPL app to keep up appearances.", correct: false, feedback: "Danger zone! BNPL on discretionary outings is the #1 cause of college debt spirals." }
    ]
  },
  {
    id: 2,
    question: "You spot a trending jacket on 50% discount online, but you already have 2 winter hoodies. Best move?",
    options: [
      { text: "Buy immediately! 50% off means you are saving money by spending!", correct: false, feedback: "Cognitive bias alert! You aren't 'saving 50%', you are losing 100% of the price on something you don't need." },
      { text: "Add to Planley Chrome Extension's '72-Hour Impulse Vault'. If you still crave it on Friday and your budget allows, reconsider.", correct: true, feedback: "Masterclass in delay discounting! 82% of students forget about impulsive items after 72 hours." },
      { text: "Ask parents for an advance stipend without explaining why.", correct: false, feedback: "Avoid masking impulse spending with advance requests — it ruins financial predictability." }
    ]
  }
];

export const AUDIO_PODS = [
  {
    id: 1,
    title: "Ep 01: Breaking Free from the 'Broke by Day 20' Curse",
    duration: "4:15",
    speaker: "Aakash, Co-founder INNOVE-X",
    topic: "Practical daily spending caps & psychological wallet separation",
    listeners: "14.2k students",
  },
  {
    id: 2,
    title: "Ep 02: Sneaky Subscriptions & How to Cull Them in 10 Minutes",
    duration: "3:45",
    speaker: "Simran Kaur, Tech & Finance Podcaster",
    topic: "Auditing gym memberships, OTT sharing, and hidden App Store auto-debits",
    listeners: "9.8k students",
  },
  {
    id: 3,
    title: "Ep 03: The Magic of Daily ₹20 Round-Ups into Digital Gold",
    duration: "5:10",
    speaker: "Dr. Arvind Rao, Behavioral Psychology",
    topic: "Why small invisible savings compound faster than ambitious unrealistic targets",
    listeners: "18.5k students",
  },
];

export const FAQ_DATA = [
  {
    q: "How does PLANEY connect with my existing UPI apps like GPay or PhonePe?",
    a: "PLANEY connects seamlessly via NPCI-approved Account Aggregator frameworks and accessible SMS permission parsing. It doesn't replace your UPI apps; it acts as an intelligent behavioral overlay that audits scans in real-time, sweeps micro-savings into locked vaults, and warns you before you overspend."
  },
  {
    q: "Is the locked Emergency Fund really locked?",
    a: "Yes! Your emergency fund sits in your name in RBI-regulated partner liquid vaults. To unlock it before your chosen milestone, you must answer a brief 30-second AI necessity check to prevent impulsive unlock habits. True emergencies are approved instantly 24/7."
  },
  {
    q: "How does Phase 3 Community Trust Lending work safely?",
    a: "Unlike predatory lending apps, PLANEY's micro-lending is strictly peer-to-peer within verified college circles (max ₹5,000 for 14 days at a capped 2% fair service fee). Funds are held in app-mediated smart escrow, and borrowers build a legitimate campus trust score based on peer recommendations and timely repayments."
  },
  {
    q: "Is PLANEY completely free for students?",
    a: "The core smart wallet, UPI expense analytics, AI decision bot, Chrome extension, and learning hub are 100% free forever for enrolled university students with an active .edu or college ID."
  }
];
