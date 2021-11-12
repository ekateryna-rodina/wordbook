import { FilterQuery, UpdateQuery } from 'mongoose';
import Session, { SessionDocument } from '../models/session.model';

export async function createSession(userId: string) {
  const session = await Session.create({ user: userId });
  return session.toJSON();
}
export async function findSessions(query: FilterQuery<SessionDocument>) {
  return Session.find(query).lean();
}
export async function updateSession(
  query: FilterQuery<SessionDocument>,
  update: UpdateQuery<SessionDocument>
) {
  return Session.updateOne(query, update);
}
