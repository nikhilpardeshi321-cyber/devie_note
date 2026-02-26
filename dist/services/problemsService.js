"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProblem1Result = getProblem1Result;
const problemsRepository_1 = require("../repositories/problemsRepository");
function getProblem1Result(input) {
    // Business logic can be added here
    return (0, problemsRepository_1.solveProblem1)(input);
}
