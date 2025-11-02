import { MONGO_CONFIG } from "../constants/db.constants.js";

export const connectDb=()=>{
    mongoose
    .connect(MONGO_CONFIG.uri,{
        dbName:MONGO_CONFIG.name,
        autoCreate:true,
    })
    .then(()=>{
        console.log("Database connected");
    })
    .catch((error)=>{
        console.log(error);
    })
}