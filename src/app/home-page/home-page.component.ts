import { Component } from '@angular/core';
import { ArticleComponent } from "../article/article.component";
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { SignupFormComponent } from '../signup-form/signup-form.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ArticleComponent, ContactFormComponent, SignupFormComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
