import { TestBed } from '@angular/core/testing';

import { EngToTelService } from './eng-to-tel.service';

describe('EngToTelService', () => {
  let service: EngToTelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EngToTelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
