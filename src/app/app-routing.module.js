"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var noun_component_1 = require("./noun.component");
var verbs_component_1 = require("./verbs.component");
var adjustives_component_1 = require("./adjustives.component");
var word_detail_component_1 = require("./word-detail.component");
var routes = [
    {
        path: 'nouns',
        component: noun_component_1.NounsComponent
    },
    {
        path: 'verbs',
        component: verbs_component_1.VerbsComponent
    },
    {
        path: '',
        redirectTo: '/nouns',
        pathMatch: 'full'
    },
    {
        path: 'adjustive',
        component: adjustives_component_1.AdjustiveComponent
    },
    {
        path: 'detail/:id',
        component: word_detail_component_1.WordDetailComponent
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map