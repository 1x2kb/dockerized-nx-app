import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quote } from '@dockerized-test/quote-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(private httpClient: HttpClient) {}

  getQuote(): Observable<Quote> {
    return this.httpClient.get<Quote>('http://localhost:3333/api/quote/qod');
  }
}
