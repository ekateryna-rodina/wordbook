import mongoose, { Date, ObjectId } from 'mongoose';
import { UserDocument } from './user.model';

export interface RecordDocument extends mongoose.Document {
  user: UserDocument['_id'];
  record?: string;
  tags: ObjectId[] | string[];
  synonyms?: ObjectId[] | string[];
  antonyms?: ObjectId[] | string[];
  idioms?: string[];
  sentences?: string[];
  createdAt: Date;
  updatedAt: Date;
}
const recordSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    record: { type: String, required: true },
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag',
      },
    ],
    synonyms: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Record',
      },
    ],
    antonyms: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Record',
      },
    ],
    idioms: [
      {
        type: String,
      },
    ],
    sentences: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);
recordSchema.index({ user: 1, record: 1 }, { unique: true });
const Record = mongoose.model<RecordDocument>('Record', recordSchema);
export default Record;
