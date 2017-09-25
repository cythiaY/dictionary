import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'hero-detail',
    templateUrl: './../templates/hero-detail.html',
    styleUrls: ['./../css/detail.css']
})

export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;
    constructor(
        private route: ActivatedRoute,
        private heroService: HeroService,
        private location: Location

    ) { }
    ngOnInit(): void {
        this.route.paramMap.switchMap((params: ParamMap) => this.heroService.getOneHero(+params.get('id')))
            .subscribe(hero => this.hero = hero);
    }
    goBack(): void {
        this.location.back();
    }
    save(): void {
        this.heroService.update(this.hero).then(() => this.goBack());
    }
}
