import mongoose, { Date } from 'mongoose';
import { RecordDocument } from './record.model';
import { UserDocument } from './user.model';

export interface TagDocument extends mongoose.Document {
  name: string;
  user: UserDocument['_id'];
  records: RecordDocument['_id'][];
  createdAt: Date;
  updatedAt: Date;
}
const tagSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    records: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Record' }],
  },
  {
    timestamps: true,
  }
);
tagSchema.index({ user: 1, name: 1 }, { unique: true });
const Tag = mongoose.model<TagDocument>('Tag', tagSchema);
export default Tag;
