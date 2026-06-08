import app from './app';
import { connectDatabase } from './config/database';
import { getBaseUrl } from './config/base-url';

const port = Number(process.env.PORT ?? 8000);

async function startServer(): Promise<void> {
  await connectDatabase();

  app.listen(port, () => {
    console.log(`OctoFit API running at ${getBaseUrl(port)}`);
  });
}

startServer().catch((error: unknown) => {
  console.error('Failed to start the OctoFit API', error);
  process.exitCode = 1;
});
