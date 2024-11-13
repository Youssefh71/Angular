import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { Article } from '../models/article.model';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent implements OnInit {

  articleId!: number;
  article!: Article;
  route: ActivatedRoute = inject(ActivatedRoute);
  articles: ApiService = inject(ApiService);

  ngOnInit(): void {
    // Souscription à l'Observable dans ngOnInit
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('articleId'));

      // Souscrire à l'Observable retourné par getArticleById
      this.articles.getArticleById(this.articleId).subscribe({
        next: (article) => {
          this.article = article;  
        },
        error: (err) => {
          console.error('Erreur lors de la récupération de l\'article:', err);
        }
      });
    });
  }

}
