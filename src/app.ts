import express, { Express } from 'express';

import recipesRouter from './recipes/controller';

const app: Express = express();

app.use('/recipes', recipesRouter);

app.use((req, res) => {
  res.status(404).json({
    message: 'Not Found',
    statusCode: 404,
  });
});

export default app;
