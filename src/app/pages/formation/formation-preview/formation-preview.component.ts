import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/_services/ux/notification.service';

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
