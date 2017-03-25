import { TestBed, inject } from '@angular/core/testing';

import { PresetViewRequestHandlerService } from './preset-view-request-handler.service';

describe('PresetViewRequestHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PresetViewRequestHandlerService]
    });
  });

  it('should ...', inject([PresetViewRequestHandlerService], (service: PresetViewRequestHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
