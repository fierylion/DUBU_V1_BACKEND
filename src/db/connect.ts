import mongoose from 'mongoose';
const connectDB =  (url:string) => {
 return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useFindAndModify: false,
    useCreateIndex: true
 } as mongoose.ConnectOptions)};
export default connectDB;
