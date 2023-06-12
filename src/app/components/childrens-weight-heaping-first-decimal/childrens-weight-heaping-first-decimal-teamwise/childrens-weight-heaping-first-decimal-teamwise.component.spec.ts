import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrensWeightHeapingFirstDecimalTeamwiseComponent } from './childrens-weight-heaping-first-decimal-teamwise.component';

describe('ChildrensWeightHeapingFirstDecimalTeamwiseComponent', () => {
  let component: ChildrensWeightHeapingFirstDecimalTeamwiseComponent;
  let fixture: ComponentFixture<ChildrensWeightHeapingFirstDecimalTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrensWeightHeapingFirstDecimalTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrensWeightHeapingFirstDecimalTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
