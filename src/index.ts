import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/connect';   
dotenv.config();
const app = express();

try{
    const connectToDatabase =async () => {
        await connectDB(process.env.MONGO_URI!);
        console.log('Database Connected');
        app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}....`))
        
    }
}
catch(err){
    console.log(err);
}
