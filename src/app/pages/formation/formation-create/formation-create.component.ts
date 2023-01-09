import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chapitre } from 'src/app/_models/Chapitres/Chapitre';
import { Exo } from 'src/app/_models/Exos/Exo';
import { Formation } from 'src/app/_models/Formations/Formation';
import { NotificationService } from 'src/app/_services/ux/notification.service';
import { fakeFormation } from 'src/assets/fake-db/Formations/formation';

@Component({
  selector: 'tw-formation-create',
  templateUrl: './formation-create.component.html',
  styleUrls: ['./formation-create.component.sass']
})
export class FormationCreatePageComponent implements OnInit {
  selectedExo? : Exo;  
  creatingFormation : Formation = {
    id: 0, // sql
    name: '',
    creatorId: 0, // api
    description: '',
    progress: 0,
    chapitres: []
  }
  constructor(
    private notificationService : NotificationService,
    private router : Router
    ) {
      this.onAddChapitre();
    }

  ngOnInit(): void {
  }
  /*#region formation*/
  onAddFormation() {
    try {
      if ( !this.checkFormationCompliance() )
        return;
      this.creatingFormation.id = fakeFormation.reduce( (prev , curr ) => prev.id < curr.id ? curr : prev).id + 1;
      fakeFormation.push( this.creatingFormation );
      this.notificationService.showNotification('Successfully created formation' , 'success');
      this.router.navigate(['accueil']);
    } catch ( $e ) {
      this.notificationService.showNotification('Erreur dans la création de la formation.\n Veuillez réessayer' , 'error');
    }
  }
  checkFormationCompliance() : boolean {
    const foundEmptyChapter : Chapitre | undefined = this.creatingFormation.chapitres.find( chap => chap.exos.length === 0 );
    if ( this.creatingFormation.name.trim().length == 0) {
      this.notificationService.showNotification('Veuillez entrer un nom de formation' , 'warning');
      return false
    } else if ( this.creatingFormation.chapitres.length === 0 ) {
      this.notificationService.showNotification('Veuillez créer à minima 1 chapitre et 1 exercice.' , 'warning');
      return false;
    } else if ( foundEmptyChapter ) {
      this.notificationService.showNotification(`Ne laissez pas de chapitres sans exercices. Voir ${foundEmptyChapter.name}.` , 'warning');
      return false;
    }
    return true;
  }
  /*#endregion*/

  onAddChapitre() {
    const idChapitre = this.creatingFormation.chapitres.length + 1;
    this.creatingFormation.chapitres.push({
      id: 0,
      name: `Chapitre ${idChapitre}`,
      exos: [{
        id: 1,
        name: `Exo 1`,
        content : '',
        answer : ''
      } as Exo]
    } as Chapitre )
  }

  onAddExo( chapitre : Chapitre ) {
    const idExo = chapitre.exos.length + 1;
    chapitre.exos.push({
      id: idExo,
      name: `Exo ${idExo}`,
      content : '',
      answer : ''
    }  as Exo )
  }

  onSelectExo( exo : Exo ) {
    this.selectedExo = exo;
  }

  onDeleteChapitre( chapitre : Chapitre ) {
    this.creatingFormation.chapitres.splice( this.creatingFormation.chapitres.indexOf(chapitre) , 1 );
    this.creatingFormation.chapitres.forEach( ( chapitre , index ) => {
      chapitre.name = `Exo ${index+1}`;
    }); 
  } 

  onDeleteExo( exo : Exo , chapitre :  Chapitre ) {
    chapitre.exos.splice( chapitre.exos.indexOf(exo) , 1 );
    chapitre.exos.forEach( ( exo , index ) => {
      exo.name = `Exo ${index+1}`;
    }); 
  } 



}
