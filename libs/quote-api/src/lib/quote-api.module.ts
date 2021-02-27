import { HttpModule, Module } from '@nestjs/common';
import { QuoteApiController } from './quote-api.controller';
import { QuoteApiService } from './quote-api.service';

@Module({
  imports: [HttpModule],
  controllers: [QuoteApiController],
  providers: [QuoteApiService],
  exports: [QuoteApiService],
})
export class QuoteApiModule {}
