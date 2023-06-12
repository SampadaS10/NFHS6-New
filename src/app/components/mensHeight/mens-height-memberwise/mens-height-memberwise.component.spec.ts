import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensHeightMemberwiseComponent } from './mens-height-memberwise.component';

describe('MensHeightMemberwiseComponent', () => {
  let component: MensHeightMemberwiseComponent;
  let fixture: ComponentFixture<MensHeightMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensHeightMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensHeightMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
