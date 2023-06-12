import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContraceptivePrevalenceRateMemberwiseComponent } from './contraceptive-prevalence-rate-memberwise.component';

describe('ContraceptivePrevalenceRateMemberwiseComponent', () => {
  let component: ContraceptivePrevalenceRateMemberwiseComponent;
  let fixture: ComponentFixture<ContraceptivePrevalenceRateMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContraceptivePrevalenceRateMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContraceptivePrevalenceRateMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
