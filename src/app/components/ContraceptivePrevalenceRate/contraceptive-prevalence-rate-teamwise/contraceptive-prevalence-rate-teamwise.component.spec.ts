import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContraceptivePrevalenceRateTeamwiseComponent } from './contraceptive-prevalence-rate-teamwise.component';

describe('ContraceptivePrevalenceRateTeamwiseComponent', () => {
  let component: ContraceptivePrevalenceRateTeamwiseComponent;
  let fixture: ComponentFixture<ContraceptivePrevalenceRateTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContraceptivePrevalenceRateTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContraceptivePrevalenceRateTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
