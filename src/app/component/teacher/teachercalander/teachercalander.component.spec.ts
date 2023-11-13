import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachercalanderComponent } from './teachercalander.component';

describe('TeachercalanderComponent', () => {
  let component: TeachercalanderComponent;
  let fixture: ComponentFixture<TeachercalanderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeachercalanderComponent]
    });
    fixture = TestBed.createComponent(TeachercalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
