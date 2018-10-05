import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AlertifyService } from '../_services/alertify.service';
import { catchError } from 'rxjs/operators';
import { Article } from '../_models/Article';
import { SearchService } from '../_services/search.service';

@Injectable()
export class RecentlyViewedArticlesResolver implements Resolve<Article[]> {

    constructor(
        private searchService: SearchService,
        private router: Router,
        private alertify: AlertifyService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Article[]> {
        return this.searchService.getRecentlyViewed()
        .pipe(
            catchError(() => {
            this.alertify.error('Problem retrieving data');
            this.router.navigate(['/home']);
            return of(null);
        })
        );
    }
}
