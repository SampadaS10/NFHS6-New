import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeDisplacementWomenUpperLimitMemberwiseComponent } from './age-displacement-women-upper-limit-memberwise.component';

describe('AgeDisplacementWomenUpperLimitMemberwiseComponent', () => {
  let component: AgeDisplacementWomenUpperLimitMemberwiseComponent;
  let fixture: ComponentFixture<AgeDisplacementWomenUpperLimitMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeDisplacementWomenUpperLimitMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeDisplacementWomenUpperLimitMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
