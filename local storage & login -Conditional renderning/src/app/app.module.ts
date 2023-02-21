import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';



const allLinks:Routes = [
  {path:'search',component:Page1Component},
  {path:'admin',component:Page2Component},
  {path:'enrolledCourse',component:Page3Component},
  {path:'admin/:name',component:Page2Component},
  
]


@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(allLinks),FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
