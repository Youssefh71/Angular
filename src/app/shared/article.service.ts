import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';



@Injectable({
  providedIn: 'root'
})

export class ArticleService {
  private articles: Article[] = [
    {
      id: 1,
      title: 'Angular 16: Les nouveautés',
      author: 'Alice',
      content: 'Les nouveautés d\'Angular 16 incluent...',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 120
    },
    {
      id: 2,
      title: 'Développer une API REST',
      author: 'Bob',
      content: 'Développer une API REST nécessite...',
      image: 'https://via.placeholder.com/350x150',
      isPublished: false,
      comment: '',
      likes: 75
    },
    {
      id: 3,
      title: 'Pourquoi TypeScript est essentiel ?',
      author: 'Charlie',
      content: 'TypeScript apporte de la robustesse...',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 200
    }
  ];

  constructor() { }

  getArticles(): Article[] {
    return this.articles;
  }

  getArticleById(id: number): Article {
    const article = this.articles.find(article => article.id === id);

    if (article === undefined) {
      throw new Error("aucun article trouvé");
    }
    return article;
  }
}
