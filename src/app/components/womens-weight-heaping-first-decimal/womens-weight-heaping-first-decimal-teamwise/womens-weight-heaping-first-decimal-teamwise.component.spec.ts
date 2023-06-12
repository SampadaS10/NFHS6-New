import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensWeightHeapingFirstDecimalTeamwiseComponent } from './womens-weight-heaping-first-decimal-teamwise.component';

describe('WomensWeightHeapingFirstDecimalTeamwiseComponent', () => {
  let component: WomensWeightHeapingFirstDecimalTeamwiseComponent;
  let fixture: ComponentFixture<WomensWeightHeapingFirstDecimalTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensWeightHeapingFirstDecimalTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomensWeightHeapingFirstDecimalTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
