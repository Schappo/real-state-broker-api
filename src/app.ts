import express, { Express } from 'express';

import authRouter from './modules/authentication/controller';
import userRouter from './modules/user/controller';

const app: Express = express();

app.use('/auth', authRouter);
app.use('/user', userRouter);

app.use((req, res) => {
  res.status(404).json({
    message: 'Not Found',
    statusCode: 404,
  });
});

export default app;
