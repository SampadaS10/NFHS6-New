import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationHealthCardsMemberwiseComponent } from './vaccination-health-cards-memberwise.component';

describe('VaccinationHealthCardsMemberwiseComponent', () => {
  let component: VaccinationHealthCardsMemberwiseComponent;
  let fixture: ComponentFixture<VaccinationHealthCardsMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationHealthCardsMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaccinationHealthCardsMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
