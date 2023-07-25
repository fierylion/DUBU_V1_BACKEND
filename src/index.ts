import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/connect';   
dotenv.config()
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

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