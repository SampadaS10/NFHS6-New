import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensWeightComponent } from './womens-weight.component';

describe('WomensWeightComponent', () => {
  let component: WomensWeightComponent;
  let fixture: ComponentFixture<WomensWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensWeightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomensWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
