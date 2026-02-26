"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeviceNotes = exports.createDeviceNote = void 0;
const notesService_1 = require("../services/notesService");
// POST /api/v1/devices/:deviceId/notes
const createDeviceNote = async (req, res) => {
    const deviceId = Number(req.params.deviceId);
    const note = req.body.note;
    const user = req.header('X-User');
    try {
        const result = await (0, notesService_1.createNote)(deviceId, note, user);
        res.status(201).json(result);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
};
exports.createDeviceNote = createDeviceNote;
// GET /api/v1/devices/:deviceId/notes?limit=20
const getDeviceNotes = async (req, res) => {
    const deviceId = Number(req.params.deviceId);
    const limit = req.query.limit ? Number(req.query.limit) : 20;
    try {
        const notes = await (0, notesService_1.listNotes)(deviceId, limit);
        res.json(notes);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
};
exports.getDeviceNotes = getDeviceNotes;
