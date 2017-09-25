import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from './Hero';

@Injectable()
export class HeroSearchService {
    constructor(private http: Http) { }
    search(str: String): Observable<Hero[]> {
        return this.http.get(`api/heroes/?name=${str}`)
            .map(response => response.json().data as Hero[]);
    }
}