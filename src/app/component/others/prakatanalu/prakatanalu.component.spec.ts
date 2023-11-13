import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrakatanaluComponent } from './prakatanalu.component';

describe('PrakatanaluComponent', () => {
  let component: PrakatanaluComponent;
  let fixture: ComponentFixture<PrakatanaluComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrakatanaluComponent]
    });
    fixture = TestBed.createComponent(PrakatanaluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
