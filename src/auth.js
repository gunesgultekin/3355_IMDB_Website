import { Auth0Client } from '@auth0/auth0-spa-js';

const auth0 = new Auth0Client({
  domain: process.env.VUE_APP_AUTH0_DOMAIN,
  clientId:  process.env.VUE_APP_AUTH0_CLIENT_ID,
  returnTo  : "https://purple-sky-034a4f81e.5.azurestaticapps.net"
  
});

export default {
  async loginWithRedirect() {
    await auth0.loginWithRedirect();
  },
  async handleRedirectCallback() {
    return await auth0.handleRedirectCallback();
  },
  async getUser() {
    return await auth0.getUser();
  },
  async logout() {
    return await auth0.logout({
      returnTo: window.location.origin
    });
  },
  async isAuthenticated() {
    return await auth0.isAuthenticated();
  }
};
