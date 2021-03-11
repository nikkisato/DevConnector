//const config = require("config");
//const db = config.get("mongoURI");
const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.log(err.message);
    //Exit Process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
