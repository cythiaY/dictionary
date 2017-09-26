import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Word } from './word';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './../templates/heroes.component.html',
  styleUrls: ['./../css/heroes.css']
})
export class HeroesComponent implements OnInit {
  words: Word[];
  selected: Word;

  selectedH(word: Word): void {
    this.selected = word;
  }
  constructor(private heroService: HeroService, private router: Router) { }
  getHeroes(): void {
    this.heroService.getHeroes().then(words => this.words = words);
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


