import { Authority } from './authority';
import { Details } from './details';
import { Principal } from './principal';

export class PrincipalInfo {

    private authorities: Authority[] = [];
    private details: Details;
    private authenticated: boolean;
    private principal: Principal;
    private credentials: string;
    private name: string;

    constructor(principalInfo : any) {
        for (let i = 0; i < principalInfo.authorities.length; i++) {
            this.authorities.push(new Authority(principalInfo.authorities[i]));
        }
        this.details = principalInfo.details;
        this.authenticated = principalInfo.authorities;
        this.principal = new Principal(principalInfo.principal);
        this.credentials = principalInfo.credentials;
        this.name = principalInfo.name;
    }

    public getAuthorities() : Authority[] {
        return this.authorities;
    }

    public getDetails() : Details {
        return this.details;
    }

    public isAuthenticated() : boolean {
        return this.authenticated;
    }

    public getPrincipal() : Principal {
        return this.principal;
    }

    public getName() : string {
        return this.name;
    }
}
