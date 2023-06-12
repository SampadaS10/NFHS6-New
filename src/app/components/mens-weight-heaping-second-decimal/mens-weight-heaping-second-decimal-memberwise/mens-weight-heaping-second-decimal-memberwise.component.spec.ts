import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensWeightHeapingSecondDecimalMemberwiseComponent } from './mens-weight-heaping-second-decimal-memberwise.component';

describe('MensWeightHeapingSecondDecimalMemberwiseComponent', () => {
  let component: MensWeightHeapingSecondDecimalMemberwiseComponent;
  let fixture: ComponentFixture<MensWeightHeapingSecondDecimalMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensWeightHeapingSecondDecimalMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensWeightHeapingSecondDecimalMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
