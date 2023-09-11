import { TestBed } from '@angular/core/testing';

import { BackendTransactionService } from './backend-transaction.service';

describe('BackendTransactionService', () => {
  let service: BackendTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
