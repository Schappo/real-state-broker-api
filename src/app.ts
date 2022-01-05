import express, { Express } from 'express';
import bodyParser from 'body-parser'
import {
  authRouter,
  userRouter
} from './shared/routes';

const app: Express = express();

app.use(bodyParser.json());

app.use('/user', userRouter.default);
app.use('/auth', authRouter.default);

app.use((req, res) => {
  res.status(404).json({
    message: 'Not Found',
    statusCode: 404,
  });
});

export default app;
