const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://Nikikosa:devTeamAltF4@chatapp.hdxcr.mongodb.net/ChatApp?retryWrites=true&w=majority&keepAlive=true&socketTimeoutMS=360000&connectTimeoutMS=360000", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;

