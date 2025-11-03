import mongoose from "mongoose"
import {MONGO_CONFIG} from "../constants/db.constants.js"

export const connectDB=()=>{
    mongoose
    .connect(MONGO_CONFIG.uri,{
        dbName:MONGO_CONFIG.db_name,
    autoCreate:true,
}).then(()=>{
console.log("database connected");
})
.catch((error)=>{
    console.log(error);
});
};

