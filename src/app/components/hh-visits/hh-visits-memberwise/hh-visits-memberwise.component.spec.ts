import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HhVisitsMemberwiseComponent } from './hh-visits-memberwise.component';

describe('HhVisitsMemberwiseComponent', () => {
  let component: HhVisitsMemberwiseComponent;
  let fixture: ComponentFixture<HhVisitsMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HhVisitsMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HhVisitsMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
