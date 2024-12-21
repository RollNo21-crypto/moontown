import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';
import { pool } from '../db/mysql';
import type { User, GoogleProfile } from './types';

export async function createUser(data: {
  email: string;
  password?: string;
  fullName?: string;
  googleId?: string;
  avatarUrl?: string;
}): Promise<User> {
  const id = uuidv4();
  const passwordHash = data.password ? await bcrypt.hash(data.password, 10) : null;

  await pool.execute(
    `INSERT INTO users (id, email, password_hash, full_name, google_id, avatar_url) 
     VALUES (?, ?, ?, ?, ?, ?)`,
    [id, data.email, passwordHash, data.fullName || null, data.googleId || null, data.avatarUrl || null]
  );

  return {
    id,
    email: data.email,
    fullName: data.fullName || null,
    avatarUrl: data.avatarUrl || null,
    googleId: data.googleId || null,
  };
}

export async function findUserByEmail(email: string): Promise<User | null> {
  const [rows] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
  
  if (!Array.isArray(rows) || rows.length === 0) return null;
  const user = rows[0] as any;

  return {
    id: user.id,
    email: user.email,
    fullName: user.full_name,
    avatarUrl: user.avatar_url,
    googleId: user.google_id,
  };
}

export async function verifyPassword(user: User, password: string): Promise<boolean> {
  const [rows] = await pool.execute(
    'SELECT password_hash FROM users WHERE id = ?',
    [user.id]
  );

  if (!Array.isArray(rows) || rows.length === 0) return false;
  const { password_hash } = rows[0] as any;
  
  return bcrypt.compare(password, password_hash);
}

export async function findOrCreateGoogleUser(profile: GoogleProfile): Promise<User> {
  let user = await findUserByEmail(profile.email);

  if (!user) {
    user = await createUser({
      email: profile.email,
      fullName: profile.name,
      googleId: profile.id,
      avatarUrl: profile.picture,
    });
  } else if (!user.googleId) {
    // Update existing user with Google info
    await pool.execute(
      'UPDATE users SET google_id = ?, avatar_url = ? WHERE id = ?',
      [profile.id, profile.picture, user.id]
    );
    user.googleId = profile.id;
    user.avatarUrl = profile.picture;
  }

  return user;
}