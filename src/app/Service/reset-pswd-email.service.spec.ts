import { TestBed } from '@angular/core/testing';

import { ResetPswdEmailService } from './reset-pswd-email.service';

describe('ResetPswdEmailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResetPswdEmailService = TestBed.get(ResetPswdEmailService);
    expect(service).toBeTruthy();
  });
});
