import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensWeightMemberwiseComponent } from './mens-weight-memberwise.component';

describe('MensWeightMemberwiseComponent', () => {
  let component: MensWeightMemberwiseComponent;
  let fixture: ComponentFixture<MensWeightMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensWeightMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensWeightMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
