import { TestBed, inject } from '@angular/core/testing';

import { AuthSecurityService } from './auth-security.service';

describe('AuthSecurityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthSecurityService]
    });
  });

  it('should be created', inject([AuthSecurityService], (service: AuthSecurityService) => {
    expect(service).toBeTruthy();
  }));
});
