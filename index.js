const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const problemsRouter = require('./routes/problems');

app.use(express.json());
app.use('/api/problems', problemsRouter);

app.get('/', (req, res) => res.send('Node Express Assessment API'));

app.listen(port, () => console.log(`Server listening on port ${port}`));
