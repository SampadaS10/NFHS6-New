import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFoodConsumptionOfChildFrom6To23MonthsMemberwiseComponent } from './no-food-consumption-of-child-from6-to23-months-memberwise.component';

describe('NoFoodConsumptionOfChildFrom6To23MonthsMemberwiseComponent', () => {
  let component: NoFoodConsumptionOfChildFrom6To23MonthsMemberwiseComponent;
  let fixture: ComponentFixture<NoFoodConsumptionOfChildFrom6To23MonthsMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoFoodConsumptionOfChildFrom6To23MonthsMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoFoodConsumptionOfChildFrom6To23MonthsMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
