import { jwtVerify } from 'jose';

const secretKey = new TextEncoder().encode(process.env.JWT_SECRET);

export async function verifyJWT(token) {
  try {
    const decodedToken = await jwtVerify(token, secretKey, { algorithms: ['HS256'] });
    return decodedToken;
  } catch (error) {
    throw new Error('Invalid token');
  }
}