const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
// const connectDB = require("./config/db");
const path = require("path");

// dot config
dotenv.config();

// mongodb connection
// connectDB();
let isConnected = false; // connection cache

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
async function connectDB() {
  try {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
  });
  isConnected = true;
  console.log("✅ MongoDB connected");
} catch (error) {
  console.error("❌ MongoDB connection error:", error);
}
}

// rest object
const app = express();

// middlewares
// app.use(express.json());
// app.use(cors());
// app.use(morgan("dev"));
app.use((req, res, next) => {
  if (isConnected) {
    connectDB();
    console.log("✅ MongoDB already connected");
   
  }
   next();
})
// routes
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));


// port
// const PORT = process.env.PORT || 5000;

// listen
// app.listen(PORT, () => {
//   console.log(
//     `Node Server Running In ${process.env.DEV_MODE} Mode On Port ${PORT}`.bgBlue
//       .white
//   );
// });
// do not use app.listen() in vercel
module.exports = app;