import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeDisplacementMenLowerLimitMemberwiseComponent } from './age-displacement-men-lower-limit-memberwise.component';

describe('AgeDisplacementMenLowerLimitMemberwiseComponent', () => {
  let component: AgeDisplacementMenLowerLimitMemberwiseComponent;
  let fixture: ComponentFixture<AgeDisplacementMenLowerLimitMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeDisplacementMenLowerLimitMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeDisplacementMenLowerLimitMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
