import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrensHeightTeamwiseComponent } from './childrens-height-teamwise.component';

describe('ChildrensHeightTeamwiseComponent', () => {
  let component: ChildrensHeightTeamwiseComponent;
  let fixture: ComponentFixture<ChildrensHeightTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrensHeightTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrensHeightTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
