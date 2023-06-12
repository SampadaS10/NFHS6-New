import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SexRatioOfChildrenComponent } from './sex-ratio-of-children.component';

describe('SexRatioOfChildrenComponent', () => {
  let component: SexRatioOfChildrenComponent;
  let fixture: ComponentFixture<SexRatioOfChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SexRatioOfChildrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SexRatioOfChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
