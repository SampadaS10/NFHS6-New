import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensWeightTeamwiseComponent } from './mens-weight-teamwise.component';

describe('MensWeightTeamwiseComponent', () => {
  let component: MensWeightTeamwiseComponent;
  let fixture: ComponentFixture<MensWeightTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensWeightTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensWeightTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
