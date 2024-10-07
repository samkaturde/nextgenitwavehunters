const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, 'build')));

// API endpoint
app.post('/api/contact', (req, res) => {
  res.json({ message: 'Contact form submitted successfully' });
});

// Catch-all handler to send React's index.html for any unknown paths
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
