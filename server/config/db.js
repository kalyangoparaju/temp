const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

// Load environment variables from the .env file
dotenv.config();
mongoose.set("strictQuery", false);
const url = "mongodb+srv://kalyan77:kalyan77@cluster0.frny3cq.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Connected to MongoDB Database at ${mongoose.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`MONGO Connect Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
