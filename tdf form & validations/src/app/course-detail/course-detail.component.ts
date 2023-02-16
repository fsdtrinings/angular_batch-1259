import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Course } from '../course';
import { CourseOperationsService } from '../course-operations.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent {
  __courseService:CourseOperationsService; // creating object of Service layer
  router:Router;
  activeRoute:ActivatedRoute;
  c:Course = new Course(0,'',0,'','','','',0,0);
    constructor(courseService:CourseOperationsService,router:Router,activeRoute:ActivatedRoute)
  {
    this.__courseService = courseService;
    this.router = router;
    this.activeRoute = activeRoute;

    let searchCourseId= this.activeRoute.snapshot.params['cid']; // extract value from prameter(URI)
    console.log(searchCourseId);
    this.c = this.__courseService.getCourseByNumber(parseInt(searchCourseId)); // get data from service class
    console.log(this.c);
  }
}
