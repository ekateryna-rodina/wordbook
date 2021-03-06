import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import { deserializeUser } from '../middleware/deserializeUser';
import routes from '../routes';

function createServer() {
  const app = express();
  app.use(express.json());
  app.use(cors({ credentials: true, origin: 'http://localhost:3001' }));
  app.use(cookieParser());
  app.use(deserializeUser);
  routes(app);
  return app;
}

export default createServer;
