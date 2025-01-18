const express = require('express');
const axios = require('axios');
const WebSocket = require('ws');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

const RWLINK_BASE_URL = 'http://localhost:5555';
const WEBSOCKET_PORT = 8080;

// WebSocket Server
const wss = new WebSocket.Server({ port: WEBSOCKET_PORT });

wss.on('connection', ws => {
    console.log('WebSocket connection established');
    ws.on('message', message => {
        console.log(`Received message: ${message}`);
    });
});

// Connect Endpoint
app.post('/connect', async (req, res) => {
    try {
        const { host, port } = req.body;
        const response = await axios.get(`${RWLINK_BASE_URL}/connect?host=${host}&port=${port}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Disconnect Endpoint
app.post('/disconnect', async (req, res) => {
    try {
        const response = await axios.get(`${RWLINK_BASE_URL}/disconnect`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start Scan Endpoint
app.post('/start-scan', async (req, res) => {
    try {
        const response = await axios.get(`${RWLINK_BASE_URL}/startScan?clientID=IRYS_CONSOLE&host=00043E4C2B40@COM5&make=WAND`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Stop Scan Endpoint
app.post('/stop-scan', async (req, res) => {
    try {
        const response = await axios.get(`${RWLINK_BASE_URL}/stopScan?clientID=IRYS_CONSOLE`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get Scanned Items Endpoint
app.get('/get-scanned-items', async (req, res) => {
    try {
        const response = await axios.get(`${RWLINK_BASE_URL}/getScannedItems`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read Endpoint
app.get('/read', async (req, res) => {
    const { clientID, host, make, power } = req.query;
    try {
        const response = await axios.get(`${RWLINK_BASE_URL}/read`, {
            params: {
                clientID: clientID || 'IRYS_CONSOLE',
                host: host || '192.168.1.101',
                make: make || 'FLATBED',
                power: power || 30
            },
            headers: {
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Broadcast Scanned Data to WebSocket Clients
setInterval(async () => {
    try {
        const response = await axios.get(`${RWLINK_BASE_URL}/getScannedItems`);
        const data = response.data;
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(data));
            }
        });
    } catch (error) {
        console.error('Error fetching scanned items:', error);
    }
}, 5000);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
