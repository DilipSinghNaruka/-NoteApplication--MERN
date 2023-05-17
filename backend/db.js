// const mongoose = require("mongoose")
// const mongoURI = "mongodb+srv://cluster0.qq2tn8y.mongodb.net/noteapp --apiVersion 1 --username surayvansi"

// const connectToMongo = () =>{
//     mongoose.connect(mongoURI,()=>{
//         console.log("connect to mongo successfully")
//     })
// }
// module.exports = connectToMongo;

const dotenv = require("dotenv");

dotenv.config();

const mongoose = require("mongoose");
const mongoURI =
 process.env.URI; // Replace <username> and <password> with your MongoDB Atlas username and password

const connectToMongo = () => {
  mongoose
    .connect(mongoURI)
    .then(() => {
      // Use Promise-based syntax for success
      console.log("Connected to MongoDB successfully");
    })
    .catch((err) => {
      // Use Promise-based syntax for error
      console.error("Failed to connect to MongoDB:", err);
    });
};

module.exports = connectToMongo;
