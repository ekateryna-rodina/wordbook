import config from 'config';
import { Request, Response } from 'express';
import {
  createSession,
  findSessions,
  updateSession,
} from '../service/session.service';
import { validateUser } from '../service/user.service';
import { signJwt } from '../utils/jwt';

export async function createUserSessionHandler(req: Request, res: Response) {
  const user = await validateUser(req.body);
  if (!user) return res.status(401).send('Invalid email or password');
  const session = await createSession(user._id.toString());
  const accessToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get<string>('accessTokenExpireIn') }
  );
  const refreshToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get<string>('refreshTokenExpireIn') }
  );
  res.send({ accessToken, refreshToken });
}
export async function getUserSessionsHandler(req: Request, res: Response) {
  const userId = res.locals.user._id;
  const sessions = await findSessions({ user: userId, isValid: true });
  return res.send(sessions);
}

export async function deleteUserSessionHandler(req: Request, res: Response) {
  const sessionId = res.locals.user.session;
  await updateSession({ _id: sessionId }, { isValid: false });
  return res.send({
    accessToken: null,
    refreshToken: null,
  });
}
