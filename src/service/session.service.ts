import { FilterQuery } from 'mongoose';
import Session, { SessionDocument } from '../models/session.model';

export async function createSession(userId: string) {
  const session = await Session.create({ user: userId });
  return session.toJSON();
}
export async function findSessions(query: FilterQuery<SessionDocument>) {
  return Session.find(query).lean();
}
