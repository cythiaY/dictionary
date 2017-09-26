import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Word } from './word';
import { WordSearchService } from './word-search.service';
@Component({
    selector: 'word-search',
    templateUrl: './../templates/word-search.component.html',
    styleUrls: ['./../css/search.css'],
    providers: [WordSearchService]
})

export class WordSearchComponent implements OnInit {
    words: Observable<Word[]>;
    private searchTerms = new Subject<string>();
    constructor(private router: Router, private wordSearchService: WordSearchService) { }
    search(term: string): void {
        this.searchTerms.next(term);
    }
    ngOnInit(): void {
        this.words = this.searchTerms
            .debounceTime(300)        // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time the term changes
                ? this.wordSearchService.search(term)
                : Observable.of<Word[]>([]))
            .catch(error => {
                // TODO: add real error handling
                console.log(error);
                return Observable.of<Word[]>([]);
            });
    }
    gotoDetail(word: Word): void {
        this.router.navigate(['/detail', word.id]);
    }
}

