import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewStartTimeTeamwiseComponent } from './interview-start-time-teamwise.component';

describe('InterviewStartTimeTeamwiseComponent', () => {
  let component: InterviewStartTimeTeamwiseComponent;
  let fixture: ComponentFixture<InterviewStartTimeTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewStartTimeTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewStartTimeTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
