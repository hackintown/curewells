const dotenv = require("dotenv"); //Reads .env file and makes environment variables available through process.env.
dotenv.config(); // Loads environment variables from .env file into process.env
module.exports = {
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  PORT: process.env.PORT,
  CLIENT_URL: process.env.CLIENT_URL,
};