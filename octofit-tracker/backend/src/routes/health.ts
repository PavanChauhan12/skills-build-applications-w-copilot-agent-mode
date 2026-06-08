import { Router } from 'express';
import { getBaseUrl } from '../config/base-url';

const healthRouter = Router();

healthRouter.get('/', (_request, response) => {
  response.json({
    service: 'octofit-tracker-api',
    status: 'ok',
    baseUrl: getBaseUrl(),
  });
});

export default healthRouter;
