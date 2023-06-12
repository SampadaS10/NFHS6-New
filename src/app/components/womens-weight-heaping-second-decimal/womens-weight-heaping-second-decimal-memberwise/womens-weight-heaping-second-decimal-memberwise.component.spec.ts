import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensWeightHeapingSecondDecimalMemberwiseComponent } from './womens-weight-heaping-second-decimal-memberwise.component';

describe('WomensWeightHeapingSecondDecimalMemberwiseComponent', () => {
  let component: WomensWeightHeapingSecondDecimalMemberwiseComponent;
  let fixture: ComponentFixture<WomensWeightHeapingSecondDecimalMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensWeightHeapingSecondDecimalMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomensWeightHeapingSecondDecimalMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
