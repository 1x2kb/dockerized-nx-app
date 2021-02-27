import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteUIComponent } from './quote-ui.component';

describe('QuoteUIComponent', () => {
  let component: QuoteUIComponent;
  let fixture: ComponentFixture<QuoteUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
