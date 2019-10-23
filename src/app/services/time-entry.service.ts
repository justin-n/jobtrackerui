import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppConfigService } from '../app-config.service';
import { JobTime } from '../entities/job-time';

@Injectable()
export class TimeEntryService {

  private baseUrl : string;

  constructor(private appConfigService: AppConfigService, private http: HttpClient) {
    this.baseUrl = appConfigService.getBaseUrl();
  }

  addJobTime(jobTime: JobTime) : Observable<any> {

    const httpHeaders = new HttpHeaders(
      { 'Content-Type' : 'application/json' }
    );

    return this.http.post(
        (this.baseUrl + '/rest/timeentry'), JSON.stringify(jobTime), { headers : httpHeaders });
  }
}
