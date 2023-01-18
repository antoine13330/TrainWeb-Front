import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tw-navbar-b',
  templateUrl: './navbar-b.component.html',
  styleUrls: ['./navbar-b.component.sass']
})
export class NavbarBComponent implements OnInit {
  public logoUrl : string = '/assets/img/logo/trainweb.png';


  constructor() { }

  ngOnInit(): void {
  }

}
