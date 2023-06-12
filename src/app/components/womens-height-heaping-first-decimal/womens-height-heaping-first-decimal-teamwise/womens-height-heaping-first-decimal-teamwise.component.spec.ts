import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensHeightHeapingFirstDecimalTeamwiseComponent } from './womens-height-heaping-first-decimal-teamwise.component';

describe('WomensHeightHeapingFirstDecimalTeamwiseComponent', () => {
  let component: WomensHeightHeapingFirstDecimalTeamwiseComponent;
  let fixture: ComponentFixture<WomensHeightHeapingFirstDecimalTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensHeightHeapingFirstDecimalTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomensHeightHeapingFirstDecimalTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
