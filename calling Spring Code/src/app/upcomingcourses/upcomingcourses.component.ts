import { Component } from '@angular/core';
import { CourseDTO } from '../course-dto';
import { CourseOperationsService } from '../course-operations.service';

@Component({
  selector: 'app-upcomingcourses',
  templateUrl: './upcomingcourses.component.html',
  styleUrls: ['./upcomingcourses.component.css']
})
export class UpcomingcoursesComponent {

  allCourses:CourseDTO [] = [];
  constructor(private courseService:CourseOperationsService)
  {
    courseService.getAllCoursesFromSpring().subscribe(
      data=>{
          this.allCourses = data;
      },
      err=>{
        console.log("Error "+err);
        
      }
    );
  }
}
