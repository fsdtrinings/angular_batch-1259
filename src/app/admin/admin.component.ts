import { Component } from '@angular/core';

interface Course
{
   courseId:number,
   courseName:string,
   duration:number,
   category:string,
   courseOwner:string
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  abc = {
    "name":"Ramesh"
  }

  languageCourse : Course = {
    "courseId":104,
    "courseName":"English",
    "duration":4,
    "category":"Communication",
    "courseOwner":"Shilpa"
  }

  allCourse : Array<Course> = [];

  constructor()
  {
    let c1 : Course = {
      "courseId":101,
      "courseName":"Java",
      "duration":30,
      "category":"Server Side Programming",
      "courseOwner":"Pooja"
    }
    let c2 : Course = {
      "courseId":102,
      "courseName":"Angular",
      "duration":10,
      "category":"Front End Programming",
      "courseOwner":"Pooja"
    }
    let c3 : Course = {
      "courseId":103,
      "courseName":"SQL",
      "duration":5,
      "category":"Database Programming",
      "courseOwner":"Pooja"
    }

    this.allCourse = [c1,c2,c3];

  }

}
