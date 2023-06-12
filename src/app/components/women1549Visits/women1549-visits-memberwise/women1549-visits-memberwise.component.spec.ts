import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Women1549VisitsMemberwiseComponent } from './women1549-visits-memberwise.component';

describe('Women1549VisitsMemberwiseComponent', () => {
  let component: Women1549VisitsMemberwiseComponent;
  let fixture: ComponentFixture<Women1549VisitsMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Women1549VisitsMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Women1549VisitsMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
