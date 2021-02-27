import { Controller, Get, Header } from '@nestjs/common';
import { Quote } from './quote.type';
import { Observable } from 'rxjs';
import { QuoteApiService } from './quote-api.service';

@Controller('quote')
export class QuoteApiController {
  constructor(private quoteApiService: QuoteApiService) {}

  @Get('qod')
  @Header('Access-Controll-Allow-Origin', 'http://localhost:4200')
  quoteOfTheDay(): Observable<Quote> {
    return this.quoteApiService.quoteOfDay();
  }
}
