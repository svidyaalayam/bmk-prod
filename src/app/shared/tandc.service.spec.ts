import { TestBed } from '@angular/core/testing';

import { TandcService } from './tandc.service';

describe('TandcService', () => {
  let service: TandcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TandcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
