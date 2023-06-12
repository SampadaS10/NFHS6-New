import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HhVisitsComponent } from './hh-visits.component';

describe('HhVisitsComponent', () => {
  let component: HhVisitsComponent;
  let fixture: ComponentFixture<HhVisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HhVisitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HhVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
