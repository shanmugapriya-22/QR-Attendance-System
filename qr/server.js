const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/store_data', (req, res) => {
    const scannedData = req.body.scanned_data;
    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata', hour12: true });
    const dataToStore = `Data: ${scannedData} Time: ${timestamp}\n`;

    // Path to the file where scanned data will be stored
    const filePath = path.join(__dirname, 'scanned_data.txt');

    // Append data to the file
    fs.appendFile(filePath, dataToStore, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return res.status(500).send('Error storing data');
        }
        console.log('Data stored successfully');
        res.send('Data stored successfully');
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
