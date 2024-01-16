import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  title: string = "Dashboard";

  constructor(private router: Router) {

  }

  ngOnInit(): void {
      
  }

  goToListPersonne() {
    this.router.navigate(['dashboard/personne']);
  }

  goToListCategorie() {
    this.router.navigate(['dashboard/categorie']);
  }

}
