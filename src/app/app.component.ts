import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <hero-search></hero-search>
        <nav>
        <a routerLink="/heroes">N O U N</a>
        <a routerLink="/dashboard">V E R B</a>
        <a routerLink="/heroes">A D J U S T I V E</a>
        </nav>
        <router-outlet><router-outlet>
    `,
    styleUrls: ['./../css/app.css']
})

export class AppComponent {
    title: 'Time and Word';
}
