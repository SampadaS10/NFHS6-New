import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrensWeightMemberwiseComponent } from './childrens-weight-memberwise.component';

describe('ChildrensWeightMemberwiseComponent', () => {
  let component: ChildrensWeightMemberwiseComponent;
  let fixture: ComponentFixture<ChildrensWeightMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrensWeightMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrensWeightMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
