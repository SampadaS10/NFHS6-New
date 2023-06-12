import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeDisplacementMenUpperLimitTeamwiseComponent } from './age-displacement-men-upper-limit-teamwise.component';

describe('AgeDisplacementMenUpperLimitTeamwiseComponent', () => {
  let component: AgeDisplacementMenUpperLimitTeamwiseComponent;
  let fixture: ComponentFixture<AgeDisplacementMenUpperLimitTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeDisplacementMenUpperLimitTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeDisplacementMenUpperLimitTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
