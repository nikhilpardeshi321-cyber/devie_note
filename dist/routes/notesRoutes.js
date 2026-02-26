"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notesController_1 = require("../controllers/notesController");
const router = (0, express_1.Router)();
// POST API
router.post('/devices/:deviceId/notes', notesController_1.createDeviceNote);
// GET API
router.get('/devices/:deviceId/notes', notesController_1.getDeviceNotes);
exports.default = router;
