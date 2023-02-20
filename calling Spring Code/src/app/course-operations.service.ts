import { Injectable } from '@angular/core';
import { Course } from './course';
import { HttpClient } from '@angular/common/http';
import { TypiUser } from './typi-user';
import { Observable } from 'rxjs';
import { CourseDTO } from './course-dto';

@Injectable({
  providedIn: 'root'
})
export class CourseOperationsService {

  endpoint:String = 'https://jsonplaceholder.typicode.com/posts';
  baseURL = 'http://localhost:2002';
  courseByIdEndPoint:string = this.baseURL+'/app/course?id=3';
  allCourseEndpoint = this.baseURL+'/app/courses';
  
  courseArr:Course[] = [];

  constructor(private http:HttpClient)
  {
    
  }

  getAllCoursesFromSpring():Observable<CourseDTO[]>
  {
    console.log("inside service : "+this.allCourseEndpoint);
      return this.http.get<CourseDTO[]>(`${this.allCourseEndpoint}`);
  }


  readFromSpring():Observable<CourseDTO>
  {
    return this.http.get<CourseDTO>(`${this.courseByIdEndPoint}`);
  }






  // ---- demo for consuming endpoint from random URL 

  readRecordsOfUsers():Observable<TypiUser[]>
  {
    return this.http.get<TypiUser[]>(`${this.endpoint}`);
  }



  // ---------- examples for Course Array internally created data in array ---
 
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

