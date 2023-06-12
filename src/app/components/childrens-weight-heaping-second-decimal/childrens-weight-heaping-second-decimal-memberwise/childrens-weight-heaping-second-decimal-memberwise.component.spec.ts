import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrensWeightHeapingSecondDecimalMemberwiseComponent } from './childrens-weight-heaping-second-decimal-memberwise.component';

describe('ChildrensWeightHeapingSecondDecimalMemberwiseComponent', () => {
  let component: ChildrensWeightHeapingSecondDecimalMemberwiseComponent;
  let fixture: ComponentFixture<ChildrensWeightHeapingSecondDecimalMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrensWeightHeapingSecondDecimalMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrensWeightHeapingSecondDecimalMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
