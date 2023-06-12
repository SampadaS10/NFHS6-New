import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensWeightHeapingSecondDecimalTeamwiseComponent } from './mens-weight-heaping-second-decimal-teamwise.component';

describe('MensWeightHeapingSecondDecimalTeamwiseComponent', () => {
  let component: MensWeightHeapingSecondDecimalTeamwiseComponent;
  let fixture: ComponentFixture<MensWeightHeapingSecondDecimalTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensWeightHeapingSecondDecimalTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensWeightHeapingSecondDecimalTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
