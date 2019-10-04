export class Details {

    private remoteAddress: string;
    private sessionId: string;

    constructor(details : any) {
        this.remoteAddress = details.remoteAddress;
        this.sessionId = details.sessionId;
    }

    public getRemoteAddress() : string {
        return this.remoteAddress;
    }

    public getSessionId() : string {
        return this.sessionId;
    }
}
