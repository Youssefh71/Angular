import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient);
  private readonly _API_URL = "http://localhost:3000/articles/";



 // Méthode pour récupérer tous les articles (Observable)
 getArticles(): Observable<Article[]> {
  return this._http.get<Article[]>(this._API_URL);
}

// Méthode pour récupérer un article par son ID (Observable)
getArticleById(id: number): Observable<Article> {
  return this._http.get<Article>(this._API_URL + `/${id}`);
}

}
