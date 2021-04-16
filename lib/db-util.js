import { MongoClient } from 'mongodb';
import colors from 'colors';

const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.vdcyq.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

export const connectDatabase = async () => {
  const client = await MongoClient.connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log(`MongoDB Connected !`.cyan.underline);

  return client;
};
