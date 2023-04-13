import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, observable, Observable, tap} from 'rxjs';
import {environment} from "../../environments/environment";
import {UserToken} from "../_models/User/token";


const AUTH_API = 'http://localhost:3000/api/user/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private userToken: UserToken | undefined;
  constructor(private httpClient: HttpClient)
  {
    this.checkJwt()
  }
  //Fonction register
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
  checkJwt()
  {
      if(!this.isTokenExpired())
      {
        this.isLoggedOn = true
      }
  }

  isTokenExpired(): boolean {
    const token = this.getJwtToken();
    if (!token) return true;

    const parts = token.split('.');
    if (parts.length !== 3) return true;

    const decoded = this.urlBase64Decode(parts[1]);
    if (!decoded) return true;
    try {
      const jwt = JSON.parse(decoded);
      return jwt.exp < Date.now() / 1000;
    } catch (e) {
      return false;
    }
  }

  private urlBase64Decode(str: string) {
    let output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
      case 0: { break; }
      case 2: { output += '=='; break; }
      case 3: { output += '='; break; }
      default: {
        throw new Error('Illegal base64url string!');
      }
    }
    return this.b64DecodeUnicode(output);
  }

  private b64DecodeUnicode(str: any) {
    return decodeURIComponent(atob(str).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }
  //Recuperer le jwt Token
  getJwtToken() : string | null {
    return localStorage.getItem('JWT-TOKEN');
  }

  //Fonction est connecté
  private _isLoggedOn : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  set isLoggedOn(v : boolean) {
    this._isLoggedOn.next(v);
  }
  isLoggedOn$ = this._isLoggedOn.asObservable();
  userLoginId: string | undefined;
  //Fonction de login
  login(data : any) {
    const signInUser = {
      user: data
    };
    return this.httpClient.post<any>(environment.baseUrl + '/users/login', signInUser).pipe(
        tap( token => {
          this.userLoginId = token.createdToken.idUser
          this.isLoggedOn = true;
          this.setJwtToken({
            idUser : token.createdToken.idUser,
            token : token.createdToken.token,
            expirationDate : token.createdToken.expirationDate
          } as UserToken);
        })
      )
        ;
  }

  logout()
  {
    localStorage.removeItem("JWT-TOKEN")
    this.isLoggedOn = false;
  }
  setJwtToken(token : UserToken)
  {
    localStorage.setItem("JWT-TOKEN", token.token);
  }

}

