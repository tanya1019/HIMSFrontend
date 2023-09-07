import { TestBed } from '@angular/core/testing';

import { BackendUserLoginService } from './backend-user-login.service';

describe('BackendUserLoginService', () => {
  let service: BackendUserLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendUserLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
