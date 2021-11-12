import config from 'config';
import { Request, Response } from 'express';
import { createSession } from '../service/session.service';
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
  logger.error(accessToken);
  const refreshToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get<string>('refreshTokenExpireIn') }
  );
  res.send({ accessToken, refreshToken });
}
