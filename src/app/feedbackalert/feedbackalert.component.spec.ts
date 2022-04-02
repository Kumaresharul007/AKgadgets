import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackalertComponent } from './feedbackalert.component';

describe('FeedbackalertComponent', () => {
  let component: FeedbackalertComponent;
  let fixture: ComponentFixture<FeedbackalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackalertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
