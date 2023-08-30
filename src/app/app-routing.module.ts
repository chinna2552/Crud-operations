import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { PagesComponent } from './pages/pages.component';
import { LocalstorageComponent } from './localstorage/localstorage.component';


const routes: Routes = [
  { path: '', component: LocalstorageComponent, pathMatch: 'full'  },
  { path: 'RegistrationForms', component: RegistrationFormComponent },
  { path: 'Customer', component: PagesComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }