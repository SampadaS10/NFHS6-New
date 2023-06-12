import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeDisplacementMenLowerLimitComponent } from './age-displacement-men-lower-limit.component';

describe('AgeDisplacementMenLowerLimitComponent', () => {
  let component: AgeDisplacementMenLowerLimitComponent;
  let fixture: ComponentFixture<AgeDisplacementMenLowerLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeDisplacementMenLowerLimitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeDisplacementMenLowerLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
