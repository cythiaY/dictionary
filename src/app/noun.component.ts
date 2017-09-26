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
  selected: Word;

  selectedH(word: Word): void {
    this.selected = word;
  }
  constructor(private heroService: WordService, private router: Router) { }
  getHeroes(): void {
    this.heroService.getWords().then(words => this.words = words.filter(word => word.type === 'n'));
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  gotoDetail(): void {
    this.router.navigate(['detail', this.selected.id]);
  }
  add(english: String): void {
    english = english.trim();
    if (!english) { return; }
    this.heroService.createHero(english)
      .then(word => { this.words.push(word); this.selected = null; });
    console.log(this.words);
  }
  delete(word: Word): void {
    this.heroService.deleteHero(word.id)
      .then(() => { this.words = this.words.filter(h => h !== word); if (this.selected === word) { this.selected = null; }; });
  }
}


