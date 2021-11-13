import config from 'config';
import { get } from 'lodash';
import { FilterQuery, UpdateQuery } from 'mongoose';
import Session, { SessionDocument } from '../models/session.model';
import { signJwt, verifyJwt } from '../utils/jwt';
import { findUser } from './user.service';

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
export async function reIssueAccessToken({
  refreshToken,
}: {
  refreshToken: string;
}) {
  const { decoded } = verifyJwt(refreshToken);
  // make sure that session is valid before issuing new token
  if (!decoded || !get(decoded, 'session')) return false;
  const session = await Session.findById(get(decoded, 'session'));
  if (!session || !session.isValid) return false;
  const user = await findUser({ _id: session.user });
  if (!user) return false;
  const accessToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get<string>('accessTokenExpireIn') }
  );

  return accessToken;
}
