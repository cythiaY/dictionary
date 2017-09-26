import { Component, OnInit } from '@angular/core';

import { Word } from './word';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './../templates/dashboard.html',
    styleUrls: ['./../css/dashboard.css']
})

export class DashboardComponent implements OnInit {
    words: Word[] = [];
    constructor(private heroService: HeroService) { }
    ngOnInit(): void {
        this.heroService.getHeroes().then(word => this.words = word.slice(1, 5));
    }
}

