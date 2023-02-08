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
      authorization : 0
    } ,

    {
      name : 'Créer une formation',
      url : '/formationCreate',
      authorization : 1
    } ,

    {
      name : 'Mes formations',
      url : '/formationUser',
      authorization : 0
    } ,
  ]
  constructor() { }


}
