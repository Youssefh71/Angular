import { Component, inject, OnInit } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { ArticleService } from '../shared/article.service';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [ArticleComponent, RouterLink],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent implements OnInit {

  articleId!: number;
  article!: Article;
  router: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);
  articles: ArticleService = inject(ArticleService);

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('articleId'));
      try {
        this.article = this.articles.getArticleById(this.articleId);
      }
      catch (error) {
        this.router.navigate(['/**']);
      }
    });
  }
}
