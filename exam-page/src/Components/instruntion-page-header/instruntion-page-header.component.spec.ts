import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruntionPageHeaderComponent } from './instruntion-page-header.component';

describe('InstruntionPageHeaderComponent', () => {
  let component: InstruntionPageHeaderComponent;
  let fixture: ComponentFixture<InstruntionPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstruntionPageHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstruntionPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
