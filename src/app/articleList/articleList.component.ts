import { CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ArticleService } from '../shared/article.service';
import { Article } from '../models/article.model';
import { Observable } from 'rxjs';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-articleList-component',
  standalone: true,
  imports: [NgIf, FormsModule, CommonModule, RouterLink],
  templateUrl: './articleList.component.html',
  styleUrl: './articleList.component.scss'
})
export class ArticleListComponent {
  @Input() articleChild!: Article;
  @Output() notifyLike: EventEmitter<string> = new EventEmitter<string>();

  articles: Article[] = inject(ArticleService).getArticles(); // Utiliser un tableau d'articles
  articlesApi$!: Observable<Article[]>; // Utilisation de l'Observable
  articleId!: number; // ID de l'article sélectionné
  article$!: Observable<Article>; // Observable pour un article spécifique
  apiService = inject(ApiService);


  ngOnInit() {
    
    this.articlesApi$ = this.apiService.getArticles();

  }

  // Méthode mise à jour pour basculer la publication d'un article
  togglePublication(id: number): void {
    const article = this.articles.find(article => article.id === id);
    if (article) {
      article.isPublished = !article.isPublished;
    }
  }

  sendNotification(title: string) {

    this.notifyLike.emit(`${title}`);

  }

}


