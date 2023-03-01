import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'tw-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.sass']
})
export class AccueilPageComponent implements OnInit {
  public isAsc : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  sortList() {
    if (this.isAsc){
      //callsortfunction
      this.isAsc = false;
    } else {
      //callsortfunction
      this.isAsc = true;
    }
  }
}
