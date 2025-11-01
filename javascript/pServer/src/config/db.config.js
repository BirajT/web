import mongoose from 'mongoose'

export const connectDB =()=>{
    //connecting to mongodb
mongoose.connect('mongodb://localhost:27017/new_db').then(()=>{
    console.log("Data base Connected")
}).catch((error)=>{
    console.log(error);
});
}