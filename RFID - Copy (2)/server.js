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

let wsClient = null;

wss.on('connection', ws => {
    console.log('WebSocket connection established');
    wsClient = ws;
    ws.on('message', message => {
        console.log(`Received message: ${message}`);
    });
    ws.on('close', () => {
        console.log('WebSocket connection closed');
        wsClient = null;
    });
});

// Connect Endpoint
app.get('/connect', async (req, res) => {
    const { clientID, host, make } = req.query;
    try {
        const response = await axios.get(`${RWLINK_BASE_URL}/connect?clientID=${clientID}&host=${host}&make=${make}`, {
            headers: { 'Accept': 'application/json' }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Disconnect Endpoint
app.get('/disconnect', async (req, res) => {
    const { clientID, host, make } = req.query;
    try {
        const response = await axios.get(`${RWLINK_BASE_URL}/disconnect?clientID=${clientID}&host=${host}&make=${make}`, {
            headers: { 'Accept': 'application/json' }
        });
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
        const response = await axios.get(`${RWLINK_BASE_URL}/read?clientID=${clientID}&host=${host}&make=${make}&power=${power}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
