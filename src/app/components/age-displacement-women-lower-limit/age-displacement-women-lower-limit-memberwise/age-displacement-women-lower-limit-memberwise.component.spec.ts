import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeDisplacementWomenLowerLimitMemberwiseComponent } from './age-displacement-women-lower-limit-memberwise.component';

describe('AgeDisplacementWomenLowerLimitMemberwiseComponent', () => {
  let component: AgeDisplacementWomenLowerLimitMemberwiseComponent;
  let fixture: ComponentFixture<AgeDisplacementWomenLowerLimitMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeDisplacementWomenLowerLimitMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeDisplacementWomenLowerLimitMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
