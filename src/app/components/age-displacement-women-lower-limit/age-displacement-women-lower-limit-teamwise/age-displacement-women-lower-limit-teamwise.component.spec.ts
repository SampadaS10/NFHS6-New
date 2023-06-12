import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeDisplacementWomenLowerLimitTeamwiseComponent } from './age-displacement-women-lower-limit-teamwise.component';

describe('AgeDisplacementWomenLowerLimitTeamwiseComponent', () => {
  let component: AgeDisplacementWomenLowerLimitTeamwiseComponent;
  let fixture: ComponentFixture<AgeDisplacementWomenLowerLimitTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeDisplacementWomenLowerLimitTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeDisplacementWomenLowerLimitTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
