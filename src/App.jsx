import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import TransactionModal from './components/TransactionModal';
import DashboardView from './components/views/DashboardView';
import AiBotView from './components/views/AiBotView';
import GreenhouseView from './components/views/GreenhouseView';
import AcademyView from './components/views/AcademyView';
import TrustLendingView from './components/views/TrustLendingView';
import ChromeExtensionView from './components/views/ChromeExtensionView';
import SettingsView from './components/views/SettingsView';

function AppContent() {
  const { activeTab } = useApp();

  return (
    <div className="min-h-screen bg-[#0A0D0A] text-[#F8FAFC] selection:bg-[#4ADE80]/30 selection:text-white flex">
      {/* Persistent Glassmorphism Sidebar (Desktop) & Bottom Bar (Mobile) */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 pb-20 lg:pb-8">
        <TopBar />

        <main className="flex-1 px-4 sm:px-8 py-6 max-w-7xl mx-auto w-full">
          {activeTab === 'dashboard' && <DashboardView />}
          {activeTab === 'ai-bot' && <AiBotView />}
          {activeTab === 'greenhouse' && <GreenhouseView />}
          {activeTab === 'academy' && <AcademyView />}
          {activeTab === 'trust-lending' && <TrustLendingView />}
          {activeTab === 'chrome-ext' && <ChromeExtensionView />}
          {activeTab === 'settings' && <SettingsView />}
        </main>
      </div>

      {/* Quick UPI Transaction Modal (available globally) */}
      <TransactionModal />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
