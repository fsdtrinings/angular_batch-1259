import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseOperationsService {

  constructor() { }
  courseFromUser:Course = new Course(0,'',0,'','','','',0,0); // creating default object
  addCourse(courseId:string,courseName:string,duration:string,category:string,onwer:string,price:string,discount:string,about:string,image:string)
  {
    this.courseFromUser = new Course(parseInt(courseId),courseName,parseInt(duration),category,onwer,image,about,parseInt(discount),parseInt(price));
  }

  getCourse():Course
  {
    return this.courseFromUser;
  }
}
