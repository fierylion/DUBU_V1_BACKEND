import mongoose, { Types } from "mongoose";
import bcrypt from 'bcryptjs';
import jwt, {Secret} from 'jsonwebtoken'
import { emailRegex} from "./modelFunctions";
const ChampionSchema = new mongoose.Schema({
 user_id: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User",
  required: true,
  unique:true
 },
 email:{
  type: String,
  required: true,
  trim: true,
  match: [emailRegex, 'Please enter a valid email address'],
  unique:true
 },
 password:{
  type:String,
  required:true,
 },
 no_of_buckets:{
  type: Number,
  default: 0,
 },
 no_new_users_registered:{
  type: Number,
  default: 0,
 },
 date: {
  type: Date,
  default: Date.now,
 },
});

ChampionSchema.pre(
 'save', async function(next){
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();

 }
)
ChampionSchema.methods.createJWT = 
function ():string{
 const expirty_date = process.env.JWT_EXPIRY
 const secret_key = process.env.JWT_TOKEN;
 if(secret_key && expirty_date ){ 
 interface dataType {
  id: Types.ObjectId;
 }

 //create a jwt token
 const data:dataType = {
  id: this.user_id,
 }
 const secretKey:Secret = secret_key;
 const expiryDate = expirty_date; 

 const token = jwt.sign(data,secretKey, {
  expiresIn: expiryDate
 })
 return token
 }
 else{
  throw new Error("Please provide secretKey and expiryDate to create token!");
 }

}
ChampionSchema.methods.VerifyPassword = async function(password:string):Promise<boolean>{
 const compareValue = await bcrypt.compare(password, this.password)
 return compareValue
}
interface IChampion extends mongoose.Document {
 user_id: string,
 email: string,
 no_of_buckets?: number,
 no_new_users_registered?: number,
 password:string,
 date?: Date,
}
const ChampionModal =  mongoose.model<IChampion>('Champion', ChampionSchema);
export {ChampionModal, IChampion}