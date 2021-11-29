import config from 'config';
import Cookies from 'cookies';
import { CookieOptions, Request, Response } from 'express';
import {
  createSession,
  findSessions,
  updateSession,
} from '../service/session.service';
import { validateUser } from '../service/user.service';
import { signJwt } from '../utils/jwt';
import logger from '../utils/logger';

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

  const cookie = new Cookies(req, res, {
    keys: [config.get<string>('cookieSecret')],
  });
  const options: CookieOptions = {
    sameSite: 'strict',
    path: '/',
    httpOnly: true,
    expires: new Date(
      new Date().getTime() + config.get<number>('cookieExpires') * 1000
    ),
  };

  cookie.set('accessToken', accessToken, options);
  cookie.set('refreshToken', refreshToken, options);
  return res.send({
    id: user._id,
    name: user.name,
    email: user.email,
  });
}
export async function getUserSessionsHandler(req: Request, res: Response) {
  const userId = res.locals.user._id;
  const sessions = await findSessions({ user: userId, isValid: true });
  return res.send(sessions);
}

export async function deleteUserSessionHandler(req: Request, res: Response) {
  try {
    const sessionId = res.locals.user.session;
    await updateSession({ _id: sessionId }, { isValid: false });

    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    return res.status(200).send({ success: true });
  } catch (error: any) {
    logger.error(error);
    return res.send({ success: false, error: error.message });
  }
}
