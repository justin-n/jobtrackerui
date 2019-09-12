import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TimeEntryComponent } from './components/time-entry/time-entry.component';
import { LoginComponent } from './components/login/login.component';
import { TestLinksComponent } from './components/test-links/test-links.component';

import { HeaderTextService } from './services/header-text.service';

@NgModule({
  declarations: [
    AppComponent,
    TimeEntryComponent,
    LoginComponent,
    TestLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HeaderTextService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
