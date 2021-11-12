import bcrypt from 'bcrypt';
import config from 'config';
import mongoose, { Date } from 'mongoose';

export interface UserDocument extends mongoose.Document {
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(passwordCandidate: string): Promise<boolean>;
}
const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function (next: any) {
  let user = this as any as UserDocument;
  if (!user.isModified('password')) return next();
  const salt = await bcrypt.genSalt(config.get<number>('saltFactor'));
  const hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
  return next();
});
userSchema.methods.comparePassword = async function (
  passwordCandidate: string
): Promise<boolean> {
  const user = this as any as UserDocument;
  return bcrypt.compare(passwordCandidate, user.password).catch((e) => false);
};
const User = mongoose.model('User', userSchema);
export default User;
