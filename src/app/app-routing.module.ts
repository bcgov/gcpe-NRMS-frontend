import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { TopicsListComponent } from './topics/topics-list/topics-list.component';
import { NewsReleaseListResolver } from './_resolvers/news-release-list.resolver';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MinistrySignupComponent } from './auth/ministry-signup/ministry-signup.component';
import { FollowComponent } from './auth/follow/follow.component';
import { NotificationsComponent } from './auth/notifications/notifications.component';
import { SignupCompleteComponent } from './auth/signup-complete/signup-complete.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'topics', component: TopicsListComponent, canActivate: [AuthGuard], resolve: { newsReleases: NewsReleaseListResolver  } },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'ministry-signup', component: MinistrySignupComponent },
  { path: 'follow', component: FollowComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'signup-complete', component: SignupCompleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
