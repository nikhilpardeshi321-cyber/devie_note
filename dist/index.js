"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notesRoutes_1 = __importDefault(require("./routes/notesRoutes"));
const models_1 = require("./models");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use('/api/v1', notesRoutes_1.default);
async function start() {
    try {
        await models_1.sequelize.authenticate();
        await models_1.sequelize.sync();
        console.log('Database connected and models synced.');
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    }
    catch (err) {
        console.error('Failed to start app', err);
        process.exit(1);
    }
}
start();
app.listen(port, () => console.log(`Server listening on port ${port}`));
