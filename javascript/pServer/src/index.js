import dotenv from "dotenv" 
dotenv.config();
import express from "express";
//* app instance

const app = express();
//* importing routes
import userRoutes from "./routes/user.router.js";
import {connectDB} from "./config/db.config.js";

// dotenv.config()


const PORT = process.env.PORT;




// connecting db
await connectDB()

// usin middleware
app.use(express.json({ limit: "5mb" }));

app.get('/', (req, res) => {
  res.status(200).json({
    message:'Server is up & running'
  })
})

//* using routes
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
  console.log("press ctrl+c to close the server");
});