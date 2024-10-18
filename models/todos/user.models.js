import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    username:{
      type:String,
      required:true,
      unique:true,
      lowercase:true
    },
    email:{
      type:String,
      required:true,
      lowercase:true,
      unique:true
    },
    password:{
      type:String,
      required:[true,"password is required"]
    }
      
  },{timestampsr}
)

export const User = mongoose.model("User",userSchema)