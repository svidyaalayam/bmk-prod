import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegteacherComponent } from './regteacher.component';

describe('RegteacherComponent', () => {
  let component: RegteacherComponent;
  let fixture: ComponentFixture<RegteacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegteacherComponent]
    });
    fixture = TestBed.createComponent(RegteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
