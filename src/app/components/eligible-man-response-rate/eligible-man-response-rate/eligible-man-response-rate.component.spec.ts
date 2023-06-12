import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibleManResponseRateComponent } from './eligible-man-response-rate.component';

describe('EligibleManResponseRateComponent', () => {
  let component: EligibleManResponseRateComponent;
  let fixture: ComponentFixture<EligibleManResponseRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibleManResponseRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EligibleManResponseRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
