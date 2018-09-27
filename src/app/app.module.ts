import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './navmenu/navmenu.component';
import { HomeComponent } from './home/home.component';
import { NewsReleaseService } from './_services/newsrelease.service';
import { AlertifyService } from './_services/alertify.service';
import { TopicsListComponent } from './topics/topics-list/topics-list.component';
import { TopicsCardComponent } from './topics/topics-card/topics-card.component';
import { NewsReleaseListResolver } from './_resolvers/news-release-list.resolver';
import { FormsModule } from '@angular/forms';

@NgModule({
   declarations: [
      AppComponent,
      NavMenuComponent,
      HomeComponent,
      TopicsListComponent,
      TopicsCardComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      OAuthModule.forRoot({ resourceServer: { sendAccessToken: true } }), // send the auth token with each request
      PaginationModule.forRoot(),
      FormsModule
   ],
   providers: [
    NewsReleaseService,
    AlertifyService,
    NewsReleaseListResolver
    ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
