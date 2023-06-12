import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFoodConsumptionOfChildFrom6To23MonthsComponent } from './no-food-consumption-of-child-from6-to23-months.component';

describe('NoFoodConsumptionOfChildFrom6To23MonthsComponent', () => {
  let component: NoFoodConsumptionOfChildFrom6To23MonthsComponent;
  let fixture: ComponentFixture<NoFoodConsumptionOfChildFrom6To23MonthsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoFoodConsumptionOfChildFrom6To23MonthsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoFoodConsumptionOfChildFrom6To23MonthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
