import { v4 as uuidv4 } from 'uuid';
import { pool } from '../db/mysql';
import type { Session } from './types';

export async function createSession(userId: string): Promise<Session> {
  const id = uuidv4();
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 7); // 7 days from now

  await pool.execute(
    'INSERT INTO sessions (id, user_id, expires_at) VALUES (?, ?, ?)',
    [id, userId, expiresAt]
  );

  return { id, userId, expiresAt };
}

export async function getSession(sessionId: string): Promise<Session | null> {
  const [rows] = await pool.execute(
    'SELECT * FROM sessions WHERE id = ? AND expires_at > NOW()',
    [sessionId]
  );

  if (!Array.isArray(rows) || rows.length === 0) return null;
  const session = rows[0] as any;

  return {
    id: session.id,
    userId: session.user_id,
    expiresAt: new Date(session.expires_at),
  };
}

export async function deleteSession(sessionId: string): Promise<void> {
  await pool.execute('DELETE FROM sessions WHERE id = ?', [sessionId]);
}