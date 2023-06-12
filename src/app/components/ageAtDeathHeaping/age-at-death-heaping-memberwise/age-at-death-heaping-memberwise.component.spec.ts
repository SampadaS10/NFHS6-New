import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeAtDeathHeapingMemberwiseComponent } from './age-at-death-heaping-memberwise.component';

describe('AgeAtDeathHeapingMemberwiseComponent', () => {
  let component: AgeAtDeathHeapingMemberwiseComponent;
  let fixture: ComponentFixture<AgeAtDeathHeapingMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeAtDeathHeapingMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeAtDeathHeapingMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
