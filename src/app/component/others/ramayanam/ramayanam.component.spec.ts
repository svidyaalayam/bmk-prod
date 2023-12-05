import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamayanamComponent } from './ramayanam.component';

describe('RamayanamComponent', () => {
  let component: RamayanamComponent;
  let fixture: ComponentFixture<RamayanamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RamayanamComponent]
    });
    fixture = TestBed.createComponent(RamayanamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
