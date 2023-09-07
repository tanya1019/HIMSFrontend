import { TestBed } from '@angular/core/testing';

import { BackendRegisterUserService } from './backend-register-user.service';

describe('BackendRegisterUserService', () => {
  let service: BackendRegisterUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendRegisterUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
