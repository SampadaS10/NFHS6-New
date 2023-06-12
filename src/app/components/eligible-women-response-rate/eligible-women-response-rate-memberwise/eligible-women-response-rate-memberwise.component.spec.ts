import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibleWomenResponseRateMemberwiseComponent } from './eligible-women-response-rate-memberwise.component';

describe('EligibleWomenResponseRateMemberwiseComponent', () => {
  let component: EligibleWomenResponseRateMemberwiseComponent;
  let fixture: ComponentFixture<EligibleWomenResponseRateMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibleWomenResponseRateMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EligibleWomenResponseRateMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
