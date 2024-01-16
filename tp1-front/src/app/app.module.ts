import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonneComponent } from './personne/personne.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DashboardPersonneListComponent } from './dashboard-personne-list/dashboard-personne-list.component';
import { DashboardCategorieListComponent } from './dashboard-categorie-list/dashboard-categorie-list.component';
import { DashboardCategorieFormComponent } from './dashboard-categorie-form/dashboard-categorie-form.component';
import { DashboardPersonneFormComponent } from './dashboard-personne-form/dashboard-personne-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PersonneComponent,
    DashboardComponent,
    DashboardPersonneListComponent,
    DashboardCategorieListComponent,
    DashboardCategorieListComponent,
    DashboardCategorieFormComponent,
    DashboardPersonneFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
