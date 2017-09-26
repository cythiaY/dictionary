import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Word } from './word';
import { WordService } from './word.service';

@Component({
    templateUrl: './../templates/word-detail.html',
    styleUrls: ['./../css/detail.css']
})

export class WordDetailComponent implements OnInit {
    @Input() word: Word;
    constructor(
        private route: ActivatedRoute,
        private wordService: WordService,
        private location: Location

    ) { }
    ngOnInit(): void {
        this.route.paramMap.switchMap((params: ParamMap) => this.wordService.getWord(+params.get('id')))
            .subscribe(word => this.word = word);
    }
    goBack(): void {
        this.location.back();
    }
    save(): void {
        this.wordService.update(this.word).then(() => this.goBack());
    }
}
