import { Component, OnInit } from '@angular/core';
import { NavLink } from 'src/app/_models/Navigation/link';
import { NavlinksService } from 'src/app/_services/navigation/navlinks.service';
import {AuthService} from "../../../_services/auth.service";

@Component({
  selector: 'tw-navbar-a',
  templateUrl: './navbar-a.component.html',
  styleUrls: ['./navbar-a.component.sass']
})
export class NavbarAComponent implements OnInit {

  public navLinks!: NavLink[];

  public logoUrl : string = '/assets/img/logo/trainweb.png';

  public isDisconnected : boolean = false;


  isLoggedIn : boolean | undefined
  constructor(
    private navlinksService : NavlinksService,
    private _authService : AuthService
  ) {}

  ngOnInit(): void {
    this.navLinks = this.navlinksService.links

    this._authService.isLoggedOn$.subscribe( loggedIn => {
      this.isLoggedIn = loggedIn
      this.navLinks.map( l => {
        if ( loggedIn )
          l.isAuthorized = true;
        else if ( l.authorization === 0 )
          l.isAuthorized = true;
        else
          l.isAuthorized = false;
        return l;
      })
    })
  }

  public logout()
  {
    this._authService.logout();
    this.isDisconnected = true;
  }
}
