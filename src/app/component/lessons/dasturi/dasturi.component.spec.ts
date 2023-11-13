import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasturiComponent } from './dasturi.component';

describe('DasturiComponent', () => {
  let component: DasturiComponent;
  let fixture: ComponentFixture<DasturiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DasturiComponent]
    });
    fixture = TestBed.createComponent(DasturiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
