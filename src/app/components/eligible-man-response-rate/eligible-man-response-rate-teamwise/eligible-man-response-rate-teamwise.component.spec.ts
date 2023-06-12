import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibleManResponseRateTeamwiseComponent } from './eligible-man-response-rate-teamwise.component';

describe('EligibleManResponseRateTeamwiseComponent', () => {
  let component: EligibleManResponseRateTeamwiseComponent;
  let fixture: ComponentFixture<EligibleManResponseRateTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibleManResponseRateTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EligibleManResponseRateTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
