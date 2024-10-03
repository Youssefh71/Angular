import { CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ArticleService } from '../shared/article.service';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [NgIf, FormsModule, CommonModule, RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  @Input() article!: Article;
  articles: Article[] = inject(ArticleService).getArticles(); // Utiliser un tableau d'articles
  articleId!: number; // ID de l'article sélectionné
   
  @Output() notifyLike: EventEmitter<string> = new EventEmitter<string>();
  
  ngOnInit(): void {

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


