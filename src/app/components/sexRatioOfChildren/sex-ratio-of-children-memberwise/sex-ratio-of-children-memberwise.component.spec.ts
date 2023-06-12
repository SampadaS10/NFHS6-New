import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SexRatioOfChildrenMemberwiseComponent } from './sex-ratio-of-children-memberwise.component';

describe('SexRatioOfChildrenMemberwiseComponent', () => {
  let component: SexRatioOfChildrenMemberwiseComponent;
  let fixture: ComponentFixture<SexRatioOfChildrenMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SexRatioOfChildrenMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SexRatioOfChildrenMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
