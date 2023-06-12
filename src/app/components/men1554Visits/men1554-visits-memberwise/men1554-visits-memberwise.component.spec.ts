import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Men1554VisitsMemberwiseComponent } from './men1554-visits-memberwise.component';

describe('Men1554VisitsMemberwiseComponent', () => {
  let component: Men1554VisitsMemberwiseComponent;
  let fixture: ComponentFixture<Men1554VisitsMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Men1554VisitsMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Men1554VisitsMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
