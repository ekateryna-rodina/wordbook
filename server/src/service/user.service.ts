import { omit } from 'lodash';
import { DocumentDefinition, FilterQuery } from 'mongoose';
import {
  default as User,
  default as UserModel,
  UserDocument,
} from '../models/user.model';

export async function createUser(
  input: DocumentDefinition<
    Omit<UserDocument, 'createdAt' | 'updatedAt' | 'comparePassword'>
  >
) {
  try {
    const user = await UserModel.create(input);
    return omit(user.toJSON(), 'password');
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function validateUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const user = await User.findOne({ email });
  if (!user) return false;
  const isValid = await user.comparePassword(password);
  if (!isValid) return false;
  return omit(user.toJSON(), 'password');
}

export async function findUser(query: FilterQuery<UserDocument>) {
  return UserModel.findOne(query).lean();
}
