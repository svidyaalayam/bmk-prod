import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindlettersComponent } from './findletters.component';

describe('FindlettersComponent', () => {
  let component: FindlettersComponent;
  let fixture: ComponentFixture<FindlettersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindlettersComponent]
    });
    fixture = TestBed.createComponent(FindlettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
