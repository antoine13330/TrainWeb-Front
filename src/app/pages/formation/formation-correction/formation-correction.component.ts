import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chapitre } from 'src/app/_models/Chapitres/Chapitre';
import { Exo } from 'src/app/_models/Exos/Exo';
import { Formation } from 'src/app/_models/Formations/Formation';
import { NotificationService } from 'src/app/_services/ux/notification.service';
import { fakeFormation } from 'src/assets/fake-db/Formations/formation';
@Component({
  selector: 'tw-formation-correction',
  templateUrl: './formation-correction.component.html',
  styleUrls: ['./formation-correction.component.sass']
})
export class FormationCorrectionPageComponent implements OnInit {
  selectedExo? : Exo;

  constructor(
    private notificationService : NotificationService,
    private router : Router
    ) {  }
  ngOnInit(): void {
  }

  onSelectExo( exo : Exo ) {
    this.selectedExo = exo;
  }

}


