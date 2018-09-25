import { Component } from '@angular/core';
import { OAuthService, JwksValidationHandler, LoginOptions, OAuthEvent } from 'angular-oauth2-oidc';
import { authConfig } from './_services/auth.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'News Release Management';

  constructor(private oauthService: OAuthService, private router: Router) {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    // redirect to /topics after successful login
    this.oauthService
      .loadDiscoveryDocumentAndTryLogin({ onTokenReceived: context => {
          window.location.href = '/topics'; // not ideal, but this doesn't work: this.router.navigate(['/topics']);
        }
      });
    this.oauthService.events.subscribe((e) => {
      // e contains information about events as they happen, we can redirect in case of errors from here
    });
  }
}
