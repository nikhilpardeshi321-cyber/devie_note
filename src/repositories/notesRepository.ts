import { DeviceNote } from '../models/deviceNote';
import { pool } from '../utils/db';

export async function saveNote(note: Omit<DeviceNote, 'id' | 'created_at'>): Promise<DeviceNote> {
  const result = await pool.query(
    `INSERT INTO device_note (device_id, note, created_by, created_at)
     VALUES ($1, $2, $3, NOW())
     RETURNING id, device_id, note, created_by, created_at`,
    [note.device_id, note.note, note.created_by]
  );
  return result.rows[0];
}

export async function fetchNotes(deviceId: number, limit: number): Promise<DeviceNote[]> {
  const result = await pool.query(
    `SELECT id, device_id, note, created_by, created_at
     FROM device_note
     WHERE device_id = $1
     ORDER BY created_at DESC
     LIMIT $2`,
    [deviceId, limit]
  );
  return result.rows;
}
