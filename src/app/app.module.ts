import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule, TypeaheadModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './navmenu/navmenu.component';
import { HomeComponent } from './home/home.component';
import { NewsReleaseService } from './_services/newsrelease.service';
import { AlertifyService } from './_services/alertify.service';
import { TopicsListComponent } from './topics/topics-list/topics-list.component';
import { TopicsCardComponent } from './topics/topics-card/topics-card.component';
import { TopicsDetailComponent } from './topics/topics-detail/topics-detail.component';
import { NewsReleaseListResolver } from './_resolvers/news-release-list.resolver';
import { FormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';
import { NrmsapiService } from './_services/nrmsapi.service';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MinistrySignupComponent } from './auth/ministry-signup/ministry-signup.component';
import { FollowComponent } from './auth/follow/follow.component';
import { NotificationsComponent } from './auth/notifications/notifications.component';
import { SignupCompleteComponent } from './auth/signup-complete/signup-complete.component';
import { SearchComponent } from './search/search.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { SearchSuggestionsResolver } from './_resolvers/search-suggestions-resolver';
import { RecentlyViewedArticlesResolver } from './_resolvers/recently-viewed-articles-resolver';
import { CheckboxComponent } from './controls/checkbox/checkbox.component';

@NgModule({
   declarations: [
      AppComponent,
      NavMenuComponent,
      HomeComponent,
      TopicsListComponent,
      TopicsCardComponent,
      TopicsDetailComponent,
      LoginComponent,
      SignupComponent,
      MinistrySignupComponent,
      FollowComponent,
      NotificationsComponent,
      SignupCompleteComponent,
      SearchComponent,
      ArticleCardComponent,
      CheckboxComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      OAuthModule.forRoot({ resourceServer: { sendAccessToken: true } }), // send the auth token with each request
      PaginationModule.forRoot(),
      FormsModule,
      CollapseModule.forRoot(),
      TypeaheadModule.forRoot(),
      BsDropdownModule.forRoot()
   ],
   providers: [
    NewsReleaseService,
    AlertifyService,
    NewsReleaseListResolver,
    NrmsapiService,
    SearchSuggestionsResolver,
    RecentlyViewedArticlesResolver
    ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
