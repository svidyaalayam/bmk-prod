import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbsComponent } from './verbs.component';

describe('VerbsComponent', () => {
  let component: VerbsComponent;
  let fixture: ComponentFixture<VerbsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerbsComponent]
    });
    fixture = TestBed.createComponent(VerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
