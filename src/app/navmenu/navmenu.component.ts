import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from '../_services/auth.service';
import { MockTrendings } from '../_mockups/mock-trendings';
import { MockMinistries } from '../_mockups/mock-ministries';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.scss']
})
export class NavMenuComponent implements OnInit {
  isCollapsed = true;

  trendings = MockTrendings;
  minitries = MockMinistries;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() { this.authService.login(); }
  logout() { this.authService.logOut(); }

  loggedIn() {
    return this.authService.loggedIn();
  }

  goToSearch() {
    this.router.navigate(['/search']);
  }
}
