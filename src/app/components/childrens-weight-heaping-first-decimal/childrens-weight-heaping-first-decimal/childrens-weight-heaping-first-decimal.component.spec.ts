import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrensWeightHeapingFirstDecimalComponent } from './childrens-weight-heaping-first-decimal.component';

describe('ChildrensWeightHeapingFirstDecimalComponent', () => {
  let component: ChildrensWeightHeapingFirstDecimalComponent;
  let fixture: ComponentFixture<ChildrensWeightHeapingFirstDecimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrensWeightHeapingFirstDecimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrensWeightHeapingFirstDecimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
