import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormaldashboardComponent } from './normaldashboard.component';

describe('NormaldashboardComponent', () => {
  let component: NormaldashboardComponent;
  let fixture: ComponentFixture<NormaldashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormaldashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormaldashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
