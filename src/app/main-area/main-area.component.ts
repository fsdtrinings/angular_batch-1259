import { Component } from '@angular/core';

import { CourseOperationsService } from '../course-operations.service';

interface Course
{
   courseId:number,
   courseName:string,
   duration:number,
   category:string,
   courseOwner:string,
   imageName:string,
   about:string,
   discount:number;
   price:number;
}

// decorators
@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css']
})
export class MainAreaComponent {

  name:string="Ramesh Kumar";
  productName="HP-123 Laptop";
  gst:number=0;
  netAmount:number = 0;
  allCourse : Array<Course> = [];
  watchList : Array<Course> = [];
  watchlistCount:number=0 ;

  priceHighCss:string = "color:crimson";
  priceLowCss:string = "color:rgb(8, 112, 63);font-weight: 700;";
  priceNormalCSS:string = "color:black";
  
  __courseService:CourseOperationsService;
  constructor(courseService:CourseOperationsService)
  {
    this.__courseService = courseService;

    let c1 : Course = {
      "courseId":101,
      "courseName":"Java",
      "duration":30,
      "category":"Server Side Programming",
      "courseOwner":"Pooja",
      "imageName":"java course.JPG",
      "about":"java is back end or business logic implementation OOPs specific language",
      "discount":10,
      "price":2000
    }
    let c2 : Course = {
      "courseId":102,
      "courseName":"Angular",
      "duration":10,
      "category":"Front End Programming",
      "courseOwner":"Pooja",
      "imageName":"angular.JPG",
      "about":"Angulaer is front end business logic implementation language",
      "discount":0,
      "price":300
    }
    let c3 : Course = {
      "courseId":103,
      "courseName":"SQL",
      "duration":5,
      "category":"Database Programming",
      "courseOwner":"Pooja",
      "imageName":"sqltraining.JPG",
      "about":"SQL is Database generic language",
      "discount":25,
      "price":80
    }
    let c4 : Course = {
      "courseId":104,
      "courseName":"English",
      "duration":4,
      "category":"Communication",
      "courseOwner":"Mahesh",
      "imageName":"english.JPG",
      "about":"General Purpose Business Communication training",
      "discount":8,
      "price":50
    }

    

    this.allCourse = [c1,c2,c3,c4];
    

  }

  loadCourses()
  {
    newCourse:any = this.__courseService.getCourse();

  }
  getData():string
  {
    return "good to buy at this price 2000";
  }

  readPrice(price:string)
  {
    console.log("read price called "+price);
    let cost = parseInt(price);

    this.gst = cost* 0.18;
    this.netAmount = this.gst+cost;
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


}//end of class
