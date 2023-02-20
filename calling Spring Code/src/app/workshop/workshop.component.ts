import { Component } from '@angular/core';
import { CourseDTO } from '../course-dto';
import { CourseOperationsService } from '../course-operations.service';
import { TypiUser } from '../typi-user';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent {

    allUsers:TypiUser[] = [];
    courseDTO:CourseDTO = new CourseDTO(0,'',0);

    constructor(private __CourseOpService:CourseOperationsService)
    {
         __CourseOpService.readRecordsOfUsers().subscribe(
          data=>{
            this.allUsers = data;
          },
          err=>{
              console.log("error while downloading users information")
          }
          
         );
    }


    doServiceCall()
    {
      this.__CourseOpService.readFromSpring().subscribe(
        data=>{
          console.log("data :- "+data);
          
          this.courseDTO = data;
        },err=>{
          console.log("error from spring ",err);

        }
      );
      
    }
}
