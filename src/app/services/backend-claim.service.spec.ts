import { TestBed } from '@angular/core/testing';

import { BackendClaimService } from './backend-claim.service';

describe('BackendClaimService', () => {
  let service: BackendClaimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendClaimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
