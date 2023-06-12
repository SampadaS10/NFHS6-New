import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Women1549VisitsTeamwiseComponent } from './women1549-visits-teamwise.component';

describe('Women1549VisitsTeamwiseComponent', () => {
  let component: Women1549VisitsTeamwiseComponent;
  let fixture: ComponentFixture<Women1549VisitsTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Women1549VisitsTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Women1549VisitsTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
