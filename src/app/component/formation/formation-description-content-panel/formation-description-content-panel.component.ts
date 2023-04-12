import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserRole} from "../../../_models/User/role";
import {Formation} from "../../../_models/Formations/Formation";


@Component({
  selector: 'app-formation-description-content-panel',
  templateUrl: './formation-description-content-panel.component.html',
  styleUrls: ['./formation-description-content-panel.component.sass']
})
export class FormationDescriptionContentPanelComponent implements OnInit {
  @Input() item!: Formation;
  @Input() mode?: UserRole;
  tempsdescription : string = ''

  hasselect: boolean = false

  constructor() {
  }

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
  @Output() asselect = new EventEmitter<boolean>()
  @Output() sendDescription = new EventEmitter<string>()

  valide(){
    this.sendDescription.emit(this.tempsdescription)
    this.hasselect = false
    this.asselect.emit(this.hasselect)
  }
  cancel(){
    this.tempsdescription = ''
    this.hasselect = false
    this.asselect.emit(this.hasselect)
  }

}
