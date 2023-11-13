import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamefruitsComponent } from './gamefruits.component';

describe('GamefruitsComponent', () => {
  let component: GamefruitsComponent;
  let fixture: ComponentFixture<GamefruitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamefruitsComponent]
    });
    fixture = TestBed.createComponent(GamefruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
