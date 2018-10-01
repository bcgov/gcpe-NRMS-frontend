import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.scss']
})
export class NavMenuComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() { this.authService.login(); }
  logout() { this.authService.logOut(); }

  loggedIn() {
    return this.authService.loggedIn();
  }
}
