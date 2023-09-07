import { TestBed } from '@angular/core/testing';

import { BackendPropertyService } from './backend-property';

describe('BackendPropertyService', () => {
  let service: BackendPropertyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendPropertyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
