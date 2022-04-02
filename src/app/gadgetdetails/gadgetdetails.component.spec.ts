import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GadgetdetailsComponent } from './gadgetdetails.component';

describe('GadgetdetailsComponent', () => {
  let component: GadgetdetailsComponent;
  let fixture: ComponentFixture<GadgetdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GadgetdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GadgetdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
