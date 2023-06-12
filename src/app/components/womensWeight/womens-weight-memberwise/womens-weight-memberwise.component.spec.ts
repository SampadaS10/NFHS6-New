import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensWeightMemberwiseComponent } from './womens-weight-memberwise.component';

describe('WomensWeightMemberwiseComponent', () => {
  let component: WomensWeightMemberwiseComponent;
  let fixture: ComponentFixture<WomensWeightMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensWeightMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomensWeightMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
