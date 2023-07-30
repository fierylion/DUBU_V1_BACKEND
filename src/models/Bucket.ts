import mongoose from 'mongoose'
import { uniqueNameRegex } from './modelFunctions';

const BucketSchema = new mongoose.Schema({
 name: {
  type: String,
  required: true,
  trim: true,
 },
 unique_name: {
  type: String,
  required: true,
  trim: true,
  match: uniqueNameRegex,
 },
 champion_id: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Champion",
  required: true,
 },
 category: {
  type: String,
  required: true,
  trim: true,
 },
 description: {
  type: String,
  trim: true,
 },
 no_of_users: {
  type: Number,
  default: 0,
 },
 isActive: {
  type: Boolean,
  default: true,
 },
 wrappedLink:{
  type: String,
  trim: true,
 },
 lastAccessed: {
  type: Date,
  default: Date.now,
 },
 dateCreated: {
  type: Date,
  default: Date.now,
 },
 }
);
interface IBucket extends mongoose.Document {
 name: string,
 unique_name: string,
 champion_id: string,
 category: string,
 description: string,
 no_of_users: number,
 isActive: boolean,
 wrappedLink: string,
 lastAccessed: Date,
 dateCreated: Date,
}
export default mongoose.model<IBucket>('Bucket', BucketSchema);