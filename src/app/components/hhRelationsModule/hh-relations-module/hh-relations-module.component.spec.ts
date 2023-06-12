import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HhRelationsModuleComponent } from './hh-relations-module.component';

describe('HhRelationsModuleComponent', () => {
  let component: HhRelationsModuleComponent;
  let fixture: ComponentFixture<HhRelationsModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HhRelationsModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HhRelationsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
