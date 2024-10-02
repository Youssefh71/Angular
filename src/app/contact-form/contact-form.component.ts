import { Component, ViewChild } from '@angular/core';
import { Message } from '../models/message.model';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  submitted = false;

  newMessage: Message = {
    lastname: "",
    firstname: "",
    email: ""    
  }

  onSubmit(): void {
    this.submitted = true;
    console.log(this.newMessage);
    
  }

}
