import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { AppConfigService } from '../app-config.service';
import { JobTime } from '../entities/job-time';

@Injectable()
export class JobTimeService {

    private baseUrl : string;

    private sampleJobTimes =
        `[
            {"id":4,"user":"FIRST_USER","jobName":"a person's house","timeIn":1568545200000,"timeOut":1568547000000,"comment":""},
            {"id":2,"user":"FIRST_USER","jobName":"some other job","timeIn":1568309400000,"timeOut":1568317500000,"comment":"i'm going home"},
            {"id":3,"user":"SECOND_USER","jobName":"this is a job name","timeIn":1568545200000,"timeOut":1568547000000,"comment":"this was an easy job"},
            {"id":6,"user":"FIRST_USER","jobName":"a large building","timeIn":1484485200000,"timeOut":1484488800000,"comment":"i added this time for reference"},
            {"id":5,"user":"FIRST_USER","jobName":"some other person's house","timeIn":1568548800000,"timeOut":1568551500000,"comment":"had to go back and fix the entire job"},
            {"id":1,"user":"FIRST_USER","jobName":"some job","timeIn":1568286000000,"timeOut":1568307600000,"comment":"that job was awful"}
        ]`;

    private sampleWeeks = `[1568001600000,1483938000000]`;

    constructor(private appConfigService: AppConfigService, private http: HttpClient) {
        this.baseUrl = appConfigService.getBaseUrl();
    }

    getSampleData() : Observable<string> {
        return of(this.sampleJobTimes);
    }

    getSampleWeeks() : string {
        return this.sampleWeeks;
    }

    getAllJobTimes() : Observable<any> {
        return this.http.get(this.baseUrl + '/rest/jobtimes');
    }

    getJobTimesByWeek(week : string) : Observable<any> {
        return this.http.get(this.baseUrl + '/rest/weeks/' + week);
    }

    getAllWeeks() : Observable<any> {
        return this.http.get(this.baseUrl + '/rest/weeks');
    }
}
