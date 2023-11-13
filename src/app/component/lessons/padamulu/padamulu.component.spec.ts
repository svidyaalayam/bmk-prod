import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadamuluComponent } from './padamulu.component';

describe('PadamuluComponent', () => {
  let component: PadamuluComponent;
  let fixture: ComponentFixture<PadamuluComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PadamuluComponent]
    });
    fixture = TestBed.createComponent(PadamuluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
