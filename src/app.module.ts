import { Module } from '@nestjs/common';
import { PostgresModule } from './modules/postgresql/postgres.module';

@Module({
  imports: [PostgresModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
