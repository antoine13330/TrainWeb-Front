import { Component, Input, OnInit } from '@angular/core';
import { Exo } from 'src/app/_models/Exos/Exo';
import { UserRole } from 'src/app/_models/User/role';

@Component({
  selector: 'tw-formation-content-panel',
  templateUrl: './formation-content-panel.component.html',
  styleUrls: ['./formation-content-panel.component.sass']
})
export class FormationContentPanelComponent implements OnInit {
  @Input() item!: Exo;
  @Input() type!: 'exo';
  @Input() mode?: UserRole;
  constructor() { }

  ngOnInit(): void {
  }


  getViewByRole(): number {
    switch (this.mode) {
      case 'user':
        return 0
      case 'admin':
        return 1
      case 'teacher':
        return 1
      default:
        return 2;
    }
  }
}
