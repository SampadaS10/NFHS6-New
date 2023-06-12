import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthDisplacementMemberwiseComponent } from './birth-displacement-memberwise.component';

describe('BirthDisplacementMemberwiseComponent', () => {
  let component: BirthDisplacementMemberwiseComponent;
  let fixture: ComponentFixture<BirthDisplacementMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthDisplacementMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthDisplacementMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
