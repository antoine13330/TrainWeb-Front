import { Injectable } from '@angular/core';
import { NzMessageDataOptions, NzMessageService } from 'ng-zorro-antd/message';
import { NotificationDurationType } from 'src/app/_models/ux/Notification/notificationDurationType';
import { NotificationType } from 'src/app/_models/ux/Notification/notificationType';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private launchedNotification? : string;
  constructor(private messageService : NzMessageService) { 
  }

  showNotification(text: string, type?: NotificationType , durationType? : NotificationDurationType ) {
    let options : NzMessageDataOptions;
    if (durationType === 'default' || !durationType)
      options = { nzDuration : 1500 , nzPauseOnHover : true};
    else
      options = { nzDuration : 0 , nzPauseOnHover : true};

    if (type)
      this.launchedNotification = this.messageService[type](text , options).messageId;
    else
      this.launchedNotification = this.messageService.info(text , options).messageId;
  }

  hideNotification() {
    if ( this.launchedNotification )
      this.messageService.remove(this.launchedNotification);
  }
}
