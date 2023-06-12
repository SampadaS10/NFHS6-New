import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensWeightHeapingFirstDecimalTeamwiseComponent } from './mens-weight-heaping-first-decimal-teamwise.component';

describe('MensWeightHeapingFirstDecimalTeamwiseComponent', () => {
  let component: MensWeightHeapingFirstDecimalTeamwiseComponent;
  let fixture: ComponentFixture<MensWeightHeapingFirstDecimalTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensWeightHeapingFirstDecimalTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensWeightHeapingFirstDecimalTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
