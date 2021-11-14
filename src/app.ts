import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Made with 💙 by TheLe0');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})