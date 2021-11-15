import config from 'config';
import dotenv from 'dotenv';
import connect from './utils/connect';
import logger from './utils/logger';
import createServer from './utils/server';

const app = createServer();
const PORT = config.get<number>('port');
dotenv.config();
app.listen(PORT, async () => {
  logger.info(`App is running on http://localhost:${PORT}`);
  await connect();
});

export default app;
