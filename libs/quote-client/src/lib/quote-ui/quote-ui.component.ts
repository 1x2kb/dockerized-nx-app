import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { QuoteService } from '../quote.service';
import { Quote } from '@dockerized-test/quote-api';

@Component({
  selector: 'dockerized-test-quote-ui',
  templateUrl: './quote-ui.component.html',
  styleUrls: ['./quote-ui.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class QuoteUIComponent implements OnInit {
  quote$: Observable<Quote>;

  constructor(private quoteService: QuoteService) {
    this.quote$ = quoteService.getQuote();
  }

  ngOnInit(): void {
  }

}
