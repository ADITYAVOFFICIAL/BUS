require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

const connect = async () => {
  if (!uri) {
    throw new Error('The `uri` parameter to `mongoose.connect()` must be a string, got "undefined". Make sure the environment variable `NEXT_PUBLIC_MONGODB_URI` is set.');
  }

  if (mongoose.connections[0].readyState) {
    return;
  }

  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

module.exports = connect;