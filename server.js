const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/glm', async (req, res) => {
  try {
    console.log('📡 Fetching GLM...');
    const response = await fetch('https://neo-bolide.ndc.nasa.gov/service/event/public', {
      timeout: 25000
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    console.log(`✅ GLM: ${data.data?.length || 0} events`);
    res.json(data);
  } catch (error) {
    console.error('❌ GLM Error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/usg', async (req, res) => {
  try {
    console.log('📡 Fetching USG...');
    const response = await fetch('https://ssd-api.jpl.nasa.gov/fireball.api?vel-comp=true', {
      timeout: 18000
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    console.log(`✅ USG: ${data.data?.length || 0} events`);
    res.json(data);
  } catch (error) {
    console.error('❌ USG Error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log('\n╔════════════════════════════════════════╗');
  console.log('║   🌍 BOLIDES CO - CEAF               ║');
  console.log('║   Impact Analysis Platform             ║');
  console.log('╚════════════════════════════════════════╝\n');
  console.log(`✅ Server running at: http://localhost:${PORT}\n`);
  console.log('📡 Proxying NASA APIs...\n');
  console.log('Press Ctrl+C to stop\n');
});
