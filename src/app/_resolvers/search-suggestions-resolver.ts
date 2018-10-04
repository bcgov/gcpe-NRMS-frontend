import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AlertifyService } from '../_services/alertify.service';
import { catchError } from 'rxjs/operators';
import { SearchService } from '../_services/search.service';

@Injectable()
export class SearchSuggestionsResolver implements Resolve<string[]> {

    constructor(
        private searchService: SearchService,
        private router: Router,
        private alertify: AlertifyService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<string[]> {
        return this.searchService.getSuggestions()
        .pipe(
            catchError(() => {
            this.alertify.error('Problem retrieving data');
            this.router.navigate(['/home']);
            return of(null);
        })
        );
    }
}
