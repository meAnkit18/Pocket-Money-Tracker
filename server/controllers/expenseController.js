import Expense from "../models/Expense.js";

export const addExpense = async(req,res)=>{
    const {amount,description} = req.body;
    try {
        const expense = new Expense({
            user:req.user,
            amount,
            description,
        })

        await expense.save()
        res.status(201).json(expense)
    } catch (err) {
        res.status(500).json({error:err.message});
        
    }
}

export const getExpenses = async (req,res)=>{
    try {
        const expense = await Expense.find({user:req.user}).sort({date:-1});
        res.json(expense);
    } catch (err) {
        res.status(500).json({error:err.message})
    }
}