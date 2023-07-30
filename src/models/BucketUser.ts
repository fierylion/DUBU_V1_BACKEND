import mongoose from "mongoose";
const BucketUserSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    bucket_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bucket",
        required: true,
    },
    champion_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Champion",
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
interface IBucketUser extends mongoose.Document {
    user_id: string,
    bucket_id: string,
    champion_id: string,
    date: Date,
}
export default mongoose.model<IBucketUser>('BucketUser', BucketUserSchema);
