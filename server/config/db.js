import mongoose from 'mongoose'



const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoBD connected");
        
    } catch (error) {
        console.log(error);

        process.exit(1)
        
    }
}

export default connectDB;