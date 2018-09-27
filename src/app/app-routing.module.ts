import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { TopicsListComponent } from './topics/topics-list/topics-list.component';
import { NewsReleaseListResolver } from './_resolvers/news-release-list.resolver';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'topics', component: TopicsListComponent, canActivate: [AuthGuard], resolve: { newsReleases: NewsReleaseListResolver  } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
