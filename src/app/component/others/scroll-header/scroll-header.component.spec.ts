import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollHeaderComponent } from './scroll-header.component';

describe('ScrollHeaderComponent', () => {
  let component: ScrollHeaderComponent;
  let fixture: ComponentFixture<ScrollHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollHeaderComponent]
    });
    fixture = TestBed.createComponent(ScrollHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
