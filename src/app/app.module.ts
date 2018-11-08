import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TimeEntryComponent } from './time-entry/time-entry.component';
import { TimeViewerComponent } from './time-viewer/time-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeEntryComponent,
    TimeViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
