# 🌱 PLANLEY (by INNOVE-X) — Plant Your Money, Grow Your Future

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Oxlint](https://img.shields.io/badge/Oxlint-Fast_Linter-F3A953?style=flat-square)](https://oxc.rs/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

> **"Plant your money, grow your future."**  
> **PLANLEY** is an AI-powered smart wallet and behavioral finance platform crafted specifically for college students and young earners. Built to eliminate the *"Broke by Day 20"* crisis, PLANLEY counteracts impulsive UPI micro-leaks, automates savings into gamified terrariums, blocks impulse purchases through cool-off interventions, and provides ethical campus peer-to-peer micro-lending.

---

## 💡 The Problem It Solves

* **Frictionless UPI Micro-Leaks**: Rapid QR code scans on chai, late-night snacks, and canteen meals trick our dopamine circuits into feeling zero spending pain—draining ₹2,000–₹3,000 silently every month.
* **The "Broke by Day 20" Syndrome**: Disproportionate spending in the first two weeks of receiving an allowance or stipend leaves students struggling for the remainder of the month.
* **Predatory BNPL Apps**: Misleading Buy-Now-Pay-Later products trap college students in hidden interest cycles and damage long-term creditworthiness before graduation.

---

## ✨ Core Features & Modules

### 💳 1. Behavioral Smart Wallet & Cash Flow Engine
* **Safe Daily Allowance**: Dynamically calculates `Safe Daily Spend = Wallet Balance / Days Remaining` to ensure you never run out of funds before the next stipend.
* **Automated UPI Round-Ups**: Sweeps spare change from micro-scans (e.g., ₹65 printout $\rightarrow$ ₹5 rounded up) directly into locked savings.
* **Friction-Locked Emergency Jar**: Protects your emergency reserve with an intentional 30-second AI necessity check to prevent impulsive unlocking.

### 🌿 2. The Gamified Greenhouse & Terrarium
* **Living Mascot**: An interactive **Money Gardener** that grows lush plants and flowers when you save, or visibly wilts when spending burn spikes.
* **"Water Your Goals"**: Allocate saved pocket money to target goals (Noise-Cancelling Headphones, Goa Trip, Coding Keyboards). Watch your plant blossom toward 100% completion with celebratory audio and confetti animations.
* **Web Audio API Sound Engine**: Zero-dependency retro synthesizer sound effects (`coin`, `water`, `level-up`, `unlock`).

### 🤖 3. AI Impulse Co-Pilot (Decision Bot)
* **Pre-Purchase Reality Check**: Evaluates items before checkout against current balance, remaining month burn, necessity index (1–5), and projected hours of student labor.
* **Instant Actionable Verdict**: Generates financial sanity checks with cognitive regret probability and provides low-cost alternatives.

### 🛒 4. Shopping Interceptor & Chrome Extension Simulation
* **72-Hour Impulse Vault**: Simulates a browser extension that pauses impulsive checkout on Amazon.in, Myntra, and Flipkart.
* **Price Drop Radar & Student Coupons**: Compares multi-retailer pricing and auto-applies verified student discount codes.

### 🤝 5. Campus Trust Lending (P2P Safe Micro-Credit)
* **Fair Student Micro-Lending**: Strictly peer-to-peer within verified `.ac.in` college circles (capped at ₹5,000 for 14 days with a transparent, non-predatory 2% service fee).
* **Smart Campus Escrow**: Community-backed loan requests with verified student trust scores, replacing toxic loan apps and campus IOUs.

### 📚 6. Planley Academy (Financial Literacy Hub)
* **College-Centric Guides**: Bite-sized breakdowns of the 50/30/20 pocket-money rule, subscription audits, and credit fundamentals.
* **Interactive Quizzes**: Scenario-based financial challenges with real-time feedback and XP rewards.
* **4-Minute Audio Pods**: Quick audio walkthroughs on personal finance hacks.

---

## 🛠️ Tech Stack

* **Frontend**: [React 19](https://react.dev/) (`react: ^19.2.8`)
* **Build Tool**: [Vite 8](https://vitejs.dev/) (`vite: ^8.3.0`)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
* **Icons**: [Lucide React](https://lucide.dev/)
* **Animations**: [canvas-confetti](https://github.com/catdad/canvas-confetti)
* **Linter**: [Oxlint](https://oxc.rs/)
* **Audio**: Native HTML5 Web Audio API Synthesizer
* **Typography**: Google Fonts (*Outfit*, *Plus Jakarta Sans*, *Inter*)

---

## 📂 Project Structure

```text
Planley/
├── public/                    # Static assets & web manifest
├── src/
│   ├── assets/                # Mascots, icons & graphic assets
│   ├── components/
│   │   ├── views/             # Master View Controllers
│   │   │   ├── DashboardView.jsx       # Smart wallet, metrics & UPI history
│   │   │   ├── AiBotView.jsx           # AI Impulse Decision Copilot
│   │   │   ├── GreenhouseView.jsx      # Plant terrarium wishlist goals
│   │   │   ├── AcademyView.jsx         # Articles, audio pods & quizzes
│   │   │   ├── TrustLendingView.jsx    # Campus P2P micro-credit network
│   │   │   ├── ChromeExtensionView.jsx # E-commerce impulse pause demo
│   │   │   └── SettingsView.jsx        # Budget limits, emergency jar locks
│   │   ├── AiDecisionBot.jsx           # Core reasoning algorithms
│   │   ├── ChromeExtensionDemo.jsx     # Browser overlay simulation
│   │   ├── EarlyAccessModal.jsx        # Waitlist & onboarding modal
│   │   ├── InteractiveWallet.jsx       # Wallet slider & daily budget
│   │   ├── Mascot.jsx                  # Terrarium plant & Sprout SVGs
│   │   ├── Navbar.jsx / Sidebar.jsx    # Responsive glassmorphism navigation
│   │   ├── TopBar.jsx                  # Header with daily streak & alerts
│   │   ├── TransactionModal.jsx        # Quick UPI scan & pay simulator
│   │   └── WishlistCalculator.jsx      # Savings trajectory predictor
│   ├── context/
│   │   └── AppContext.jsx     # Central state management (balance, goals, XP)
│   ├── data/
│   │   └── content.js         # Articles, quiz banks, pods & presets
│   ├── utils/
│   │   └── audio.js           # Web Audio API 8-bit sound synthesizer
│   ├── App.jsx                # Layout orchestration & tab switching
│   ├── index.css              # Tailwind v4 theme & custom utilities
│   └── main.jsx               # Application bootstrap
├── index.html
├── package.json
├── vite.config.js
└── .oxlintrc.json
