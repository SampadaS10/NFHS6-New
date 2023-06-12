import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HhRelationsModuleTeamwiseComponent } from './hh-relations-module-teamwise.component';

describe('HhRelationsModuleTeamwiseComponent', () => {
  let component: HhRelationsModuleTeamwiseComponent;
  let fixture: ComponentFixture<HhRelationsModuleTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HhRelationsModuleTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HhRelationsModuleTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
