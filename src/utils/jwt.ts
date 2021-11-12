import fs from 'fs';
import jwt, { JwtPayload } from 'jsonwebtoken';
import path from 'path';

const privateKey: string = fs.readFileSync(
  path.join(process.cwd(), 'privatekey.pem'),
  'ascii'
);

const publicKey: string = fs.readFileSync(
  path.join(process.cwd(), 'certificate.pem'),
  'ascii'
);

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  const token = jwt.sign(object, privateKey, {
    ...(options && options),
    algorithm: 'RS256',
  });
  return token;
}
function verifyJwt(token: string): {
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
