import { TestBed, inject } from '@angular/core/testing';

import { GlobalVariablesService } from './global-variables.service';

describe('GlobalVariablesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalVariablesService]
    });
  });

  it('should be created', inject([GlobalVariablesService], (service: GlobalVariablesService) => {
    expect(service).toBeTruthy();
  }));
});
