import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsRelease } from '../_models/NewsRelease';
import { HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PaginatedResult } from '../_models/Pagination';

@Injectable({
    providedIn: 'root'
})

export class NrmsapiService {

  constructor(private http: HttpClient) { }

    getNewsReleases(page?, itemsPerPage?, newsReleaseParams?): Observable<PaginatedResult<NewsRelease[]>> {
        const paginatedResult: PaginatedResult<NewsRelease[]> = new PaginatedResult<NewsRelease[]>();

        let params = new HttpParams();

        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
        }

        return this.http
            .get<NewsRelease[]>('http://localhost:8888/api/newsreleases', { observe: 'response', params })
            .pipe(
                map(response => {
                    paginatedResult.result = response.body;
                    if (response.headers.get('Pagination') != null) {
                        paginatedResult.pagination = JSON.parse(
                            response.headers.get('Pagination')
                        );
                    }
                    return paginatedResult;
                })
            );
    }
}
