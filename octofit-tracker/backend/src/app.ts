import cors from 'cors';
import express from 'express';
import healthRouter from './routes/health';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/health', healthRouter);

app.get('/api', (_request, response) => {
  response.json({
    service: 'octofit-tracker-api',
    routes: ['/api/health'],
  });
});

export default app;
