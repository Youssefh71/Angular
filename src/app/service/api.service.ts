import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  http = inject(HttpClient);
  router: Router = inject(Router);



 // Méthode pour récupérer tous les articles (Observable)
 getArticles(): Observable<Article[]> {
  return this.http.get<Article[]>('http://localhost:3000/articles');
}

// Méthode pour récupérer un article par son ID (Observable)
getArticleById(id: number): Observable<Article> {
  return this.http.get<Article>(`http://localhost:3000/articles/${id}`);
}

}
