import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensWeightHeapingFirstDecimalComponent } from './womens-weight-heaping-first-decimal.component';

describe('WomensWeightHeapingFirstDecimalComponent', () => {
  let component: WomensWeightHeapingFirstDecimalComponent;
  let fixture: ComponentFixture<WomensWeightHeapingFirstDecimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensWeightHeapingFirstDecimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomensWeightHeapingFirstDecimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
