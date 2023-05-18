import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class PostgresService {
  readonly #logger = new Logger(PostgresService.name);

  constructor() {}
}
