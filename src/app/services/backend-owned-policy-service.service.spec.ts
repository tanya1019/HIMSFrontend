import { TestBed } from '@angular/core/testing';

import { BackendOwnedPolicyServiceService } from './backend-owned-policy-service.service';

describe('BackendOwnedPolicyServiceService', () => {
  let service: BackendOwnedPolicyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendOwnedPolicyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
