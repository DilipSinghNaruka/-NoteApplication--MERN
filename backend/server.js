const connectToMongo = require("./db");
const express = require("express");
const app = express();
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config();
const port = process.env.PORT;
connectToMongo();
app.use(express.json())
app.use(cors());
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.get("/", (req, res) => {
  res.send("jai siyaram ");
  console.log("jai siyaram");
});
app.listen(port, () => {
  console.log( `connect on ${port}`);
});
