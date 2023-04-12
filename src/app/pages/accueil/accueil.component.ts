import {Component, OnInit} from '@angular/core';
import {Formation} from "../../_models/Formations/Formation";
import {fakeFormation} from "../../../assets/fake-db/Formations/formation";
import {environment} from "../../../environments/environment";
import {AuthService} from "../../_services/auth.service";
import {HttpClient} from "@angular/common/http";
import {FormationService} from "../../_services/formation.service";
import {log} from "ng-zorro-antd/core/logger";

@Component({
  selector: 'tw-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.sass']
})
export class AccueilPageComponent implements OnInit {
  public isAsc : boolean = false;
  visible = false;
  formations : Formation[] = [];
  sortedFormations : Formation[] = [];
  searchValue: string = '';
  public data: any;

  constructor(
    private authService: AuthService,
    private httpClient: HttpClient,
    private formationService: FormationService,
  ) {
    this.formationService.getAllFormations().subscribe(
      (response) => {
        this.formations = this.sortedFormations = response.map((data: any) => data)
        log(this.formations)
        log(this.sortedFormations)
      }
    );
    this.sortList()
  }

  ngOnInit(): void {
  }

  sortList() {
    this.isAsc = !this.isAsc;
    log(this.formations)
    if (this.isAsc) {
      this.sortedFormations = this.formations.sort((a, b) => a.name.localeCompare(b.name))
    } else {
      this.sortedFormations = this.formations.sort((a, b) => b.name.localeCompare(a.name))

    }
    console.log(this.sortedFormations)
  }

  searchInList() {
    setTimeout(() => {
      this.formations.find(this.findFormations)

      console.log(this.searchValue)
    }, 1000)
  }

  findFormations(Formation: { name: string; }) {
    return Formation.name === '%'
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
