import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Word } from './word';

@Injectable()
export class WordService {
    private wordsUrl = 'api/words';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) { }

    getWords(): Promise<Word[]> {
        return this.http.get(this.wordsUrl)
            .toPromise()
            .then(response => response.json().data as Word[])
            .catch(this.handleError);
    }
    getWord(id: number): Promise<Word> {
        const url = `${this.wordsUrl}/${id}`;
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
        const url = `${this.wordsUrl}/${word.id}`;
        return this.http.put(url, JSON.stringify(word), { headers: this.headers })
            .toPromise()
            .then(() => word)
            .catch(this.handleError);
    }
    createWord(newEnglish: String, newExplain: string, newType: string): Promise<Word> {
        return this.http.post(this.wordsUrl, JSON.stringify({ english: newEnglish, explain: newExplain, type: newType })
        , { headers: this.headers })
            .toPromise()
            .then(response => response.json().data as Word)
            .catch(this.handleError);
    }
    deleteHero(id: number): Promise<Word> {
        const url = `${this.wordsUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}
