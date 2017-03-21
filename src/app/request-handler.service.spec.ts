import { TestBed, inject } from '@angular/core/testing';

import { RequestHandlerService } from './request-handler.service';

describe('RequestHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestHandlerService]
    });
  });

  it('should ...', inject([RequestHandlerService], (service: RequestHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
