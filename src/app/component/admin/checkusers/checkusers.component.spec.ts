import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckusersComponent } from './checkusers.component';

describe('CheckusersComponent', () => {
  let component: CheckusersComponent;
  let fixture: ComponentFixture<CheckusersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckusersComponent]
    });
    fixture = TestBed.createComponent(CheckusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
