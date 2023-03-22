import { Component, OnInit } from '@angular/core';
import {Formation} from "../../_models/Formations/Formation";
import {fakeFormation} from "../../../assets/fake-db/Formations/formation";
@Component({
  selector: 'tw-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.sass']
})
export class AccueilPageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
