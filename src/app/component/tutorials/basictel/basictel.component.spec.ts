import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasictelComponent } from './basictel.component';

describe('BasictelComponent', () => {
  let component: BasictelComponent;
  let fixture: ComponentFixture<BasictelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasictelComponent]
    });
    fixture = TestBed.createComponent(BasictelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
