import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingcoursesComponent } from './upcomingcourses.component';

describe('UpcomingcoursesComponent', () => {
  let component: UpcomingcoursesComponent;
  let fixture: ComponentFixture<UpcomingcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingcoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
