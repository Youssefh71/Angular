import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.scss'
})
export class DirectiveComponent {

  title : string = "Bonjour";
  isAdmin: boolean = true;

  toggleAdminStatus(): void {
    this.isAdmin = !this.isAdmin;
  }
  

}
