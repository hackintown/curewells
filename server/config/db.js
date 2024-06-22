// ./config/db.js
const mongoose = require('mongoose');
const { MONGODB_URI } = require('./config'); // Adjust path as per your project structure

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'curewells', // Specify the database name
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
