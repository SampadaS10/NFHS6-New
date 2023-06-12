import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensHeightMemberwiseComponent } from './womens-height-memberwise.component';

describe('WomensHeightMemberwiseComponent', () => {
  let component: WomensHeightMemberwiseComponent;
  let fixture: ComponentFixture<WomensHeightMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensHeightMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomensHeightMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
