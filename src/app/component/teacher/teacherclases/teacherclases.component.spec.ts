import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherclasesComponent } from './teacherclases.component';

describe('TeacherclasesComponent', () => {
  let component: TeacherclasesComponent;
  let fixture: ComponentFixture<TeacherclasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherclasesComponent]
    });
    fixture = TestBed.createComponent(TeacherclasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
