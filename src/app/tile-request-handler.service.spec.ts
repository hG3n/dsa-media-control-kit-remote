import { TestBed, inject } from '@angular/core/testing';

import { TileRequestHandlerService } from './tile-request-handler.service';

describe('TileRequestHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TileRequestHandlerService]
    });
  });

  it('should ...', inject([TileRequestHandlerService], (service: TileRequestHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
