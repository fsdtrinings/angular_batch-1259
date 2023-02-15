import { Component } from '@angular/core';
import { Course } from '../course';
import { CourseOperationsService } from '../course-operations.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
   // no need to write @Autowire bcoz service class is already @Injectable
  __courseService:CourseOperationsService; // creating object of Service layer

  
  allCourse : Array<Course> = [];
  watchList : Array<Course> = [];
  watchlistCount:number=0 ;

  priceHighCss:string = "color:crimson";
  priceLowCss:string = "color:rgb(8, 112, 63);font-weight: 700;";
  priceNormalCSS:string = "color:black";

  constructor(courseService:CourseOperationsService)
  {
    this.__courseService = courseService;
    this.allCourse = this.__courseService.getCourseArr();
    console.log(this.allCourse.length);
    
  }


  

  goForBuy(course:string)
  {
    let courseId = parseInt(course);
    console.log(" code to buy "+courseId+" course");
    
  }

  addWatchlist(course:string)
  {
    let addCourseId = parseInt(course);
    
    this.allCourse.forEach(c=>{
      if(c.courseId == addCourseId)
      {
        this.watchList.push(c);
        
      }
    });
    this.watchlistCount = this.watchList.length;
    console.log(this.watchList);
    
  }

  getFilterData(filterValue:string)
  {
    console.log(" Filter Value "+filterValue);

    this.allCourse = this.__courseService.getCoursesByCategory(filterValue);
  }
}//end class
