import config from 'config';
import express from 'express';
import routes from './routes';
import connect from './utils/connect';
import logger from './utils/logger';

const app = express();
app.use(express.json());
const PORT = config.get<number>('port');
routes(app);
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, async () => {
    logger.info(`App is running on http://localhost:${PORT}`);
    await connect();
  });
}

export default app;
