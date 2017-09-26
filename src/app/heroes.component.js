"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var hero_service_1 = require("./hero.service");
var HeroesComponent = (function () {
    function HeroesComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
    }
    HeroesComponent.prototype.selectedH = function (word) {
        this.selected = word;
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (words) { return _this.words = words; });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['detail', this.selected.id]);
    };
    HeroesComponent.prototype.add = function (english) {
        var _this = this;
        english = english.trim();
        if (!english) {
            return;
        }
        this.heroService.createHero(english)
            .then(function (word) { _this.words.push(word); _this.selected = null; });
        console.log(this.words);
    };
    HeroesComponent.prototype.delete = function (word) {
        var _this = this;
        this.heroService.deleteHero(word.id)
            .then(function () { _this.words = _this.words.filter(function (h) { return h !== word; }); if (_this.selected === word) {
            _this.selected = null;
        } ; });
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        selector: 'my-heroes',
        templateUrl: './../templates/heroes.component.html',
        styleUrls: ['./../css/heroes.css']
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService, router_1.Router])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map