import { TestBed } from '@angular/core/testing';

import { BackendFeatureService } from './backend-feature.service';

describe('BackendFeatureService', () => {
  let service: BackendFeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendFeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
