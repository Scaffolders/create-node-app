import express from 'express';
import { makeLogger } from './logger';

const app = express();
const logger = makeLogger();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Made with 💙 by TheLe0');
});

app.listen(port, () => {
  logger.debug({
    type: 'LOG_TYPE_1',
    message: `Server listening on port ${port}`
  });

  console.log(`Server running on http://localhost:${port}`)
})