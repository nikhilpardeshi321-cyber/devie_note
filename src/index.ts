
import express from 'express';
import notesRouter from './routes/notesRoutes';
import { sequelize } from './models';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/v1', notesRouter);

async function start() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Database connected and models synced.');

    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (err) {
    console.error('Failed to start app', err);
    process.exit(1);
  }
}

start();

// app.listen(port, () => console.log(`Server listening on port ${port}`));
