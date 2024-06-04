import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from './router'
import i18n from './i18n'

import { createAuth0 } from '@auth0/auth0-vue'

import mitt from 'mitt'
const emitter = mitt();



const app = createApp(App)
.use(router);

app.use(i18n);

app.use(
    createAuth0({
        domain: process.env.VUE_APP_AUTH0_DOMAIN,
        clientId: process.env.VUE_APP_AUTH0_CLIENT_ID,
         authorizationParams : {
            redirect_uri: window.location.origin
         }
    })
)

app.config.globalProperties.emitter = emitter;

app.mount('#app');