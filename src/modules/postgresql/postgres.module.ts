import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // Leftover forRootAsync, could be rewritten to use config service validating environment vars values.
    TypeOrmModule.forRootAsync({
      useFactory: (): TypeOrmModuleOptions => {
        const {
          POSTGRES_HOST,
          POSTGRES_PORT,
          POSTGRES_USER,
          POSTGRES_PASSWORD,
          POSTGRES_DB,
        } = process.env;

        const cfg: TypeOrmModuleOptions = {
          type: 'postgres',
          host: POSTGRES_HOST,
          port: +POSTGRES_PORT,
          username: POSTGRES_USER,
          password: POSTGRES_PASSWORD,
          database: POSTGRES_DB,
          entities: ['dist/entities/*.entity.js'],
          synchronize: true,
        };

        return cfg;
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class PostgresModule {}
