import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensHeightTeamwiseComponent } from './womens-height-teamwise.component';

describe('WomensHeightTeamwiseComponent', () => {
  let component: WomensHeightTeamwiseComponent;
  let fixture: ComponentFixture<WomensHeightTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensHeightTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomensHeightTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
