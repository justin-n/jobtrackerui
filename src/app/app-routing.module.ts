import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimeEntryComponent } from './components/time-entry/time-entry.component';
import { LoginComponent } from './components/login/login.component';
import { TestLinksComponent } from './components/test-links/test-links.component';
import { WeekViewerComponent } from './components/week-viewer/week-viewer.component';
import { JobTimeViewerComponent } from './components/job-time-viewer/job-time-viewer.component';
import { AuthTestComponent } from './components/auth-test/auth-test.component';

const routes: Routes = [
  { path: 'timeentry', component: TimeEntryComponent },
  { path: 'weekviewer', component: WeekViewerComponent },
  { path: 'jobtimeviewer/:week', component: JobTimeViewerComponent },
  { path: 'authtest', component: AuthTestComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: TestLinksComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { enableTracing: false }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
