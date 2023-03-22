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
  public isAsc : boolean = true;
  formations : Formation[] = [...fakeFormation];
  constructor(
    private router : Router,
    private notificationService : NotificationService
    ) { }

  ngOnInit(): void {
    this.sortList()
  }

  onChooseFormation( formation : Formation ) {
    this.notificationService.showNotification("Opening information" , "loading" , "manual");
    this.router.navigate([`formationPreview/${formation.id}`])
  }

  sortList() {
    this.isAsc = !this.isAsc;
    console.log(this.isAsc)
    if (this.isAsc) {
      let sortedFormations: Formation[] = this.formations.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      console.log(sortedFormations)
    } else {
      let sortedFormations: Formation[] = this.formations.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      });
      console.log(sortedFormations)
    }
  }

}
