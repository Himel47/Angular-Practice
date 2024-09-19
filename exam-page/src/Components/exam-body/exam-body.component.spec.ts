import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamBodyComponent } from './exam-body.component';

describe('ExamBodyComponent', () => {
  let component: ExamBodyComponent;
  let fixture: ComponentFixture<ExamBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
