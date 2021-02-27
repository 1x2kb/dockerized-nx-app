import { Controller, Get } from '@nestjs/common';
import { Quote } from './quote.type';
import { Observable } from 'rxjs';
import { QuoteApiService } from './quote-api.service';

@Controller('quote')
export class QuoteApiController {
  constructor(private quoteApiService: QuoteApiService) {}

  @Get('qod')
  quoteOfTheDay(): Observable<Quote> {
    return this.quoteApiService.quoteOfDay();
  }
}
