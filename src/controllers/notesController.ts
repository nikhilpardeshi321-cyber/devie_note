import { Request, Response } from 'express';
import { createNote, listNotes } from '../services/notesService';

// POST /api/v1/devices/:deviceId/notes
export const createDeviceNote = async (req: Request, res: Response) => {
  const deviceId = Number(req.params.deviceId);
  const note = req.body.note;
  const user = req.header('X-User');
  try {
    const result = await createNote(deviceId, note, user);
    res.status(201).json(result);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

// GET /api/v1/devices/:deviceId/notes?limit=20
export const getDeviceNotes = async (req: Request, res: Response) => {
  const deviceId = Number(req.params.deviceId);
  const limit = req.query.limit ? Number(req.query.limit) : 20;
  try {
    const notes = await listNotes(deviceId, limit);
    res.json(notes);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
