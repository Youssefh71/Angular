import { Component, inject } from '@angular/core';
import { ArticleComponent } from "../article/article.component";
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { SignupFormComponent } from '../signup-form/signup-form.component';
import { Article } from '../models/article.model';
import { ArticleService } from '../shared/article.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ArticleComponent, ContactFormComponent, SignupFormComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  articleData: ArticleService = inject(ArticleService);
  articles: Article[] = this.articleData.getArticles();

  hasPublishedArticles(): boolean {
    // Vérifie si un des articles est publié
    return this.articles.some(article => article.isPublished);
  }

}
