import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabdamGameComponent } from './sabdam-game.component';

describe('SabdamGameComponent', () => {
  let component: SabdamGameComponent;
  let fixture: ComponentFixture<SabdamGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SabdamGameComponent]
    });
    fixture = TestBed.createComponent(SabdamGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
