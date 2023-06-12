import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Women1549VisitsComponent } from './women1549-visits.component';

describe('Women1549VisitsComponent', () => {
  let component: Women1549VisitsComponent;
  let fixture: ComponentFixture<Women1549VisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Women1549VisitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Women1549VisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
