const dotenv = require('dotenv');
dotenv.config();
const { MongoClient } = require('mongodb');

let database;

const initDb = (callback) => {
  if (database) {
    console.log('Database is already initialized!');
    return callback(null, database);
  }

  // Validate the connection string
  if (!process.env.MONGODB_URI) {
    return callback(new Error('MONGODB_URI is not defined in .env'));
  }

  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      database = client.db('Project1'); // Explicitly specify the database name
      console.log('Connected to MongoDB');
      callback(null, database);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDatabase = () => {
  if (!database) {
    throw new Error('Database not initialized. Call initDb() first.');
  }
  return database;
};

module.exports = {
  initDb,
  getDatabase,
};