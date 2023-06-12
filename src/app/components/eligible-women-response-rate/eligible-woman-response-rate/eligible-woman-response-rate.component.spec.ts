import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibleWomanResponseRateComponent } from './eligible-woman-response-rate.component';

describe('EligibleWomanResponseRateComponent', () => {
  let component: EligibleWomanResponseRateComponent;
  let fixture: ComponentFixture<EligibleWomanResponseRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibleWomanResponseRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EligibleWomanResponseRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
