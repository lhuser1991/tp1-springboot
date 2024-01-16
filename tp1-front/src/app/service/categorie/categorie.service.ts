import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from 'src/app/model/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private baseUrl = 'http://localhost:8080/tp1/categorie'

  constructor(private httpClient: HttpClient) { }

  createCategorie(categorie: Categorie): Observable<Categorie> {
    return this.httpClient.post<Categorie>(`${this.baseUrl}/create`, categorie);
  }

  getAllCategorie(): Observable<Categorie[]> {
    return this.httpClient.get<Categorie[]>(`${this.baseUrl}/list`);
  }

  getCategorieById(idCategorie: number): Observable<Categorie> {
    return this.httpClient.get<Categorie>(`${this.baseUrl}/${idCategorie}`);
  }

  deleteCategorie(idCategorie: number): Observable<Categorie> {
    return this.httpClient.get<Categorie>(`${this.baseUrl}/delete/${idCategorie}`);
  }
}
