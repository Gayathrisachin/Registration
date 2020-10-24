import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string="http://localhost:3001/user"
  constructor(private http:HttpClient) { }
  getAll():Observable<User[]>{
    return this.http.get<User[]>(this.url)
  }
  postAll(data:User):Observable<any>{
    return this.http.post(this.url+'/',data)
  }
}
