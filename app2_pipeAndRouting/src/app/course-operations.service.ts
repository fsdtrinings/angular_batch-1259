import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseOperationsService {

  constructor() { }
  
  courseArr:Course[] = [];


  addCourse(courseFromUser:Course)
  {
    
    this.courseArr.push(courseFromUser); 
    console.log("Inside Course Service : Course Added "+courseFromUser.courseId);
    console.log(" Total Course Are :- "+this.courseArr.length);
    
  }

  getCourseArr():Course[]
  {
    return this.courseArr;
  }


  getCourseByNumber(searchCourseId:number):Course
  {
    let outputCourse:Course = new Course(0,'',0,'','','','',0,0);
    for(let i=0;i<this.courseArr.length;i++)
    {
      let thisCourse:Course = this.courseArr[i];
        if(thisCourse.courseId == searchCourseId)
        {
          outputCourse = thisCourse;
          break;
        }
    }
    
    return outputCourse;
  }


  getCoursesByCategory(filterCategory:string):Course[]
  {
    // localhost:8080/api/course/{category}
   let outputArr:Course[] = [];

    this.courseArr.forEach(c=>{
      if(c.category == filterCategory)
      {
        outputArr.push(c);
      }
    });

    return outputArr;
  }
}//end class

