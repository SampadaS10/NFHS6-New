import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrensWeightTeamwiseComponent } from './childrens-weight-teamwise.component';

describe('ChildrensWeightTeamwiseComponent', () => {
  let component: ChildrensWeightTeamwiseComponent;
  let fixture: ComponentFixture<ChildrensWeightTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrensWeightTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrensWeightTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
