"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNote = createNote;
exports.listNotes = listNotes;
const notesRepository_1 = require("../repositories/notesRepository");
async function createNote(deviceId, note, user) {
    if (!user)
        throw new Error('X-User header is required');
    if (!note || typeof note !== 'string' || note.trim().length === 0)
        throw new Error('Note must not be blank');
    if (note.length > 1000)
        throw new Error('Note must be at most 1000 characters');
    if (!deviceId || isNaN(deviceId))
        throw new Error('Invalid deviceId');
    // created_at and id handled in repository
    return (0, notesRepository_1.saveNote)({ device_id: deviceId, note, created_by: user });
}
async function listNotes(deviceId, limit) {
    if (!deviceId || isNaN(deviceId))
        throw new Error('Invalid deviceId');
    if (!limit || isNaN(limit))
        limit = 20;
    if (limit < 1 || limit > 100)
        throw new Error('Limit must be between 1 and 100');
    return (0, notesRepository_1.fetchNotes)(deviceId, limit);
}
