import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewStartTimeMemberwiseComponent } from './interview-start-time-memberwise.component';

describe('InterviewStartTimeMemberwiseComponent', () => {
  let component: InterviewStartTimeMemberwiseComponent;
  let fixture: ComponentFixture<InterviewStartTimeMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewStartTimeMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewStartTimeMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
