import express from 'express';

const app = express();
const PORT = 3000;
app.get('/', (req, res) => res.send('hello Kate'));

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`Example app listening on port ${PORT}!`);
});
