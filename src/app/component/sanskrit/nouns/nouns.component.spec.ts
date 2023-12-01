import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NounsComponent } from './nouns.component';

describe('NounsComponent', () => {
  let component: NounsComponent;
  let fixture: ComponentFixture<NounsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NounsComponent]
    });
    fixture = TestBed.createComponent(NounsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
