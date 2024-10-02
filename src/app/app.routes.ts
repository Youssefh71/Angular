import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'article/:articleId', component: ArticlePageComponent },
    { path: '**', component: NotFoundComponent },
    { path: 'signUp', component: SignupFormComponent },
];
