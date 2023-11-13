import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksheetsComponent } from './worksheets.component';

describe('WorksheetsComponent', () => {
  let component: WorksheetsComponent;
  let fixture: ComponentFixture<WorksheetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorksheetsComponent]
    });
    fixture = TestBed.createComponent(WorksheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
