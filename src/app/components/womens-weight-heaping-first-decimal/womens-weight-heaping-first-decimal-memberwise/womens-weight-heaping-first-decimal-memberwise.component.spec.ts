import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensWeightHeapingFirstDecimalMemberwiseComponent } from './womens-weight-heaping-first-decimal-memberwise.component';

describe('WomensWeightHeapingFirstDecimalMemberwiseComponent', () => {
  let component: WomensWeightHeapingFirstDecimalMemberwiseComponent;
  let fixture: ComponentFixture<WomensWeightHeapingFirstDecimalMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensWeightHeapingFirstDecimalMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomensWeightHeapingFirstDecimalMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
