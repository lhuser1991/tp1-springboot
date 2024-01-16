import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../service/categorie/categorie.service';
import { Categorie } from '../model/categorie';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-categorie-list',
  templateUrl: './dashboard-categorie-list.component.html',
  styleUrls: ['./dashboard-categorie-list.component.css']
})
export class DashboardCategorieListComponent implements OnInit{

  listCategorie: Categorie[] = [];  
  title: string = "Liste des catégories";

  constructor(private categorieService: CategorieService, private router: Router) {

  }

  ngOnInit(): void {
    this.getAllCategorie();
  }

  getAllCategorie() {
    this.categorieService.getAllCategorie().subscribe(
      {
        next: resp => {
          this.listCategorie = resp;
        }
      }
    )
  }

  updateCategorie(idCategorie: number) {
    this.router.navigate(['dashboard/categorie/display', idCategorie]);
  }

  deleteCategorie(idCategorie: number) {
    console.log(idCategorie)
    this.categorieService.deleteCategorie(idCategorie).subscribe();
    this.router.navigate(['dashboard']);
    console.log("ohe")
  }

  goToCreateCategorie() {
    this.router.navigate(['dashboard/categorie/create']);
  }

  goToDashboard() {
    this.router.navigate(['dashboard']);
  }

}
