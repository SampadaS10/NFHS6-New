import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrensWeightHeapingFirstDecimalMemberwiseComponent } from './childrens-weight-heaping-first-decimal-memberwise.component';

describe('ChildrensWeightHeapingFirstDecimalMemberwiseComponent', () => {
  let component: ChildrensWeightHeapingFirstDecimalMemberwiseComponent;
  let fixture: ComponentFixture<ChildrensWeightHeapingFirstDecimalMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrensWeightHeapingFirstDecimalMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrensWeightHeapingFirstDecimalMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
