import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentclasesComponent } from './studentclases.component';

describe('StudentclasesComponent', () => {
  let component: StudentclasesComponent;
  let fixture: ComponentFixture<StudentclasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentclasesComponent]
    });
    fixture = TestBed.createComponent(StudentclasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
