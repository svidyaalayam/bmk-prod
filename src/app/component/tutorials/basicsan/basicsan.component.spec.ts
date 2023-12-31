import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsanComponent } from './basicsan.component';

describe('BasicsanComponent', () => {
  let component: BasicsanComponent;
  let fixture: ComponentFixture<BasicsanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicsanComponent]
    });
    fixture = TestBed.createComponent(BasicsanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
