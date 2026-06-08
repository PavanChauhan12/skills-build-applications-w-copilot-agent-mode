import mongoose from 'mongoose';

const databaseName = process.env.MONGODB_DB_NAME ?? 'octofit_db';

export async function connectDatabase(): Promise<void> {
  const connectionString =
    process.env.MONGODB_URI ?? `mongodb://127.0.0.1:27017/${databaseName}`;

  if (mongoose.connection.readyState === 1) {
    return;
  }

  await mongoose.connect(connectionString, {
    dbName: databaseName,
  });
}
