import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeDisplacementWomenLowerLimitComponent } from './age-displacement-women-lower-limit.component';

describe('AgeDisplacementWomenLowerLimitComponent', () => {
  let component: AgeDisplacementWomenLowerLimitComponent;
  let fixture: ComponentFixture<AgeDisplacementWomenLowerLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeDisplacementWomenLowerLimitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeDisplacementWomenLowerLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
