import { OAuth2Client } from 'google-auth-library';
import type { GoogleProfile } from './types';

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  `${process.env.APP_URL}/auth/google/callback`
);

export async function verifyGoogleToken(token: string): Promise<GoogleProfile> {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const payload = ticket.getPayload();
  if (!payload?.email) throw new Error('Invalid token');

  return {
    id: payload.sub,
    email: payload.email,
    name: payload.name || '',
    picture: payload.picture || '',
  };
}