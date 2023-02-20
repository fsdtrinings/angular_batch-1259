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
import { FormsModule } from '@angular/forms';
import { TDFCoursePageComponent } from './tdfcourse-page/tdfcourse-page.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

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
    InfoPipe,
    TDFCoursePageComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(allLinks),FormsModule,
    CommonModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



