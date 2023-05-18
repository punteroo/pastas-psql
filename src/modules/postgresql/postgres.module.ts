import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService): TypeOrmModuleOptions => {
        const host = config.get<string>('POSTGRES_HOST'),
          port = config.get<string>('POSTGRES_PORT'),
          user = config.get<string>('POSTGRES_USER'),
          pass = config.get<string>('POSTGRES_PASSWORD'),
          db = config.get<string>('POSTGRES_DB');

        return {
          type: 'postgres',
          host,
          port: +port,
          username: user,
          password: pass,
          database: db,
        };
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class PostgresModule {}
