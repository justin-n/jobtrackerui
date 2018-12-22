import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TimeEntryComponent } from './time-entry/time-entry.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'timeentry', component: TimeEntryComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { enableTracing: false }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

 }
