import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie';
import { CategorieService } from '../service/categorie/categorie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-categorie-form',
  templateUrl: './dashboard-categorie-form.component.html',
  styleUrls: ['./dashboard-categorie-form.component.css']
})
export class DashboardCategorieFormComponent implements OnInit{

  title: string = "Ajout d'une catégorie";

  categorie: Categorie = new Categorie(0, "");

  idCategorie: number = 0;
  
  constructor(private categorieService: CategorieService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.idCategorie = this.route.snapshot.params['idCategorie'];
    if(this.idCategorie != null) {
      this.getCategorieById(this.idCategorie);
    }
  }

  createCategorie(categorie: Categorie) {
    this.categorieService.createCategorie(categorie).subscribe();
  }

  getCategorieById(idCategorie: number) {
    this.categorieService.getCategorieById(idCategorie).subscribe(
      {
        next: resp => {
          this.categorie = resp;
        }
      }
    )
  }

  onSubmit() {
    this.createCategorie(this.categorie);
    this.router.navigate(['dashboard/categorie']);
  }
}
