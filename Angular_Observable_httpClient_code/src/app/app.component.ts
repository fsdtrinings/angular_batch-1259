import { Component } from '@angular/core';
import { TypiUser } from './typi-user';

import { WebOperationService } from './web-operation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allUsers:TypiUser[] = [];
  constructor(private webService:WebOperationService)
  {
    webService.readRecordsOfUsers().subscribe(
        data=>{
          this.allUsers = data;
        },
        err=>{
            console.log("error while downloading users information")
        }
        
       );
  }
}
