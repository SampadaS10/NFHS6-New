import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrensWeightHeapingSecondDecimalTeamwiseComponent } from './childrens-weight-heaping-second-decimal-teamwise.component';

describe('ChildrensWeightHeapingSecondDecimalTeamwiseComponent', () => {
  let component: ChildrensWeightHeapingSecondDecimalTeamwiseComponent;
  let fixture: ComponentFixture<ChildrensWeightHeapingSecondDecimalTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrensWeightHeapingSecondDecimalTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrensWeightHeapingSecondDecimalTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
