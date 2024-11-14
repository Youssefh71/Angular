import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { Article } from '../models/article.model';
import { ApiService } from '../service/api.service';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [RouterLink, AsyncPipe, NgIf],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {

  articles: ApiService = inject(ApiService);

  articleId!: number;
  article$: Observable<Article> = this.articles.getArticleById(this.articleId);
  route: ActivatedRoute = inject(ActivatedRoute);

}
