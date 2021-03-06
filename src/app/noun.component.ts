import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Word } from './word';
import { WordService } from './word.service';

@Component({
  templateUrl: './../templates/words.component.html',
  styleUrls: ['./../css/words.css']
})
export class NounsComponent implements OnInit {
  words: Word[];
  constructor(private wordService: WordService, private router: Router) { }
  getNouns(): void {
    this.wordService.getWords().then(words => this.words = words.filter(word => word.type === 'n'));
  }
  ngOnInit(): void {
    this.getNouns();
  }
  delete(word: Word): void {
    this.wordService.deleteHero(word.id)
      .then(() => { this.words = this.words.filter(h => h !== word); });
  }
}


