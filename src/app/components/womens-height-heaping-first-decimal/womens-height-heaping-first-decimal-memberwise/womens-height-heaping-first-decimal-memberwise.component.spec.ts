import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensHeightHeapingFirstDecimalMemberwiseComponent } from './womens-height-heaping-first-decimal-memberwise.component';

describe('WomensHeightHeapingFirstDecimalMemberwiseComponent', () => {
  let component: WomensHeightHeapingFirstDecimalMemberwiseComponent;
  let fixture: ComponentFixture<WomensHeightHeapingFirstDecimalMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensHeightHeapingFirstDecimalMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomensHeightHeapingFirstDecimalMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
