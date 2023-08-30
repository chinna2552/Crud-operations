import { Component } from '@angular/core';

@Component({
  selector: 'app-localstorage',
  templateUrl: './localstorage.component.html',
  styleUrls: ['./localstorage.component.css']
})
export class LocalstorageComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  onSubmit() {
    console.log('Form submitted');
    console.log('Username:', this.username);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}