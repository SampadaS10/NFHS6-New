import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Men1554VisitsTeamwiseComponent } from './men1554-visits-teamwise.component';

describe('Men1554VisitsTeamwiseComponent', () => {
  let component: Men1554VisitsTeamwiseComponent;
  let fixture: ComponentFixture<Men1554VisitsTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Men1554VisitsTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Men1554VisitsTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
