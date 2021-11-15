import config from 'config';
import fs from 'fs';
import jwt, { JwtPayload } from 'jsonwebtoken';
import path from 'path';

let privateKey: string = fs.readFileSync(
  path.join(process.cwd(), 'private.pem'),
  'ascii'
);

const publicKey: string = fs.readFileSync(
  path.join(process.cwd(), 'public.pem'),
  'ascii'
);

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  const token = jwt.sign(
    object,
    { key: privateKey, passphrase: config.get<string>('rsaSecret') },
    {
      ...(options && options),
      algorithm: 'RS256',
    }
  );
  return token;
}
export function verifyJwt(token: string): {
  valid: boolean;
  expired: boolean;
  decoded: string | JwtPayload | null;
} {
  try {
    const decoded = jwt.verify(token, publicKey);
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (error: any) {
    return {
      valid: false,
      expired: error.message === 'jwt expired',
      decoded: null,
    };
  }
}
