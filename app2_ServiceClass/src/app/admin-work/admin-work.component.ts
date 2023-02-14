import { Component } from '@angular/core';
import { Course } from '../course';
import { CourseOperationsService } from '../course-operations.service';

@Component({
  selector: 'app-admin-work',
  templateUrl: './admin-work.component.html',
  styleUrls: ['./admin-work.component.css']
})
export class AdminWorkComponent {
  __courseService:CourseOperationsService;

  constructor(courseService:CourseOperationsService)
  {
    this.__courseService = courseService;
  }

  readCourse(courseId:string,courseName:string,duration:string,category:string,onwer:string,price:string,discount:string,about:string,image:string)
  {
      console.log(courseId+" "+courseName+" "+duration+" "+category+" "+onwer+" "+price+" "+discount+" "+onwer+" "+about+" "+image);
      let courseFromUser:Course = new Course(parseInt(courseId),courseName,parseInt(duration),category,onwer,image,about,parseInt(discount),parseInt(price));
      this.__courseService.addCourse(courseFromUser);
  }


}
