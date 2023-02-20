import { Component } from '@angular/core';
import { Course } from '../course';
import { CourseOperationsService } from '../course-operations.service';

@Component({
  selector: 'app-tdfcourse-page',
  templateUrl: './tdfcourse-page.component.html',
  styleUrls: ['./tdfcourse-page.component.css']
})
export class TDFCoursePageComponent {

  __courseService:CourseOperationsService;
  c:Course = new Course(0,'Java',10,'Programming','Mahesh','','',0,99);
  
  constructor(courseService:CourseOperationsService)
  {
    this.__courseService = courseService;
  }

  doFormSubmit()
  {
    console.log("form submit button clicked ")
    console.log(this.c);
    
  }

}//end class
