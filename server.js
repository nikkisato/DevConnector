const express = require("express");
//const connectDb = require("./config/db");
const path = require("path");
const app = express();
require("dotenv").config({ path: "./.env" });
const mongoose = require("mongoose");
//Connect Database
//connectDb();
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
//Init Middleware
app.use(express.json({ extended: false }));

//Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

//Server static assets in production
if (process.env.NODE_ENV === "production") {
  //set Static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
