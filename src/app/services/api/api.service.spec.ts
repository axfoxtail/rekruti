import { TestBed, inject } from '@angular/core/testing';

import { RekrutiApiService } from './api.service';

describe('RekrutiApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RekrutiApiService]
    });
  });

  it('should be created', inject([RekrutiApiService], (service: RekrutiApiService) => {
    expect(service).toBeTruthy();
  }));
});
