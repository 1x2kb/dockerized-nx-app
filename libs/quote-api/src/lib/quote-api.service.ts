import { HttpService, Injectable } from '@nestjs/common';
import { Quote } from './quote.type';
import { Observable, of } from 'rxjs';
import { catchError, map, pluck, tap } from 'rxjs/operators';

@Injectable()
export class QuoteApiService {
  constructor(private httpService: HttpService) {}

  quoteOfDay(): Observable<Quote> {
    const url = 'https://quotes.rest/qod';
    const options = {
      headers: { 'X-TheySaidSo-Api-Secret': 'qwertyzxcvasdf' },
    };

    return this.httpService.get(url, options).pipe(
      pluck('data', 'contents', 'quotes'),
      map((quotes) => {
        const quoteOfDayResponse = quotes[0];
        return {
          quote: quoteOfDayResponse.quote,
          author: quoteOfDayResponse.author,
        };
      }),
      catchError(error => {
        return of(null);
      })
    );
  }
}
