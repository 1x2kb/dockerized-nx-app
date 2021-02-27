import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteUIComponent } from './quote-ui/quote-ui.component';
import {HttpClientModule } from '@angular/common/http'

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [QuoteUIComponent],
  exports: [QuoteUIComponent]
})
export class QuoteClientModule {}
