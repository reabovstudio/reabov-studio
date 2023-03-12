import HomeView from "@/views/HomeView.vue";
import PortfolioView from "@/views/PortfolioView.vue";

export default [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/portfolio/:id/:slug',
        name: 'PortfolioView',
        component: PortfolioView
    }
]
