const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./utils/dbConnect");
const imageRoute = require("./routes/route");
const app = express();

connectToDatabase();
app.use(cors());
app.use(express.json());
app.use("/api", imageRoute);

app.get("/", (req, res) => {
  res.send("server is working fine");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running in port  ${PORT}`);
});
