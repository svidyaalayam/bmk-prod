import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenthomeworkComponent } from './studenthomework.component';

describe('StudenthomeworkComponent', () => {
  let component: StudenthomeworkComponent;
  let fixture: ComponentFixture<StudenthomeworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudenthomeworkComponent]
    });
    fixture = TestBed.createComponent(StudenthomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
