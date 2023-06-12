import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeDisplacementMenLowerLimitTeamwiseComponent } from './age-displacement-men-lower-limit-teamwise.component';

describe('AgeDisplacementMenLowerLimitTeamwiseComponent', () => {
  let component: AgeDisplacementMenLowerLimitTeamwiseComponent;
  let fixture: ComponentFixture<AgeDisplacementMenLowerLimitTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeDisplacementMenLowerLimitTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeDisplacementMenLowerLimitTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
