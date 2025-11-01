import mongoose from "mongoose";

export const connectDB=()=>{
    console.log(process.env.DB_URI);
mongoose
.connect(process.env.DB_URI)
.then(()=>{
    console.log("Database connected");
})
.catch((error)=>{
    console.log(error);
});
}
