import { Component, OnInit } from '@angular/core';

import { Word } from './word';
import { WordService } from './word.service';

@Component({
    templateUrl: './../templates/words.component.html',
    styleUrls: ['./../css/words.css']
})
export class AdjustiveComponent implements OnInit {
    words: Word[] = [];
    constructor(private wordService: WordService) { }
    ngOnInit(): void {
        this.wordService.getWords().then(words => this.words = words.filter(word => word.type === 'a'));
    }
    delete(word: Word): void {
        this.wordService.deleteHero(word.id).then(() => { this.words = this.words.filter(target => target !== word); });
    }
}
