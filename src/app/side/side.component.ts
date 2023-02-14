import { Component } from '@angular/core';
import { CourseOperationsService } from '../course-operations.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent {

  __courseService:CourseOperationsService;

  constructor(courseService:CourseOperationsService)
  {
    this.__courseService = courseService;
  }

  readCourse(courseId:string,courseName:string,duration:string,category:string,onwer:string,price:string,discount:string,about:string,image:string)
  {
      console.log(courseId+" "+courseName+" "+duration+" "+category+" "+onwer+" "+price+" "+discount+" "+onwer+" "+about+" "+image);
      
  }


  

}
