import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
    issuer: 'https://sso-demo-app.1d35.starter-us-east-1.openshiftapps.com/auth/realms/master',
    redirectUri: window.location.origin,
    clientId: 'demo-app',
    scope: 'openid profile email',
    requireHttps: false
};
