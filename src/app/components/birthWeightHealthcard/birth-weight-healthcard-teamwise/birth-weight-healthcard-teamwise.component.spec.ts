import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthWeightHealthcardTeamwiseComponent } from './birth-weight-healthcard-teamwise.component';

describe('BirthWeightHealthcardTeamwiseComponent', () => {
  let component: BirthWeightHealthcardTeamwiseComponent;
  let fixture: ComponentFixture<BirthWeightHealthcardTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthWeightHealthcardTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthWeightHealthcardTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
