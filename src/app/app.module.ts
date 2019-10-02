import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TimeEntryComponent } from './components/time-entry/time-entry.component';
import { LoginComponent } from './components/login/login.component';
import { TestLinksComponent } from './components/test-links/test-links.component';

import { HeaderTextService } from './services/header-text.service';
import { JobTimeService } from './services/job-time.service';
import { WeekViewerComponent } from './components/week-viewer/week-viewer.component';
import { JobTimeViewerComponent } from './components/job-time-viewer/job-time-viewer.component';
import { SimpleDateFormatPipe } from './pipes/simple-date-format.pip';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';
import { AuthTestComponent } from './components/auth-test/auth-test.component';
import { XhrInterceptor } from './services/XhrInterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    TimeEntryComponent,
    WeekViewerComponent,
    LoginComponent,
    TestLinksComponent,
    JobTimeViewerComponent,
    AuthTestComponent,
    SimpleDateFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HeaderTextService,
    JobTimeService,
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
