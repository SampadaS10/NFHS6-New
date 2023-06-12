import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthDisplacementTeamwiseComponent } from './birth-displacement-teamwise.component';

describe('BirthDisplacementTeamwiseComponent', () => {
  let component: BirthDisplacementTeamwiseComponent;
  let fixture: ComponentFixture<BirthDisplacementTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthDisplacementTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthDisplacementTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
