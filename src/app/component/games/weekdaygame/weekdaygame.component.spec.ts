import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekdaygameComponent } from './weekdaygame.component';

describe('WeekdaygameComponent', () => {
  let component: WeekdaygameComponent;
  let fixture: ComponentFixture<WeekdaygameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeekdaygameComponent]
    });
    fixture = TestBed.createComponent(WeekdaygameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
