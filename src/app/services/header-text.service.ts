import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class HeaderTextService {

    private headerTextSource = new Subject<string>();

    headerEmitted$ = this.headerTextSource.asObservable();

    emitTitle(change: string) {
        this.headerTextSource.next(change);
    }
}