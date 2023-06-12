import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeDisplacementMenUpperLimitComponent } from './age-displacement-men-upper-limit.component';

describe('AgeDisplacementMenUpperLimitComponent', () => {
  let component: AgeDisplacementMenUpperLimitComponent;
  let fixture: ComponentFixture<AgeDisplacementMenUpperLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeDisplacementMenUpperLimitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeDisplacementMenUpperLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
