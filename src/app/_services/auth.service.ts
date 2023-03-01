import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {observable, Observable} from 'rxjs';
import {environment} from "../../environments/environment";

const AUTH_API = 'http://localhost:3000/api/user/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient)
  {}

  register(data: any)
  {
    const signUpUser = {
      user : data
    };
    return new Observable<boolean>((observer)=>{
      this.httpClient.post(environment.baseUrl + '/users/student/create', signUpUser).subscribe(result=>{
        observer.next(true);
        observer.complete();
      })
    })
  }

  //logout(): Observable<any> {
  //  return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  //}
}

