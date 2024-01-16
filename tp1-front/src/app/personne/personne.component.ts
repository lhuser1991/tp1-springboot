import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../service/personne/personne.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit{

  title = "Affichage des personnes";
  listPersonne: Personne[] = [];

  constructor(private personneService: PersonneService) {

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

}
