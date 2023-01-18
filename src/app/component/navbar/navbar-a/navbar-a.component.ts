import { Component, OnInit } from '@angular/core';
import { NavLink } from 'src/app/_models/Navigation/link';
import { NavlinksService } from 'src/app/_services/navigation/navlinks.service';

@Component({
  selector: 'tw-navbar-a',
  templateUrl: './navbar-a.component.html',
  styleUrls: ['./navbar-a.component.sass']
})
export class NavbarAComponent implements OnInit {
  public navLinks : NavLink[];
  public logoUrl : string = '/assets/img/logo/trainweb.png';

  constructor(private navlinksService : NavlinksService) {
    this.navLinks = this.navlinksService.links;
  }

  ngOnInit(): void {
  }









}
