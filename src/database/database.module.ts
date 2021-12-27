import { DatabaseConfig } from './database.config';
import { Module } from '@nestjs/common';
import { ConfigService } from 'nestjs-config';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserModel } from '../models';
import { UserRepository } from '../repositories/user.repository';

export const Models = [UserModel];

const Repositories = [UserRepository];

export const TypegooseConfig = TypegooseModule.forRootAsync({
  useFactory: (config: ConfigService) =>
    config.get('database') as DatabaseConfig,
  inject: [ConfigService],
});

export const TypegooseModels = TypegooseModule.forFeature(Models);

@Module({
  imports: [TypegooseConfig, TypegooseModels],
  providers: [...Repositories],
  exports: [...Repositories, TypegooseConfig, TypegooseModels],
})
export class DatabaseModule {}
