import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-task',
  templateUrl: './pipe-task.component.html',
  styleUrls: ['./pipe-task.component.css']
})
export class PipeTaskComponent {
  todayDate:Date = new Date();
  someText:string = "biernv gnerg reoieoi boi bob";
  amount:number = 5500;
  discount:number = 15.33;
  debitCardNumber = 145874569;
}
