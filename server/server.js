import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import authRoutes from './routes/auth.js'
import cors from 'cors'
import expenseRoutes from './routes/expense.js'

dotenv.config()
connectDB();

const app = express()

app.use(cors())
app.use(express.json());


app.use('/api/auth',authRoutes);
app.use('/api/expenses',expenseRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server listening at ${PORT}`);
    
})