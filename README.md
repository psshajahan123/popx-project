# PopX App

A React.js app replicating the PopX onboarding UI — Welcome, Login, and Register screens.

---

## 📁 Project Structure

```
popx-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── PhoneShell.js / .css     ← Mobile phone frame
│   │   └── FloatingInput.js / .css  ← Reusable input field
│   ├── screens/
│   │   ├── WelcomeScreen.js / .css  ← Landing page
│   │   ├── LoginScreen.js / .css    ← Sign in page
│   │   └── RegisterScreen.js / .css ← Create account page
│   ├── App.js                        ← Screen router
│   ├── index.js                      ← Entry point
│   └── index.css                     ← Global styles
├── package.json
└── README.md
```

---

## 🚀 How to Run Locally

### Prerequisites
- **Node.js** (v16 or higher) → Download from https://nodejs.org
- **npm** (comes with Node.js)

### Steps

```bash
# 1. Unzip the project
unzip popx-app.zip
cd popx-app

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The app will open at **http://localhost:3000** in your browser.

---

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized `build/` folder ready for deployment.

---

## ☁️ Deploy Options

### Option 1: Vercel (Recommended — Free)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy (from project folder)
vercel

# Follow the prompts — your app will be live in ~30 seconds!
```

### Option 2: Netlify (Free)
```bash
# Build first
npm run build

# Drag and drop the build/ folder to https://app.netlify.com/drop
```
Or use the Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

### Option 3: GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "homepage": "https://<username>.github.io/popx-app",
# "predeploy": "npm run build",
# "deploy": "gh-pages -d build"

npm run deploy
```

---

## ✨ Features

- **3 Screens**: Welcome → Login / Register
- **Form Validation**: Login & Register buttons activate only when required fields are filled
- **Responsive**: Works on all screen sizes (mobile-first)
- **Purple theme** matching the original design
- **Google Fonts**: DM Sans for clean typography

---

## 🛠 Tech Stack

- React 18
- CSS Modules (plain CSS per component)
- Google Fonts (DM Sans)
- No external UI libraries — pure custom styling
