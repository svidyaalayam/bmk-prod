import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegstudentComponent } from './regstudent.component';

describe('RegstudentComponent', () => {
  let component: RegstudentComponent;
  let fixture: ComponentFixture<RegstudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegstudentComponent]
    });
    fixture = TestBed.createComponent(RegstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
