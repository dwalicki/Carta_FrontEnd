import { TestBed, inject } from '@angular/core/testing';

import { InvestmentServiceService } from './investment-service.service';

describe('InvestmentServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvestmentServiceService]
    });
  });

  it('should be created', inject([InvestmentServiceService], (service: InvestmentServiceService) => {
    expect(service).toBeTruthy();
  }));
});
