import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeAtDeathHeapingTeamwiseComponent } from './age-at-death-heaping-teamwise.component';

describe('AgeAtDeathHeapingTeamwiseComponent', () => {
  let component: AgeAtDeathHeapingTeamwiseComponent;
  let fixture: ComponentFixture<AgeAtDeathHeapingTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeAtDeathHeapingTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeAtDeathHeapingTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
