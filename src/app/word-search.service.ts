import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Word } from './word';

@Injectable()
export class WordSearchService {
    constructor(private http: Http) { }
    search(str: String): Observable<Word[]> {
        return this.http.get(`api/words/?english=${str}`)
            .map(response => response.json().data as Word[]);
    }
}
