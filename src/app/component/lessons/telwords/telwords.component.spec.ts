import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelwordsComponent } from './telwords.component';

describe('TelwordsComponent', () => {
  let component: TelwordsComponent;
  let fixture: ComponentFixture<TelwordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelwordsComponent]
    });
    fixture = TestBed.createComponent(TelwordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
