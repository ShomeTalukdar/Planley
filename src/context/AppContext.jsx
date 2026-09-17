import React, { createContext, useContext, useState, useEffect } from 'react';
import { sound } from '../utils/audio';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Navigation
  const [activeTab, setActiveTab] = useState('dashboard');
  const [quickPayOpen, setQuickPayOpen] = useState(false);

  // Financial Wallet State
  const [monthlyAllowance, setMonthlyAllowance] = useState(8000);
  const [walletBalance, setWalletBalance] = useState(5120);
  const [emergencyBalance, setEmergencyBalance] = useState(1480);
  const [autoRoundup, setAutoRoundup] = useState(true);
  const [daysRemaining, setDaysRemaining] = useState(14);
  const [isJarLocked, setIsJarLocked] = useState(true);

  // Gamification & XP
  const [gardenerXp, setGardenerXp] = useState(540);
  const [streakDays, setStreakDays] = useState(9);
  const [avoidedImpulseTotal, setAvoidedImpulseTotal] = useState(8450);

  // Transactions History
  const [transactions, setTransactions] = useState([
    { id: 'tx-1', name: 'Campus Cafeteria Lunch', amount: 140, category: 'Food', roundUp: 10, time: 'Today, 1:15 PM' },
    { id: 'tx-2', name: 'Semester Lab Manuals', amount: 380, category: 'Books', roundUp: 20, time: 'Today, 10:30 AM' },
    { id: 'tx-3', name: 'Metro Card Auto-Topup', amount: 200, category: 'Transit', roundUp: 0, time: 'Yesterday' },
    { id: 'tx-4', name: 'Chai & Maggi Tapri', amount: 65, category: 'Mess/Canteen', roundUp: 5, time: 'Yesterday' },
    { id: 'tx-5', name: 'Spotify Student Plan', amount: 59, category: 'Subscriptions', roundUp: 1, time: '3 days ago' },
  ]);

  // Wishlist Goals in Greenhouse
  const [wishlistGoals, setWishlistGoals] = useState([
    {
      id: 'w-1',
      name: 'Noise-Cancelling Headphones',
      targetPrice: 8500,
      savedAmount: 5100,
      targetMonths: 3,
      category: 'Tech',
      radarAlert: 'Diwali Student Promo in 12 days'
    },
    {
      id: 'w-2',
      name: 'Batchmates Goa Trip',
      targetPrice: 6000,
      savedAmount: 3900,
      targetMonths: 2,
      category: 'Travel',
      radarAlert: 'Flight price drop detected (-15%)'
    },
    {
      id: 'w-3',
      name: 'Mechanical Coding Keyboard',
      targetPrice: 3200,
      savedAmount: 800,
      targetMonths: 2,
      category: 'Academic',
      radarAlert: 'Refurbished verified listing ₹2,400'
    }
  ]);

  // AI Decision Bot Scan History
  const [botScans, setBotScans] = useState([
    {
      id: 'scan-1',
      name: 'Trending Retro Sneakers',
      price: 2499,
      verdict: 'WAIT 48 HOURS',
      reasoning: 'Takes 48% of remaining balance. 48-hour cool-off timer set.',
      timestamp: '2 hours ago'
    },
    {
      id: 'scan-2',
      name: 'Online Cloud Computing Course',
      price: 499,
      verdict: 'BUY NOW',
      reasoning: 'High academic utility with safe daily buffer.',
      timestamp: 'Yesterday'
    },
    {
      id: 'scan-3',
      name: 'Late-Night Gourmet Pizza',
      price: 720,
      verdict: 'TRAP ALERT / SKIP',
      reasoning: 'Hunger spike impulse. ₹720 routed into Headphones Sprout.',
      timestamp: '2 days ago'
    }
  ]);

  // Psychological Behavior Settings
  const [settings, setSettings] = useState({
    emergencyCooldown: true, // 24-hour waiting period
    aiPersonality: 'gentle', // 'gentle', 'pragmatic', 'drillmaster'
    threshold50: 50,
    threshold75: 75,
    soundEnabled: true
  });

  // Calculate Safe-to-Spend Daily Allowance
  const safeDailyAllowance = Math.max(0, Math.round(walletBalance / (daysRemaining || 1)));
  const totalSpent = transactions.reduce((acc, curr) => acc + curr.amount, 0);
  const spentPercent = Math.min(100, Math.round((totalSpent / monthlyAllowance) * 100));

  // Sound sync
  useEffect(() => {
    sound.enabled = settings.soundEnabled;
  }, [settings.soundEnabled]);

  // Actions
  const logTransaction = (name, amount, category, customRoundup) => {
    const numAmount = Number(amount);
    if (isNaN(numAmount) || numAmount <= 0) return false;

    const roundUpAmount = autoRoundup ? (customRoundup !== undefined ? customRoundup : Math.ceil(numAmount * 0.1)) : 0;

    const newTx = {
      id: `tx-${Date.now()}`,
      name,
      amount: numAmount,
      category: category || 'Food',
      roundUp: roundUpAmount,
      time: 'Just now'
    };

    setTransactions(prev => [newTx, ...prev]);
    setWalletBalance(prev => Math.max(0, prev - numAmount - roundUpAmount));
    
    if (roundUpAmount > 0) {
      setEmergencyBalance(prev => prev + roundUpAmount);
      sound.playCoin();
    } else {
      sound.playAlert();
    }

    setGardenerXp(prev => prev + 15);
    return true;
  };

  const waterWishlistPlant = (goalId, amount = 200) => {
    if (walletBalance < amount) return false;

    setWalletBalance(prev => prev - amount);
    setWishlistGoals(prev => prev.map(goal => {
      if (goal.id === goalId) {
        return { ...goal, savedAmount: Math.min(goal.targetPrice, goal.savedAmount + amount) };
      }
      return goal;
    }));

    sound.playWater();
    setGardenerXp(prev => prev + 25);
    return true;
  };

  const addWishlistGoal = (newGoal) => {
    setWishlistGoals(prev => [...prev, { ...newGoal, id: `w-${Date.now()}`, savedAmount: 0 }]);
    sound.playSuccess();
    setGardenerXp(prev => prev + 30);
  };

  const recordBotScan = (item) => {
    setBotScans(prev => [item, ...prev]);
    if (item.verdict === 'TRAP ALERT / SKIP' || item.verdict === 'WAIT 48 HOURS') {
      setAvoidedImpulseTotal(prev => prev + item.price);
    }
    sound.playSuccess();
    setGardenerXp(prev => prev + 20);
  };

  const updateSettings = (newSettings) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const resetAllData = () => {
    setWalletBalance(5120);
    setEmergencyBalance(1480);
    setTransactions([
      { id: 'tx-1', name: 'Campus Cafeteria Lunch', amount: 140, category: 'Food', roundUp: 10, time: 'Today, 1:15 PM' }
    ]);
    setGardenerXp(500);
    sound.playSuccess();
  };

  return (
    <AppContext.Provider value={{
      activeTab,
      setActiveTab,
      quickPayOpen,
      setQuickPayOpen,
      monthlyAllowance,
      setMonthlyAllowance,
      walletBalance,
      emergencyBalance,
      daysRemaining,
      setDaysRemaining,
      safeDailyAllowance,
      totalSpent,
      spentPercent,
      autoRoundup,
      setAutoRoundup,
      isJarLocked,
      setIsJarLocked,
      gardenerXp,
      streakDays,
      avoidedImpulseTotal,
      transactions,
      logTransaction,
      wishlistGoals,
      waterWishlistPlant,
      addWishlistGoal,
      botScans,
      recordBotScan,
      settings,
      updateSettings,
      resetAllData
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
