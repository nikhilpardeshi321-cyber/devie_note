"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.problem1Post = exports.problem1Get = exports.listProblems = void 0;
const problemsService_1 = require("../services/problemsService");
const listProblems = (_req, res) => {
    res.json({ problems: [
            { id: 'p1', title: 'Problem 1 (placeholder)' }
        ] });
};
exports.listProblems = listProblems;
const problem1Get = (_req, res) => {
    res.json({ message: 'Problem1 placeholder - GET' });
};
exports.problem1Get = problem1Get;
const problem1Post = (req, res) => {
    const { input } = req.body;
    const result = (0, problemsService_1.getProblem1Result)(input);
    res.json({ result });
};
exports.problem1Post = problem1Post;
