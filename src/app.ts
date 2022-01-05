import express, { Express } from 'express';

import authRouter from './authentication/controller';

const app: Express = express();

app.use('/auth', authRouter);

app.use((req, res) => {
  res.status(404).json({
    message: 'Not Found',
    statusCode: 404,
  });
});

export default app;
