import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from '../_services/auth.service';
import { MockTrendings } from '../_mockups/mock-trendings';
import { MockMinistries } from '../_mockups/mock-ministries';


@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.scss']
})
export class NavMenuComponent implements OnInit {

  trendings = MockTrendings;
  minitries = MockMinistries;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() { this.authService.login(); }
  logout() { this.authService.logOut(); }

  loggedIn() {
    return this.authService.loggedIn();
  }

  get givenName() {
    const claims: any = this.authService.identityClaims;
    if (!claims) { return null; }
    return claims.preferred_username;
  }

}
