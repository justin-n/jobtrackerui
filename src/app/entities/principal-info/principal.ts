import { Authority } from './authority';

export class Principal {

    private password: string;
    private username: string;
    private authorities: Authority[] = [];
    private accountNonExpired: boolean;
    private accountNonLocked: boolean;
    private credentialsNonExpired: boolean;
    private enabled: boolean;

    constructor(principal : any) {
        this.password = principal.password;
        this.username = principal.username;
        for (let i = 0; i < principal.authorities.length; i++) {
            this.authorities.push(new Authority(principal.authorities[i]));
        }
        this.accountNonExpired = principal.accountNonExpired;
        this.accountNonLocked = principal.accountNonLocked;
        this.credentialsNonExpired = principal.credentialsNonExpired;
        this.enabled = principal.enabled;
    }

    public getUsername() : string {
        return this.username;
    }

    public getAuthorities() : Authority[] {
        return this.authorities;
    }

    public isAccountNonExpired() : boolean {
        return this.accountNonExpired;
    }

    public isAccountNonLocked() : boolean {
        return this.accountNonLocked;
    }

    public isCredentialsNonExpired() : boolean {
        return this.credentialsNonExpired;
    }

    public isEnabled() : boolean {
        return this.enabled;
    }
}
