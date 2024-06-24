// server.js

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (HTML)
app.use('/academic', express.static(path.join(__dirname, 'academic')));

// Route to handle specific HTML file requests
app.get('/academic/:subject/:file', (req, res) => {
    const { subject, file } = req.params;
    const filePath = path.join(__dirname, `academic/${subject}/${file}`);
    res.sendFile(filePath);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
