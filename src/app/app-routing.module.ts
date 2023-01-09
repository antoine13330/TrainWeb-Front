import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationComponent } from './component/formation/formation/formation.component';
import { AccueilPageComponent } from './pages/accueil/accueil.component';
import { FormationCreatePageComponent } from './pages/formation/formation-create/formation-create.component';
import { FormationPreviewPageComponent } from './pages/formation/formation-preview/formation-preview.component';
import { FormationPageComponent } from './pages/formation/formation/formation.component';
import { LoginComponent } from './pages/user/login/login.component';
const routes: Routes = [
  { path : '' , component : AccueilPageComponent},
  { path : 'accueil' , component : AccueilPageComponent },
  { path : 'formationPreview/:id' , component : FormationPreviewPageComponent},
  { path : 'formationCreate' , component : FormationCreatePageComponent},
  { path : 'formation' , component : FormationPageComponent},
  { path : 'sign/:mode' , component : LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
