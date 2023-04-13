import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../_services/auth.service";
import {FormationUserProgressService} from "../../../_services/formationProgress/formation-user-progress.service";
import {Formation} from "../../../_models/Formations/Formation";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-mes-formation',
  templateUrl: './mes-formations.component.html',
  styleUrls: ['./mes-formations.component.sass']
})
export class MesFormationsComponent implements OnInit {
  public data: any;
  constructor(
    private formaProgressService: FormationUserProgressService
  ) {
    this.formaProgressService.getFormaUserProgress().subscribe(
      (response) => {
        console.log(response.formuserprogress)
        this.data = response.formuserprogress.map((data: any) => data.idFormation)
      }
    );
  }

  ngOnInit(): void {}

}
