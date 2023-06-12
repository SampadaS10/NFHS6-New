import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeAtDeathHeapingComponent } from './age-at-death-heaping.component';

describe('AgeAtDeathHeapingComponent', () => {
  let component: AgeAtDeathHeapingComponent;
  let fixture: ComponentFixture<AgeAtDeathHeapingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeAtDeathHeapingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeAtDeathHeapingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
