import { TestBed } from '@angular/core/testing';

import { DemotaskService } from './demotask.service';

describe('DemotaskService', () => {
  let service: DemotaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemotaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
