import mongoose from "mongoose";
import User from "../models/User.js";

const ExpenseSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:User,
        required:true,
    },
    amount:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

const Expense = mongoose.model('Expense',ExpenseSchema);
export default Expense;