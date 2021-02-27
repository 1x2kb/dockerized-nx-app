import { Test } from '@nestjs/testing';
import { QuoteApiController } from './quote-api.controller';
import { QuoteApiService } from './quote-api.service';

describe('QuoteApiController', () => {
  let controller: QuoteApiController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [QuoteApiService],
      controllers: [QuoteApiController],
    }).compile();

    controller = module.get(QuoteApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
