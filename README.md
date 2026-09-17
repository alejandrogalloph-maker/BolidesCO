# BolidesCO - Impact Analysis Platform

## Quick Start (VS Code)

### 1. Open the folder in VS Code
```
File → Open Folder → Select bolides-app
```

### 2. Open Terminal in VS Code
```
Ctrl + ` (backtick)
```

### 3. Install dependencies
```bash
npm install
```

### 4. Start the server
```bash
npm start
```

You'll see:
```
╔════════════════════════════════════════╗
║   🌍 BOLIDES CO - CEAF               ║
║   Impact Analysis Platform             ║
╚════════════════════════════════════════╝

✅ Server running at: http://localhost:3000

📡 Proxying:
   • GLM API: neo-bolide.ndc.nasa.gov
   • USG API: ssd-api.jpl.nasa.gov

Press Ctrl+C to stop
```

### 5. Open in Browser
Visit: **http://localhost:3000**

---

## What's Inside

```
bolides-app/
├── server.js          # Express backend (proxies NASA APIs)
├── package.json       # Dependencies
├── public/
│   └── index.html     # Full frontend app (white academic theme)
└── README.md
```

## Features

✅ **White Academic Theme** - Clean, professional design with black accents  
✅ **Multi-language** - Spanish, English, Portuguese, French  
✅ **Real NASA Data** - GLM satellite + USG fireball database  
✅ **Interactive Map** - Leaflet with CartoDB tiles  
✅ **Event Details** - Click any event for full information  
✅ **Responsive** - Works on desktop and tablet  

## Troubleshooting

### Port 3000 already in use?
Change the port in `server.js`:
```javascript
const PORT = 3001; // or any available port
```

### Can't find dependencies?
```bash
rm -rf node_modules package-lock.json
npm install
```

### NASA APIs not responding?
The app shows fallback Colombian events while APIs load. Check console (F12) for details.

---

## Development

- Edit `public/index.html` for frontend changes
- Edit `server.js` for backend changes
- Restart server to see changes: `Ctrl+C` then `npm start`

---

Built with ❤️ for CEAF · Gimnasio Campestre · Bogotá
