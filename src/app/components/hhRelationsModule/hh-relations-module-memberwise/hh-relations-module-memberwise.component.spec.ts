import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HhRelationsModuleMemberwiseComponent } from './hh-relations-module-memberwise.component';

describe('HhRelationsModuleMemberwiseComponent', () => {
  let component: HhRelationsModuleMemberwiseComponent;
  let fixture: ComponentFixture<HhRelationsModuleMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HhRelationsModuleMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HhRelationsModuleMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
