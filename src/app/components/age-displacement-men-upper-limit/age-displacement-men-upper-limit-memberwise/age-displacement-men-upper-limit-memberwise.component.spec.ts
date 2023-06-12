import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeDisplacementMenUpperLimitMemberwiseComponent } from './age-displacement-men-upper-limit-memberwise.component';

describe('AgeDisplacementMenUpperLimitMemberwiseComponent', () => {
  let component: AgeDisplacementMenUpperLimitMemberwiseComponent;
  let fixture: ComponentFixture<AgeDisplacementMenUpperLimitMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeDisplacementMenUpperLimitMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeDisplacementMenUpperLimitMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
