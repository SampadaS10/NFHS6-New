import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensWeightComponent } from './mens-weight.component';

describe('MensWeightComponent', () => {
  let component: MensWeightComponent;
  let fixture: ComponentFixture<MensWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensWeightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
