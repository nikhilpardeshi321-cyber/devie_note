"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveNote = saveNote;
exports.fetchNotes = fetchNotes;
const db_1 = require("../utils/db");
async function saveNote(note) {
    const result = await db_1.pool.query(`INSERT INTO device_note (device_id, note, created_by, created_at)
     VALUES ($1, $2, $3, NOW())
     RETURNING id, device_id, note, created_by, created_at`, [note.device_id, note.note, note.created_by]);
    return result.rows[0];
}
async function fetchNotes(deviceId, limit) {
    const result = await db_1.pool.query(`SELECT id, device_id, note, created_by, created_at
     FROM device_note
     WHERE device_id = $1
     ORDER BY created_at DESC
     LIMIT $2`, [deviceId, limit]);
    return result.rows;
}
