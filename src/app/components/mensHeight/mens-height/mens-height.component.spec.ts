import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensHeightComponent } from './mens-height.component';

describe('MensHeightComponent', () => {
  let component: MensHeightComponent;
  let fixture: ComponentFixture<MensHeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensHeightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
