import { Injectable } from '@angular/core';
import { NewsRelease } from '../_models/NewsRelease';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { NewsReleaseService } from '../_services/newsrelease.service';
import { AlertifyService } from '../_services/alertify.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class NewsReleaseListResolver implements Resolve<NewsRelease[]> {
    pageNumber: 1;
    pageSize: 10;

    constructor(
        private newsReleaseService: NewsReleaseService,
        private router: Router,
        private alertify: AlertifyService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<NewsRelease[]> {
        return this.newsReleaseService.getNewsReleases(this.pageNumber, this.pageSize)
        .pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
