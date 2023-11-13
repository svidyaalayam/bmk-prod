import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepreCoordsComponent } from './prepre-coords.component';

describe('PrepreCoordsComponent', () => {
  let component: PrepreCoordsComponent;
  let fixture: ComponentFixture<PrepreCoordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrepreCoordsComponent]
    });
    fixture = TestBed.createComponent(PrepreCoordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
