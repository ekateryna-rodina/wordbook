import config from 'config';
import Cookies from 'cookies';
import { CookieOptions, Request, Response } from 'express';
import { CreateUserInput } from '../schema/user.schema';
import { createSession } from '../service/session.service';
import { createUser } from '../service/user.service';
import { signJwt } from '../utils/jwt';
import logger from '../utils/logger';

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput['body']>,
  res: Response
) {
  try {
    const user = await createUser(req.body);
    const session = await createSession(user._id.toString());
    const accessToken = signJwt(
      { ...user, session: session._id },
      { expiresIn: config.get<string>('accessTokenExpireIn') }
    );
    const refreshToken = signJwt(
      { ...user, session: session._id },
      { expiresIn: config.get<string>('refreshTokenExpireIn') }
    );
    const options: CookieOptions = {
      sameSite: 'strict',
      path: '/',
      httpOnly: true,
      expires: new Date(
        new Date().getTime() + config.get<number>('cookieExpires') * 1000
      ),
    };

    const cookie = new Cookies(req, res, {
      keys: [config.get<string>('cookieSecret')],
    });
    cookie.set('accessToken', accessToken, options);
    cookie.set('refreshToken', refreshToken, options);
    return res.send({
      id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function getCurrentUserHandler(req: Request, res: Response) {
  return res.send(res.locals.user);
}
