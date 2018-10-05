import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Article } from '../_models/Article';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    constructor(private http: HttpClient) { }

    getSearchResults(searchTerm: string): Observable<Article[]> {

        let params = new HttpParams();
        params = params.append('searchTerm', searchTerm);

        return this.http
            .get<Article[]>('http://localhost:8888/api/search', { params });
    }

    getRecentlyViewed(): Observable<Article[]> {
        let params = new HttpParams();
        params = params.append('recentlyViewed', 'true');


        return this.http
            .get<Article[]>('http://localhost:8888/api/search', { params });
    }

    getSuggestions(): Observable<string[]> {
        return this.http
            .get<string[]>('http://localhost:8888/api/search/suggestions');
    }
}
