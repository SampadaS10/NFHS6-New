import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensWeightTeamwiseComponent } from './womens-weight-teamwise.component';

describe('WomensWeightTeamwiseComponent', () => {
  let component: WomensWeightTeamwiseComponent;
  let fixture: ComponentFixture<WomensWeightTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensWeightTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomensWeightTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
