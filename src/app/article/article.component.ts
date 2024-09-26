import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [NgIf, FormsModule, CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

  article = {

    title: 'Titre de l\'article',

    author: 'John Doe',

    content: 'Voici le contenu de l\'article.',

    image: 'https://via.placeholder.com/350x150',

    isPublished: true,

    comment: ''

  };


  togglePublication(): void {

    this.article.isPublished = !this.article.isPublished;

  }

  articles = [

    { 

      title: 'Angular 16: Les nouveautés', 

      author: 'Alice', 

      content: 'Les nouveautés d\'Angular 16 incluent...', 

      image: 'https://via.placeholder.com/350x150',

      isPublished: true, 

      comment: '', 

      likes: 120 

    },

    { 

      title: 'Développer une API REST', 

      author: 'Bob', 

      content: 'Développer une API REST nécessite...', 

      image: 'https://via.placeholder.com/350x150',

      isPublished: false, 

      comment: '', 

      likes: 75 

    },

    { 

      title: 'Pourquoi TypeScript est essentiel ?', 

      author: 'Charlie', 

      content: 'TypeScript apporte de la robustesse...', 

      image: 'https://via.placeholder.com/350x150',

      isPublished: true, 

      comment: '', 

      likes: 200 

    }

  ];

  hasPublishedArticles(): boolean {
    return this.articles.some(article => article.isPublished);
  }

}
