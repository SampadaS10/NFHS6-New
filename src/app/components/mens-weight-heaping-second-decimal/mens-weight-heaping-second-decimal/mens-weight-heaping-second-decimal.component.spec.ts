import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensWeightHeapingSecondDecimalComponent } from './mens-weight-heaping-second-decimal.component';

describe('MensWeightHeapingSecondDecimalComponent', () => {
  let component: MensWeightHeapingSecondDecimalComponent;
  let fixture: ComponentFixture<MensWeightHeapingSecondDecimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensWeightHeapingSecondDecimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensWeightHeapingSecondDecimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
