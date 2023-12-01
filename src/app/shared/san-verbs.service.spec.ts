import { TestBed } from '@angular/core/testing';

import { SanVerbsService } from './san-verbs.service';

describe('SanVerbsService', () => {
  let service: SanVerbsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SanVerbsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
