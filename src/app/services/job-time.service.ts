import { Injectable } from '@angular/core';

@Injectable()
export class JobTimeService {

    private sampleJobTimes =
        `[
            {"id":1,"user":"BIG_MAN","timeIn":1568286000000,"timeOut":1568307600000,"comment":"that job was awful"},
            {"id":2,"user":"BIG_MAN","timeIn":1568309400000,"timeOut":1568317500000,"comment":"i'm going home"},
            {"id":3,"user":"LITTLE_MAN","timeIn":1568545200000,"timeOut":1568547000000,"comment":"this was an easy job"},
            {"id":4,"user":"BIG_MAN","timeIn":1568545200000,"timeOut":1568547000000,"comment":""},
            {"id":5,"user":"BIG_MAN","timeIn":1568548800000,"timeOut":1568551500000,"comment":"had to go back and fix the entire job"}
        ]`;

    private sampleWeeks = `[1568001600000,1483938000000]`;

    getSampleData() : string {
        return this.sampleJobTimes;
    }

    getSampleWeeks() : string {
        return this.sampleWeeks;
    }
}
