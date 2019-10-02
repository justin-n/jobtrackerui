export class JobTime {

    constructor(
            private id: number,
            private user: string,
            private jobName: string,
            private timeIn: Date,
            private timeOut: Date,
            private comment: string) { }

    public getId() : number {
        return this.id;
    }

    public getUser() : string {
        return this.user;
    }

    public getJobName() : string {
        return this.jobName;
    }

    public getTimeIn() : Date {
        return this.timeIn;
    }

    public getTimeOut() : Date {
        return this.timeOut;
    }

    public getComment() : string {
        return this.comment;
    }
}
