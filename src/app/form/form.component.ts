import { Component } from '@angular/core';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  user: { name: string; email: string; password: string } ={
    name: '',
    email: '',
    password: '',
  };
  onSubmit() {
    console.log('Form submitted:', this.user);
  }
}






