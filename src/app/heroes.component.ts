import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './../templates/heroes.component.html',
  styleUrls: ['./../css/heroes.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selected: Hero;

  selectedH(hero: Hero): void {
    this.selected = hero;
  }
  constructor(private heroService: HeroService, private router: Router) { }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  gotoDetail(): void {
    this.router.navigate(['detail', this.selected.id]);
  }
  add(name: String): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.createHero(name)
      .then(hero => { this.heroes.push(hero); this.selected = null; });
    console.log(this.heroes);
  }
  delete(hero: Hero): void {
    this.heroService.deleteHero(hero.id)
      .then(() => { this.heroes = this.heroes.filter(h => h !== hero); if (this.selected === hero) { this.selected = null; }; });
  }
}


