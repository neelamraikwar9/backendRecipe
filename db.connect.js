const mongoose = require("mongoose");
require("dotenv").config();

const mongoUri = process.env.MONGODB;
console.log(mongoUri)

// const initializeDb = async() => {
//     await mongoose.connect(mongoUri).then(() => {
//         console.log("Connected to database.")
//     }).catch((error) => console.log("Error in connecting to database.", error))
// };
// const initializeDb = async () => {
//   try {

//     const connection = await mongoose.connect(mongoUri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     //   serverSelectionTimeoutMS: 10000
//     });
//     if (connection) {
//       console.log("Connected successfully");
//     }
//   } catch (error) {
//     console.log("Connection failed", error);
//   }	
// };

const initializeDb = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected successfully");
  } catch (error) {
    console.error("DB connection error:", error);
  }
};

module.exports = { initializeDb }