import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HhVisitsTeamwiseComponent } from './hh-visits-teamwise.component';

describe('HhVisitsTeamwiseComponent', () => {
  let component: HhVisitsTeamwiseComponent;
  let fixture: ComponentFixture<HhVisitsTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HhVisitsTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HhVisitsTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
