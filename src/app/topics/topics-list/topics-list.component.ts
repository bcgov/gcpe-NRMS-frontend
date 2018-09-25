import { Component, OnInit } from '@angular/core';
import { NewsRelease } from '../../_models/NewsRelease';
import { NewsReleaseService } from '../../_services/newsrelease.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { Pagination, PaginatedResult } from '../../_models/Pagination';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss']
})
export class TopicsListComponent implements OnInit {
  newsReleases: NewsRelease[];
  newsReleaseParams: any = {};
  pagination: Pagination;

  constructor(
    private alertify: AlertifyService,
    private newsReleaseService: NewsReleaseService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.newsReleases = data['newsReleases'].result;
      this.pagination = data['newsReleases'].pagination;
    });
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadNewsReleases();
  }

  loadNewsReleases() {
    this.newsReleaseService.getNewsReleases(this.pagination.currentPage, this.pagination.itemsPerPage, this.newsReleaseParams)
      .subscribe((res: PaginatedResult<NewsRelease[]>) => {
        this.newsReleases = res.result;
        this.pagination = res.pagination;
      }, error => {
        this.alertify.error(error);
      });
  }

}
