import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exo } from 'src/app/_models/Exos/Exo';
import { Formation } from 'src/app/_models/Formations/Formation';

@Component({
  selector: 'tw-formation-component',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.sass']
})
export class FormationComponent implements OnInit {
  formation! : Formation;
  choosenExo : Exo | null = null;
  constructor() {  
    this.formation = (  JSON.parse(history.state.formation) as Formation );
  }

  ngOnInit(): void {
  }

  onSelectExo(exo : Exo) {
    this.choosenExo = exo;
  }
}
