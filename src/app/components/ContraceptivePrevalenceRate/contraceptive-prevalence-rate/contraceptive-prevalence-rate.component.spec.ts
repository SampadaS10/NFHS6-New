import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContraceptivePrevalenceRateComponent } from './contraceptive-prevalence-rate.component';

describe('ContraceptivePrevalenceRateComponent', () => {
  let component: ContraceptivePrevalenceRateComponent;
  let fixture: ComponentFixture<ContraceptivePrevalenceRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContraceptivePrevalenceRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContraceptivePrevalenceRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
