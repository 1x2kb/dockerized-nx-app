import { QuoteApiModule } from '@dockerized-test/quote-api';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [QuoteApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
