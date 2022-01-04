import dotenv from 'dotenv';

import app from './app';

dotenv.config();

const bootstrap = async (): Promise<void> => {
  const { PORT } = process.env;

  app.listen(PORT, () => console.log(`listem on ${PORT}`));
};

process.on('uncaughtException', (error) => {
  console.error(error);
  process.exit(1);
});

bootstrap();
