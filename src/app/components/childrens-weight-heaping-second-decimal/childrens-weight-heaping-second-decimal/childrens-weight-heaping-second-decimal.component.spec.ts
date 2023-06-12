import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrensWeightHeapingSecondDecimalComponent } from './childrens-weight-heaping-second-decimal.component';

describe('ChildrensWeightHeapingSecondDecimalComponent', () => {
  let component: ChildrensWeightHeapingSecondDecimalComponent;
  let fixture: ComponentFixture<ChildrensWeightHeapingSecondDecimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrensWeightHeapingSecondDecimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrensWeightHeapingSecondDecimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
