import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensHeightHeapingFirstDecimalMemberwiseComponent } from './mens-height-heaping-first-decimal-memberwise.component';

describe('MensHeightHeapingFirstDecimalMemberwiseComponent', () => {
  let component: MensHeightHeapingFirstDecimalMemberwiseComponent;
  let fixture: ComponentFixture<MensHeightHeapingFirstDecimalMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensHeightHeapingFirstDecimalMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensHeightHeapingFirstDecimalMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
