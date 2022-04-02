import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartalertComponent } from './cartalert.component';

describe('CartalertComponent', () => {
  let component: CartalertComponent;
  let fixture: ComponentFixture<CartalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartalertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
