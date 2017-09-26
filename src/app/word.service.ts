import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Word } from './word';

@Injectable()
export class WordService {
    private heroesUrl = 'api/words';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) { }

    getWords(): Promise<Word[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Word[])
            .catch(this.handleError);
    }
    getWord(id: number): Promise<Word> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Word)
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    update(word: Word): Promise<Word> {
        const url = `${this.heroesUrl}/${word.id}`;
        return this.http.put(url, JSON.stringify(word), { headers: this.headers })
            .toPromise()
            .then(() => word)
            .catch(this.handleError);
    }
    createHero(english: String): Promise<Word> {
        return this.http.post(this.heroesUrl, JSON.stringify({ english: english, id: 29 }), { headers: this.headers })
            .toPromise()
            .then(response => response.json().data as Word)
            .catch(this.handleError);
    }
    deleteHero(id: number): Promise<Word> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}
