import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensHeightComponent } from './womens-height.component';

describe('WomensHeightComponent', () => {
  let component: WomensHeightComponent;
  let fixture: ComponentFixture<WomensHeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensHeightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomensHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
