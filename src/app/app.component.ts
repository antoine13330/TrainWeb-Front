import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'tw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'TrainWeb';
  private currentUrl : string = '';
  public isFullScreenPage : boolean = false;
  constructor(
    private router : Router,
  ) {

  }

  ngOnInit(): void {
    this.currentUrl = this.router.url;
    this.router.events.subscribe({
      next : ( event ) => {
          this.onRouterUpdate();
      },
    })
  }
  onRouterUpdate() {
    this.currentUrl = this.router.url;
    this.updatePageFullscreen();
  }

  updatePageFullscreen() {
    this.isFullScreenPage = this.currentUrl.includes('sign');
  }
}
