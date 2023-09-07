import { TestBed } from '@angular/core/testing';

import { BackendPolicyService } from './backend-policy.service';

describe('BackendPolicyService', () => {
  let service: BackendPolicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendPolicyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
