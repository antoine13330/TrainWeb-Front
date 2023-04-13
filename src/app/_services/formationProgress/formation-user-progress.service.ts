import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {tap} from "rxjs";
import {UserToken} from "../../_models/User/token";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {HttpClient} from "@angular/common/http";
const AUTH_API = 'http://localhost:3000/api/user/';

@Injectable({
  providedIn: 'root'
})
export class FormationUserProgressService {
  public idUser: string | undefined;

  constructor(
    private router : Router,
    private httpClient: HttpClient,
    private _authService : AuthService
  ) {
    this.idUser= this._authService.userLoginId
  }
  setFormaUserProgress(body: any) {
    const obj = {
      FormUserProgress: body
    }
    return this.httpClient.post<any>(environment.baseUrl + '/formuserprogress/create', obj).pipe(
      tap(v => console.log("je suis bien passé" + v))
    );
  }

  getFormaUserProgress()
  {
    console.log("bebou" + this.idUser)
    return this.httpClient.get<any>(environment.baseUrl + '/formuserprogress/getbyuserid/'+ this._authService.userLoginId)
  }
  /*login(data : any) {
    const signInUser = {
      user: data
    };
    return this.httpClient.post<any>(environment.baseUrl + '/users/login', signInUser).pipe(
      tap( token => {
        this.isLoggedOn = true;
        this.setJwtToken({
          idUser : token.createdToken.idUser,
          token : token.createdToken.token,
          expirationDate : token.createdToken.expirationDate
        } as UserToken);
      })
    )
      ;
  }*/
}
