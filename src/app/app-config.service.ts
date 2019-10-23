import { Injectable } from '@angular/core';

@Injectable()
export class AppConfigService {

    private baseUrl : string = '/jobtracker';

    constructor() { }

    getBaseUrl() : string {
        return this.baseUrl;
    }
}