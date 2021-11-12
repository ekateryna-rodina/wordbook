import mongoose, { Date } from 'mongoose';
import { UserDocument } from './user.model';

export interface SessionDocument extends mongoose.Document {
  user: UserDocument['_id'];
  isValid: boolean;
  createdAt: Date;
  updatedAt: Date;
}
const sessionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    isValid: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const Session = mongoose.model('Session', sessionSchema);
export default Session;
