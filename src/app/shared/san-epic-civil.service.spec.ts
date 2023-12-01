import { TestBed } from '@angular/core/testing';

import { SanEpicCivilService } from './san-epic-civil.service';

describe('SanEpicCivilService', () => {
  let service: SanEpicCivilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SanEpicCivilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
