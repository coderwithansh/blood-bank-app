// const mongoose = require("mongoose");
// const colors = require("colors");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log(
//       `Connected To Mongodb Database ${mongoose.connection.host}`.bgMagenta
//         .white
//     );
//   } catch (error) {
//     console.log(`Mongodb Database Error ${error}`.bgRed.white);
//   }
// };

// module.exports = connectDB;
// const mongoose = require("mongoose");

// let isConnected = false; // connection cache

// const connectDB = async () => {
//   if (isConnected) {
//     console.log("✅ MongoDB already connected");
//     return;
//   }

//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     isConnected = conn.connections[0].readyState;
//     console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error("❌ MongoDB connection error:", error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;
