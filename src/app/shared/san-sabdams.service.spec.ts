import { TestBed } from '@angular/core/testing';

import { SanSabdamsService } from './san-sabdams.service';

describe('SanSabdamsService', () => {
  let service: SanSabdamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SanSabdamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
