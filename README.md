# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

<div align="center">

<img src="public/icons.svg" alt="Weather App Logo" width="80" height="80" />

# 🌤️ Weather App

**A clean, real-time weather application built with React + Vite**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-4A90D9?style=for-the-badge)](https://piyushk2005.github.io/Weather-App/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub_Pages-222?style=for-the-badge&logo=github)](https://pages.github.com/)

</div>

---

## 📽️ Demo

```md
[![Weather App Demo](https://github.com/piyushk2005/Weather-App/blob/main/assets/demo.gif.gif)
```

## 🖼️ Screenshots

> Add screenshots by creating an `assets/` folder in your repo and uploading images:

| Search City | Weather Result |
|-------------|----------------|
| ![Search](assets/screenshot-search.png) | ![Result](assets/screenshot-result.png) |

---

## ✨ Features

- 🔍 **Search any city** worldwide by name
- 🌡️ **Real-time temperature** in Celsius/Fahrenheit
- 💧 **Humidity & wind speed** data
- 🌥️ **Weather condition icons** (sunny, cloudy, rainy, etc.)
- 📱 **Responsive design** — works on mobile & desktop
- ⚡ **Fast & lightweight** — built with Vite

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI framework |
| [Vite 8](https://vitejs.dev/) | Build tool & dev server |
| [OpenWeatherMap API](https://openweathermap.org/api) | Live weather data |
| [GitHub Pages](https://pages.github.com/) | Hosting & deployment |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [Git](https://git-scm.com/)
- Free [OpenWeatherMap API key](https://home.openweathermap.org/api_keys)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/piyushk2005/Weather-App.git

# 2. Navigate into the project
cd Weather-App

# 3. Install dependencies
npm install

# 4. Create your environment file
cp .env.example .env
```

### Configure API Key

Open the `.env` file and add your OpenWeatherMap API key:

```env
VITE_API_KEY=your_api_key_here
```

> 🔑 Get a free API key at [openweathermap.org](https://home.openweathermap.org/api_keys)

### Run Locally

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

---

## 📁 Project Structure

```
Weather-App/
├── public/
│   └── icons.svg          # App favicon
├── src/
│   ├── App.jsx            # Main app component
│   ├── App.css            # Component styles
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles
├── .env                   # Local API key (never commit!)
├── .env.example           # Template for API key setup
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Environment Variables

| Variable | Description | Required |
|---|---|---|
| `VITE_API_KEY` | Your OpenWeatherMap API key | ✅ Yes |

> ⚠️ Never commit your `.env` file. It is already listed in `.gitignore`.

---

## 🌐 Live Site

**[https://piyushk2005.github.io/Weather-App/](https://piyushk2005.github.io/Weather-App/)**

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "Add your feature"`
4. Push to branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ by [Piyush Kalambe](https://github.com/piyushk2005)

⭐ **Star this repo if you found it helpful!**

</div>
