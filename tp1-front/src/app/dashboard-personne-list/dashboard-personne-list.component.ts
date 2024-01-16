import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';
import { Router } from '@angular/router';
import { PersonneService } from '../service/personne/personne.service';

@Component({
  selector: 'app-dashboard-personne-list',
  templateUrl: './dashboard-personne-list.component.html',
  styleUrls: ['./dashboard-personne-list.component.css']
})
export class DashboardPersonneListComponent implements OnInit{

  title = "Liste des personnes";
  listPersonne: Personne[] = [];

  constructor(private router: Router, private personneService: PersonneService) {

  }

  ngOnInit(): void {
    this.getAllPersonne();
  }

  getAllPersonne() {
    this.personneService.getAllPersonne().subscribe(
      {
        next: resp => {
          this.listPersonne = resp;
        }
      }
    )
  }

  updatePersonne(idPersonne: number) {
    this.router.navigate(['dashboard/personne/display', idPersonne]);
  }

  deletePersonne(idPersonne: number) {
    this.personneService.deletePersonne(idPersonne).subscribe();
    this.router.navigate(['dashboard']);
  }

  goToDashboard() {
    this.router.navigate(['dashboard']);
  }

  goToCreatePersonne() {
    this.router.navigate(['dashboard/personne/create']);
  }

}
