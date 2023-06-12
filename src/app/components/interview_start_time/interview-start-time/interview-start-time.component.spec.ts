import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewStartTimeComponent } from './interview-start-time.component';

describe('InterviewStartTimeComponent', () => {
  let component: InterviewStartTimeComponent;
  let fixture: ComponentFixture<InterviewStartTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewStartTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewStartTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
