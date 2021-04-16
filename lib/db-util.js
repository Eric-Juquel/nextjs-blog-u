import { MongoClient } from 'mongodb';
import colors from 'colors';

export const connectDatabase = async () => {
  const client = await MongoClient.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log(`MongoDB Connected !`.cyan.underline);

  return client;
};
