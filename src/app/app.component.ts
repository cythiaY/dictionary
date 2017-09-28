import { Component } from '@angular/core';

import { WordService } from './word.service';
import { Word } from './word';

@Component({
    selector: 'my-app',
    templateUrl: './../templates/app.html'
})

export class AppComponent {
    title: 'Time and Word';
    words: Word[] = [];
    constructor(private wordService: WordService) { }
    add(english: string, explain: string, type: string): void {
        english = english.trim();
        explain = explain.trim();
        if (!english || !explain || !type) { alert('请填写完整的单词信息'); }
        this.wordService.createWord(english, explain, type).then(word => this.words.push(word));
    }
}
