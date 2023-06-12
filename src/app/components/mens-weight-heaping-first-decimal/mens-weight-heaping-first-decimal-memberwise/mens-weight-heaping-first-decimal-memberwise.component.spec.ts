import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensWeightHeapingFirstDecimalMemberwiseComponent } from './mens-weight-heaping-first-decimal-memberwise.component';

describe('MensWeightHeapingFirstDecimalMemberwiseComponent', () => {
  let component: MensWeightHeapingFirstDecimalMemberwiseComponent;
  let fixture: ComponentFixture<MensWeightHeapingFirstDecimalMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensWeightHeapingFirstDecimalMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensWeightHeapingFirstDecimalMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
