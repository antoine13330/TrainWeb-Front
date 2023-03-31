import { Injectable } from '@angular/core';
import { NavLink } from 'src/app/_models/Navigation/link';

@Injectable({
  providedIn: 'root'
})
export class NavlinksService {

  public readonly links : NavLink[] = [
    {
      name : 'Accueil',
      url : '/accueil',
      authorization : 0,
      isAuthorized : false
    } ,

    {
      name : 'Créer une formation',
      url : '/formationCreate',
      authorization : 1,
      isAuthorized : false
    } ,

    {
      name : 'Mes formations',
      url : '/formationUser',
      authorization : 1,
      isAuthorized : false
    } ,

    {
      name : 'Corrections',
      url : '/formationCorrection',
      authorization : 1,
      isAuthorized : false
    } ,
  ]
  constructor() { }


}
