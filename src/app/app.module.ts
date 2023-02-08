import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilPageComponent } from './pages/accueil/accueil.component';
import { FormationPreviewComponent } from './component/formation/formation-preview/formation-preview.component';
import { FormationPreviewListComponent } from './component/formation/formation-preview-list/formation-preview-list.component';
import { FormationComponent } from './component/formation/formation/formation.component';
import { ListAComponent } from './component/list/list-a/list-a.component';
import { NavbarAComponent } from './component/navbar/navbar-a/navbar-a.component';
import { FooterAComponent } from './component/footer/footer-a/footer-a.component';
import { HeaderAComponent } from './component/header/header-a/header-a.component';
import { LoginComponent } from './pages/user/login/login.component';
import { ProfilComponent } from './pages/user/profil/profil.component';
import { FormationCreatePageComponent } from './pages/formation/formation-create/formation-create.component';
import { FormationCorrectionPageComponent } from './pages/formation/formation-correction/formation-correction.component';
import 'primeng';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { CommonModule, registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormationContentPanelComponent } from './component/formation/formation-content-panel/formation-content-panel.component';
import { FormationPreviewPageComponent } from './pages/formation/formation-preview/formation-preview.component';
import { FormationPageComponent } from './pages/formation/formation/formation.component';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CapitalizePipe } from './_pipes/string/capitalize.pipe';
registerLocaleData(fr);
@NgModule({
  declarations: [
    AppComponent,
    AccueilPageComponent,
    FormationPreviewComponent,
    FormationPreviewListComponent,
    FormationComponent,
    ListAComponent,
    NavbarAComponent,
    FooterAComponent,
    HeaderAComponent,
    LoginComponent,
    ProfilComponent,
    FormationCreatePageComponent,
    FormationCorrectionPageComponent,
    FormationContentPanelComponent,
    FormationPreviewPageComponent,
    FormationPageComponent,
    CapitalizePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzListModule,
    NzMenuModule,
    NzMessageModule,
    NzProgressModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzPopconfirmModule,
    NzToolTipModule,
    NzFormModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    NzCardModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: fr_FR }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
