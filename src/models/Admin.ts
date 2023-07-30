import mongoose from "mongoose";
const AdminSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true,
    },
    lname: {
        type: String,
        required: true,
        trim: true,

    },
    email: {
        type: String, 
        required: true,
        trim: true,
    },
    password: {
        type: String, 
        required: true, 
        trim: true, 
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
interface IAdmin extends mongoose.Document {
    fname: string,
    lname: string,
    email: string,
    password: string,
    date: Date,
}
export default mongoose.model<IAdmin>('Admin', AdminSchema);
