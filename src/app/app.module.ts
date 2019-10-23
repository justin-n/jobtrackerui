import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TimeEntryComponent } from './components/time-entry/time-entry.component';
import { LoginComponent } from './components/login/login.component';
import { TestLinksComponent } from './components/test-links/test-links.component';
import { WeekViewerComponent } from './components/week-viewer/week-viewer.component';
import { JobTimeViewerComponent } from './components/job-time-viewer/job-time-viewer.component';
import { AuthTestComponent } from './components/auth-test/auth-test.component';
import { AdminConsoleComponent } from './components/admin/admin-console/admin-console.component';

import { AppConfigService } from './app-config.service';
import { HeaderTextService } from './services/header-text.service';
import { JobTimeService } from './services/job-time.service';
import { AuthenticationService } from './services/authentication.service';
import { TimeEntryService } from './services/time-entry.service';
import { XhrInterceptorService } from './services/xhr-interceptor.service';

import { SimpleDateFormatPipe } from './pipes/simple-date-format.pip';

@NgModule({
  declarations: [
    AppComponent,
    TimeEntryComponent,
    WeekViewerComponent,
    LoginComponent,
    TestLinksComponent,
    JobTimeViewerComponent,
    AuthTestComponent,
    SimpleDateFormatPipe,
    AdminConsoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AppConfigService,
    HeaderTextService,
    JobTimeService,
    AuthenticationService,
    TimeEntryService,
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
