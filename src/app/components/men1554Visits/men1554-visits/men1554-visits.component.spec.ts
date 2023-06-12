import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Men1554VisitsComponent } from './men1554-visits.component';

describe('Men1554VisitsComponent', () => {
  let component: Men1554VisitsComponent;
  let fixture: ComponentFixture<Men1554VisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Men1554VisitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Men1554VisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
