import { createRouter,createWebHistory } from "vue-router"; 
import LoginPage from "./components/LoginPage.vue";
import App from "./App.vue";
import DashboardComp from "./components/DashboardComp.vue";
import DetailsPage from "./components/DetailsPage.vue";
import ErrorView from "./components/ErrorView.vue";
import WatchListPage from "./components/WatchListPage.vue"
import CallBack from "./components/CallBack.vue";
const routes = [

    {
        "route": "/*",
        "serve": "/index.html",
        "statusCode": 200
    },


    {
        
        path: '/',
        redirect : { path: "/dashboard"},
        name: 'home',
        component: App
    },

    {
        path : '/login',
        name : 'login',
        component: LoginPage
    },

    {
        path : '/dashboard',
        name : 'dashboard',
        component : DashboardComp
    },

    {
        path : '/details/:title',
        name : 'details',
        component : DetailsPage
    },

    {
        path : '/error',
        name : 'error',
        component : ErrorView
    },

    {
        path : '/watchlist',
        name : 'watchlist',
        component : WatchListPage
    },

    {
        path : '/callback',
        name : 'callback',
        component : CallBack
    }
   
]

const router = createRouter({
    history : createWebHistory(),
    routes
    
});

export default router