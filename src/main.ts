import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import * as fastifyCors from 'fastify-cors';

import { AppModule } from './app.module';
import { useContainer } from 'class-validator';

async function bootstrap() {
  process.on('warning', (err) => console.log(err.message, AppModule.name));

  process.on('uncaughtException', (err) => {
    console.log(err.message, AppModule.name);
  });

  const PORT = process.env.PORT ? +process.env.PORT : 3000;

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  await app.listen(PORT);
}
bootstrap();
