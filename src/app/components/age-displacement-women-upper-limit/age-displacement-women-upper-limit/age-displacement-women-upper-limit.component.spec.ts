import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeDisplacementWomenUpperLimitComponent } from './age-displacement-women-upper-limit.component';

describe('AgeDisplacementWomenUpperLimitComponent', () => {
  let component: AgeDisplacementWomenUpperLimitComponent;
  let fixture: ComponentFixture<AgeDisplacementWomenUpperLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeDisplacementWomenUpperLimitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeDisplacementWomenUpperLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
