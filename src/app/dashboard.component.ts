import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './../templates/dashboard.html',
    styleUrls: ['./../css/dashboard.css']
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    constructor(private heroService: HeroService) { }
    ngOnInit(): void {
        this.heroService.getHeroes().then(hero => this.heroes = hero.slice(1, 5));
    }
}

