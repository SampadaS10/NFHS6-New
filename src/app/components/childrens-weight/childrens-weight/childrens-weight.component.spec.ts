import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrensWeightComponent } from './childrens-weight.component';

describe('ChildrensWeightComponent', () => {
  let component: ChildrensWeightComponent;
  let fixture: ComponentFixture<ChildrensWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrensWeightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrensWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
