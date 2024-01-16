import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from 'src/app/model/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  private baseUrl = 'http://localhost:8080/tp1/personne'

  constructor(private httpClient: HttpClient) { }

  createPersonne(personne: Personne): Observable<Personne> {
    return this.httpClient.post<Personne>(`${this.baseUrl}/create`, personne);
  }

  getPersonneById(idPersonne: number): Observable<Personne> {
    return this.httpClient.get<Personne>(`${this.baseUrl}/${idPersonne}`);
  }

  getAllPersonne(): Observable<Personne[]> {
    return this.httpClient.get<Personne[]>(`${this.baseUrl}/list`);
  }

  deletePersonne(idPersonne: number): Observable<Personne> {
    return this.httpClient.get<Personne>(`${this.baseUrl}/delete/${idPersonne}`);
  }
}
