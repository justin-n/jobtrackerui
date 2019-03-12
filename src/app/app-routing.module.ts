import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeEntryComponent } from './time-entry/time-entry.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'timeentry', component: TimeEntryComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { enableTracing: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }