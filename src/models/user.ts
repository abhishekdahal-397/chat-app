import mongoose, { Schema, Document, Model } from 'mongoose';

 export interface User extends Document {
  username: string;
  email: string;
  password: string;
}

const userSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User: Model<User> = mongoose.models.User || mongoose.model<User>('User', userSchema);

export default User;
