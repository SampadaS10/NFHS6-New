import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensWeightHeapingFirstDecimalComponent } from './mens-weight-heaping-first-decimal.component';

describe('MensWeightHeapingFirstDecimalComponent', () => {
  let component: MensWeightHeapingFirstDecimalComponent;
  let fixture: ComponentFixture<MensWeightHeapingFirstDecimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensWeightHeapingFirstDecimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensWeightHeapingFirstDecimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
