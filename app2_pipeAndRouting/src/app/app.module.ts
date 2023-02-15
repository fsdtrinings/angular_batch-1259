import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminWorkComponent } from './admin-work/admin-work.component';
import { UserComponent } from './user/user.component';
import { PipeTaskComponent } from './pipe-task/pipe-task.component';
import { DebitPipe } from './debit-pipe';
import { UpcomingcoursesComponent } from './upcomingcourses/upcomingcourses.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { TechnicalBootcampsComponent } from './technical-bootcamps/technical-bootcamps.component';
import { RouterModule,Routes } from '@angular/router';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { InfoPipe } from './info-pipe';

const allLinks:Routes = [
  {path:'launchcourse',component:AdminWorkComponent},
  {path:'courses',component:UserComponent},
  {path:'upcomingcourses',component:UpcomingcoursesComponent},
  {path:'workshop',component:WorkshopComponent},
  {path:'bootcamp',component:TechnicalBootcampsComponent},
  {path:'courseDetail/:cid',component:CourseDetailComponent}
  
  
]




@NgModule({
  declarations: [
    AppComponent,
    AdminWorkComponent,
    UserComponent,
    PipeTaskComponent,
    DebitPipe,
    UpcomingcoursesComponent,
    WorkshopComponent,
    TechnicalBootcampsComponent,
    CourseDetailComponent,
    InfoPipe
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(allLinks)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
