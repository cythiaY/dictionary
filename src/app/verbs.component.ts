import { Component, OnInit } from '@angular/core';

import { Word } from './word';
import { WordService } from './word.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './../templates/words.component.html',
    styleUrls: ['./../css/words.css']
})

export class VerbsComponent implements OnInit {
    words: Word[] = [];
    constructor(private wordService: WordService) { }
    ngOnInit(): void {
        this.wordService.getWords().then(words => this.words = words.filter((word) => word.type === 'v'));
    }
}

