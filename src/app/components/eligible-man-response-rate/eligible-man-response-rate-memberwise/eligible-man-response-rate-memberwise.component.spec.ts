import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibleManResponseRateMemberwiseComponent } from './eligible-man-response-rate-memberwise.component';

describe('EligibleManResponseRateMemberwiseComponent', () => {
  let component: EligibleManResponseRateMemberwiseComponent;
  let fixture: ComponentFixture<EligibleManResponseRateMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibleManResponseRateMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EligibleManResponseRateMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
