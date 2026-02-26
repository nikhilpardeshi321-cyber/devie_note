"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const problemsController_1 = require("../controllers/problemsController");
const router = (0, express_1.Router)();
router.get('/', problemsController_1.listProblems);
router.get('/p1', problemsController_1.problem1Get);
router.post('/p1', problemsController_1.problem1Post);
exports.default = router;
