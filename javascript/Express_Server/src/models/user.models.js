import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    },
    
},{timestamps:true});



// mode user = await User.findOne({email,_id:id})
    // const user = await User.findById(id)l
const User = mongoose.model('user', userSchema)

export default User