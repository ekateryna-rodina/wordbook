import config from 'config';
import { Request, Response } from 'express';
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

    return res.send({
      id: user._id,
      name: user.name,
      email: user.email,
      accessToken,
      refreshToken,
    });
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}
