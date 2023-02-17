import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TypiUser } from './typi-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebOperationService {

  constructor(private http:HttpClient)
  {
    
  }


  endpoint:String = 'https://jsonplaceholder.typicode.com/posts';

  readRecordsOfUsers():Observable<TypiUser[]>
  {
    return this.http.get<TypiUser[]>(`${this.endpoint}`);
  }
}
