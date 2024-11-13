import { Component, inject } from '@angular/core';
import { ArticleListComponent } from "../articleList/articleList.component";
import { Article } from '../models/article.model';
import { ArticleService } from '../shared/article.service';
import { PokemonComponent } from '../pokemon/pokemon.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ArticleListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  articleData: ArticleService = inject(ArticleService);
  articles: Article[] = this.articleData.getArticles();
  likeNotify: string = '';

  hasPublishedArticles(): boolean {
    // Vérifie si un des articles est publié
    return this.articles.some(article => article.isPublished);
  }

  //(toto: string) parametre de fonction
  handleNotification(toto: string) {

    this.likeNotify = (`${toto} vient d'être liké`);

  }

}
