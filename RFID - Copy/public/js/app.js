// Function to handle Connect
function connect() {
    const host = document.getElementById('host').value;
    const port = document.getElementById('port').value;

    fetch('http://localhost:3000/connect', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ host, port }),
    })
    .then(response => response.json())
    .then(data => displayResponse(data))
    .catch(error => displayError(error));
}

// Function to handle Disconnect
function disconnect() {
    fetch('http://localhost:3000/disconnect', {
        method: 'POST',
    })
    .then(response => response.json())
    .then(data => displayResponse(data))
    .catch(error => displayError(error));
}

// Function to handle Start Scan
function startScan() {
    fetch('http://localhost:3000/start-scan', {
        method: 'POST',
    })
    .then(response => response.json())
    .then(data => displayResponse(data))
    .catch(error => displayError(error));
}

// Function to handle Stop Scan
function stopScan() {
    fetch('http://localhost:3000/stop-scan', {
        method: 'POST',
    })
    .then(response => response.json())
    .then(data => displayResponse(data))
    .catch(error => displayError(error));
}

// Function to get Scanned Items
function getScannedItems() {
    fetch('http://localhost:3000/get-scanned-items')
    .then(response => response.json())
    .then(data => displayResponse(data))
    .catch(error => displayError(error));
}

// Function to trigger Read Tags
function readTags() {
    const clientID = document.getElementById('clientID').value;
    const host = document.getElementById('host').value;
    const make = document.getElementById('make').value;
    const power = document.getElementById('power').value;

    fetch(`http://localhost:3000/read?clientID=${clientID}&host=${host}&make=${make}&power=${power}`)
    .then(response => response.json())
    .then(data => displayResponse(data))
    .catch(error => displayError(error));
}

// Function to display the response in the UI
function displayResponse(data) {
    const responseOutput = document.getElementById('responseOutput');
    responseOutput.textContent = JSON.stringify(data, null, 2);
}

// Function to display error in the UI
function displayError(error) {
    const responseOutput = document.getElementById('responseOutput');
    responseOutput.textContent = `Error: ${error.message}`;
}
