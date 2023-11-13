import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammerComponent } from './grammer.component';

describe('GrammerComponent', () => {
  let component: GrammerComponent;
  let fixture: ComponentFixture<GrammerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrammerComponent]
    });
    fixture = TestBed.createComponent(GrammerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
