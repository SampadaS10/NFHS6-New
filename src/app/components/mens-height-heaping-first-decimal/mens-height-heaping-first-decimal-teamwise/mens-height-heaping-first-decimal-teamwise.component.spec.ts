import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensHeightHeapingFirstDecimalTeamwiseComponent } from './mens-height-heaping-first-decimal-teamwise.component';

describe('MensHeightHeapingFirstDecimalTeamwiseComponent', () => {
  let component: MensHeightHeapingFirstDecimalTeamwiseComponent;
  let fixture: ComponentFixture<MensHeightHeapingFirstDecimalTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensHeightHeapingFirstDecimalTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensHeightHeapingFirstDecimalTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
