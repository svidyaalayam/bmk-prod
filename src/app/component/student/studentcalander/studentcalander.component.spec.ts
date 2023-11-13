import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcalanderComponent } from './studentcalander.component';

describe('StudentcalanderComponent', () => {
  let component: StudentcalanderComponent;
  let fixture: ComponentFixture<StudentcalanderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentcalanderComponent]
    });
    fixture = TestBed.createComponent(StudentcalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
