import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensHeightHeapingFirstDecimalComponent } from './mens-height-heaping-first-decimal.component';

describe('MensHeightHeapingFirstDecimalComponent', () => {
  let component: MensHeightHeapingFirstDecimalComponent;
  let fixture: ComponentFixture<MensHeightHeapingFirstDecimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensHeightHeapingFirstDecimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensHeightHeapingFirstDecimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
