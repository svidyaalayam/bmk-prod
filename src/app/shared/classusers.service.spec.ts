import { TestBed } from '@angular/core/testing';

import { ClassusersService } from './classusers.service';

describe('ClassusersService', () => {
  let service: ClassusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
