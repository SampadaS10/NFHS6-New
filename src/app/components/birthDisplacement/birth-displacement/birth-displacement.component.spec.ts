import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthDisplacementComponent } from './birth-displacement.component';

describe('BirthDisplacementComponent', () => {
  let component: BirthDisplacementComponent;
  let fixture: ComponentFixture<BirthDisplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthDisplacementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthDisplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
