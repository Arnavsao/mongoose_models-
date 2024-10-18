import mongoose, { mongo, Mongoose } from 'mongoose';

const productSchema = new mongoose.Schema({
  description:{
    type:String,
    required:true,
  },
  description:{
    type:String,
    required:true,
  },
  productImage:{
    type:Number,
    default:0,
  },
  stock:{
    default:0,
    type:Number,
  },
  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Category",
    required:true,
  },
  owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
  }
}, { timestamps: true });

export const Product = mongoose.mondel('Product', productSchema);
