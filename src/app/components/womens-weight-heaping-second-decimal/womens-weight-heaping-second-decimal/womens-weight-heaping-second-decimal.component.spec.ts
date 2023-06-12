import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensWeightHeapingSecondDecimalComponent } from './womens-weight-heaping-second-decimal.component';

describe('WomensWeightHeapingSecondDecimalComponent', () => {
  let component: WomensWeightHeapingSecondDecimalComponent;
  let fixture: ComponentFixture<WomensWeightHeapingSecondDecimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensWeightHeapingSecondDecimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomensWeightHeapingSecondDecimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
