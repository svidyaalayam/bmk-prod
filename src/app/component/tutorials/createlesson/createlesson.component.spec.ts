import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatelessonComponent } from './createlesson.component';

describe('CreatelessonComponent', () => {
  let component: CreatelessonComponent;
  let fixture: ComponentFixture<CreatelessonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatelessonComponent]
    });
    fixture = TestBed.createComponent(CreatelessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
