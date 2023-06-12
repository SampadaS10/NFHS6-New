import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SexRatioOfChildrenTeamwiseComponent } from './sex-ratio-of-children-teamwise.component';

describe('SexRatioOfChildrenTeamwiseComponent', () => {
  let component: SexRatioOfChildrenTeamwiseComponent;
  let fixture: ComponentFixture<SexRatioOfChildrenTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SexRatioOfChildrenTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SexRatioOfChildrenTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
