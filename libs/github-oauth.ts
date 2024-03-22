import { AuthorizationCode } from 'simple-oauth2';
import { AUTH_GITHUB_CLIENT_ID, AUTH_GITHUB_CLIENT_SECRET } from './config';

export const client = new AuthorizationCode({
  client: {
    id: AUTH_GITHUB_CLIENT_ID,
    secret: AUTH_GITHUB_CLIENT_SECRET,
  },
  auth: {
    tokenHost: 'https://github.com',
    tokenPath: '/login/oauth/access_token',
    authorizePath: '/login/oauth/authorize',
  },
});
