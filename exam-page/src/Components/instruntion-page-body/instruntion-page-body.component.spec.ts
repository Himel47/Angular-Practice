import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruntionPageBodyComponent } from './instruntion-page-body.component';

describe('InstruntionPageBodyComponent', () => {
  let component: InstruntionPageBodyComponent;
  let fixture: ComponentFixture<InstruntionPageBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstruntionPageBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstruntionPageBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
