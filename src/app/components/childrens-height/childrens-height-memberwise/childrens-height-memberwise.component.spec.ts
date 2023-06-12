import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrensHeightMemberwiseComponent } from './childrens-height-memberwise.component';

describe('ChildrensHeightMemberwiseComponent', () => {
  let component: ChildrensHeightMemberwiseComponent;
  let fixture: ComponentFixture<ChildrensHeightMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrensHeightMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrensHeightMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
