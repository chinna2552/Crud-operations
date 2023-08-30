import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PagesComponent } from './pages/pages.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showFormsButton = false;
  showFormsSubMenu = false;
  showRegistrationForm = false;
  showPages = false;

  constructor(private router: Router) {}

  toggleFormButton() {
    this.showFormsSubMenu = !this.showFormsSubMenu;
    this.showRegistrationForm = false;
    this.showPages = false;
    
  }


  toggleRegistrationFormButton() {
    this.showFormsSubMenu= true;
    this.showRegistrationForm = true;
    this.showPages = false;
    this.router.navigate(['/RegistrationForms']);
  }

  toggleLoginButton() {
    this.showFormsSubMenu = true;
    this.showRegistrationForm = false;
    this.showPages = true;
    this.router.navigate(['/Customer']);
  }
  navigateToHomepage() {
    this.showFormsSubMenu = false;
    this.showRegistrationForm = false;
    this.showPages = false;
    this.router.navigate(['/'])
  }
  
}