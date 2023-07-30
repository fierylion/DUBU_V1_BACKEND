import mongoose from 'mongoose';
import { emailRegex, phoneRegex} from "./modelFunctions";
const UserSchema = new mongoose.Schema({
 fname : {
  type: String,
  required: [true, 'Please enter your first name'],
  trim: true,
 },
 lname : {
  type: String, 
  required: [true, 'Please enter your last name'],
  trim: true,
 },
 phone:{
  type: String,
  required: [true,'Please enter your phone number'],
  trim: true,
  match: [phoneRegex, 'Please enter a valid phone number'],
  unique: true,
 },
 
 no_of_buckets:{
  type: Number,
  required: true,
  trim: true,
  default: 0,
 },
 registerDate: {
  type: Date,
  default: Date.now,
 },
});
interface IUser extends mongoose.Document {
 fname: string,
 lname: string,
 phone: string,
 no_of_buckets: number,
 registerDate: Date,
}

const UserModal = mongoose.model<IUser>('User', UserSchema);
export { UserModal, IUser}