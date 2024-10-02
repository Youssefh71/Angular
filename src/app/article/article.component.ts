import { CommonModule, NgIf } from '@angular/common';
import { Component, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService} from '../shared/article.service';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [NgIf, FormsModule, CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent { 
  articles: Article[] = inject(ArticleService).getArticles(); // Utiliser un tableau d'articles
  articleId!: number; // ID de l'article sélectionné


  constructor(
    private router: Router, 
  ) {}

  ngOnInit(): void {
    
  }
   


  hasPublishedArticles(): boolean {
    // Vérifie si un des articles est publié
    return this.articles.some(article => article.isPublished);
  }
  
  goToArticlesDetail(id: number): void {
    this.router.navigate(['/article', id]);
  }

  // Méthode mise à jour pour basculer la publication d'un article
  togglePublication(id: number): void {
    const article = this.articles.find(article => article.id === id);
    if (article) {
      article.isPublished = !article.isPublished;
    }
  }
  
}
