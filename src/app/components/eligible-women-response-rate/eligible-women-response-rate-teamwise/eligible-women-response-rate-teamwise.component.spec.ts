import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibleWomenResponseRateTeamwiseComponent } from './eligible-women-response-rate-teamwise.component';

describe('EligibleWomenResponseRateTeamwiseComponent', () => {
  let component: EligibleWomenResponseRateTeamwiseComponent;
  let fixture: ComponentFixture<EligibleWomenResponseRateTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibleWomenResponseRateTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EligibleWomenResponseRateTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
