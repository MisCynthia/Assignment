require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB server
async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  }
}

connectToDatabase();
const express = require('express');
const app = express();
const routes = require('./routes');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/', routes);

const port = 3000; 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
