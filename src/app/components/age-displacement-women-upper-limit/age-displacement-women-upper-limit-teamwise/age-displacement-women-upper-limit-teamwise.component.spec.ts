import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeDisplacementWomenUpperLimitTeamwiseComponent } from './age-displacement-women-upper-limit-teamwise.component';

describe('AgeDisplacementWomenUpperLimitTeamwiseComponent', () => {
  let component: AgeDisplacementWomenUpperLimitTeamwiseComponent;
  let fixture: ComponentFixture<AgeDisplacementWomenUpperLimitTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeDisplacementWomenUpperLimitTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeDisplacementWomenUpperLimitTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
