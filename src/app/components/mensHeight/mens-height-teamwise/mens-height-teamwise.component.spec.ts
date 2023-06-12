import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensHeightTeamwiseComponent } from './mens-height-teamwise.component';

describe('MensHeightTeamwiseComponent', () => {
  let component: MensHeightTeamwiseComponent;
  let fixture: ComponentFixture<MensHeightTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensHeightTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensHeightTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
