import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Hero } from './hero';
import { HeroSearchService } from './hero-search.service';
@Component({
    selector: 'hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: ['./../search.css'],
    providers: [HeroSearchService]
})

export class HeroSearchComponent implements OnInit {
    heroes: Observable<Hero[]>;
    private searchTerms = new Subject<string>();
    constructor(private router: Router, private heroSearchService: HeroSearchService) { }
    search(term: string): void {
        this.searchTerms.next(term);
    }
    ngOnInit(): void {
        this.heroes = this.searchTerms
            .debounceTime(300)        // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time the term changes
                ? this.heroSearchService.search(term)
                : Observable.of<Hero[]>([]))
            .catch(error => {
                // TODO: add real error handling
                console.log(error);
                return Observable.of<Hero[]>([]);
            });
    }
    gotoDetail(hero: Hero): void {
        this.router.navigate(['/detail', hero.id]);
    }
}

