import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFoodConsumptionOfChildFrom6To23MonthsTeamwiseComponent } from './no-food-consumption-of-child-from6-to23-months-teamwise.component';

describe('NoFoodConsumptionOfChildFrom6To23MonthsTeamwiseComponent', () => {
  let component: NoFoodConsumptionOfChildFrom6To23MonthsTeamwiseComponent;
  let fixture: ComponentFixture<NoFoodConsumptionOfChildFrom6To23MonthsTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoFoodConsumptionOfChildFrom6To23MonthsTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoFoodConsumptionOfChildFrom6To23MonthsTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
