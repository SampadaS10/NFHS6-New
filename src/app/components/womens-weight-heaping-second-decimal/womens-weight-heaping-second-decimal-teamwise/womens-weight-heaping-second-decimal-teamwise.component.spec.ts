import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensWeightHeapingSecondDecimalTeamwiseComponent } from './womens-weight-heaping-second-decimal-teamwise.component';

describe('WomensWeightHeapingSecondDecimalTeamwiseComponent', () => {
  let component: WomensWeightHeapingSecondDecimalTeamwiseComponent;
  let fixture: ComponentFixture<WomensWeightHeapingSecondDecimalTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensWeightHeapingSecondDecimalTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomensWeightHeapingSecondDecimalTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
