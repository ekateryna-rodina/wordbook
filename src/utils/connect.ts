import config from 'config';
import mongoose from 'mongoose';

async function connect() {
  const dbUri = config.get<string>('dbUri');
  try {
    await mongoose.connect(dbUri);
  } catch (error) {
    console.log(`Could not connect to db becaus of ${error}`);
    process.exit(1);
  }
}

export default connect;
