import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/connect'; 
import { errorHandler, notFound } from './middleware';
import 'express-async-errors'  
import championRoutes from './routes/championRoutes';

import { BadRequestError } from './errors';
import { registerChampion } from './controllers/championControllers/index';
dotenv.config()
const app = express();
app.use(express.json());

app.get('/',async (req, res) => {
   
    res.send('Welcome to DUBU REST API');
});
app.use('/api/v1/champions', championRoutes)

app.use(notFound)
app.use(errorHandler)


const port:number =4000;
const start =async () => {
    try{
        const mongo_uri = process.env.MONGO_URI;
        if(mongo_uri){
            await connectDB(mongo_uri);
            console.log('Database Connected');
            app.listen(port, () => console.log(`Server running on port ${port}....`))
        }
        else{
            throw new Error('Cant connect to the database!, MONGO URI not provided!')
        }
    }
    catch(err){
        console.log(err);
    }

}
start()