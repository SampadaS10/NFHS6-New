import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationHealthCardsTeamwiseComponent } from './vaccination-health-cards-teamwise.component';

describe('VaccinationHealthCardsTeamwiseComponent', () => {
  let component: VaccinationHealthCardsTeamwiseComponent;
  let fixture: ComponentFixture<VaccinationHealthCardsTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationHealthCardsTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaccinationHealthCardsTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
