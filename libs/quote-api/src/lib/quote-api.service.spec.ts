import { Test } from '@nestjs/testing';
import { QuoteApiService } from './quote-api.service';

describe('QuoteApiService', () => {
  let service: QuoteApiService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [QuoteApiService],
    }).compile();

    service = module.get(QuoteApiService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
