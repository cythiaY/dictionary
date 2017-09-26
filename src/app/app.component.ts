import { Component } from '@angular/core';

import { WordService } from './word.service';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <hero-search></hero-search>
        <div>
        <label>Word:</label><input #wordName />
        <button (click)="add(wordName.value);wordName.value=''">Add</button>
        </div>
        <nav>
        <a routerLink="/nouns">N O U N</a>
        <a routerLink="/verbs">V E R B</a>
        <a routerLink="/adjustive">A D J U S T I V E</a>
        </nav>
        <router-outlet><router-outlet>
    `,
    styleUrls: ['./../css/app.css']
})

export class AppComponent {
    title: 'Time and Word';
    
}
