import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensHeightHeapingFirstDecimalComponent } from './womens-height-heaping-first-decimal.component';

describe('WomensHeightHeapingFirstDecimalComponent', () => {
  let component: WomensHeightHeapingFirstDecimalComponent;
  let fixture: ComponentFixture<WomensHeightHeapingFirstDecimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensHeightHeapingFirstDecimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomensHeightHeapingFirstDecimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
