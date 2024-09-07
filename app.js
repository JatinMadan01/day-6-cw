const express = require('express');
const app = express();
const port = 3000;

// Logging middleware
app.use((req, res, next) => {
    const start = Date.now();
    
    // Log incoming request details
    console.log(`Incoming request: ${req.method} ${req.url} at ${new Date().toISOString()}`);
    
    // Capture response end event to calculate the response time
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`Request completed in ${duration}ms with status code ${res.statusCode}`);
    });
    
    // Pass control to the next middleware or route handler
    next();
});

// Sample route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

app.get('/contact', (req, res) => {
    res.send('Contact Us');
});
app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send(`User ID is ${userId}`);
});
app.post('/submit', (req, res) => {
    res.send('Form submitted');
});
app.put('/update', (req, res) => {
    res.send('Resource updated');
});
app.delete('/delete', (req, res) => {
    res.send('Resource deleted');
});


// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
