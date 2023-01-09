import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/User/user';
import { NotificationService } from '../ux/notification.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user : User = {
    id: -1,
    name: '',
    email: '',
    token: '',
    role: 'user'
  }
  constructor(
    private router : Router,
    private notificationService : NotificationService
  ) { 
  }



  getUserConnexion() {
    // requeter api pour checker le token si tocken il y a
    const isConnected = false;
    if ( isConnected ) {
      this.router.navigate(['/accueil']);
    } else {
      this.notificationService.showNotification('Veuillez vous connecter' , 'error' , 'default');
      this.router.navigate(['/login'])
    }
  }



}
