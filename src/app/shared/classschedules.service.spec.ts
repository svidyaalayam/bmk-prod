import { TestBed } from '@angular/core/testing';

import { ClassschedulesService } from './classschedules.service';

describe('ClassschedulesService', () => {
  let service: ClassschedulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassschedulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
