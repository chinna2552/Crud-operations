import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalstorageComponent } from './localstorage/localstorage.component';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { PagesComponent } from './pages/pages.component';
import {MatMenuModule} from '@angular/material/menu';
import{ HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    LocalstorageComponent,
    RegistrationFormComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    HttpClientModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }