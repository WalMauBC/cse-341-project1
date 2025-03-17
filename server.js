const express = require('express');
const { initDb } = require('./data/database');
const routes = require('./routes/index');

const app = express();
app.use(express.json()); // Required for parsing JSON request bodies

// Initialize the database and start the server
initDb((err, db) => {
  if (err) {
    console.error('Failed to connect to the database:', err);
    process.exit(1); // Exit the process if the database connection fails
  }

  // Start the server
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });

  // Use routes
  app.use('/', routes);
});