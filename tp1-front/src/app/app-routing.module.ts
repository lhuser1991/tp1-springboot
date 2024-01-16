import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonneComponent } from './personne/personne.component';
import { DashboardPersonneListComponent } from './dashboard-personne-list/dashboard-personne-list.component';
import { DashboardCategorieListComponent } from './dashboard-categorie-list/dashboard-categorie-list.component';
import { DashboardCategorieFormComponent } from './dashboard-categorie-form/dashboard-categorie-form.component';
import { DashboardPersonneFormComponent } from './dashboard-personne-form/dashboard-personne-form.component';

const routes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'personne', component: PersonneComponent},
  {path: 'dashboard/personne', component: DashboardPersonneListComponent},
  {path: 'dashboard/personne/display/:idPersonne', component: DashboardPersonneFormComponent},
  {path: 'dashboard/personne/create', component: DashboardPersonneFormComponent},
  {path: 'dashboard/categorie', component: DashboardCategorieListComponent},
  {path: 'dashboard/categorie/display/:idCategorie', component: DashboardCategorieFormComponent},
  {path: 'dashboard/categorie/create', component: DashboardCategorieFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
