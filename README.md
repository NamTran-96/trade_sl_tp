# SL/TP Price Calculator

A professional, multilingual Stop Loss & Take Profit price calculator for forex traders. Built with Next.js 16, shadcn/ui, and Tailwind CSS.

## 🌟 Features

- **Smart Calculation**: Calculate SL/TP prices based on account balance percentage risk
- **11 Forex Symbols**: Support for major forex pairs and gold (XAU/USD)
- **7 Languages**: English, Vietnamese, Lao, Japanese, Chinese, Thai, Hindi
- **Copy to Clipboard**: One-click copy for quick trading setup
- **DevTools Protection**: Security measures to prevent code inspection
- **Mobile Responsive**: Works perfectly on all devices
- **No API Required**: All calculations done client-side

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS v4
- **i18n**: next-intl
- **Icons**: Lucide React

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📐 Calculation Formula

```
Risk Amount = Account Balance × (SL% / 100)
Pips = Risk Amount / (Pip Value × Lot Size)

For BUY orders:
- SL Price = Entry Price - (Pips × Pip Size)
- TP Price = Entry Price + (Pips × Pip Size)

For SELL orders:
- SL Price = Entry Price + (Pips × Pip Size)
- TP Price = Entry Price - (Pips × Pip Size)
```

## 🔒 Security Features

- Right-click disabled
- F12 and Dev Tools shortcuts disabled
- Console methods overridden in production
- CSP headers configured

## 🌍 Supported Languages

| Code | Language |
|------|----------|
| en | English |
| vi | Tiếng Việt |
| lo | ພາສາລາວ |
| ja | 日本語 |
| zh | 中文 |
| th | ไทย |
| hi | हिन्दी |

## 📊 Supported Symbols

- AUD/USD, EUR/GBP, EUR/JPY, EUR/USD
- GBP/AUD, GBP/JPY, GBP/USD, NZD/USD
- USD/CHF, USD/JPY, XAU/USD (Gold)

## 🚢 Deploy on Vercel

The easiest way to deploy is using [Vercel Platform](https://vercel.com).

## ⚠️ Disclaimer

This tool is for educational purposes only. Trading forex involves significant risk of loss.

---

Made with ❤️ for traders worldwide
