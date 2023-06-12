import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrensHeightComponent } from './childrens-height.component';

describe('ChildrensHeightComponent', () => {
  let component: ChildrensHeightComponent;
  let fixture: ComponentFixture<ChildrensHeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrensHeightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrensHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
