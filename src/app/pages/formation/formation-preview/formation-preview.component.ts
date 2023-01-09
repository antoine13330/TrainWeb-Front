import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subscription } from 'rxjs';
import { Formation } from 'src/app/_models/Formations/Formation';
import { LoadingState } from 'src/app/_models/Utilitaries/loading';
import { NotificationService } from 'src/app/_services/ux/notification.service';
import { fakeFormation } from 'src/assets/fake-db/Formations/formation';

@Component({
  selector: 'tw-formation-preview',
  templateUrl: './formation-preview.component.html',
  styleUrls: ['./formation-preview.component.sass']
})
export class FormationPreviewPageComponent implements OnInit {
 
  constructor(
    private route: ActivatedRoute,
    private notificationService : NotificationService
  ) {
   
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }


  
}
