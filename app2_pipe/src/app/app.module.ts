import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminWorkComponent } from './admin-work/admin-work.component';
import { UserComponent } from './user/user.component';
import { PipeTaskComponent } from './pipe-task/pipe-task.component';
import { DebitPipe } from './debit-pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdminWorkComponent,
    UserComponent,
    PipeTaskComponent,
    DebitPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
