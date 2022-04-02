import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadphonedetailsComponent } from './headphonedetails.component';

describe('HeadphonedetailsComponent', () => {
  let component: HeadphonedetailsComponent;
  let fixture: ComponentFixture<HeadphonedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadphonedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadphonedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
