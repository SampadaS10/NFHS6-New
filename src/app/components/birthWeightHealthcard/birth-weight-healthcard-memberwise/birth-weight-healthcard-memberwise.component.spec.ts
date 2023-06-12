import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthWeightHealthcardMemberwiseComponent } from './birth-weight-healthcard-memberwise.component';

describe('BirthWeightHealthcardMemberwiseComponent', () => {
  let component: BirthWeightHealthcardMemberwiseComponent;
  let fixture: ComponentFixture<BirthWeightHealthcardMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthWeightHealthcardMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthWeightHealthcardMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
