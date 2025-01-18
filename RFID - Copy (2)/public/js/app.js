// Function to handle Connect
function connect() {
   

    fetch(`http://localhost:5555/connect?clientID=IRYS_CONSOLE&host=00:04:3E:4C:2B:40&make=SLING`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => displayResponse(data))
    .catch(error => displayError(error));
}

// Function to handle Disconnect
function disconnect() {

    

    fetch(`http://localhost:5555/disconnect?clientID=IRYS_CONSOLE&host=00:04:3E:4C:2B:40&make=SLING`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => displayResponse(data))
    .catch(error => displayError(error));
}

// Function to handle Start Scan
function startScan() {
    fetch('http://localhost:5555/startScan?clientID=IRYS_CONSOLE&host=00:04:3E:4C:2B:40&make=SLING', {
        method: 'POST',
    })
    .then(response => response.json())
    .then(data => displayResponse(data))
    .catch(error => displayError(error));
}

// Function to handle Stop Scan
function stopScan() {
    fetch('http://localhost:5555/stopScan?clientID=IRYS_CONSOLE&host=00:04:3E:4C:2B:40&make=SLING', {
        method: 'POST',
    })
    .then(response => response.json())
    .then(data => displayResponse(data))
    .catch(error => displayError(error));
}

// Function to get Scanned Items
function getScannedItems() {
    fetch('http://localhost:5555/getScannedItems?clientID=IRYS_CONSOLE&host=00:04:3E:4C:2B:40&make=SLING')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => displayResponse(data))
    .catch(error => displayError(error));
}


// Function to trigger Read Tags
function readTags() {
    const clientID = document.getElementById('clientID').value;
    const hostIP = document.getElementById('hostIP').value;
    const make = document.getElementById('make').value;
    const power = document.getElementById('power').value;

    fetch(`http://localhost:3000/read?clientID=${clientID}&host=${hostIP}&make=${make}&power=${power}`)
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
