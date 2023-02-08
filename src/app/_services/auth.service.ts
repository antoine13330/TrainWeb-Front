import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

const AUTH_API = 'http://localhost:3000/users/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'login',
      {
        user: {
          email: username,
          password: password
        }  
      },
      httpOptions
    ).pipe(catchError(err => throwError(()=> err)))
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'create',
      {
        username,
        email,
        password,
      },
      httpOptions
    ).pipe(catchError(err => throwError(() => err)))
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
}

