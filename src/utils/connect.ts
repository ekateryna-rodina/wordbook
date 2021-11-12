import config from 'config';
import mongoose from 'mongoose';
import logger from './logger';

async function connect() {
  const dbUri = config.get<string>('dbUri');
  try {
    await mongoose.connect(dbUri);
    logger.info('Connected to DB');
  } catch (error) {
    logger.error(`Could not connect to db becaus of ${error}`);
    process.exit(1);
  }
}

export default connect;
