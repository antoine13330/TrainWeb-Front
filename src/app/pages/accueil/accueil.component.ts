import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'tw-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.sass']
})
export class AccueilPageComponent implements OnInit {

  constructor() {}

  public username: any;

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    console.log(this.username);
  }

}
