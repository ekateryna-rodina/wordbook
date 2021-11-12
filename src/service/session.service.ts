import Session from '../models/session.model';

export async function createSession(userId: string) {
  const session = await Session.create({ user: userId });
  return session.toJSON();
}
