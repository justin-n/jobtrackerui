import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { PrincipalInfo } from "../entities/principal-info/principal-info";

@Injectable()
export class AuthenticationService {

    private principalInfo : PrincipalInfo;

    constructor(private http: HttpClient) { }

    public getPrincipalInfo() : PrincipalInfo {
        return this.principalInfo;
    }

    public authenticate(credentials: any, callback: any) {

        const httpHeaders = new HttpHeaders(credentials ? {
            'Authorization' : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});

        this.http.post('rest/principal', {}, {headers: httpHeaders}).subscribe(response => {

            this.principalInfo = new PrincipalInfo(response);

            return callback && callback();
        })
    }
}
