import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from '../service/categorie/categorie.service';
import { PersonneService } from '../service/personne/personne.service';
import { Personne } from '../model/personne';
import { Categorie } from '../model/categorie';

@Component({
  selector: 'app-dashboard-personne-form',
  templateUrl: './dashboard-personne-form.component.html',
  styleUrls: ['./dashboard-personne-form.component.css']
})
export class DashboardPersonneFormComponent implements OnInit{

  title = "Ajout d'un produit";
  titleButton = "Ajouter"
  titleButtonColor = "btn btn-success"
  listCategorie: Categorie[] = [];
  idPersonne: number = 0;
  personne: Personne = new Personne(0,"","","", "",0);

  constructor(private route: ActivatedRoute, private router: Router, private categorieService: CategorieService, private personneService: PersonneService) {

  }

  ngOnInit(): void {
    this.idPersonne = this.route.snapshot.params['idPersonne'];
    this.getAllCategorie();
    if(this.idPersonne != null) {
      this.title = "Modification d'un produit";
      this.titleButton = "Modifier";
      this.titleButtonColor = "btn btn-warning"
      this.getPersonneById(this.idPersonne);
    }
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

  getPersonneById(idPersonne: number) {
    this.personneService.getPersonneById(idPersonne).subscribe(
      {
        next: resp => {
          this.personne = resp;
          console.log(this.personne)
        }
      }
    )
  }

  createPersonne(personne: Personne) {
    this.personneService.createPersonne(personne).subscribe();
  }

  onSubmit() {
    this.createPersonne(this.personne);
    this.router.navigate(['dashboard/personne']);
  }
}
