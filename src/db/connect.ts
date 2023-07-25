import mongoose from 'mongoose';
const connectDB =  (url:string) => {
 return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
 } as mongoose.ConnectOptions)};
export default connectDB;
