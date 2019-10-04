export class Authority {

    private name: string

    constructor(authority : any) {
        this.name = authority.authority;
    }

    public getName() : string {
        return this.name;
    }
}
