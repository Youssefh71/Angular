import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { ArticleService } from '../shared/article.service';
import { Article } from '../models/article.model';
import { HttpClient } from '@angular/common/http';

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
  router: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);
  articles: ArticleService = inject(ArticleService);
  http = inject(HttpClient);


  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('articleId'));
         this.article = this.articles.getArticleById(this.articleId);
         this.getArticleById(this.articleId);
      
    });
  }

 // Méthode pour récupérer un article par son ID
 getArticleById(id: number): void {
  this.http.get<Article>(`http://localhost:3000/articles/${id}`).subscribe({
    next: (article) => {
      this.article = article;
    },
    error: () => {
      // Rediriger vers une page d'erreur en cas d'échec
      this.router.navigate(['**']);
    }
  });
}


}
