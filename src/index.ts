import config from 'config';
import express from 'express';
import connect from './utils/connect';

const app = express();
const PORT = config.get<number>('port');
app.get('/', (req, res) => res.send('hello Kate my dear try again'));

app.listen(PORT, async () => {
  console.log(`Example app listening on port ${PORT}!`);
  await connect();
});
