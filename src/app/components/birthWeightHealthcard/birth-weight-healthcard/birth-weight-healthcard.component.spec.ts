import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthWeightHealthcardComponent } from './birth-weight-healthcard.component';

describe('BirthWeightHealthcardComponent', () => {
  let component: BirthWeightHealthcardComponent;
  let fixture: ComponentFixture<BirthWeightHealthcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthWeightHealthcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthWeightHealthcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
