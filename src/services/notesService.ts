import { saveNote, fetchNotes } from '../repositories/notesRepository';
import { DeviceNote } from '../models/deviceNote';

export async function createNote(deviceId: number, note: string, user?: string): Promise<DeviceNote> {
  if (!user) throw new Error('X-User header is required');
  if (!note || typeof note !== 'string' || note.trim().length === 0) throw new Error('Note must not be blank');
  if (note.length > 1000) throw new Error('Note must be at most 1000 characters');
  if (!deviceId || isNaN(deviceId)) throw new Error('Invalid deviceId');
  // created_at and id handled in repository
  return saveNote({ device_id: deviceId, note, created_by: user });
}

export async function listNotes(deviceId: number, limit: number): Promise<DeviceNote[]> {
  if (!deviceId || isNaN(deviceId)) throw new Error('Invalid deviceId');
  if (!limit || isNaN(limit)) limit = 20;
  if (limit < 1 || limit > 100) throw new Error('Limit must be between 1 and 100');
  return fetchNotes(deviceId, limit);
}
