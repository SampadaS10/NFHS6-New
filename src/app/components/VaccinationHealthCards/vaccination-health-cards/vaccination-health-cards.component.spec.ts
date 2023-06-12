import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationHealthCardsComponent } from './vaccination-health-cards.component';

describe('VaccinationHealthCardsComponent', () => {
  let component: VaccinationHealthCardsComponent;
  let fixture: ComponentFixture<VaccinationHealthCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationHealthCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaccinationHealthCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
