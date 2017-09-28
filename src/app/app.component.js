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
var word_service_1 = require("./word.service");
var AppComponent = (function () {
    function AppComponent(wordService) {
        this.wordService = wordService;
        this.words = [];
    }
    AppComponent.prototype.add = function (english, explain, type) {
        var _this = this;
        english = english.trim();
        explain = explain.trim();
        if (!english || !explain || !type) {
            alert('请填写完整的单词信息');
        }
        this.wordService.createWord(english, explain, type).then(function (word) { return _this.words.push(word); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './../templates/app.html'
    }),
    __metadata("design:paramtypes", [word_service_1.WordService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map