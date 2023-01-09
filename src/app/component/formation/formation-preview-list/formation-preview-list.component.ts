import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/_models/Formations/Formation';
import { fakeFormation } from 'src/assets/fake-db/Formations/formation';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/_services/ux/notification.service';
@Component({
  selector: 'tw-formation-preview-list',
  templateUrl: './formation-preview-list.component.html',
  styleUrls: ['./formation-preview-list.component.sass']
})
export class FormationPreviewListComponent implements OnInit {
  formations : Formation[] = [...fakeFormation];
  constructor(
    private router : Router,
    private notificationService : NotificationService
    ) { }

  ngOnInit(): void {
  }

  onChooseFormation( formation : Formation ) {
    this.notificationService.showNotification("Opening information" , "loading" , "manual");
    this.router.navigate([`formationPreview/${formation.id}`])
  }

}
