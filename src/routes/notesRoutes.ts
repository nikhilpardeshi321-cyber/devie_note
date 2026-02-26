import { Router } from 'express';
import { createDeviceNote, getDeviceNotes } from '../controllers/notesController';

const router = Router();

// POST API
router.post('/devices/:deviceId/notes', createDeviceNote);
// GET API
router.get('/devices/:deviceId/notes', getDeviceNotes);

export default router;
