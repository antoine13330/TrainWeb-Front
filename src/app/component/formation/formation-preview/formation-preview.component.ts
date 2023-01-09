import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Formation } from 'src/app/_models/Formations/Formation';
import { LoadingState } from 'src/app/_models/Utilitaries/loading';
import { NotificationService } from 'src/app/_services/ux/notification.service';
import { fakeFormation } from 'src/assets/fake-db/Formations/formation';

@Component({
  selector: 'tw-formation-preview-component',
  templateUrl: './formation-preview.component.html',
  styleUrls: ['./formation-preview.component.sass']
})
export class FormationPreviewComponent implements OnInit {

  private routeSub: Subscription;
  openedFormation?: Formation;
  displayState: LoadingState = 'loading';
  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private notificationService : NotificationService
  ) {
    this.routeSub = this.route.params.subscribe(params => {
      this.openedFormation = (fakeFormation.find(f => f.id == params['id']) as Formation);
      if (this.openedFormation) {
        this.notificationService.hideNotification(); // à mettre quand le serveur aura répondu dans le subscribe ca mettra une notif de loading
        this.displayState = 'loaded';
      } else {
        this.displayState = 'error';
        this.notificationService.showNotification('Erreur dans le chargement de la formation' , 'error');
      }
    });
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  onStartFormation() {
    this.router.navigate([`formation`], { state : { formation : JSON.stringify(this.openedFormation)}});
  }

}
