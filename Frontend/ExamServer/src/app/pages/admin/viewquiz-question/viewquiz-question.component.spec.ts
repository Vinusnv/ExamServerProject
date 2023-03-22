import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewquizQuestionComponent } from './viewquiz-question.component';

describe('ViewquizQuestionComponent', () => {
  let component: ViewquizQuestionComponent;
  let fixture: ComponentFixture<ViewquizQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewquizQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewquizQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
