const mongoose = require("mongoose");

/**
 * ConnectToDatabase() is an async function that connects to the local database using
 * mongoose.connect() and returns a promise.
 */
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
    });
    console.log("Connected to online DB");
  } catch (err) {
    console.log("Failed to connect to online DB");
  }
};

module.exports = connectToDatabase;
