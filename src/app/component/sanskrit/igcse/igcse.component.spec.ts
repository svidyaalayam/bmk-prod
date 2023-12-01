import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgcseComponent } from './igcse.component';

describe('IgcseComponent', () => {
  let component: IgcseComponent;
  let fixture: ComponentFixture<IgcseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IgcseComponent]
    });
    fixture = TestBed.createComponent(IgcseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
