import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilPageComponent } from './pages/accueil/accueil.component';
import { FormationCreatePageComponent } from './pages/formation/formation-create/formation-create.component';
import { FormationPreviewPageComponent } from './pages/formation/formation-preview/formation-preview.component';
import { FormationPageComponent } from './pages/formation/formation/formation.component';
import { LoginComponent } from './pages/user/login/login.component';
import { MesFormationsComponent } from "./component/formation/mes-formations/mes-formations.component";
import { RegisterComponent } from "./pages/user/register/register.component";
import { ProfilComponent } from "./pages/user/profil/profil.component";

const routes: Routes = [
  { path : '' , component : AccueilPageComponent},
  { path : 'accueil' , component : AccueilPageComponent },
  { path : 'formationPreview/:id' , component : FormationPreviewPageComponent},
  { path : 'formationCreate' , component : FormationCreatePageComponent},
  { path : 'formationUser' , component : MesFormationsComponent},
  { path : 'formation' , component : FormationPageComponent},
  { path : 'sign/in' , component : LoginComponent },
  { path : 'sign/up' , component : RegisterComponent },
  { path : 'profil' , component : ProfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
