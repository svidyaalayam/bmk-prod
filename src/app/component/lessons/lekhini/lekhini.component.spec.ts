import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LekhiniComponent } from './lekhini.component';

describe('LekhiniComponent', () => {
  let component: LekhiniComponent;
  let fixture: ComponentFixture<LekhiniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LekhiniComponent]
    });
    fixture = TestBed.createComponent(LekhiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
