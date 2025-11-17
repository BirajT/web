import 'dotenv/config'
import express from "express";
import { connectDB } from "./config/db.config.js";
import { errorHandler } from './middlewares/error_handler.middleware.js';

//* importing routes
import authRoutes from './routes/auth.routes.js'
import categoryRoutes from './routes/category.routes.js'
import brandRoutes from './routes/brand.routes.js'
import wishlistRoutes from './routes/wishlist.routes.js'

const PORT = process.env.PORT || 5000;

const app = express();

// connect to database
connectDB()

// using middlewares
app.use(express.json({ limit: '10mb' }))
app.use('/api/uploads',express.static('uploads'))

app.get("/", (req, res) => {
  res.status(200).json({
    message: "server is up & running",
  });
});

//! using routes
app.use('/api/auth',authRoutes)
app.use('/api/brand',brandRoutes)
app.use('/api/category',categoryRoutes)
app.use('/api/wishlist',wishlistRoutes)

// error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
